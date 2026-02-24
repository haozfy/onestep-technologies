import { Badge, Card, Muted, PrimaryLink } from "../components/ui";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Controlled Access</Badge>
            <Badge>Industrial-Scale Ready</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
            Proprietary stabilized chromogenic platform
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            This portal provides high-level technical visibility of the platform architecture and manufacturing
            model. Sensitive formulation and process parameters are intentionally omitted.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryLink href="/platform">Platform overview</PrimaryLink>
            <PrimaryLink href="/manufacturing">Manufacturing model</PrimaryLink>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Comprehensive technical documentation is governed by NDA.
          </p>
        </div>

        <div className="md:col-span-4">
          <Card
            title="Confidential materials"
            desc="Detailed technical documentation is made available under NDA."
          >
            <div className="mt-3 space-y-2 text-sm text-zinc-300">
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Claims mapping</span>
                <span className="text-zinc-400">Structured</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Stability dataset</span>
                <span className="text-zinc-400">Validated</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Batch reproducibility</span>
                <span className="text-zinc-400">Documented</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Manufacturing framework</span>
                <span className="text-zinc-400">Controlled</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Core value"
          desc="Designed for stability and manufacturability within defined process windows, with emphasis on reproducibility and scale."
        />
        <Card
          title="Scope of disclosure"
          desc="This portal outlines capability and structural model only. No formulation composition or partner-specific assets are presented."
        />
        <Card
          title="Intended audience"
          desc="Strategic partners, OEM/CDMO, and corporate development or technical diligence teams."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <Muted>
          This portal provides high-level capability visibility only. Access to full technical materials is governed by standard confidentiality terms.
        </Muted>
      </section>
    </div>
  );
}