import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import { articleFrontmatterSchema, type Article } from "./schemas";
import type { ContentSource } from "./source";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

async function readArticleFile(fileName: string): Promise<Article> {
  const filePath = path.join(articlesDirectory, fileName);
  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);
  const parsed = articleFrontmatterSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error(
      `Invalid article frontmatter in ${filePath}: ${parsed.error.message}`,
    );
  }

  return {
    ...parsed.data,
    body: content,
    filePath,
  };
}

function byPublishedDateDesc(a: Article, b: Article) {
  return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
}

export async function getAllArticles(options: { includeDrafts?: boolean } = {}) {
  const files = await fs.readdir(articlesDirectory);
  const articles = await Promise.all(
    files
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => readArticleFile(fileName)),
  );

  return articles
    .filter((article) => options.includeDrafts || !article.draft)
    .sort(byPublishedDateDesc);
}

export async function getArticleBySlug(
  slug: string,
  options: { includeDrafts?: boolean } = {},
) {
  const articles = await getAllArticles({ includeDrafts: options.includeDrafts });

  return articles.find((article) => article.slug === slug) ?? null;
}

export async function getArticleSlugs() {
  const articles = await getAllArticles();

  return articles.map((article) => article.slug);
}

export const localContentSource = {
  getArticles: getAllArticles,
  getArticleBySlug,
} satisfies ContentSource;
