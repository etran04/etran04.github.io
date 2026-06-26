import { resume } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section
      id="about"
      className="animate-fade-in scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800"
      aria-labelledby="about-heading"
    >
      <SectionHeading id="about-heading" title="About" />
      <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {resume.summary}
      </p>
    </section>
  );
}
