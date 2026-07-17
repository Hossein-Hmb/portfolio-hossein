// src/app/blog/page.tsx
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "../Navbar";

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
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
        <h1 className="mb-8 text-3xl font-bold sm:mb-12 sm:text-4xl">Blog</h1>
        <ul className="space-y-8 sm:space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold sm:text-2xl">{post.title}</h2>
                <p className="mt-1 leading-relaxed text-gray-500">{post.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
