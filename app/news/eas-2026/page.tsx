import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OneStep Technologies Presentation Scheduled for EAS 2026",
  description:
    "Hao Zhang will present OneStep Technologies' low-maintenance kinetic optical method for continuous free chlorine monitoring at EAS 2026 in New Jersey.",
};

export default function EAS2026NewsPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/news"
        className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
      >
        ← Back to News
      </Link>

      <header className="mt-8 border-b border-zinc-200 pb-10">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          Conference Presentation
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          OneStep Technologies Presentation Scheduled for EAS 2026
        </h1>

        <p className="mt-5 text-sm text-zinc-500">June 2026</p>
      </header>

      <div className="space-y-7 pt-10 text-lg leading-8 text-zinc-700">
        <p>
          OneStep Technologies Founder and Director of Technology Hao Zhang
          will present at the 2026 Eastern Analytical Symposium and Exposition
          in New Jersey.
        </p>

        <figure className="my-10">
          <Image
            src="/images/eas-2026-program.png"
            alt="EAS 2026 technical program listing Hao Zhang's presentation on continuous free chlorine monitoring"
            width={1600}
            height={900}
            priority
            className="h-auto w-full rounded-2xl border border-zinc-200 bg-white"
          />

          <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
            Hao Zhang&apos;s presentation listed in the EAS 2026 technical
            program.
          </figcaption>
        </figure>

        <p>
          The presentation is titled{" "}
          <em className="text-zinc-900">
            A Low-Maintenance Kinetic Optical Method for Continuous Free
            Chlorine Monitoring Using a Stabilized TMB-Derived Reagent System
          </em>
          .
        </p>

        <p>
          The presentation will introduce OneStep Technologies&apos; approach
          to continuous free chlorine measurement using stabilized reagent
          chemistry and kinetic optical detection.
        </p>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
            Presentation Details
          </h2>

          <dl className="mt-6 grid gap-5 text-base leading-7">
            <div>
              <dt className="font-semibold text-zinc-950">Date</dt>
              <dd className="mt-1 text-zinc-600">
                Wednesday, November 18, 2026
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-zinc-950">Time</dt>
              <dd className="mt-1 text-zinc-600">9:00 AM</dd>
            </div>

            <div>
              <dt className="font-semibold text-zinc-950">Location</dt>
              <dd className="mt-1 text-zinc-600">
                Princeton Conference Center, New Jersey
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-zinc-950">Session</dt>
              <dd className="mt-1 text-zinc-600">
                Analytical Techniques for Sensing, Metrology, and Materials
                Characterization
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-zinc-950">Presenter</dt>
              <dd className="mt-1 text-zinc-600">
                Hao Zhang, OneStep Technologies Inc.
              </dd>
            </div>
          </dl>
        </section>

        <p>
          The work focuses on reducing reagent handling and maintenance
          requirements in online chlorine monitoring while supporting
          continuous optical measurement for distributed, industrial, and
          field water systems.
        </p>

        <p>
          Participation in EAS 2026 provides an opportunity to communicate the
          technology to analytical scientists, researchers, instrument
          developers, and industry professionals.
        </p>
      </div>
    </article>
  );
}