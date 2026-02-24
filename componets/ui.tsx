import Link from "next/link";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800/80 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

export function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      {desc ? <div className="mt-2 text-sm leading-6 text-zinc-400">{desc}</div> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-50/10 px-4 py-2 text-sm text-zinc-50 hover:bg-zinc-50/15"
    >
      {children}
    </Link>
  );
}

export function Muted({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-6 text-zinc-400">{children}</p>;
}