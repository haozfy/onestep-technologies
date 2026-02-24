import { Badge, Card } from "../../components/ui";

export default function ManufacturingPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Manufacturing</Badge>
          <Badge>Control model</Badge>
          <Badge>Partner execution</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Manufacturing model
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-300">
          The manufacturing model is designed to preserve IP ownership while enabling scalable execution with qualified OEM/CDMO
          partners. The strategic intent is to keep critical control points centralized while keeping execution capacity modular
          and replaceable.
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          This is a control-and-governance description for diligence and partner alignment; partner-specific assets and parameters are not disclosed here.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="IP retained"
          desc="Core know-how and process package remain with OneStep (Canada). Manufacturing execution does not imply transfer."
        />
        <Card
          title="Replaceable execution"
          desc="Qualified partners support blending / fill-finish. Capacity can be reallocated without rewriting the core asset."
        />
        <Card
          title="Defined control points"
          desc="Inputs, process windows, and QC gates are defined to sustain reproducibility and reduce operational dependency risk."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Quality governance"
          desc="Acceptance criteria and batch-release logic are designed to be auditable and consistent across qualified sites."
        />
        <Card
          title="Risk containment"
          desc="Partner-specific configurations and detailed manufacturing data remain confidential; disclosure is governed by NDA."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <p className="text-sm leading-6 text-zinc-400">
          Access to detailed manufacturing documentation (batch records, QC plan, stability data, and reproducibility package)
          is governed by NDA.
        </p>
      </section>
    </div>
  );
}