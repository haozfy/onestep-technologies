import { Badge, Card, PrimaryLink } from "../../components/ui";

export default function ResourcesPage() {
  return (
    <div className="space-y-12 bg-white text-zinc-900">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Resources</Badge>
          <Badge>White Paper</Badge>
          <Badge>Preprints</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
          Technical resources
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          Public materials related to OneStep Technologies’ technical direction in
          online free chlorine monitoring, including a technical white paper and
          selected preprints.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-1">
        <Card
          title="Technical White Paper"
          desc="Beyond DPD: A Reaction-Kinetics Architecture for Next-Generation Online Chlorine Monitoring"
        >
          <p className="text-sm leading-6 text-zinc-600">
            Overview of the technical direction, including kinetics-based detection,
            stabilized reagent platforms, and relevance to automated water monitoring systems.
          </p>

          <div className="mt-4">
            <PrimaryLink href="/files/onestep-white-paper.pdf">
              View White Paper
            </PrimaryLink>
          </div>
        </Card>

        <Card
          title="Preprint"
          desc="A Reaction-kinetic online determination of free chlorine using a stabilized TMB-derived chromogenic system"
        >
          <p className="text-sm leading-6 text-zinc-600">
            Public preprint covering the analytical approach, validation, and online
            application of the reaction-kinetic chlorine-monitoring method.
          </p>

          <div className="mt-4">
            <PrimaryLink href="/files/reaction-kinetic-online-determination.pdf">
              View Preprint
            </PrimaryLink>
          </div>
        </Card>

        <Card
          title="Preprint"
          desc="A stabilized TMB-based kinetic method for low-range online free chlorine monitoring in treated water"
        >
          <p className="text-sm leading-6 text-zinc-600">
            Public preprint focused on the stabilized TMB platform, prototype
            implementation, and low-range treated-water operation.
          </p>

          <div className="mt-4">
            <PrimaryLink href="/files/stabilized-TMB-kinetic-method.pdf">
              View Preprint
            </PrimaryLink>
          </div>
        </Card>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="text-lg font-medium text-zinc-950">
          Additional materials
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
          For requests related to technical summaries, instrument integration discussions,
          or partnership inquiries, please contact{" "}
          <a href="mailto:contact@onestep-technologies.com" className="underline">
            contact@onestep-technologies.com
          </a>.
        </p>
      </section>
    </div>
  );
}