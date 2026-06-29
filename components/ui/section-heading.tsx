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
        className="text-sm font-semibold uppercase tracking-widest text-accent-foreground"
      >
        {title}
      </h2>
      <div className="mt-2 h-px w-12 bg-accent-muted" />
    </div>
  );
}
