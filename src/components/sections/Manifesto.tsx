import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";

export function Manifesto() {
  return (
    <section id="story" className="relative bg-ink py-24 sm:py-32">
      <SlateDivider scene="01" take="1" label="Manifesto" />
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal className="mt-12 sm:mt-16">
          <p className="text-balance text-center font-display text-3xl italic leading-snug text-ivory sm:text-4xl lg:text-5xl">
            We don&apos;t direct your wedding. We shoot the one that&apos;s
            already happening — the shaking hands during the pheras, the
            uncle who won&apos;t sit down, your mother&apos;s face during the
            vidaai. Cinematic doesn&apos;t mean staged. It means we were
            close enough, and quiet enough, to catch it.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <p className="font-mono text-[11px] tracking-[0.25em] text-ivory-dim uppercase">
            — DreamsEnvisioned, on documentary cinematography
          </p>
        </Reveal>
      </div>
    </section>
  );
}
