import { Badge, Card, Muted, PrimaryLink } from "@/components/ui";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Controlled Access</Badge>
            <Badge>NDA-first</Badge>
            <Badge>Industrial-Scale Ready</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
            Proprietary stabilized chromogenic platform
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            A controlled-access technical portal for qualified partners. This site provides high-level capability
            visibility and an NDA-first workflow for secured data room materials.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryLink href="/platform">View platform</PrimaryLink>
            <PrimaryLink href="/manufacturing">Manufacturing model</PrimaryLink>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Note: Sensitive formulation details are intentionally omitted from this portal.
          </p>
        </div>

        <div className="md:col-span-4">
          <Card
            title="Engagement workflow"
            desc="Teaser → NDA → secured data room access (batch records, QC plan, stability, claims)."
          >
            <div className="mt-3 space-y-2 text-sm text-zinc-300">
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Stage 1</span>
                <span className="text-zinc-400">High-level review</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Stage 2</span>
                <span className="text-zinc-400">NDA execution</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Stage 3</span>
                <span className="text-zinc-400">Data room</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Core value"
          desc="Stability + manufacturability under defined process windows; built for reproducibility and scale."
        />
        <Card
          title="What we disclose here"
          desc="Capabilities, workflow, and model. No sensitive formulation or partner-specific asset details."
        />
        <Card
          title="Who this is for"
          desc="Strategic partners, OEM/CDMO, and corporate development / technical diligence teams."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <Muted>
          For qualified discussions: NDA-first. After NDA, we can share: claims mapping, stability dataset, batch
          reproducibility, and controlled manufacturing documentation via a secured data room.
        </Muted>
      </section>
    </div>
  );
}