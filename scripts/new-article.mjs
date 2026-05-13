#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: pnpm new:article "Article title"');
  process.exit(1);
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const slug = slugify(title);
const articlesDirectory = path.join(process.cwd(), "content", "articles");
const articlePath = path.join(articlesDirectory, `${slug}.mdx`);
const today = new Date().toISOString().slice(0, 10);

const content = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${slug}"
description: "Short description for ${title.replace(/"/g, '\\"')}."
publishedAt: "${today}"
excerpt: "Short excerpt for article lists."
draft: true
---

Write the article here.
`;

try {
  await fs.mkdir(articlesDirectory, { recursive: true });
  await fs.writeFile(articlePath, content, { flag: "wx" });
  console.log(`Created ${path.relative(process.cwd(), articlePath)}`);
} catch (error) {
  if (error && error.code === "EEXIST") {
    console.error(`Article already exists: ${path.relative(process.cwd(), articlePath)}`);
    process.exit(1);
  }

  throw error;
}
