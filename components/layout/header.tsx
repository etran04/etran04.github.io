"use client";

import { navItems, resume } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          {resume.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-zinc-600 dark:text-zinc-400"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-zinc-200 px-6 py-4 md:hidden dark:border-zinc-800"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm text-zinc-600 dark:text-zinc-400"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
