"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/chlorine-monitor", label: "Product" },
  { href: "/platform", label: "Platform" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/resources", label: "Resources" },
  { href: "/news", label: "News" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mx-auto max-w-6xl px-6 pt-8">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-[11px] font-semibold tracking-[0.22em] text-zinc-700">
            OS
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-zinc-900">
              Onestep Technologies
            </div>

            <div className="mt-0.5 text-xs text-zinc-500">
              Online Free Chlorine Monitoring
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="mt-5 border-t border-zinc-200 pt-4 md:hidden">
          <div className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div className="mt-6 border-t border-zinc-200" />
    </header>
  );
}