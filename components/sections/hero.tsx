import { resume } from "@/data/resume";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="animate-fade-in pt-16 pb-20 md:pt-24 md:pb-28">
      <p className="mb-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">
        {resume.location}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
        {resume.name}
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-zinc-600 md:text-2xl dark:text-zinc-400">
        {resume.title}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Building consumer-scale products across frontend, backend, and platform
        systems — from RAG infrastructure to growth experiences at 60M+ user
        scale.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="#contact">Get in touch</Button>
      </div>
    </section>
  );
}
