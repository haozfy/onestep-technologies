import Link from "next/link";

type WithClassName = {
  className?: string;
};

export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
} & WithClassName) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-700 ${className}`}
    >
      {children}
    </span>
  );
}

export function Card({
  title,
  desc,
  children,
  className = "",
}: {
  title: string;
  desc?: string;
  children?: React.ReactNode;
} & WithClassName) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="text-sm font-semibold text-zinc-950">{title}</div>
      {desc ? <div className="mt-2 text-sm leading-6 text-zinc-600">{desc}</div> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}

export function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
} & WithClassName) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 shadow-sm hover:bg-zinc-50 ${className}`}
    >
      {children}
    </Link>
  );
}

export function Muted({
  children,
  className = "",
}: {
  children: React.ReactNode;
} & WithClassName) {
  return <p className={`text-sm leading-6 text-zinc-500 ${className}`}>{children}</p>;
}