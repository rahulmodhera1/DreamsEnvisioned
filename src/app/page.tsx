import { Hero } from "@/components/sections/Hero";
import { FeaturedFilms } from "@/components/sections/FeaturedFilms";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Investment } from "@/components/sections/Investment";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { getHeroReelAssets, getFilmPosters } from "@/lib/assets";

export default function Home() {
  const { video, poster } = getHeroReelAssets();
  const filmPosters = getFilmPosters();

  return (
    <main className="flex flex-1 flex-col">
      <Hero reelSrc={video} posterSrc={poster} />
      <FeaturedFilms posters={filmPosters} />
      <Experience />
      <Testimonials />
      <Investment />
      <Contact />
      <Footer />
    </main>
  );
}
