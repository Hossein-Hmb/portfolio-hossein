"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface GalleryEvent {
  slug: string;
  title: string;
  date: string;
  photos: GalleryPhoto[];
}

interface GalleryGridProps {
  events: GalleryEvent[];
}

function PhotoTile({ photo, priority = false }: { photo: GalleryPhoto; priority?: boolean }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 sm:rounded-2xl dark:bg-gray-900">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 639px) calc((100vw - 3rem) / 2), (max-width: 1280px) 50vw, 33vw"
      />
    </div>
  );
}

function EmptyEvent({ title }: { title: string }) {
  return (
    <div className="flex min-h-48 items-end rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900/40">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title} photos are coming soon.
      </p>
    </div>
  );
}

export default function GalleryGrid({ events }: GalleryGridProps) {
  return (
    <div className="space-y-12 sm:space-y-16">
      <nav aria-label="Gallery events" className="flex flex-wrap gap-2">
        {events.map((event) => (
          <a
            key={event.slug}
            href={`#${event.slug}`}
            className="rounded-full border border-gray-200 px-3 py-2 text-sm transition hover:border-gray-900 hover:bg-gray-900 hover:text-white sm:px-4 dark:border-gray-700 dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
            {event.title}
          </a>
        ))}
      </nav>

      {events.map((event, eventIndex) => {
        const photos = (event.photos ?? []).filter(
          (photo): photo is GalleryPhoto => Boolean(photo?.src && photo.alt),
        );
        const preview = photos.slice(0, 3);
        const remainingCount = photos.length - preview.length;

        return (
          <section key={event.slug} id={event.slug} className="scroll-mt-28">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                <h2 className="text-xl font-semibold sm:text-2xl">{event.title}</h2>
              </div>
              {photos.length > 0 && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {photos.length} {photos.length === 1 ? "photo" : "photos"}
                </span>
              )}
            </div>

            {preview.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: eventIndex * 0.06 } }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                {preview.map((photo, index) => (
                  <PhotoTile
                    key={photo.src}
                    photo={photo}
                    priority={eventIndex === 0 && index === 0}
                  />
                ))}
              </motion.div>
            ) : (
              <EmptyEvent title={event.title} />
            )}

            {remainingCount > 0 && (
              <details className="mt-4">
                <summary className="w-fit cursor-pointer text-sm font-medium underline underline-offset-4 hover:text-blue-600">
                  View {remainingCount} more {remainingCount === 1 ? "photo" : "photos"}
                </summary>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {photos.slice(3).map((photo) => (
                    <PhotoTile key={photo.src} photo={photo} />
                  ))}
                </div>
              </details>
            )}
          </section>
        );
      })}
    </div>
  );
}
