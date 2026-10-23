
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACS ES&T Water Viewpoint | OneStep Technologies",
  description:
    "A new Viewpoint by Hao Zhang in ACS ES&T Water explores the role of online free chlorine monitoring as water data infrastructure for circular water systems.",
};

export default function ACSViewpointPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <Link
        href="/news"
        className="inline-block text-sm font-medium text-zinc-500 hover:text-zinc-900"
      >
        ← Back to News
      </Link>

      <article className="space-y-8">
        <header className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Publication · October 2026
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-5xl">
            Free Chlorine Monitoring as Water Data Infrastructure for Circular Water Systems
          </h1>

          <p className="text-lg text-zinc-600">
            Hao Zhang · ACS ES&T Water · Viewpoint
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
          <Image
            src="/images/ACS.png"
            alt="ACS ES&T Water Viewpoint by Hao Zhang"
            width={1600}
            height={900}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <div className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-700">
          <p>
            A new Viewpoint by Hao Zhang, Founder and Director
            of Technology at OneStep Technologies, has been
            published in ACS ES&T Water as part of the
            cross-journal Special Issue, "Circular Water
            Economy," spanning six ACS journals.
          </p>

          <p>
            The article explores why online free chlorine
            monitoring should be viewed not only as an
            analytical measurement, but also as part of
            the data infrastructure of modern water systems.
          </p>

          <p>
            As water systems become increasingly digital
            and automated, the focus extends beyond
            measurement frequency to producing trustworthy,
            decision-ready data that support treatment
            verification and operational decisions.
          </p>

          <p>
            The Viewpoint highlights analytical validity,
            field reliability, and data continuity as
            connected requirements for the next generation
            of online chlorine monitoring.
          </p>

          <p>
            This perspective is particularly relevant
            to water reuse and decentralized treatment,
            with broader relevance to advanced water
            treatment and desalination.
          </p>
        </div>

        <div className="border-t border-zinc-200 pt-8">
          <p className="mb-4 text-sm text-zinc-500">
            Published in ACS ES&T Water
          </p>

          <a
            href="https://doi.org/10.1021/acsestwater.6c00844"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Read Publication on ACS ↗
          </a>
        </div>
      </article>
    </div>
  );
}
