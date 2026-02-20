/**
 * Paper page – lists papers and self-written articles.
 * Add entries to the PAPERS array below or later migrate to content/paper/*.md.
 */
import Link from "next/link";
import Navbar from "../Navbar";

interface PaperItem {
  title: string;
  date: string;
  summary: string;
  url?: string;
}

const PAPERS: PaperItem[] = [
  // Add your papers and articles here. Use url for external PDFs or links.
  // Example:
  // {
  //   title: "Example Paper Title",
  //   date: "2025-01-15",
  //   summary: "Brief description of the paper or article.",
  //   url: "https://example.com/paper.pdf",
  // },
];

export default function PaperPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-12 text-4xl font-bold">Paper</h1>
        {PAPERS.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            Papers and self-written articles will appear here. Add entries to the
            PAPERS array in src/app/paper/page.tsx.
          </p>
        ) : (
          <ul className="space-y-10">
            {PAPERS.map((paper, idx) => (
              <li key={idx}>
                {paper.url ? (
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80">
                    <h2 className="text-2xl font-semibold">{paper.title}</h2>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {paper.date}
                    </time>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      {paper.summary}
                    </p>
                  </a>
                ) : (
                  <div>
                    <h2 className="text-2xl font-semibold">{paper.title}</h2>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {paper.date}
                    </time>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      {paper.summary}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
