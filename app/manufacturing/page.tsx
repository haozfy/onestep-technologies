import { Badge, Card } from "../../components/ui";

export default function ManufacturingPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Manufacturing</Badge>
          <Badge>Control points</Badge>
          <Badge>Replaceable partners</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Manufacturing model
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-300">
          A controlled manufacturing model designed to preserve IP ownership while enabling scalable execution with
          qualified CDMO/OEM partners.
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Designed for diligence review: ownership, control points, and operational replaceability are explicit by design.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="IP retained"
          desc="Core know-how and process package are retained by OneStep (Canada). No transfer is implied by manufacturing execution."
        />
        <Card
          title="Partner execution"
          desc="Qualified partners support manufacturing and fill/finish; operationally useful and structurally replaceable."
        />
        <Card
          title="Defined control points"
          desc="Key inputs, process windows, and QC gates are defined and controlled to support reproducibility at scale."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Quality governance"
          desc="Acceptance criteria and batch release logic are designed to be auditable and consistent across qualified partners."
        />
        <Card
          title="Risk containment"
          desc="Partner-specific configurations and detailed manufacturing data remain confidential; disclosure is governed by NDA."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <p className="text-sm leading-6 text-zinc-400">
          This page is intentionally limited to high-level description. Access to detailed manufacturing documentation
          is governed by NDA.
        </p>
      </section>
    </div>
  );
}