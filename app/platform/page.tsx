import { Badge, Card } from "../../components/ui";

export default function PlatformPage() {
  return (
    <div className="space-y-12 bg-white text-zinc-900">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Core Platform</Badge>
          <Badge>Stabilized Reagent Chemistry</Badge>
          <Badge>Reaction-Kinetic Detection</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
          Platform architecture for practical automated water monitoring
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          The OneStep platform combines stabilized chromogenic reagent chemistry with
          reaction-kinetic optical detection for automated water-analysis applications.
          Our current focus is online free chlorine monitoring, where reagent stability,
          operational simplicity, and continuous usability are critical.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          Rather than treating the reagent only as a laboratory formulation, the platform
          is being developed as a deployment-oriented system architecture. That includes
          reagent stability, workflow simplicity, compatibility with instrument integration,
          and a practical path toward repeatable manufacturing and real-world operation.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Stabilized reagent chemistry"
          desc="The platform is built around stabilized chromogenic reagent systems designed for longer usability, improved storage behavior, and more practical deployment in automated monitoring workflows."
        />
        <Card
          title="Reaction-kinetic detection"
          desc="Instead of relying only on conventional endpoint measurement logic, the platform incorporates reaction-kinetic optical analysis to support a different architecture for continuous water monitoring."
        />
        <Card
          title="Single-reagent practicality"
          desc="A key platform direction is simplified reagent handling through architectures intended to reduce operational complexity and support lower-maintenance continuous use."
        />
        <Card
          title="Instrument integration"
          desc="The platform is being developed with compatibility in mind for flow-cell optical systems and other reagent-integrated monitoring instruments."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="What problem it addresses"
          desc="Conventional online chlorine workflows can involve multiple reagents, limited stability, and more frequent maintenance demands. The platform is designed to support a more practical operating model."
        />
        <Card
          title="Why it is different"
          desc="The technical differentiation lies in the combination of stabilized reagent chemistry, kinetics-based detection logic, and a deployment-oriented system architecture rather than a chemistry-only approach."
        />
        <Card
          title="Why it matters commercially"
          desc="For instrument companies and commercial partners, useful chemistry must also be deployable, manufacturable, and compatible with real monitoring systems. That broader platform logic is built into the technology direction."
        />
      </section>
    </div>
  );
}