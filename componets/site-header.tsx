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
        <Link href="/" className="group inline-flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-zinc-800/80 bg-zinc-900/60 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]" />
          <div>
            <div className="text-sm font-semibold tracking-wide text-zinc-100">
              OneStep Technologies Inc.
            </div>
            <div className="text-xs text-zinc-400">Confidential Technical Portal</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-zinc-300 hover:text-zinc-50"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-6 border-t border-zinc-800/80" />
    </header>
  );
}