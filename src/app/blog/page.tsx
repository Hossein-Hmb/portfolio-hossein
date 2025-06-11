// src/app/blog/page.tsx
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface PostMeta {
  title: string;
  slug: string;
  date: string;
  summary: string;
}

export default async function BlogIndex() {
  const files = await fs.readdir(path.join(process.cwd(), "content/blog"));
  const posts: PostMeta[] = [];

  for (const file of files) {
    const source = await fs.readFile(`content/blog/${file}`, "utf8");
    const { data } = matter(source);

    const slug = file.replace(/\.mdx?$/, "");

    posts.push({
      title: data.title,
      slug,
      date: data.date,
      summary: data.summary,
    });
  }

  posts.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mx-auto max-w-3xl py-24">
      <h1 className="mb-12 text-4xl font-bold">Blog</h1>
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
