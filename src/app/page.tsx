/* Landing page – minimalist portfolio
 * Hossein – June 2025
 */
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ---------- Mini‑components ---------- */

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

/* ---------- UI Sections ---------- */

function Navbar() {
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

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
      className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-5xl font-bold md:text-6xl">Hey, I’m Hossein.</h1>
      <p className="max-w-md text-lg text-gray-500 dark:text-gray-400">
        Software Engineer • Physics Enthusiast • Content Creator
      </p>
    </motion.section>
  );
}

/* --- timeline dummy data (replace with real gigs later) --- */
const EXPERIENCE = [
  {
    date: "january 2025 - April 2025",
    role: "Research Assistant (Software Developer)",
    company: "AI4Science @uOttawa",
    blurb: "Developed a Streamlit app for visualizing qunatum states.",
  },
  {
    date: "January 2024 - August 2024",
    role: "Application Specialist Intern",
    company: "Institut du Savoir Montfort",
    blurb:
      "Built realtime dashboards. Developed internal tools with Microsoft PowerApps.",
  },
  {
    date: "January 2022 - May 2022",
    role: "IT Developer Intern",
    company: "Canada Revenue Agency (CRA)",
    blurb:
      "Created COBOL programs. Enhanced legacy systems to optimize performance.",
  },
];

function WorkExperience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl py-24">
      <h2 className="mb-12 text-3xl font-semibold">Experience</h2>
      <ol className="relative border-l border-gray-300 dark:border-gray-600">
        {EXPERIENCE.map((item, idx) => (
          <li key={idx} className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900"></span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold">
              {item.role} @ {item.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{item.blurb}</p>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}

/* --- projects dummy data (replace slugs + images later) --- */
const PROJECTS = [
  {
    slug: "quanrum-visualizer",
    title: "Quantum State Visualizer",
    cover: "/quantum_visualizer.png",
    tagline: "Interactive 3D visualisation of quantum states.",
  },
  {
    slug: "pixel‑art‑game",
    title: "2D Pixel Art Game",
    cover: "/Rostam.png",
    tagline: "Retro-style platformer with pixel art graphics.",
  },
  {
    slug: "machine-learning",
    title: "Building an ML Model from Scratch",
    cover: "/neuralnetwork.png",
    tagline: "Learning ML concepts by building a model.",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    cover: "/portfolio_website.png",
    tagline: "Next.js + Tailwind.",
  },
  {
    slug: "flashcard-app",
    title: "Flashcard Learning App",
    cover: "/images/blog.jpg",
    tagline: "Flutter app for spaced repetition learning.",
  },
];

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl py-24">
      <h2 className="mb-12 text-3xl font-semibold">Projects</h2>
      <div className="grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block overflow-hidden rounded-lg border border-gray-200 transition hover:-translate-y-1 dark:border-gray-700">
            <div className="relative h-44 w-full">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold group-hover:text-blue-600">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {p.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      className="mx-auto max-w-2xl py-24">
      <h2 className="mb-12 text-center text-3xl font-semibold">Get in touch</h2>
      {/* Replace the action URL with your own Formspree / API endpoint */}
      <form
        action="https://formspree.io/f/yourFormId"
        method="POST"
        className="grid gap-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm">
            Email
          </label>
          <input
            id="email"
            name="_replyto"
            type="email"
            required
            className="w-full rounded-md border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1 block text-sm">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
          Send
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-500">
        This form is powered by Formspree. Swap the action URL with your
        preferred endpoint.
      </p>
    </motion.section>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-6">
        <Hero />
        <WorkExperience />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
