import { Badge, Card } from "../../components/ui";

export default function PlatformPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Platform</Badge>
          <Badge>Architecture</Badge>
          <Badge>Industrialization focus</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Platform architecture
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-300">
          The platform is structured as an IP-owned formulation framework paired with process-control logic.
          The objective is to deliver stable performance characteristics while remaining manufacturable and auditable
          across scale and qualified partners.
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          This page describes principles and system boundaries. Proprietary composition and parameterization are not disclosed here.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Stability architecture"
          desc="Designed for extended stability under defined storage and handling constraints, prioritizing predictable field performance."
        />
        <Card
          title="Process-control logic"
          desc="A defined control approach (thermal window + controlled sequencing) intended to drive consistent batch outcomes."
        />
        <Card
          title="Scale transferability"
          desc="Engineered to reduce variability when moving from pilot to larger batches by emphasizing repeatable unit operations and QC gating."
        />
        <Card
          title="Diligence alignment"
          desc="Documentation is structured to support technical diligence and partner onboarding without exposing sensitive know-how in public."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <p className="text-sm leading-6 text-zinc-400">
          Access to detailed materials (claims mapping, stability data, batch reproducibility records, and QC framework)
          is governed by NDA.
        </p>
      </section>
    </div>
  );
}