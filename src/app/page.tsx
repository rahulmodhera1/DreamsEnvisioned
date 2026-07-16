import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { FeaturedFilms } from "@/components/sections/FeaturedFilms";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Investment } from "@/components/sections/Investment";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Manifesto />
      <FeaturedFilms />
      <Experience />
      <Testimonials />
      <Investment />
      <Contact />
      <Footer />
    </main>
  );
}
