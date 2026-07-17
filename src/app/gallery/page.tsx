import fs from "fs/promises";
import path from "path";
import Navbar from "../Navbar";
import GalleryGrid, { GalleryEvent, GalleryPhoto } from "./GalleryGrid";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif"];

const EVENT_DETAILS = [
  {
    slug: "ottawa-italy-festival-26",
    title: "Ottawa Italy Festival '26",
    date: "2026",
  },
  { slug: "japan-25", title: "Japan '25", date: "2025" },
  {
    slug: "calabogie-motorsport-park",
    title: "Calabogie Motorsport Park",
    date: "Coming soon",
  },
] as const;

function isImageFile(filename: string): boolean {
  return IMAGE_EXTENSIONS.includes(path.extname(filename).toLowerCase());
}

function filenameToAlt(filename: string): string {
  return path.basename(filename, path.extname(filename)).replace(/[-_]/g, " ");
}

async function getPhotos(directory: string, urlPrefix: string): Promise<GalleryPhoto[]> {
  try {
    const files = await fs.readdir(directory);

    return files
      .filter(isImageFile)
      .sort()
      .map((file) => ({
        src: `${urlPrefix}/${file}`,
        alt: filenameToAlt(file),
      }));
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const eventPhotos = await Promise.all(
    EVENT_DETAILS.map(async (event) => {
      const folderPhotos = await getPhotos(
        path.join(galleryDir, event.slug),
        `/gallery/${event.slug}`,
      );

      // Existing flat gallery images remain the Japan '25 collection.
      const legacyJapanPhotos =
        event.slug === "japan-25" ? await getPhotos(galleryDir, "/gallery") : [];

      return folderPhotos.length > 0 ? folderPhotos : legacyJapanPhotos;
    }),
  );
  const events: GalleryEvent[] = EVENT_DETAILS.map((event, index) => ({
    ...event,
    photos: eventPhotos[index] ?? [],
  }));

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-32">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">Photos</p>
        <h1 className="mb-3 text-3xl font-bold sm:text-4xl md:text-5xl">Gallery</h1>
        <p className="mb-8 max-w-2xl leading-relaxed text-gray-600 sm:mb-12 dark:text-gray-400">
          Small moments, places, and events worth keeping close.
        </p>
        <GalleryGrid events={events} />
      </main>
    </div>
  );
}
