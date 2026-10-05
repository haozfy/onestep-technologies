import { Badge, Card, PrimaryLink } from "../../components/ui";

export default function ResourcesPage() {
  return (
    <div className="space-y-12 bg-white text-zinc-900">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Resources</Badge>
          <Badge>Publications</Badge>
          <Badge>Peer Reviewed</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
          Publications & technical resources
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          Peer-reviewed publications and selected technical materials related to
          OneStep Technologies’ work in free chlorine monitoring, reagent
          chemistry, optical measurement, and automated water analysis.
        </p>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
            Peer-reviewed publications
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          <Card
            title="Environmental Monitoring and Assessment · Research Article"
            desc="A stabilized single-reagent TMB method for free chlorine monitoring in drinking-water-related matrices"
          >
            <p className="text-sm leading-6 text-zinc-600">
              A stabilized single-reagent TMB method was evaluated across
              drinking-water-related matrices, showing close agreement with
              routine DPD measurements and supporting a simpler approach to
              online free chlorine monitoring.
            </p>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Hao Zhang · 2026
              <br />
              Volume 198, Article 1142
              <br />
              DOI: 10.1007/s10661-026-15979-7
            </p>

            <div className="mt-4">
              <PrimaryLink href="https://doi.org/10.1007/s10661-026-15979-7">
                View Publication
              </PrimaryLink>
            </div>
          </Card>

          <Card
            title="Next Research · Short Communication"
            desc="Fixed-time readout selection from TMB reaction profiles for free chlorine"
          >
            <p className="text-sm leading-6 text-zinc-600">
              Time-resolved TMB reaction profiles were used to examine how a
              single-reagent system can support a simpler measurement approach
              for free chlorine monitoring.
            </p>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Hao Zhang · 2026
              <br />
              DOI: 10.1016/j.nexres.2026.102504
            </p>
          </Card>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="text-lg font-medium text-zinc-950">
          Additional materials
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
          Additional peer-reviewed publications and technical materials will be
          added as they become available.
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
          For technical discussions, instrument integration, or partnership
          inquiries, please contact{" "}
          <a
            href="mailto:contact@onestep-technologies.com"
            className="underline"
          >
            contact@onestep-technologies.com
          </a>.
        </p>
      </section>
    </div>
  );
}