import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "New publication on simplified free-chlorine measurement | OneStep Technologies",
  description:
    "A new study from OneStep Technologies examines how time-resolved TMB reaction profiles and a single-reagent system can support a simpler approach to free chlorine measurement.",
};

export default function SimplifiedFreeChlorineMeasurementPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-10">
      <div>
        <Link
          href="/news"
          className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          ← Back to News
        </Link>
      </div>

      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          Publication
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          New publication on simplified free-chlorine measurement
        </h1>

        <p className="mt-5 text-sm text-zinc-500">October 2026</p>
      </header>

      <section className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-700">
        <p>
          OneStep Technologies has published a new Short Communication in{" "}
          <em>Next Research</em>:
        </p>

        <p className="font-semibold text-zinc-950">
          Fixed-time readout selection from TMB reaction profiles for free
          chlorine
        </p>

        <p>
          The study uses time-resolved TMB reaction profiles to examine how a{" "}
          <strong>single-reagent system</strong> can support a simpler
          measurement approach for free chlorine monitoring.
        </p>

        <p>
          For online water monitoring, fewer reagents, fewer measurement steps,
          and fewer fluidic components can ultimately mean simpler
          instrumentation and lower maintenance.
        </p>

        <p>
          The work is part of OneStep Technologies&apos; broader effort toward
          simpler, lower-maintenance chlorine measurement architectures.
        </p>
      </section>

      <section>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <Image
            src="/images/next-research-102504.png"
            alt="First page of the Next Research article Fixed-time readout selection from TMB reaction profiles for free chlorine"
            width={1070}
            height={1362}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>
    </article>
  );
}