import { SlateDivider } from "@/components/SlateDivider";
import { Reveal } from "@/components/Reveal";
import { FilmCard } from "@/components/FilmCard";
import { films } from "@/lib/content";

export function FeaturedFilms({
  posters = {},
}: {
  posters?: Record<string, string | null>;
}) {
  return (
    <section id="films" className="relative bg-ink py-20 sm:py-28">
      <SlateDivider scene="01" take="1" label="Featured Films" />
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="mt-12 sm:mt-16 max-w-2xl">
          <h2 className="text-balance font-display text-4xl font-semibold text-ivory sm:text-5xl">
            A handful of the weddings we&apos;ve been trusted with.
          </h2>
          <p className="mt-4 text-ivory-dim">
            Full films, trailers, and ceremony cuts from families across
            Toronto, Peel, and Halton. Footage from these weddings is being
            prepared for the gallery — check back soon, or ask us to send a
            private link.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((film, index) => (
            <Reveal key={film.id} delay={(index % 3) * 0.08}>
              <FilmCard film={film} index={index} poster={posters[film.id]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
