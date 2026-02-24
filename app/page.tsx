import { Badge, Card, PrimaryLink } from "../components/ui";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Platform Overview</Badge>
            <Badge>Industrial Scale Orientation</Badge>
            <Badge>Diligence Aligned</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
            Proprietary Chromogenic Platform for Water Analytics
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            OneStep Technologies develops stabilized chromogenic reagent concentrates designed for scalable
            manufacturing and integration into analytical systems. The company operates upstream, retaining
            ownership of core formulation frameworks and process-control logic.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryLink href="/platform">Platform</PrimaryLink>
            <PrimaryLink href="/manufacturing">Manufacturing Model</PrimaryLink>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            This portal presents structural and architectural information only.
            Detailed technical materials are available under NDA.
          </p>
        </div>

        <div className="md:col-span-4">
          <Card
            title="Asset Characteristics"
            desc="Structured for stability, transferability, and controlled scalability."
          >
            <div className="mt-3 space-y-2 text-sm text-zinc-300">
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Stability Framework</span>
                <span className="text-zinc-400">Manufacturable</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Process Governance</span>
                <span className="text-zinc-400">Reproducible</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Supply Structure</span>
                <span className="text-zinc-400">Modular</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Diligence Package</span>
                <span className="text-zinc-400">Structured</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Value Proposition"
          desc="A stability-oriented platform designed to support consistent batch outcomes and scalable transfer across qualified manufacturing environments."
        />
        <Card
          title="Scope of Disclosure"
          desc="Architecture and governance model only. No formulation composition or partner-specific parameters are disclosed publicly."
        />
        <Card
          title="Intended Audience"
          desc="Corporate development teams, technical diligence leads, and qualified OEM/CDMO partners."
        />
      </section>
    </div>
  );
}