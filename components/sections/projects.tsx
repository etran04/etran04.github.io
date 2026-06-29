import { resume } from "@/data/resume";
import { GitHubIcon } from "@/components/ui/github-icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  return (
    <section
      id="projects"
      className="animate-fade-in scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800"
      aria-labelledby="projects-heading"
    >
      <SectionHeading id="projects-heading" title="Projects" />
      <ul className="space-y-6">
        {resume.projects.map((project) => (
          <li
            key={project.name}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                {project.name}
              </h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
                className="inline-flex items-center text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <GitHubIcon />
              </a>
            </div>
            <ul className="mt-4 space-y-2">
              {project.bullets.map((bullet) => (
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
          </li>
        ))}
      </ul>
    </section>
  );
}
