import { Mail } from "lucide-react";
import { InstagramGlyph } from "@/components/icons/InstagramGlyph";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-10">
        <div className="flex items-center gap-3">
          <Logo size={28} />
          <span className="font-mono text-xs tracking-[0.3em] text-ivory-dim uppercase">
            {site.wordmark}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DreamsEnvisioned on Instagram"
            className="text-ivory-dim hover:text-gold transition-colors"
          >
            <InstagramGlyph size={18} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email DreamsEnvisioned"
            className="text-ivory-dim hover:text-gold transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-[11px] tracking-[0.1em] text-ivory-dim">
          © {new Date().getFullYear()} {site.name}. Toronto &amp; the GTA.
        </p>
      </div>
    </footer>
  );
}
