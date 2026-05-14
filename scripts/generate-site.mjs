#!/usr/bin/env node

import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { stdin as input, stdout as output } from "node:process";
import {
  applySetupAnswers,
  collectSetupAnswers,
  createQuestioner,
} from "./setup-core.mjs";

const scriptPath = fileURLToPath(import.meta.url);
const scaffoldRoot = path.resolve(path.dirname(scriptPath), "..");
const args = process.argv.slice(2);

function parseArgs(values) {
  const options = {
    target: "",
    install: true,
    check: true,
  };

  for (const value of values) {
    if (value === "--skip-install") {
      options.install = false;
      options.check = false;
      continue;
    }

    if (value === "--skip-check") {
      options.check = false;
      continue;
    }

    if (!options.target) {
      options.target = value;
    }
  }

  return options;
}

function isInside(parent, child) {
  const relative = path.relative(parent, child);

  return Boolean(relative) && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function shouldCopy(sourcePath) {
  const relative = path.relative(scaffoldRoot, sourcePath);
  const parts = relative.split(path.sep);
  const basename = path.basename(sourcePath);

  if (!relative) {
    return true;
  }

  if (
    parts.includes(".git") ||
    parts.includes("node_modules") ||
    parts.includes(".next") ||
    parts.includes("dist") ||
    parts.includes("build") ||
    parts.includes("coverage") ||
    parts.includes(".cache")
  ) {
    return false;
  }

  if (
    basename === ".env" ||
    basename === ".env.local" ||
    basename.endsWith(".log") ||
    basename.endsWith(".tsbuildinfo")
  ) {
    return false;
  }

  return true;
}

async function directoryIsEmpty(directory) {
  try {
    const entries = await fs.readdir(directory);
    return entries.filter((entry) => entry !== ".DS_Store").length === 0;
  } catch (error) {
    if (error.code === "ENOENT") {
      return true;
    }

    throw error;
  }
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

const options = parseArgs(args);
const questioner = await createQuestioner({ input, output });

try {
  console.log("Create a new site project from this scaffold.");

  const targetInput =
    options.target || (await questioner.ask("Target project directory", process.cwd()));
  const targetRoot = path.resolve(process.cwd(), targetInput);

  if (targetRoot === scaffoldRoot || isInside(scaffoldRoot, targetRoot)) {
    throw new Error("Target directory must be outside the scaffold repository.");
  }

  if (!(await directoryIsEmpty(targetRoot))) {
    throw new Error("Target directory must be empty before generating a site project.");
  }

  console.log(`Copy scaffold files to ${targetRoot}`);
  await fs.mkdir(targetRoot, { recursive: true });
  await fs.cp(scaffoldRoot, targetRoot, {
    recursive: true,
    filter: shouldCopy,
  });

  console.log("Run setup flow in the generated project.");
  const answers = await collectSetupAnswers(questioner.ask);
  await applySetupAnswers(answers, { cwd: targetRoot });

  if (options.install) {
    console.log("Install dependencies in the generated project.");
    await run("pnpm", ["install"], targetRoot);
  }

  if (options.check) {
    console.log("Verify the generated baseline project.");
    await run("pnpm", ["check"], targetRoot);
  }

  console.log(`Generator complete. Project is ready at ${targetRoot}`);
  console.log("Run `pnpm dev` from the generated project to start local development.");
} finally {
  questioner.close();
}
