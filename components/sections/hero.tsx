import { resume } from "@/data/resume";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="animate-fade-in pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12">
        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full ring-4 ring-accent/20 md:h-52 md:w-52">
          <Image
            src="/profile.png"
            alt={`Portrait of ${resume.name}`}
            fill
            className="object-cover object-[center_22%]"
            priority
          />
        </div>
        <div className="min-w-0 flex-1 text-center md:text-left">
          <p className="mb-4 text-sm font-medium text-accent-foreground">
            {resume.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
            {resume.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-zinc-600 md:text-2xl dark:text-zinc-200">
            {resume.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            I build products people rely on, and care most about the details
            that make everyday experiences feel a little better.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button href="#contact">Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
