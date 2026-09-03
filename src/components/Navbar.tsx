"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Open Source", "#opensource"],
  ["Skills", "#skills"],
  ["Achievements", "#achievements"],
  ["Content", "#content"],
  ["Contact", "#contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="text-lg font-black tracking-tight text-slate-950 dark:text-white"
            aria-label="Deshraj Verma home"
          >
            DV<span className="text-teal-500">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition hover:text-teal-600 dark:hover:text-teal-400"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-bold text-slate-700 transition hover:border-teal-400 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-slate-200 py-3 dark:border-slate-800 lg:hidden">
            <div className="grid grid-cols-2 gap-1">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-teal-950/40 dark:hover:text-teal-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
