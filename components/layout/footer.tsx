import { resume } from "@/data/resume";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <p>
          © {year} {resume.name}
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
