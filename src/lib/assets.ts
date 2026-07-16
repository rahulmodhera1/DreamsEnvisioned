import { existsSync } from "node:fs";
import path from "node:path";
import { films } from "@/lib/content";

function publicAsset(relativePath: string): string | null {
  const abs = path.join(process.cwd(), "public", relativePath);
  return existsSync(abs) ? `/${relativePath}` : null;
}

export function getHeroReelAssets() {
  return {
    video: publicAsset("hero/reel.mp4"),
    poster: publicAsset("hero/poster.jpg"),
  };
}

export function getFilmPosters(): Record<string, string | null> {
  return Object.fromEntries(
    films.map((film) => [film.id, publicAsset(`films/${film.id}.jpg`)]),
  );
}

export function getOgImage() {
  return publicAsset("og-image.jpg");
}
