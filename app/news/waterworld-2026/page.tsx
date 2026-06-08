import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hao Zhang Recognized as 2026 WaterWorld Emerging Leader | OneStep Technologies",
  description:
    "Hao Zhang, Founder and Director of Technology at Vancouver-based OneStep Technologies Inc., was recognized by WaterWorld as a 2026 Emerging Leader in the water industry.",
};

export default function WaterWorld2026Page() {
  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/news"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
      >
        ← Back to News
      </Link>

      <header className="mt-8 border-b border-zinc-200 pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          Recognition
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          Hao Zhang Recognized as 2026 WaterWorld Emerging Leader
        </h1>

        <p className="mt-5 text-base text-zinc-500">June 2026</p>
      </header>

      <div className="mt-10 space-y-6 text-base leading-8 text-zinc-700">
        <p>
          Hao Zhang, Founder and Director of Technology at Vancouver-based
          OneStep Technologies Inc., has been recognized by WaterWorld as a 2026
          Emerging Leader in the water industry.
        </p>

        <p>
          WaterWorld’s Emerging Leaders recognition highlights professionals and
          innovators contributing to the future of water and wastewater
          technology, utility operations, infrastructure, and water quality.
        </p>

        <p>
          OneStep Technologies is developing low-maintenance online free chlorine
          monitoring technology based on stabilized reagent chemistry and optical
          measurement. The company’s work focuses on improving continuous water
          quality data reliability while reducing reagent burden, maintenance
          requirements, consumables, downtime, and operator uncertainty in
          repeated measurements.
        </p>

        <blockquote className="border-l-4 border-zinc-300 pl-5 text-zinc-800">
          “Reliable chlorine monitoring is not only about making one accurate
          measurement. For utilities and distributed water systems, the larger
          challenge is generating trustworthy data over time with lower
          maintenance.”
          <span className="mt-3 block text-sm text-zinc-500">
            — Hao Zhang, Founder & Director of Technology, OneStep Technologies
            Inc.
          </span>
        </blockquote>

        <p>
          Free chlorine monitoring is important for drinking water safety,
          wastewater reuse, industrial water treatment, emergency response, and
          distributed water systems. However, online monitoring can be limited by
          reagent handling, reagent aging, calibration needs, consumables,
          fouling, downtime, and operator confidence in long-term data.
        </p>

        <p>
          OneStep Technologies is focused on practical optical monitoring for
          free chlorine measurement in treated-water and distributed water
          applications, with an emphasis on stabilized reagent systems, field
          usability, and reliable water quality data.
        </p>
      </div>

      <section className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="text-lg font-semibold text-zinc-950">
          About OneStep Technologies Inc.
        </h2>

        <p className="mt-3 text-sm leading-7 text-zinc-600">
          OneStep Technologies Inc. is a Vancouver-based water technology company
          developing low-maintenance optical monitoring technology for free
          chlorine measurement in treated-water and distributed water
          applications. The company focuses on stabilized reagent chemistry,
          optical measurement, and practical water quality data reliability.
        </p>
      </section>
    </article>
  );
}