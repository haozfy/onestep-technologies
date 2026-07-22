import { Badge, Card } from "../../components/ui";

export default function PlatformPage() {
  return (
    <div className="space-y-12 bg-white text-zinc-900">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Core Platform</Badge>
          <Badge>Stabilized Reagent Chemistry</Badge>
          <Badge>Time-Gated Single-Read Detection</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
          A stabilized-reagent platform for practical online free chlorine
          monitoring
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          OneStep Technologies is developing a stabilized chromogenic reagent
          platform for automated water analysis, with a current focus on online
          free chlorine monitoring. The platform combines stabilized
          single-reagent chemistry with time-gated single-read optical
          detection to support practical, low-maintenance operation.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          Reaction profiles are evaluated during method development to define a
          predetermined measurement time. Routine quantitation subsequently
          requires one absorbance reading per analytical cycle, without slope
          fitting, derivative calculations, or regression-window selection.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          Together with reagent stability of up to 24 months under sealed
          storage conditions, this architecture is designed to simplify
          operation, reduce routine maintenance workload, and support
          integration into instrument-based monitoring systems used in
          real-world water-analysis environments.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Stabilized reagent chemistry"
          desc="The platform is built around stabilized TMB-derived chromogenic chemistry designed for extended usability, repeatable performance, and practical deployment in automated analytical systems."
        />

        <Card
          title="Time-gated single-read detection"
          desc="A predefined measurement gate enables routine quantitation from one absorbance reading per analytical cycle, eliminating the need for routine slope fitting, derivative analysis, or multi-point regression."
        />

        <Card
          title="Simplified reagent workflow"
          desc="The single-reagent architecture is designed to reduce operational complexity and support lower-maintenance use in automated online monitoring applications."
        />

        <Card
          title="Instrument integration"
          desc="The platform is designed for integration into flow-cell optical analyzers and other reagent-based water-monitoring instruments."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="What problem it addresses"
          desc="Conventional online chlorine workflows can involve multiple reagents, limited reagent stability, frequent intervention, and higher maintenance requirements. The platform is designed to support a more practical operating model."
        />

        <Card
          title="Why it is different"
          desc="The technical differentiation lies in combining stabilized single-reagent chemistry with a predefined-time single-read measurement architecture designed specifically for automated online monitoring."
        />

        <Card
          title="Why it matters"
          desc="For instrument companies and commercial partners, analytical chemistry must also be stable in operation, straightforward to manufacture, easy to deploy, and compatible with real monitoring systems."
        />
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
            From reaction-profile development to routine single-read operation
          </h2>

          <p className="mt-3 text-base leading-7 text-zinc-700">
            Time-resolved reaction profiles are used during development to
            identify a measurement window that provides a reproducible free
            chlorine response while limiting contributions from more
            slowly reacting combined chlorine species.
          </p>

          <p className="mt-3 text-base leading-7 text-zinc-700">
            Once the measurement time is established, the routine analyzer
            workflow is simplified to a single optical reading at the
            predefined time. This separates development-stage reaction
            characterization from routine measurement and signal processing.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Development stage"
          desc="Time-resolved reaction data are evaluated to define the measurement gate and characterize timing, temperature, concentration, and interference effects."
        />

        <Card
          title="Routine measurement"
          desc="The analyzer performs one absorbance measurement at the predefined time during each analytical cycle."
        />

        <Card
          title="Deployment objective"
          desc="The combined reagent and measurement architecture is intended to support reliable online monitoring with fewer routine interventions."
        />
      </section>
    </div>
  );
}