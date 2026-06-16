import { Badge, Card, PrimaryLink } from "../../components/ui";

const applications = [
  "Small and remote drinking-water systems",
  "Water reuse and decentralized treatment systems",
  "Building-scale water systems",
  "Industrial water and recirculation systems",
  "Emergency and mobile water-treatment units",
  "OEM and instrumentation partners",
];

const statusPoints = [
  {
    title: "Core chemistry",
    desc: "Stabilized single-reagent optical chemistry for free-chlorine monitoring has been developed.",
  },
  {
    title: "Reagent stability",
    desc: "Designed for up to 24-month room-temperature stability.",
  },
  {
    title: "Pilot product",
    desc: "Integration into a field-testable online monitor is in progress.",
  },
];

export default function ChlorineMonitorPage() {
  return (
    <div className="space-y-16 bg-white text-zinc-900">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Pilot Product in Development</Badge>
            <Badge>Online Free Chlorine</Badge>
            <Badge>24-Month Reagent Stability</Badge>
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Low-maintenance online free-chlorine monitoring
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
            Onestep Technologies is developing an online free-chlorine monitor
            for water systems that need continuous residual-chlorine data but
            cannot support frequent reagent replacement, probe maintenance, or
            manual testing.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
            The monitor is based on stabilized single-reagent optical chemistry
            with up to 24-month room-temperature stability, protected by U.S.
            patent rights. It is being designed to combine controlled sample
            handling, optical readout, embedded control, fluidics, and digital
            output to turn free-chlorine residual from manual spot checks into a
            low-maintenance, machine-readable data stream.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
            The goal is not simply to produce another chlorine number. The goal
            is to create continuous chlorine data that operators, alarms, and
            future automated water-management systems can trust.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryLink href="mailto:zhang@onestep-technologies.com">
              Discuss Pilot or Technical Evaluation
            </PrimaryLink>

            <PrimaryLink href="/resources">Technical Resources</PrimaryLink>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-950">
              Pilot product in development
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Core chemistry developed; integrated online monitor under
              development for pilot and technical evaluation.
            </p>

            <div className="mt-5 space-y-3 text-sm text-zinc-700">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span>Core chemistry</span>
                <span className="text-zinc-500">Developed</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span>Reagent stability</span>
                <span className="text-zinc-500">Up to 24 months</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span>Monitor integration</span>
                <span className="text-zinc-500">In progress</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Pilot discussions</span>
                <span className="text-zinc-500">Open</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main visual */}
      <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm md:p-4">
        <div className="overflow-hidden rounded-2xl bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/chlorine-monitoring-distributed-water.png"
            alt="Onestep Technologies low-maintenance online free-chlorine monitoring for distributed water systems"
            className="h-auto w-full"
          />
        </div>

        <p className="mt-3 px-1 text-xs leading-5 text-zinc-500">
          Product concept render. Core stabilized reagent chemistry has been
          developed; integrated online monitor is in development.
        </p>
      </section>

      {/* Status cards */}
      <section className="grid gap-4 md:grid-cols-3">
        {statusPoints.map((point) => (
          <div
            key={point.title}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-5"
          >
            <div className="text-sm font-semibold text-zinc-950">
              {point.title}
            </div>

            <div className="mt-2 text-sm leading-6 text-zinc-600">
              {point.desc}
            </div>
          </div>
        ))}
      </section>

      {/* Problem / approach / timing */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="The problem"
          desc="Free chlorine is one of the most important operational signals in water systems, but many sites still rely on manual testing or online analyzers that require frequent reagent replacement, calibration, or service."
        />

        <Card
          title="Our approach"
          desc="We start at the chemistry layer: stabilized single-reagent optical free-chlorine chemistry designed to reduce reagent burden and operator attention."
        />

        <Card
          title="Why now"
          desc="Remote operations, water reuse, distributed treatment, and AI-assisted water management all require reliable real-time field data, not occasional manual readings."
        />
      </section>

      {/* Technical positioning */}
      <section className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-7">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
            Built for maintenance-constrained water systems
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-700">
            Existing online chlorine systems can work well in staffed and
            well-maintained environments. But small, remote, reuse,
            building-scale, and distributed sites often face a different
            problem: the measurement must remain trustworthy with less frequent
            operator attention.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-700">
            Our core chemistry is designed to reduce one of the main operating
            burdens of reagent-based online chlorine monitoring: frequent
            reagent replacement. The next step is integrating this chemistry
            into a field-testable monitor with controlled sample handling,
            compact optical readout, embedded control, fluidics, and digital
            output.
          </p>
        </div>

        <div className="md:col-span-5">
          <Card
            title="Technical direction"
            desc="The monitor is being designed around stabilized reagent chemistry, controlled sample handling, compact optical readout, embedded control, fluidics, and digital output for integration into operator workflows."
          />
        </div>
      </section>

      {/* Applications */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
            Intended applications
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
            The first pilot use cases are water systems where continuous
            free-chlorine data is valuable, but frequent reagent replacement,
            probe maintenance, or manual spot checks are operationally
            difficult.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {applications.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Value by customer type */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="For operators"
          desc="A lower-maintenance path to continuous free-chlorine visibility at sites where manual testing or frequent service visits are difficult."
        />

        <Card
          title="For automation"
          desc="A more practical chlorine data stream for alarms, remote operations, automated treatment workflows, and future AI-assisted water management."
        />

        <Card
          title="For partners"
          desc="A stabilized chlorine-sensing chemistry layer that may support OEM integration, module development, or technical evaluation with instrumentation partners."
        />
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Pilot and partnership inquiries
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          We are open to pilot discussions with utilities, reuse operators,
          industrial water users, emergency water providers, and instrumentation
          partners interested in low-maintenance online free-chlorine
          monitoring.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          For pilot deployment, OEM integration, or technical evaluation,
          contact Onestep Technologies.
        </p>

        <div className="mt-6">
          <PrimaryLink href="mailto:zhang@onestep-technologies.com">
            Discuss Pilot or Technical Evaluation
          </PrimaryLink>
        </div>
      </section>
    </div>
  );
}