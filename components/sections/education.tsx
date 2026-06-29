import { resume } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section
      id="education"
      className="animate-fade-in scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800"
      aria-labelledby="education-heading"
    >
      <SectionHeading id="education-heading" title="Education" />
      <ul className="space-y-6">
        {resume.education.map((edu) => (
          <li
            key={edu.school}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              {edu.school}
            </h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-300">{edu.degree}</p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
              {edu.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
