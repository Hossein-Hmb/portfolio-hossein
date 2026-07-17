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
      className="flex min-h-[100svh] flex-col items-center justify-center pt-16 text-center sm:pt-20">
      <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Hey, I’m Hossein.</h1>
      <p className="max-w-sm text-base leading-relaxed text-gray-500 sm:max-w-none sm:text-lg dark:text-gray-400">
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
    company: "Ryv AI",
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
      className="mx-auto max-w-3xl py-16 sm:py-24">
      <h2 className="mb-8 text-2xl font-semibold sm:mb-12 sm:text-3xl">Experience</h2>
      <ol className="relative border-l border-gray-300 dark:border-gray-600">
        {EXPERIENCE.map((item, idx) => (
          <li key={idx} className="mb-8 ml-5 sm:mb-10 sm:ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900"></span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
              {item.date}
            </time>
            <h3 className="text-base font-semibold sm:text-lg">
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
];

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl py-16 sm:py-24">
      <h2 className="mb-8 text-2xl font-semibold sm:mb-12 sm:text-3xl">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block overflow-hidden rounded-lg border border-gray-200 transition hover:-translate-y-1 dark:border-gray-700">
            <div className="relative aspect-[16/9] w-full sm:h-44 sm:aspect-auto">
              <Image
                src={p.cover ?? "/rostam.png"}
                alt={p.title}
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 639px) calc(100vw - 2rem), 50vw"
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

const GALLERY_PREVIEWS = [
  {
    title: "Ottawa Italy Festival '26",
    href: "/gallery#ottawa-italy-festival-26",
    photos: [
      { src: "/gallery/ottawa-italy-festival-26/DSCF3986.avif", alt: "Ferrari at Ottawa Italy Festival" },
      { src: "/gallery/ottawa-italy-festival-26/DSCF4050.avif", alt: "Italy Festival performer and vintage truck" },
      { src: "/gallery/ottawa-italy-festival-26/DSCF4415.avif", alt: "Ferrari at Ottawa Italy Festival" },
    ],
  },
  {
    title: "Japan '25",
    href: "/gallery#japan-25",
    photos: [
      { src: "/gallery/DSCF0505.avif", alt: "Japan travel photograph" },
      { src: "/gallery/DSCF0553.avif", alt: "Japan travel photograph" },
      { src: "/gallery/DSCF0567.avif", alt: "Japan travel photograph" },
    ],
  },
];

function GalleryPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl py-16 sm:py-24">
      <div className="mb-8 flex items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">A few frames</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Gallery</h2>
        </div>
        <Link href="/gallery" className="shrink-0 text-sm font-medium underline underline-offset-4 hover:text-blue-600">
          View all photos
        </Link>
      </div>
      <div className="space-y-8">
        {GALLERY_PREVIEWS.map((collection) => (
          <div key={collection.title}>
            <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              {collection.title}
            </p>
            <Link
              href={collection.href}
              aria-label={`Open ${collection.title} photos`}
              className="group grid auto-rows-[4.5rem] grid-cols-4 gap-2 sm:auto-rows-[7.5rem] sm:gap-3">
              {collection.photos.map((photo, index) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 ${
                    index === 0 ? "col-span-2 row-span-2" : "col-span-2"
                  }`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </Link>
          </div>
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
      className="mx-auto max-w-2xl py-16 sm:py-24">
      <h2 className="mb-8 text-center text-2xl font-semibold sm:mb-12 sm:text-3xl">Get in touch</h2>
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
      <main className="px-4 sm:px-6">
        <Hero />
        <WorkExperience />
        <ProjectsSection />
        <GalleryPreview />
        <ContactSection />
      </main>
    </>
  );
}
