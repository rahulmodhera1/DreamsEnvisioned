"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TimecodeTicker } from "@/components/chrome/TimecodeTicker";
import { site } from "@/lib/content";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink px-6"
    >
      {/* looping background reel placeholder */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_20%,#241f14_0%,#15130e_45%,#0b0a08_100%)]" />
        <div className="hero-glow absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(122,46,46,0.25)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-[11px] tracking-[0.35em] text-gold uppercase"
        >
          Toronto &amp; the GTA · South Asian Wedding Cinematography
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance font-display text-[9.5vw] leading-[0.95] tracking-tight text-ivory sm:text-[9vw] lg:text-[6.5vw]"
        >
          {site.wordmark}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance font-sans text-base text-ivory-dim sm:text-lg"
        >
          Documentary wedding films, shot close and cut by hand — for the
          families who fill a hall from Brampton to Ajax and every hour of
          ritual in between.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex items-center gap-3 border border-surface-2 bg-surface/60 px-4 py-2 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-maroon animate-pulse-rec" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-ivory-dim uppercase">
            Now Filming
          </span>
          <span className="h-3 w-px bg-surface-2" />
          <TimecodeTicker className="text-[11px] text-ivory-dim" />
        </motion.div>
      </motion.div>

      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="group absolute bottom-10 z-10 flex flex-col items-center gap-2 text-ivory-dim hover:text-gold transition-colors"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ChevronDown
          size={18}
          className="animate-bounce motion-reduce:animate-none"
        />
      </motion.a>
    </section>
  );
}
