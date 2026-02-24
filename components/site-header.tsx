import Link from "next/link";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/platform", label: "Platform" },
  { href: "/manufacturing", label: "Manufacturing Model" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-8">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="group inline-flex items-center gap-3">
          {/* Enterprise mark (no “black block” look) */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-[11px] font-semibold tracking-[0.22em] text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
            OS
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-zinc-100">
              OneStep Technologies Inc.
            </div>
            <div className="mt-0.5 text-xs text-zinc-400">
              Confidential Technical Portal
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900/40 hover:text-zinc-50"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div className="mt-6 border-t border-zinc-800/80" />
    </header>
  );
}