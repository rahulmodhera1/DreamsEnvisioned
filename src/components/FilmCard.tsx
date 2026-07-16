"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { films } from "@/lib/content";

const gradients = [
  "radial-gradient(140% 100% at 15% 0%, #262626 0%, #121212 55%, #000000 100%)",
  "radial-gradient(140% 100% at 85% 100%, #242424 0%, #121212 55%, #000000 100%)",
  "radial-gradient(140% 100% at 50% 0%, #1f1f1f 0%, #131313 60%, #000000 100%)",
  "radial-gradient(140% 100% at 0% 100%, #272727 0%, #121212 55%, #000000 100%)",
  "radial-gradient(140% 100% at 100% 0%, #232323 0%, #121212 55%, #000000 100%)",
  "radial-gradient(140% 100% at 50% 100%, #262626 0%, #121212 55%, #000000 100%)",
];

const sprockets =
  "repeating-linear-gradient(90deg, transparent 0, transparent 10px, var(--color-ink) 10px, var(--color-ink) 18px)";

export function FilmCard({
  film,
  index,
  poster,
}: {
  film: (typeof films)[number];
  index: number;
  poster?: string | null;
}) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative flex flex-col overflow-hidden border border-white/15 bg-surface transition-colors hover:border-gold"
    >
      <div
        className="relative aspect-video w-full overflow-hidden"
        style={{ background: gradients[index % gradients.length] }}
      >
        {poster && (
          <>
            <Image
              src={poster}
              alt={`${film.couple} — ${film.ritual}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/55" />
          </>
        )}

        {/* film-strip sprocket edge */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1.5 bg-white/20"
          style={{ backgroundImage: sprockets, backgroundSize: "18px 100%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1.5 bg-white/20"
          style={{ backgroundImage: sprockets, backgroundSize: "18px 100%" }}
        />

        {/* slate top bar */}
        <div className="absolute inset-x-0 top-1.5 flex items-center justify-between px-4 py-3 text-[10px] font-mono tracking-[0.2em] text-ivory uppercase">
          <span className="bg-black/70 px-2 py-0.5">Take {film.take}</span>
          <span className="bg-black/70 px-2 py-0.5">{film.runtime}</span>
        </div>

        <motion.div
          variants={{
            rest: { opacity: 0.85, scale: 1 },
            hover: { opacity: 1, scale: 1.1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-black/50 backdrop-blur-sm">
            <Play size={22} className="ml-0.5 text-gold" fill="currentColor" />
          </span>
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col gap-1 border-t border-white/15 px-5 py-5">
        <h3 className="font-display text-xl font-semibold text-ivory">
          {film.couple}
        </h3>
        <p className="font-mono text-[11px] tracking-[0.1em] text-gold uppercase">
          {film.ritual}
        </p>
        <p className="mt-1 text-sm text-ivory-dim">{film.venue}</p>
      </div>
    </motion.article>
  );
}
