import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  summary: string;
  cover?: string;
}

export async function getPostSlugs() {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string) {
  const raw = await fs.readFile(path.join(POSTS_DIR, slug + ".mdx"), "utf8");
  const { data, content } = matter(raw);
  return { meta: { ...(data as PostMeta), slug }, content };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));
  // newest first
  return posts.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}
