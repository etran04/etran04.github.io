import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  title: string;
  className?: string;
};

export function SectionHeading({ id, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2
        id={id}
        className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
      >
        {title}
      </h2>
      <div className="mt-2 h-px w-12 bg-emerald-600/40 dark:bg-emerald-400/40" />
    </div>
  );
}
