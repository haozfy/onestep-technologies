import { Badge, Card } from "../../components/ui";

export default function ManufacturingPage() {
  return (
    <div className="space-y-12 bg-white text-zinc-900">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Manufacturing</Badge>
          <Badge>Scalable Production</Badge>
          <Badge>Commercial Supply Readiness</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
          Manufacturing readiness for practical reagent supply
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          OneStep Technologies is developing stabilized chromogenic reagent systems
          with commercial production in mind. The manufacturing direction is intended
          to support repeatable batch quality, scalable output, and practical supply
          for automated water-analysis applications.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          This is important because a useful reagent platform must work not only in
          analytical testing, but also in production, packaging, distribution, and
          long-term field deployment.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Built for scale"
          desc="The manufacturing direction is intended to support scale-up from early production to larger commercial supply."
        />
        <Card
          title="Built for consistency"
          desc="The platform is being developed with repeatable batch performance and practical production reliability in mind."
        />
        <Card
          title="Built for supply"
          desc="The long-term objective is a reagent platform that can support real-world commercial distribution and instrument deployment."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Why this matters"
          desc="For instrument companies and commercial partners, chemistry alone is not enough. A reagent platform must also be manufacturable, stable in supply, and suitable for deployment beyond the laboratory."
        />
        <Card
          title="Commercial relevance"
          desc="The manufacturing strategy is aligned with the practical requirements of OEM integration, scale-up, and long-term product support."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Repeatable production"
          desc="The platform is being developed with emphasis on reproducibility across production batches."
        />
        <Card
          title="Operational practicality"
          desc="Manufacturing considerations are tied directly to packaging, handling, and field usability."
        />
        <Card
          title="Future-ready supply"
          desc="The goal is a production path that can support broader market deployment as the platform advances."
        />
      </section>
    </div>
  );
}