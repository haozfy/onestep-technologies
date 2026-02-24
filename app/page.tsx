import { Badge, Card, PrimaryLink } from "../components/ui";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Platform Overview</Badge>
            <Badge>Industrial-Scale</Badge>
            <Badge>M&A Diligence-Ready</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
            Proprietary Chromogenic Architecture for Advanced Water Analytics
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            OneStep Technologies engineers ultra-stable, high-yield reagent concentrates for the global water quality and IVD industries. We operate strictly upstream, providing the proprietary core chemistry that powers industry-leading analytical instruments.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryLink href="/platform">Core Architecture</PrimaryLink>
            <PrimaryLink href="/manufacturing">Manufacturing Model</PrimaryLink>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            To protect our strategic partners, all specific formulation data and customized kinetic profiles are fully redacted from public view. Access is strictly governed by NDA.
          </p>
        </div>

        <div className="md:col-span-4">
          <Card
            title="Strategic Asset Value"
            desc="Engineered to eliminate replication risk and maximize valuation multiples during corporate diligence."
          >
            <div className="mt-3 space-y-2 text-sm text-zinc-300">
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Kinetic Stability</span>
                <span className="text-zinc-400">Zero-Drift</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Process Control</span>
                <span className="text-zinc-400">Highly Reproducible</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Supply Chain</span>
                <span className="text-zinc-400">Modular & Decoupled</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Diligence Package</span>
                <span className="text-zinc-400">Audit-Ready</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Core Value Proposition"
          desc="A stability-first platform resolving the kinetic variance of traditional indicators, built for seamless batch outcomes at an industrial scale."
        />
        <Card
          title="Scope of Disclosure"
          desc="Strictly limited to high-level architecture. Zero formulation composition or partner-specific parameters are presented."
        />
        <Card
          title="Intended Audience"
          desc="Corporate development, M&A technical diligence teams, and qualified Tier-1 OEM/CDMO partners."
        />
      </section>
    </div>
  );
}