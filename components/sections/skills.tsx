import { resume } from "@/data/resume";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillBadge } from "@/components/ui/skill-badge";

export function Skills() {
  return (
    <section
      id="skills"
      className="animate-fade-in scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800"
      aria-labelledby="skills-heading"
    >
      <SectionHeading id="skills-heading" title="Skills" />
      <div className="space-y-8">
        {resume.skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-medium text-zinc-900 dark:text-white">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
