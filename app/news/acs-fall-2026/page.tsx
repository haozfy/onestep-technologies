import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACS Fall 2026 Presentation | OneStep Technologies",
  description:
    "OneStep Technologies presentation scheduled for the ACS Fall 2026 technical program on low-maintenance continuous free chlorine monitoring.",
};

export default function ACSFall2026Page() {
  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <Link
          href="/news"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
        >
          ← Back to News
        </Link>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          Conference Presentation
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          OneStep Technologies presentation scheduled for ACS Fall 2026
        </h1>

        <p className="mt-5 text-lg leading-8 text-zinc-600">
          Hao Zhang, Founder of OneStep Technologies, has been scheduled to
          present in the technical program of ACS Fall 2026.
        </p>
      </section>

      <section className="max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
        <div className="space-y-5 text-base leading-7 text-zinc-700">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Presentation title
            </div>
            <p className="mt-2 text-zinc-900">
              Low-maintenance kinetic optical method for continuous free
              chlorine monitoring using a stabilized TMB-derived reagent system
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Meeting
            </div>
            <p className="mt-2 text-zinc-900">ACS Fall 2026</p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Organizing division
            </div>
            <p className="mt-2 text-zinc-900">
              ENVR: Division of Environmental Chemistry
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Session
            </div>
            <p className="mt-2 text-zinc-900">
              Community Engagement as a Catalyst for Clean Water Quality
              Management
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Format
            </div>
            <p className="mt-2 text-zinc-900">Oral presentation</p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Session time
            </div>
            <p className="mt-2 text-zinc-900">
              Monday, August 24, 2026, 10:00 AM – 1:40 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}