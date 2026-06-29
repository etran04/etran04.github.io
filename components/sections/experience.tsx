import { resume } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      className="animate-fade-in scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800"
      aria-labelledby="experience-heading"
    >
      <SectionHeading id="experience-heading" title="Experience" />
      <ol className="relative space-y-12">
        {resume.experience.map((job, index) => (
          <li key={`${job.company}-${job.role}-${job.dates}`} className="relative">
            {index < resume.experience.length - 1 && (
              <span
                className="absolute top-8 left-[7px] hidden h-[calc(100%+3rem)] w-px bg-zinc-200 md:block dark:bg-zinc-800"
                aria-hidden
              />
            )}
            <div className="flex gap-4 md:gap-6">
              <span
                className="mt-2 hidden h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent bg-white md:block dark:bg-zinc-950"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-accent-foreground">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
                    {job.dates}
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-zinc-600 dark:text-zinc-300"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
