"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo size={36} />
          <span className="font-mono text-xs tracking-[0.3em] text-ivory group-hover:text-gold transition-colors">
            {site.name.toUpperCase()}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-ivory-dim hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-ivory hover:text-gold transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mx-6 mb-4 border border-surface-2 bg-surface"
          >
            <ul className="flex flex-col divide-y divide-surface-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-4 font-mono text-xs tracking-[0.2em] uppercase text-ivory-dim hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
