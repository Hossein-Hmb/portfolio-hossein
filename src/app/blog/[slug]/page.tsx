import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import Link from "next/link";
import { mdxComponents } from "@/components/MDXComponents";
import Navbar from "../../Navbar";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <>
      <Navbar />
      <article className="prose prose-base sm:prose-lg lg:prose-xl dark:prose-invert mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 prose-img:mx-auto">
      {post.meta.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.meta.cover}
          alt={post.meta.title}
          className="mb-8 max-h-[55svh] w-full rounded-xl object-cover shadow sm:max-h-[65svh]"
        />
      )}

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        {post.meta.title}
      </h1>
      <p className="text-sm text-gray-500 mb-10">{post.meta.date}</p>

      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, rehypeAutolink],
          },
        }}
        components={mdxComponents}
      />

      <footer className="mt-16 flex flex-col items-center gap-4 border-t pt-8 text-sm">
        <Link href="/blog" className="hover:underline">
          ← Back to all posts
        </Link>
      </footer>
      </article>
    </>
  );
}
