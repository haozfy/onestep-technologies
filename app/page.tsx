import { Badge, Card, PrimaryLink } from "../components/ui";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Platform overview</Badge>
            <Badge>Scale-oriented</Badge>
            <Badge>Diligence-ready</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
            Proprietary stabilized chromogenic platform
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            OneStep provides an IP-owned formulation and process-control package designed for reproducible manufacturing
            at scale. This portal presents platform architecture and the manufacturing control model; sensitive composition
            and proprietary parameters are intentionally omitted.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryLink href="/platform">Platform</PrimaryLink>
            <PrimaryLink href="/manufacturing">Manufacturing model</PrimaryLink>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Access to detailed technical materials is governed by NDA.
          </p>
        </div>

        <div className="md:col-span-4">
          <Card
            title="Why this is an asset"
            desc="Designed to reduce replication risk and increase transferability across qualified manufacturing partners."
          >
            <div className="mt-3 space-y-2 text-sm text-zinc-300">
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Stability advantage</span>
                <span className="text-zinc-400">Manufacturable</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Process control</span>
                <span className="text-zinc-400">Reproducible</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Partner model</span>
                <span className="text-zinc-400">Replaceable</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Diligence package</span>
                <span className="text-zinc-400">Structured</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Value proposition"
          desc="A stability-first platform engineered for consistent batch outcomes and scalable manufacturing execution."
        />
        <Card
          title="Scope of disclosure"
          desc="Architecture and control model only. No formulation composition, partner assets, or proprietary parameters are presented."
        />
        <Card
          title="Intended audience"
          desc="Corporate development / technical diligence teams and qualified OEM/CDMO partners."
        />
      </section>
    </div>
  );
}