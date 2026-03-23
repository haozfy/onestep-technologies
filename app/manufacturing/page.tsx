import { Badge, Card } from "../../components/ui";

export default function ManufacturingPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Manufacturing Model</Badge>
          <Badge>Scalable Supply</Badge>
          <Badge>Controlled Technology Transfer</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
          Manufacturing model for scalable and controlled reagent production
        </h1>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
          OneStep Technologies is developing a manufacturing structure designed to support
          repeatable production of stabilized chromogenic reagent systems for water-analysis
          applications. The model combines centralized control of core chemistry and process
          know-how with execution by qualified manufacturing partners where appropriate.
        </p>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
          This approach is intended to preserve control over key technology elements while
          enabling practical scale-up, regional supply flexibility, and smoother transfer
          into OEM, CDMO, or future commercial production environments.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Core technology control"
          desc="Key reagent chemistry, process logic, and critical know-how remain under OneStep control to protect consistency and intellectual property."
        />
        <Card
          title="Qualified partner execution"
          desc="Selected downstream manufacturing steps can be carried out by qualified partners using defined operating windows and transfer frameworks."
        />
        <Card
          title="Scalable production path"
          desc="The model is designed to support scale-up from early production to larger commercial supply without losing process discipline."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Why this matters"
          desc="For instrument companies and commercial partners, a workable manufacturing path is as important as the chemistry itself. A reagent platform must be stable not only in use, but also in production, transfer, and supply."
        />
        <Card
          title="Designed for transferability"
          desc="The manufacturing concept is built around reproducibility, controlled inputs, and practical handoff to qualified production environments, supporting long-term deployment rather than laboratory-only success."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Process consistency"
          desc="Defined control points are intended to support reproducible batch outcomes across qualified production settings."
        />
        <Card
          title="Regional flexibility"
          desc="A partner-enabled structure can support future multi-region manufacturing and supply strategies."
        />
        <Card
          title="IP-conscious scale-up"
          desc="The manufacturing model is designed to balance protection of core know-how with practical commercial execution."
        />
      </section>

      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6">
        <h2 className="text-lg font-medium text-zinc-100">
          Additional technical materials
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
          Public information on this page is limited to high-level manufacturing structure
          and scale-up philosophy. More detailed manufacturing documentation, process
          frameworks, and quality materials may be shared in qualified discussions.
        </p>
      </section>
    </div>
  );
}