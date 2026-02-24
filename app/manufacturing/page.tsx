import { Badge, Card, Muted } from "@/components/ui";

export default function ManufacturingPage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Manufacturing</Badge>
          <Badge>Replaceable partners</Badge>
          <Badge>Control points</Badge>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Manufacturing model
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-300">
          A controlled model designed to preserve IP ownership while enabling scalable manufacturing with qualified partners.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="IP retained"
          desc="Core know-how and process package retained by OneStep (Canada)."
        />
        <Card
          title="Fill/finish via partners"
          desc="Qualified CDMO/OEM partners are operationally useful and structurally replaceable."
        />
        <Card
          title="Controlled inputs"
          desc="Key inputs, process windows, and QC gates are defined and controlled."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <Muted>
          Equipment or partner-specific assets are not shown here unless ownership and usage rights are contractually clear.
          NDA-first workflow applies for any detailed documentation.
        </Muted>
      </section>
    </div>
  );
}