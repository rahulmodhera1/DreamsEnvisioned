"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/content";

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
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink px-6"
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
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_48%,rgba(0,0,0,0.3)_0%,transparent_75%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 sm:mb-8"
        >
          <Logo width={130} />
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 font-mono text-[11px] tracking-[0.4em] text-gold uppercase sm:mb-5"
        >
          Toronto &amp; the GTA · Documentary Wedding Cinematography
        </motion.p>

        <motion.h1
          variants={wipeReveal}
          style={{ fontVariationSettings: '"SOFT" 0, "WONK" 0' }}
          className="text-balance font-display font-black text-[8.5vw] leading-[0.88] tracking-tighter text-ivory sm:text-[8vw] lg:text-[6.5vw]"
        >
          {site.wordmark}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 h-px w-24 bg-gold sm:mt-6"
          aria-hidden="true"
        />

        <motion.p
          variants={item}
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
          className="mt-4 max-w-xl text-balance font-sans text-base text-ivory-dim sm:mt-6 sm:text-lg"
        >
          Documentary wedding films, shot close and cut by hand — for the
          families who fill a hall from Brampton to Ajax and every hour of
          ritual in between.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-10"
        >
          <a
            href="#films"
            className="bg-gold px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] text-ink uppercase transition-all duration-150 ease-out hover:bg-ivory active:scale-[0.97]"
          >
            View Our Films
          </a>
          <a
            href="#contact"
            className="border border-white/30 px-7 py-3.5 font-mono text-[11px] tracking-[0.2em] text-ivory uppercase transition-all duration-150 ease-out hover:border-gold hover:text-gold active:scale-[0.97]"
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
        className="group absolute bottom-5 z-10 hidden flex-col items-center gap-2 text-ivory-dim hover:text-gold transition-colors [@media(min-height:700px)]:flex sm:bottom-10"
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
