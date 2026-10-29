
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "OneStep Technologies Joins NVIDIA Inception to Advance AI-Enabled Water Monitoring",
  description:
    "OneStep Technologies joins NVIDIA Inception as it explores AI-assisted data analysis, instrument monitoring, and remote diagnostics for next-generation automated free-chlorine monitoring.",
};

export default function NvidiaInceptionPage() {
  return (
    <article className="mx-auto max-w-4xl pb-16">

      {/* Back navigation */}
      <Link
        href="/news"
        className="text-sm text-zinc-500 transition hover:text-zinc-900"
      >
        ← Back to News
      </Link>

      {/* Article header */}
      <header className="mt-10">
        <p className="text-sm font-medium text-zinc-500">
          October 2026
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          OneStep Technologies Joins NVIDIA Inception to Advance AI-Enabled Water Monitoring
        </h1>
      </header>

      {/* NVIDIA Inception graphic */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <Image
          src="/images/onestep.png"
          alt="OneStep Technologies and NVIDIA Inception Program"
          width={1200}
          height={600}
          sizes="(max-width: 768px) 100vw, 896px"
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      {/* Article body */}
      <div className="mt-10 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">

        <p>
          OneStep Technologies, a Vancouver-based water
          technology company, has joined NVIDIA Inception,
          a program designed to support startups.
          The company plans to explore opportunities to
          integrate artificial intelligence into its
          next-generation automated water monitoring technology.
        </p>

        <p>
          OneStep is developing an automated free-chlorine
          monitoring platform based on stabilized
          single-reagent chemistry and time-gated optical
          detection. The technology is designed to simplify
          analytical workflows, extend reagent usability,
          reduce routine maintenance requirements, and
          support reliable online water quality monitoring.
        </p>

        <p>
          Building on this analytical foundation, OneStep
          plans to explore AI-assisted data analysis,
          instrument performance monitoring, and remote
          diagnostics. These capabilities could help
          operators identify unusual measurement patterns,
          better understand instrument performance, and
          make more effective use of continuously generated
          water quality data.
        </p>

        <p>
          This development direction reflects OneStep's
          broader vision of connecting analytical chemistry,
          automated instrumentation, and intelligent data
          processing. The goal is to move beyond individual
          chlorine measurements toward more practical,
          connected, and data-driven water monitoring systems.
        </p>

        <p>
          Participation in NVIDIA Inception represents
          another step in OneStep Technologies' efforts
          to advance the development of intelligent
          water monitoring technologies.
        </p>
      </div>

      {/* Back to news */}
      <div className="mt-12 border-t border-zinc-200 pt-6">
        <Link
          href="/news"
          className="text-sm font-medium text-zinc-900 transition hover:text-zinc-600"
        >
          ← Back to News
        </Link>
      </div>
    </article>
  );
}
