#!/usr/bin/env node

import { spawn } from "node:child_process";
import { createWriteStream } from "node:fs";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const DEFAULT_SCAFFOLD = "https://github.com/poroshinaleksei/content-site-template";
const DEFAULT_REF = "main";

function usage() {
  return `Create a downstream content site project.

Usage:
  npx create-content-site <target-directory>
  npx create-content-site <target-directory> --scaffold ${DEFAULT_SCAFFOLD}
  npx create-content-site <target-directory> --scaffold ${DEFAULT_SCAFFOLD} --ref main

Options:
  --scaffold <url>  GitHub scaffold repository URL. Defaults to ${DEFAULT_SCAFFOLD}
  --ref <ref>       Git branch, tag, or commit ref to download. Defaults to ${DEFAULT_REF}
  --skip-install   Delegate to the scaffold generator without installing dependencies
  --skip-check     Delegate to the scaffold generator without running checks
  --help           Show this help text
  --version        Show the launcher package version
`;
}

function readOptionValue(args, index, name) {
  const value = args[index + 1];

  if (!value || value.startsWith("--")) {
    throw new Error(`${name} requires a value.`);
  }

  return value;
}

function parseArgs(args) {
  const options = {
    scaffold: DEFAULT_SCAFFOLD,
    ref: "",
    target: "",
    generatorArgs: [],
    help: false,
    version: false,
  };

  for (let index = 0; index < args.length; index += 1) {
    const value = args[index];

    if (value === "--help" || value === "-h") {
      options.help = true;
      continue;
    }

    if (value === "--version" || value === "-v") {
      options.version = true;
      continue;
    }

    if (value === "--skip-install" || value === "--skip-check") {
      options.generatorArgs.push(value);
      continue;
    }

    if (value === "--scaffold") {
      options.scaffold = readOptionValue(args, index, "--scaffold");
      index += 1;
      continue;
    }

    if (value.startsWith("--scaffold=")) {
      options.scaffold = value.slice("--scaffold=".length);
      continue;
    }

    if (value === "--ref") {
      options.ref = readOptionValue(args, index, "--ref");
      index += 1;
      continue;
    }

    if (value.startsWith("--ref=")) {
      options.ref = value.slice("--ref=".length);
      continue;
    }

    if (value.startsWith("--")) {
      throw new Error(`Unknown option: ${value}`);
    }

    if (options.target) {
      throw new Error("Only one target directory can be provided.");
    }

    options.target = value;
  }

  return options;
}

function normalizeGitHubUrl(value) {
  if (/^[\w.-]+\/[\w.-]+$/.test(value)) {
    return new URL(`https://github.com/${value}`);
  }

  const url = new URL(value);

  if (url.hostname !== "github.com") {
    throw new Error("The scaffold source must be a GitHub repository URL.");
  }

  return url;
}

function encodeRef(ref) {
  return ref.split("/").map(encodeURIComponent).join("/");
}

function scaffoldArchiveUrl(scaffold, refOption) {
  const url = normalizeGitHubUrl(scaffold);
  const parts = url.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  const owner = parts[0];
  const repo = parts[1]?.replace(/\.git$/, "");

  if (!owner || !repo) {
    throw new Error(
      "The scaffold source must use the form https://github.com/<owner>/<repo>.",
    );
  }

  const treeIndex = parts.indexOf("tree");
  const refFromUrl = treeIndex >= 0 ? parts.slice(treeIndex + 1).join("/") : "";
  const ref = refOption || refFromUrl || DEFAULT_REF;

  return {
    source: `https://github.com/${owner}/${repo}`,
    ref,
    archiveUrl: `https://codeload.github.com/${owner}/${repo}/tar.gz/${encodeRef(ref)}`,
  };
}

function run(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

async function downloadArchive(archiveUrl, archivePath) {
  const response = await fetch(archiveUrl, {
    headers: {
      "user-agent": "create-content-site",
    },
  });

  if (!response.ok || !response.body) {
    throw new Error(
      `Unable to download scaffold archive: ${response.status} ${response.statusText}`,
    );
  }

  await pipeline(Readable.fromWeb(response.body), createWriteStream(archivePath));
}

async function extractArchive(archivePath, targetDirectory) {
  await fs.mkdir(targetDirectory, { recursive: true });
  await run(
    "tar",
    ["-xzf", archivePath, "-C", targetDirectory, "--strip-components=1"],
    process.cwd(),
  );
}

async function packageVersion() {
  const packageUrl = new URL("../package.json", import.meta.url);
  const packageJson = JSON.parse(await fs.readFile(packageUrl, "utf8"));

  return packageJson.version;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    console.log(usage());
    return;
  }

  if (options.version) {
    console.log(await packageVersion());
    return;
  }

  const archive = scaffoldArchiveUrl(options.scaffold, options.ref);
  const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "create-content-site-"));
  const archivePath = path.join(tempRoot, "scaffold.tar.gz");
  const scaffoldRoot = path.join(tempRoot, "scaffold");

  try {
    console.log(`Download scaffold archive from ${archive.archiveUrl}`);
    await downloadArchive(archive.archiveUrl, archivePath);

    console.log(`Extract scaffold ${archive.source} at ${archive.ref}`);
    await extractArchive(archivePath, scaffoldRoot);

    const generatorPath = path.join(scaffoldRoot, "scripts", "generate-site.mjs");
    await fs.access(generatorPath);

    console.log("Delegate project creation to the scaffold generator.");
    await run(
      process.execPath,
      [
        generatorPath,
        ...(options.target ? [options.target] : []),
        ...options.generatorArgs,
      ],
      process.cwd(),
    );
  } finally {
    await fs.rm(tempRoot, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
