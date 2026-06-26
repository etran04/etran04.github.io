import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-4xl flex-1 px-6">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
