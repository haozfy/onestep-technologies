import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OneStep Technologies Joins NVIDIA Inception",
  description:
    "OneStep Technologies joins NVIDIA Inception and explores AI-enabled capabilities for automated free-chlorine monitoring.",
};

export default function NvidiaInceptionPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <Link
        href="/news"
        className="text-sm text-zinc-500 hover:text-zinc-900"
      >
        ← Back to News
      </Link>

      <header>
        <p className="text-sm text-zinc-500">
          October 2026
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          OneStep Technologies Joins NVIDIA Inception
        </h1>
      </header>

      <Image
        src="/images/onestep.png"
        alt="OneStep Technologies and NVIDIA Inception Program"
        width={1200}
        height={600}
        className="h-auto w-full rounded-2xl"
      />

      <div className="space-y-6 text-lg leading-8 text-zinc-700">
        <p>
          OneStep Technologies, a Vancouver-based water
          technology company, has joined NVIDIA Inception,
          a program designed to support startups.
        </p>

        <p>
          OneStep is developing an automated free-chlorine
          monitoring system based on stabilized single-reagent
          chemistry and optical detection. The technology
          aims to reduce maintenance requirements and make
          frequent water quality monitoring more practical.
        </p>

        <p>
          As part of its continued technology development,
          OneStep plans to explore AI-assisted data analysis,
          instrument performance monitoring, and remote
          diagnostics to support more intelligent and
          connected water monitoring systems.
        </p>
      </div>
    </article>
  );
}