import { Badge, Card } from "../../components/ui";

export default function PlatformPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Platform</Badge>
          <Badge>High-level overview</Badge>
          <Badge>Diligence-ready</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Platform overview
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-300">
          High-level visibility of the platform design and scale model. Sensitive formulation composition and
          proprietary process parameters are intentionally omitted.
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Intended audience: corporate development / technical diligence teams and qualified OEM/CDMO partners.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Stability architecture"
          desc="Designed for extended stability under defined storage and handling conditions."
        />
        <Card
          title="Process-window control"
          desc="Defined thermal window and controlled addition sequence to support reproducible mixing and dissolution."
        />
        <Card
          title="Scale model"
          desc="Pilot-to-scale approach with documented batch reproducibility and QC gating."
        />
        <Card
          title="Manufacturing integration"
          desc="Compatible with qualified CDMO/OEM operations; key control points are designed to remain structurally replaceable."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <p className="text-sm leading-6 text-zinc-400">
          This page is intentionally limited to high-level description. Access to detailed technical materials is
          governed by NDA.
        </p>
      </section>
    </div>
  );
}