import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  children: string;
  className?: string;
};

export function SkillBadge({ children, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
