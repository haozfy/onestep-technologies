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
          A practical platform for online free chlorine monitoring
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          OneStep Technologies is developing a stabilized chromogenic reagent platform
          for automated water analysis, with a current focus on online free chlorine
          monitoring. The platform combines stabilized reagent chemistry with
          reaction-kinetic optical detection to support more practical continuous operation.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          The goal is to improve reagent usability, simplify operation, and better
          support integration into instrument-based monitoring systems used in real-world
          water-analysis environments.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Stabilized reagent chemistry"
          desc="The platform is built around stabilized chromogenic reagent systems designed for longer usability, improved storage behavior, and more practical field deployment."
        />
        <Card
          title="Reaction-kinetic detection"
          desc="The platform uses reaction-kinetic optical analysis as an alternative to conventional endpoint-only measurement logic in continuous water monitoring."
        />
        <Card
          title="Simplified reagent workflow"
          desc="A key platform direction is reduced operational complexity through reagent architectures intended to support lower-maintenance continuous use."
        />
        <Card
          title="Instrument compatibility"
          desc="The platform is intended for integration into flow-cell optical systems and other reagent-based monitoring instruments."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="What problem it addresses"
          desc="Conventional online chlorine workflows can involve multiple reagents, limited stability, and more frequent maintenance demands. The platform is designed to support a more practical operating model."
        />
        <Card
          title="Why it is different"
          desc="The technical differentiation lies in the combination of stabilized reagent chemistry and kinetics-based detection, aimed at practical automated monitoring rather than chemistry alone."
        />
        <Card
          title="Why it matters"
          desc="For instrument companies and commercial partners, useful chemistry must also be stable in operation, easy to work with, and suitable for real monitoring systems."
        />
      </section>
    </div>
  );
}