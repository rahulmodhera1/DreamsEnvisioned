"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/content";

const panelVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* rendered outside <header> — backdrop-filter on header would otherwise
          reparent this fixed overlay's containing block to the header's own box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled
            ? "border-gold/15 bg-ink/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* legibility scrim while floating over the hero video */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        />

        <div
          id="top"
          className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10"
        >
          <a href="#top" className="group flex items-center gap-2.5 sm:gap-3">
            <Logo width={28} className="sm:hidden" />
            <Logo width={30} className="hidden sm:block" />
            <span className="font-display text-base leading-none tracking-[0.01em] text-ivory transition-colors group-hover:text-gold sm:text-lg">
              Dreams<span className="font-light italic">Envisioned</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.22em] text-ivory/80 transition-colors hover:text-ivory"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-gold/40 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-all duration-150 ease-out hover:bg-gold hover:text-ink active:scale-[0.97]"
            >
              Inquire
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 text-ivory transition-colors hover:text-gold active:scale-90 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="flex"
                >
                  <X size={22} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="flex"
                >
                  <Menu size={22} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              aria-label="Mobile"
              className="relative border-b border-white/10 bg-ink/95 backdrop-blur-md lg:hidden"
            >
              <ul className="mx-auto max-w-7xl px-6 py-2">
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={linkVariants}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/5 py-4 font-mono text-sm tracking-[0.2em] uppercase text-ivory-dim transition-colors last:border-b-0 hover:text-gold active:text-gold"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li variants={linkVariants} className="py-4">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block bg-gold px-6 py-3.5 text-center font-mono text-[11px] tracking-[0.2em] text-ink uppercase transition-all duration-150 ease-out hover:bg-ivory active:scale-[0.97]"
                  >
                    Inquire Now
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
