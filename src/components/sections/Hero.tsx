"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function useWipeReveal(): Variants {
  const prefersReducedMotion = useReducedMotion();
  return {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 1.1, ease: [0.83, 0, 0.17, 1] },
    },
  };
}

interface HeroProps {
  reelSrc?: string | null;
  posterSrc?: string | null;
}

export function Hero({ reelSrc, posterSrc }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wipeReveal = useWipeReveal();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      video.pause();
      video.removeAttribute("autoplay");
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-ink px-6"
    >
      {/* looping background reel — real footage if uploaded, high-contrast placeholder otherwise */}
      <div aria-hidden="true" className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_15%,#1a1a1a_0%,#0a0a0a_50%,#000000_100%)]" />
        <div className="hero-glow absolute inset-0 opacity-80" />
        {reelSrc && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={reelSrc}
            poster={posterSrc ?? undefined}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_48%,rgba(0,0,0,0.4)_0%,transparent_75%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-2 text-center"
      >
        <motion.p
          variants={item}
          className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.38em] text-gold/90 uppercase sm:text-[11px]"
        >
          <span aria-hidden="true" className="h-px w-6 bg-gold/50" />
          Toronto &amp; the GTA
          <span aria-hidden="true" className="h-px w-6 bg-gold/50" />
        </motion.p>

        <h1
          className="font-display leading-[0.9] tracking-[-0.015em] text-ivory [text-shadow:0_2px_40px_rgba(0,0,0,0.55)]"
          aria-label="Dreams Envisioned"
        >
          <motion.span
            variants={wipeReveal}
            className="block text-[17vw] sm:text-[13vw] lg:text-[8.75rem]"
            style={{ fontVariationSettings: '"opsz" 144, "wght" 380' }}
          >
            Dreams
          </motion.span>
          <motion.span
            variants={wipeReveal}
            className="-mt-[0.06em] block text-[17vw] italic text-gold sm:text-[13vw] lg:text-[8.75rem]"
            style={{ fontVariationSettings: '"opsz" 144, "wght" 360' }}
          >
            Envisioned
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
          className="mt-8 max-w-lg text-balance font-sans text-[15px] leading-relaxed text-ivory/75 sm:text-base"
        >
          Documentary wedding films for South Asian celebrations — shot close,
          cut by hand, and made to relive for a lifetime.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#films"
            className="inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] text-ink uppercase transition-all duration-150 ease-out hover:bg-ivory active:scale-[0.97]"
          >
            View Our Films
          </a>
          <a
            href="#contact"
            className="border border-white/25 px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] text-ivory uppercase backdrop-blur-sm transition-all duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
          >
            Inquire
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#films"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="group absolute bottom-5 z-10 hidden flex-col items-center gap-2 text-ivory-dim transition-colors hover:text-gold [@media(min-height:700px)]:flex sm:bottom-10"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ChevronDown
          aria-hidden="true"
          size={18}
          className="animate-bounce motion-reduce:animate-none"
        />
      </motion.a>
    </section>
  );
}
