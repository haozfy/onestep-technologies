import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "OneStep Technologies Selected as a Finalist in The Water Council’s Spring 2026 Tech Challenge | OneStep Technologies",
  description:
    "Vancouver-based OneStep Technologies was selected as a finalist in The Water Council’s Spring 2026 Tech Challenge for its continuous free chlorine monitoring technology.",
};

export default function WaterCouncilTechChallenge2026Page() {
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
          OneStep Technologies Selected as a Finalist in The Water Council’s
          Spring 2026 Tech Challenge
        </h1>

        <p className="mt-5 text-base text-zinc-500">May 2026</p>
      </header>

      <div className="mt-10 space-y-6 text-base leading-8 text-zinc-700">
        <p>
          OneStep Technologies was selected as a finalist in The Water Council’s
          Spring 2026 Tech Challenge for its continuous free chlorine monitoring
          technology. The Spring 2026 challenge specifically focused on
          AI-native technologies for water systems.
        </p>

        <p>
          The Water Council, headquartered in Milwaukee, Wisconsin, is a global
          water technology organization focused on advancing water innovation
          and water stewardship.
        </p>

        <p>
          Through the Tech Challenge, finalists are selected to present their
          technologies directly to water technology experts from the program’s
          corporate sponsors. The Spring 2026 program included Badger Meter,
          Watts Water Technologies, and Xylem.
        </p>

        <p>
          Read more about{" "}
          <a
            href="https://thewatercouncil.com/innovation/tech-challenge/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-950 underline underline-offset-4 hover:text-zinc-600"
          >
            The Water Council Tech Challenge
          </a>
          .
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
          applications.
        </p>
      </section>
    </article>
  );
}