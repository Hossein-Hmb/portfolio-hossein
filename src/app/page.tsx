/* Landing page – minimalist portfolio
 * Hossein – June 2025
 */
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

/* ---------- Mini‑components ---------- */

/* ---------- UI Sections ---------- */

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
      className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-5xl font-bold md:text-6xl">Hey, I’m Hossein.</h1>
      <p className="whitespace-nowrap text-lg text-gray-500 dark:text-gray-400">
        Software Developer • Physics Enthusiast • Content Creator
      </p>
    </motion.section>
  );
}

/* --- timeline dummy data (replace with real gigs later) --- */
const EXPERIENCE = [
  {
    date: "September 2025 - Present",
    role: "Full Stack Developer",
    company: "Self-Employed",
    blurb:
      "Developing a marketing automation platform with agentic capabilities.",
  },
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
    slug: "quantum-visualizer",
    title: "Quantum State Visualizer",
    cover: "/quantum_visualizer.png",
    tagline: "Interactive 3D visualisation of quantum states.",
  },
  {
    slug: "pixelartgame",
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
    // cover: "/images/blog.jpg",
    tagline: "Flutter app for spaced repetition learning.",
  },
  {
    slug: "ml-quantum-optimizer",
    title: "ML-Powered Quantum Circuit Optimizer",
    cover: "/quantum_visualizer.png",
    tagline:
      "Building a machine learning algorithm to optimize quantum circuits.",
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
            href={`/blog/${p.slug}`}
            className="group block overflow-hidden rounded-lg border border-gray-200 transition hover:-translate-y-1 dark:border-gray-700">
            <div className="relative h-44 w-full">
              <Image
                src={p.cover ?? "/rostam.png"}
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
