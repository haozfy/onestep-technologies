import { Badge, Card, PrimaryLink } from "../components/ui";

const patentGroups = [
  {
    title: "Reagent Chemistry",
    desc: "Stabilized chromogenic reagent architecture designed for longer usability, field practicality, and repeatable deployment.",
    items: ["Stabilized Chromogenic Reagent Architecture"],
  },
  {
    title: "Detection & System Architecture",
    desc: "Kinetics-based optical detection logic and integrated analytical system design for automated online water monitoring.",
    items: [
      "Kinetics-Based Optical Detection Architecture for Automated Water Monitoring",
      "Integrated Chromogenic Analytical System Architecture with Flow-Cell Optical Detection",
    ],
  },
  {
    title: "Manufacturing & Deployment",
    desc: "Platform coverage extending from reagent deployment workflows to scalable industrial manufacturing.",
    items: [
      "Chromogenic Reagent Systems for Continuous Automated Water Quality Monitoring",
      "Industrial-Scale Non-Aqueous Chromogenic Reagent Manufacturing Platform",
    ],
  },
];

const evidencePoints = [
  {
    title: "Reagent stability",
    desc: "Up to 24 months at room temperature",
  },
  {
    title: "Maintenance model",
    desc: "Designed to reduce reagent replacement and operator attention",
  },
  {
    title: "Product direction",
    desc: "Online free-chlorine monitor for pilot partners",
  },
];

export default function Home() {
  return (
    <div className="space-y-14 bg-white text-zinc-900">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Online Free Chlorine</Badge>
            <Badge>24-Month Reagent Stability</Badge>
            <Badge>Low-Maintenance Monitoring</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Low-maintenance online free-chlorine monitoring powered by stabilized reagent chemistry
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
            OneStep Technologies is developing online free-chlorine monitors for
            water systems that need continuous residual-chlorine data but cannot
            support frequent reagent replacement, probe maintenance, or manual
            testing.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
            Our core technology is a stabilized single-reagent optical chemistry
            for free-chlorine monitoring with up to 24-month room-temperature
            stability, protected by U.S. patent rights. The platform is designed
            to reduce the maintenance burden of reagent-based online chlorine
            monitoring and support practical deployment in real water-system
            workflows.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
            As water systems become more distributed, remote, reused, and
            automated, operators need chlorine data that is not only accurate,
            but continuous, maintainable, and trustworthy.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryLink href="/chlorine-monitor">Pilot Product</PrimaryLink>
            <PrimaryLink href="/platform">Technology Overview</PrimaryLink>
            <PrimaryLink href="/resources">Resources</PrimaryLink>
          </div>

          <p className="mt-4 text-xs leading-6 text-zinc-500">
            This site provides a high-level overview of the product direction,
            technical platform, and intellectual property portfolio.
          </p>
        </div>

        <div className="md:col-span-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-950">
              Pilot product direction
            </h3>
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Built for water systems where continuous chlorine data is valuable,
              but frequent maintenance is difficult.
            </p>

            <div className="mt-4 space-y-2 text-sm text-zinc-700">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span>Core chemistry</span>
                <span className="text-zinc-500">Developed</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span>Reagent stability</span>
                <span className="text-zinc-500">Up to 24 months</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span>Maintenance burden</span>
                <span className="text-zinc-500">Reduced</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pilot partners</span>
                <span className="text-zinc-500">Open</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {evidencePoints.map((point) => (
          <div
            key={point.title}
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
          >
            <div className="text-sm font-medium text-zinc-900">
              {point.title}
            </div>
            <div className="mt-1 text-sm leading-6 text-zinc-600">
              {point.desc}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="What problem we address"
          desc="Free chlorine is one of the most important operational signals in water systems, but many small, remote, reuse, and distributed sites still rely on manual testing or maintenance-heavy online analyzers."
        />
        <Card
          title="Why our chemistry is different"
          desc="Our approach starts at the chemistry layer: stabilized single-reagent optical free-chlorine chemistry designed for longer reagent life and lower operator burden."
        />
        <Card
          title="Why now"
          desc="Remote operations, water reuse, distributed treatment, and AI-assisted water management all require reliable real-time field data, not occasional manual readings."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="What we are building"
          desc="We are building a low-maintenance online free-chlorine monitor that combines stabilized reagent chemistry, controlled sample handling, optical readout, and digital data output."
        />
        <Card
          title="Current status"
          desc="The core stabilized reagent chemistry has been developed. We are now integrating it into a field-testable monitor for side-by-side comparison with standard DPD comparator measurements in real water-system workflows."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-1">
        <Card
          title="Designed for trustworthy chlorine data"
          desc="The goal is not simply to produce another chlorine number. The goal is to create a continuous, low-maintenance chlorine data stream that operators, alarms, and future automated water-management systems can trust."
        />
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
            Intended applications
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
            The first use cases are water systems where continuous free-chlorine
            data is valuable, but frequent reagent replacement, probe
            maintenance, or manual spot checks are operationally difficult.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Remote and small systems"
            desc="For drinking-water systems and distributed sites where operator visits may be limited."
          />
          <Card
            title="Reuse and building water"
            desc="For decentralized treatment, building-scale reuse, and systems that need continuous verification."
          />
          <Card
            title="OEM and instrumentation partners"
            desc="For partners interested in a stabilized chlorine-sensing chemistry layer or low-maintenance monitoring module."
          />
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
            Patent Portfolio
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
            Our intellectual property portfolio spans reagent chemistry,
            detection logic, analytical system integration, deployment workflows,
            and industrial-scale manufacturing. Together, these filings reflect a
            platform-level approach to practical automated water monitoring.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {patentGroups.map((group) => (
            <Card key={group.title} title={group.title} desc={group.desc}>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-700">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-zinc-200 pt-2 first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Pilot partners
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          We are looking for pilot partners interested in testing
          low-maintenance online free-chlorine monitoring for remote, reuse,
          distributed, building-scale, or maintenance-constrained water systems.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <PrimaryLink href="/chlorine-monitor">View Pilot Product</PrimaryLink>
          <PrimaryLink href="mailto:zhang@onestep-technologies.com">
            Contact: zhang@onestep-technologies.com
          </PrimaryLink>
        </div>
      </section>
    </div>
  );
}