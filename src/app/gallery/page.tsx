/**
 * Gallery page – dynamically maps every photo in public/gallery/.
 * Add images to public/gallery/ and they will appear automatically.
 */
import fs from "fs/promises";
import path from "path";
import Navbar from "../Navbar";
import GalleryGrid from "./GalleryGrid";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

function isImageFile(filename: string): boolean {
  const ext = path.extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

function filenameToAlt(filename: string): string {
  return path.basename(filename, path.extname(filename)).replace(/[-_]/g, " ");
}

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  let photos: { src: string; alt: string }[] = [];

  try {
    const files = await fs.readdir(galleryDir);
    const imageFiles = files.filter(isImageFile).sort();

    photos = imageFiles.map((file) => ({
      src: `/gallery/${file}`,
      alt: filenameToAlt(file),
    }));
  } catch {
    // Directory may not exist yet; photos stays empty
  }

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="mb-12 text-4xl font-bold">Gallery</h1>
        <GalleryGrid photos={photos} />
      </main>
    </div>
  );
}
