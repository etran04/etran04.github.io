import { resume } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

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
        <Button href="/resume.pdf" download variant="secondary">
          <Download className="h-4 w-4" />
          Download resume
        </Button>
      </div>
      <a
        href="#about"
        className="mt-16 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Learn more
      </a>
    </section>
  );
}
