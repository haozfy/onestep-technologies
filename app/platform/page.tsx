import { Badge, Card } from "../../components/ui";

export default function PlatformPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Core Platform</Badge>
          <Badge>Stability-Oriented</Badge>
          <Badge>Process-Controlled</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Platform Architecture
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-300">
          The OneStep platform combines proprietary formulation frameworks with defined
          process-control logic. The objective is to support stable performance characteristics
          while maintaining manufacturability across scale.
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          This page describes structural principles and system boundaries.
          Proprietary composition and parameterization are not disclosed.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Stability Design"
          desc="Formulation frameworks structured to support predictable performance under defined storage and handling conditions."
        />
        <Card
          title="Process Control Logic"
          desc="Defined sequencing and controlled processing parameters intended to support batch consistency."
        />
        <Card
          title="Scale Transfer Considerations"
          desc="Engineered with emphasis on repeatable unit operations to reduce variability during scale expansion."
        />
        <Card
          title="Diligence Alignment"
          desc="Technical documentation is organized to facilitate structured review under confidentiality."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <p className="text-sm leading-6 text-zinc-400">
          Detailed validation data, stability records, and batch reproducibility documentation
          are available under NDA via a secured data environment.
        </p>
      </section>
    </div>
  );
}