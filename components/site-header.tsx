import Link from "next/link";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/platform", label: "Platform" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/resources", label: "Resources" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-[11px] font-semibold tracking-[0.22em] text-zinc-700">
            OS
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-zinc-900">
              OneStep Technologies
            </div>
            <div className="mt-0.5 text-xs text-zinc-500">
              Online Free Chlorine Monitoring
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-6 border-t border-zinc-200" />
    </header>
  );
}