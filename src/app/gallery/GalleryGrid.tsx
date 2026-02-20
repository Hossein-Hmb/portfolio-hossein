/**
 * Client component for the gallery grid with minimalist scroll and hover animations.
 * Receives photo paths from the server and renders them with framer-motion.
 */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryGridProps {
  photos: { src: string; alt: string }[];
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  if (photos.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        Photos will appear here. Add images to public/gallery/ and they will
        show up automatically.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo, idx) => (
        <motion.div
          key={photo.src}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: idx * 0.05 },
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, opacity: 0.95 }}
          className="group relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </motion.div>
      ))}
    </div>
  );
}
