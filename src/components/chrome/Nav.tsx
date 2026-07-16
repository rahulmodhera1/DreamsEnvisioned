"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/content";

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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
        <div id="top" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#top" className="group flex items-center gap-2.5 sm:gap-3">
            <Logo width={28} className="sm:hidden" />
            <Logo width={30} className="hidden sm:block" />
            <span
              className="font-mono text-[10px] tracking-[0.15em] text-ivory transition-colors group-hover:text-gold sm:text-xs sm:tracking-[0.3em]"
              style={{
                textShadow:
                  "1px 1px 0 rgba(0,0,0,0.9), -1px -1px 0.5px rgba(255,255,255,0.08)",
              }}
            >
              {site.name.toUpperCase()}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group/link relative inline-block py-1 font-mono text-[11px] tracking-[0.2em] uppercase text-ivory-dim transition-colors hover:text-gold"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-200 ease-out group-hover/link:w-full"
                />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 text-ivory transition-colors hover:text-gold active:scale-90 md:hidden"
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
              className="border-b border-white/10 bg-ink/95 backdrop-blur-md md:hidden"
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
