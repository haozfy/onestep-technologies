import { Badge, Card } from "../../components/ui";

export default function ManufacturingPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Manufacturing Model</Badge>
          <Badge>IP Retention</Badge>
          <Badge>Partner Execution</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Controlled Manufacturing Structure
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-300">
          OneStep employs a decoupled manufacturing approach in which core formulation
          development and governance remain centralized, while qualified OEM/CDMO partners
          execute standardized downstream operations.
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          This structure is designed to preserve intellectual property ownership while
          enabling scalable production capacity across regions.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Centralized IP Governance"
          desc="Core formulation frameworks and process knowledge remain under OneStep control."
        />
        <Card
          title="Qualified Partner Execution"
          desc="Downstream dilution and fill-finish operations are performed by vetted manufacturing partners."
        />
        <Card
          title="Defined Control Points"
          desc="Inputs, process windows, and release criteria are structured to support reproducibility."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Quality Governance"
          desc="Batch documentation and release logic are structured to support audit review under confidentiality."
        />
        <Card
          title="Confidentiality Boundaries"
          desc="Partner-specific operational details and sensitive parameters are not disclosed publicly."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <p className="text-sm leading-6 text-zinc-400">
          Detailed manufacturing documentation, including batch records and QC framework,
          is accessible exclusively under executed NDA.
        </p>
      </section>
    </div>
  );
}