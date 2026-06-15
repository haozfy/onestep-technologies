import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News | OneStep Technologies",
  description:
    "News and recognition from OneStep Technologies, a Vancouver-based water technology company developing online free chlorine monitoring systems.",
};

const newsItems = [
  {
    title: "OneStep Technologies Presentation Scheduled for ACS Fall 2026",
    date: "June 2026",
    href: "/news/acs-fall-2026",
    description:
      "Hao Zhang's presentation on a low-maintenance kinetic optical method for continuous free chlorine monitoring has been scheduled for the ACS Fall 2026 technical program.",
  },
  {
    title: "Hao Zhang Recognized as 2026 WaterWorld Emerging Leader",
    date: "June 2026",
    href: "/news/waterworld-2026",
    description:
      "OneStep Technologies Founder and Director of Technology Hao Zhang was recognized by WaterWorld as a 2026 Emerging Leader in the water industry.",
  },
];

export default function NewsPage() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          News
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          News & Recognition
        </h1>

        <p className="mt-5 text-lg leading-8 text-zinc-600">
          Updates from OneStep Technologies, including company milestones,
          industry recognition, and public technology communications.
        </p>
      </section>

      <section className="grid gap-6">
        {newsItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            <div className="text-sm text-zinc-500">{item.date}</div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
              {item.title}
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              {item.description}
            </p>

            <div className="mt-5 text-sm font-medium text-zinc-900">
              Read more →
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}