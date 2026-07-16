import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";

export function Manifesto() {
  return (
    <section id="story" className="relative bg-paper py-20 sm:py-28">
      <SlateDivider scene="01" take="1" label="Manifesto" theme="light" />
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal className="mt-12 sm:mt-16">
          <p className="text-balance text-center font-display text-3xl italic leading-snug text-ink sm:text-4xl lg:text-5xl">
            We don&apos;t direct your wedding. We shoot the one that&apos;s
            already happening —{" "}
            <span className="text-gold-deep not-italic font-semibold">
              the shaking hands during the pheras
            </span>
            , the uncle who won&apos;t sit down, your mother&apos;s face
            during the vidaai. Cinematic doesn&apos;t mean staged. It means
            we were close enough, and quiet enough, to catch it.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-ink/20" aria-hidden="true" />
          <p className="font-mono text-[11px] tracking-[0.25em] text-ink-dim uppercase">
            DreamsEnvisioned, on documentary cinematography
          </p>
          <span className="h-px w-10 bg-ink/20" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
