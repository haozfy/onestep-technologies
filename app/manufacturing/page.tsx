import { Badge, Card } from "../../components/ui";

export default function ManufacturingPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Dual-Node Model</Badge>
          <Badge>IP Isolation</Badge>
          <Badge>Global Scalability</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          The Decoupled Supply Chain
        </h1>

        <p className="mt-3 text-base leading-7 text-zinc-300">
          OneStep utilizes a "Concentrate-to-Bottling" dual-node manufacturing model. We physically decouple the creation of our proprietary IP from the mass-volume localized filling process, ensuring absolute trade-secret protection while empowering regional Tier-1 partners with frictionless manufacturing capabilities.
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          This outlines the control-and-governance framework for corporate diligence. Partner-specific operational assets are entirely excluded.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Node 1: IP Centralization"
          desc="All proprietary high-concentration mother liquors are synthesized, stabilized, and strictly controlled at our Burnaby headquarters. No sensitive IP leaves our facility."
        />
        <Card
          title="Node 2: CDMO Execution"
          desc="Certified Tier-1 partners execute standardized downstream processes (dilution & fill-finish). Capacity is infinitely reallocable without rewriting the core asset."
        />
        <Card
          title="Defined QC Gates"
          desc="Standardized inputs, thermal windows, and release protocols sustain absolute reproducibility and eliminate operational dependency risks."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Quality Governance"
          desc="Acceptance criteria and COA generation are designed to align with ISO 13485 standards and seamlessly pass rigorous M&A compliance audits."
        />
        <Card
          title="Risk Containment"
          desc="Zero R&D risk for CDMOs. Zero formulation guesswork. Deployment data and client-specific parameters remain strictly confidential."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <p className="text-sm leading-6 text-zinc-400">
          Access to secured manufacturing documentation (batch records, QA release protocols, stability master files, and reproducibility packages) is exclusively governed by NDA.
        </p>
      </section>
    </div>
  );
}