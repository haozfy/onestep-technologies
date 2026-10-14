
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OneStep Research Featured in Scienmag | OneStep Technologies",
  description:
    "Scienmag features OneStep Technologies' research on single-reagent TMB chemistry for free chlorine monitoring.",
};

export default function ScienmagCoveragePage() {
  return (
    <article className="max-w-3xl space-y-8">
      <div>
        <p className="text-sm font-medium text-zinc-500">
          October 5, 2026 · Media Coverage
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">
          OneStep Technologies Research Featured in Scienmag
        </h1>
      </div>

      <div className="space-y-5 text-lg leading-8 text-zinc-700">
        <p>
          Scienmag has featured research by Hao Zhang of
          OneStep Technologies Inc. on a stabilized
          single-reagent TMB method for free chlorine
          monitoring.
        </p>

        <p>
          The coverage highlights findings published in
          Environmental Monitoring and Assessment,
          including close agreement with the established
          DPD reference method and the potential for
          simplified reagent handling in automated
          water quality monitoring.
        </p>

        <p>
          The research supports OneStep's ongoing
          development of next-generation online
          free chlorine monitoring technology.
        </p>
      </div>

      <div className="space-y-4 border-t border-zinc-200 pt-6">
        <a
          href="https://scienmag.com/single-reagent-colorimetric-test-matches-gold-standard-for-drinking-water-chlorine-monitoring/"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-medium text-zinc-950 underline underline-offset-4"
        >
          Read the original Scienmag article ↗
        </a>

        <a
          href="https://doi.org/10.1007/s10661-026-15979-7"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-medium text-zinc-950 underline underline-offset-4"
        >
          Read the published research ↗
        </a>
      </div>

      <Link
        href="/news"
        className="inline-block text-sm font-medium text-zinc-600 hover:text-zinc-950"
      >
        ← Back to News
      </Link>
    </article>
  );
}
