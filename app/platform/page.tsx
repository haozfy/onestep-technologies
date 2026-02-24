import { Badge, Card } from "../../components/ui";

export default function PlatformPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Core Platform</Badge>
          <Badge>Kinetic Stability</Badge>
          <Badge>Matrix-Agnostic</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Absolute Reproducibility at Industrial Scale
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-300">
          The OneStep Core Base represents a paradigm shift in reagent formulation. Structured as an IP-owned chemical framework paired with rigid process-control logic, it resolves the kinetic instability and supply chain bottlenecks of traditional chromogenic indicators.
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          This page describes system boundaries and kinetic principles. Proprietary composition and molecular parameterization are not disclosed here.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Exceptional Shelf-Life Stability"
          desc="Formulated to eliminate zero-drift and baseline degradation over extended storage periods, prioritizing highly predictable field performance."
        />
        <Card
          title="Matrix-Agnostic Performance"
          desc="Delivers hyper-linear colorimetric responses across highly variable water matrices without signal suppression or interference."
        />
        <Card
          title="Plug-and-Play Transferability"
          desc="Designed for frictionless integration into existing automated CDMO filling lines, requiring minimal downstream processing and zero specialized hardware."
        />
        <Card
          title="Diligence Alignment"
          desc="Comprehensive kinetic validation reports and stability profiles are pre-structured to support seamless technical diligence and rapid partner onboarding."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <p className="text-sm leading-6 text-zinc-400">
          Detailed materials including claims mapping, kinetic variance data, and the complete QC framework are accessible solely to qualified partners under an executed NDA.
        </p>
      </section>
    </div>
  );
}