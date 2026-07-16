"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { films } from "@/lib/content";

const gradients = [
  "radial-gradient(120% 100% at 20% 0%, #2a2317 0%, #15130e 55%, #0b0a08 100%)",
  "radial-gradient(120% 100% at 80% 100%, #241812 0%, #15130e 55%, #0b0a08 100%)",
  "radial-gradient(120% 100% at 50% 0%, #201c12 0%, #15130e 60%, #0b0a08 100%)",
  "radial-gradient(120% 100% at 0% 100%, #26201a 0%, #15130e 55%, #0b0a08 100%)",
  "radial-gradient(120% 100% at 100% 0%, #221a13 0%, #15130e 55%, #0b0a08 100%)",
  "radial-gradient(120% 100% at 50% 100%, #2a1f16 0%, #15130e 55%, #0b0a08 100%)",
];

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
      className="group relative flex flex-col overflow-hidden border border-surface-2 bg-surface"
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
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/50" />
          </>
        )}

        {/* slate top bar */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 text-[10px] font-mono tracking-[0.2em] text-ivory-dim uppercase">
          <span>Take {film.take}</span>
          <span>{film.runtime}</span>
        </div>

        {/* diagonal slate stripes */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2 bg-[repeating-linear-gradient(-45deg,var(--color-surface-2)_0,var(--color-surface-2)_10px,var(--color-ink)_10px,var(--color-ink)_20px)]"
        />

        <motion.div
          variants={{
            rest: { opacity: 0.75, scale: 1 },
            hover: { opacity: 1, scale: 1.08 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-ink/40 backdrop-blur-sm">
            <Play size={20} className="ml-0.5 text-gold" fill="currentColor" />
          </span>
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col gap-1 px-5 py-5">
        <h3 className="font-display text-xl text-ivory">{film.couple}</h3>
        <p className="font-mono text-[11px] tracking-[0.1em] text-gold uppercase">
          {film.ritual}
        </p>
        <p className="mt-1 text-sm text-ivory-dim">{film.venue}</p>
      </div>
    </motion.article>
  );
}
