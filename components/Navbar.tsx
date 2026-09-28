"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 text-zinc-950 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80 dark:text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Monjur Elahi<span className="text-zinc-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
``