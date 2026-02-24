import { Badge, Card, Muted } from "@/components/ui";

export default function PlatformPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Platform</Badge>
          <Badge>High-level only</Badge>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Technical platform overview
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-300">
          The portal provides capability visibility without exposing sensitive formulation details.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Stability-managed system"
          desc="Designed for long-term stability under defined storage and handling conditions."
        />
        <Card
          title="Process-window controlled"
          desc="Controlled thermal window and sequential addition approach for reproducible dissolution and mixing."
        />
        <Card
          title="Scale-ready documentation"
          desc="After NDA: batch records, QC plan, acceptance criteria, and reproducibility package."
        />
        <Card
          title="Partner-friendly integration"
          desc="Compatible with qualified CDMO/OEM models, with controlled inputs and replaceable fill/finish."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <Muted>
          This page intentionally avoids disclosing formulation composition, exact parameters, or proprietary
          know-how. Full technical materials are available under NDA via a secured data room.
        </Muted>
      </section>
    </div>
  );
}