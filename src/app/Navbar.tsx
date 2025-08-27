import Link from "next/link";
import { motion } from "framer-motion";

const social = [
  {
    href: "https://github.com/Hossein-Hmb",
    label: "GitHub",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-6 h-6 sm:w-8 sm:h-8 fill-current">
        <path d="M12 .5C5.73.5.5 5.75.5 12.08c0 5.15 3.29 9.52 7.86 11.06.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.05 1.82 2.75 1.29 3.42.99.11-.78.41-1.29.74-1.58-2.55-.29-5.23-1.29-5.23-5.73 0-1.27.45-2.3 1.19-3.11-.12-.3-.52-1.5.11-3.14 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.64.24 2.84.12 3.14.74.81 1.19 1.84 1.19 3.11 0 4.45-2.69 5.43-5.25 5.72.42.36.79 1.08.79 2.18 0 1.58-.02 2.86-.02 3.25 0 .31.21.67.8.56 4.57-1.54 7.85-5.91 7.85-11.06C23.5 5.75 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/hossein-hajmirbaba",
    label: "LinkedIn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-6 h-6 sm:w-8 sm:h-8 fill-current">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.42 8.75h4.18v14.5H.42V8.75Zm7.9 0h4v2.18h.06c.56-1.06 1.93-2.18 3.98-2.18 4.25 0 5.04 2.8 5.04 6.44v7.99h-4.18v-7.08c0-1.69-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.77v7.19H8.32V8.75Z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@HosseinTechVideos/",
    label: "YouTube",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-6 h-6 sm:w-8 sm:h-8 fill-current">
        <path d="M23.5 6.2s-.23-1.63-.95-2.35c-.9-.95-1.92-.96-2.38-1.02C16.96 2.5 12 2.5 12 2.5h-.01S6.96 2.5 3.83 2.83c-.46.06-1.48.07-2.38 1.02C.73 4.57.5 6.2.5 6.2S.26 7.92.26 9.65v1.67c0 1.74.24 3.46.24 3.46s.23 1.63.95 2.35c.9.95 2.08.93 2.61 1.03 1.9.18 7.94.23 7.94.23s4.96-.01 8.09-.34c.46-.06 1.48-.07 2.38-1.02.72-.72.95-2.35.95-2.35s.24-1.72.24-3.46V9.65c0-1.74-.24-3.46-.24-3.46ZM9.75 14.02V7.62l6.5 3.2-6.5 3.2Z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      className="fixed inset-x-0 top-0 z-10 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-3xl font-thin tracking-tight hover:opacity-80">
          Hossein
        </Link>
        <ul className="flex items-center gap-6">
          {social.map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition hover:scale-110">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
