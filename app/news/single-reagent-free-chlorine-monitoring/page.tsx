import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "New publication on single-reagent free-chlorine monitoring | OneStep Technologies",
  description:
    "A new study from OneStep Technologies evaluates a stabilized single-reagent TMB method for free chlorine monitoring across drinking-water-related matrices.",
};

export default function SingleReagentFreeChlorineMonitoringPage() {
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
          New publication on single-reagent free-chlorine monitoring
        </h1>

        <p className="mt-5 text-sm text-zinc-500">October 2026</p>
      </header>

      <section className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-700">
        <p>
          OneStep Technologies has published a new study in{" "}
          <em>Environmental Monitoring and Assessment</em> (Springer Nature):
        </p>

        <p className="font-semibold text-zinc-950">
          A stabilized single-reagent TMB method for free chlorine monitoring in
          drinking-water-related matrices
        </p>

        <p>
          The study evaluates a stabilized single-reagent TMB method for free
          chlorine monitoring across drinking-water-related matrices, showing
          close agreement with routine DPD measurements.
        </p>

        <p>
          For online water monitoring, the opportunity is clear: fewer reagent
          streams, simpler fluidics, and reliable data.
        </p>

        <p>
          The work supports OneStep Technologies&apos; broader effort toward
          simpler, lower-maintenance chlorine measurement architectures.
        </p>
      </section>

      <section>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <Image
            src="/images/EMA1.png"
            alt="Environmental Monitoring and Assessment article A stabilized single-reagent TMB method for free chlorine monitoring in drinking-water-related matrices by Hao Zhang"
            width={1526}
            height={992}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="border-t border-zinc-200 pt-8">
        <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
          Publication
        </p>

        <p className="mt-3 text-lg font-semibold text-zinc-950">
          A stabilized single-reagent TMB method for free chlorine monitoring in
          drinking-water-related matrices
        </p>

        <p className="mt-2 text-zinc-600">
          Hao Zhang · <em>Environmental Monitoring and Assessment</em> · 2026
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          Volume 198, Article 1142
          <br />
          DOI: 10.1007/s10661-026-15979-7
        </p>

        <a
          href="https://doi.org/10.1007/s10661-026-15979-7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex text-sm font-semibold text-zinc-950 underline underline-offset-4"
        >
          Read the article →
        </a>
      </section>
    </article>
  );
}