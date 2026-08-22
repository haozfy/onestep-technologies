import { Badge, Card, PrimaryLink } from "../components/ui";

const patentGroups = [
  {
    title: "Reagent Chemistry",
    desc: "Stabilized chromogenic reagent architecture designed for extended usability, field practicality, and repeatable deployment.",
    items: ["Stabilized Chromogenic Reagent Architecture"],
  },
  {
    title: "Detection & System Architecture",
    desc: "Predefined-time single-read optical detection and integrated analytical system design for automated online water monitoring.",
    items: [
      "Time-Gated Single-Read Optical Detection Architecture for Automated Water Monitoring",
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
    desc: "Up to 24 months under sealed storage conditions",
  },
  {
    title: "Operational benefit",
    desc: "Designed to reduce routine maintenance workload",
  },
  {
    title: "Technical materials",
    desc: "White paper and public preprints available",
  },
];

const infrastructureSteps = [
  {
    number: "01",
    title: "Analytical chemistry",
    desc: "Stable chromogenic chemistry for repeatable free chlorine measurement.",
  },
  {
    number: "02",
    title: "Field deployment",
    desc: "Simplified reagent handling and measurement architecture designed for automated operation.",
  },
  {
    number: "03",
    title: "Reliable data",
    desc: "A practical path toward continuous, machine-readable chlorine data with lower routine burden.",
  },
  {
    number: "04",
    title: "Operational use",
    desc: "Designed to support integration with alarms, dosing control, remote monitoring, and digital water systems.",
  },
];

export default function Home() {
  return (
    <div className="space-y-14 bg-white text-zinc-900">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Water Data Infrastructure</Badge>
            <Badge>Online Water Monitoring</Badge>
            <Badge>Stabilized Reagent Platform</Badge>
            <Badge>Time-Gated Single-Read Detection</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Time-gated single-read sensing for low-maintenance online free
            chlorine monitoring
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
            OneStep Technologies develops stabilized chromogenic reagent
            platforms for automated water analysis, with a current focus on
            online free chlorine monitoring. Our technology is designed to
            improve reagent stability, simplify operation, reduce maintenance
            burden, and support integration into OEM and instrument-based
            monitoring systems.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
            The platform combines stabilized single-reagent chemistry with
            time-gated single-read optical detection. A predefined measurement
            time enables routine quantitation from one absorbance reading per
            analytical cycle, without slope fitting, derivative calculations,
            or regression-window selection.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
            Together with reagent stability of up to 24 months under sealed
            storage conditions, this measurement architecture is designed to
            reduce routine maintenance workload and create a practical route
            for online chlorine monitoring in real-world operating
            environments — supporting reliable, machine-readable water data
            for operational use.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryLink href="/platform">
              Technology Overview
            </PrimaryLink>

            <PrimaryLink href="/manufacturing">
              Manufacturing Model
            </PrimaryLink>

            <PrimaryLink href="/resources">Resources</PrimaryLink>
          </div>

          <p className="mt-4 text-xs leading-6 text-zinc-500">
            This site provides a high-level overview of the platform,
            application direction, technical evidence, and intellectual
            property portfolio.
          </p>
        </div>

        <div className="md:col-span-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-950">
              Why it matters
            </h3>

            <p className="mt-1 text-sm leading-6 text-zinc-600">
              Designed for practical deployment in automated
              chlorine-monitoring systems.
            </p>

            <div className="mt-4 space-y-2 text-sm text-zinc-700">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span>Measurement mode</span>
                <span className="text-zinc-500">Single read</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span>Reagent workflow</span>
                <span className="text-zinc-500">Simplified</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span>Maintenance workload</span>
                <span className="text-zinc-500">Designed to be reduced</span>
              </div>

              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <span>Reagent stability</span>
                <span className="text-zinc-500">Up to 24 months</span>
              </div>

              <div className="flex items-center justify-between">
                <span>System integration</span>
                <span className="text-zinc-500">
                  Designed for instruments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Data Infrastructure positioning */}
      <section className="overflow-hidden rounded-3xl bg-zinc-950 px-6 py-8 text-white md:px-10 md:py-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Water Data Infrastructure
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            From chlorine measurement to decision-ready water data
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            Reliable online monitoring requires more than an accurate chlorine
            number. It requires an analytical system that can remain practical
            in the field and generate data that instruments, operators, and
            digital systems can use with confidence.
          </p>

          <p className="mt-3 text-base leading-7 text-zinc-300">
            OneStep is developing the measurement layer that connects
            stabilized chemistry with reliable operational data — helping turn
            online free chlorine monitoring into part of the broader water data
            infrastructure.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {infrastructureSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <div className="text-xs font-medium text-zinc-500">
                {step.number}
              </div>

              <div className="mt-2 text-base font-semibold text-white">
                {step.title}
              </div>

              <div className="mt-2 text-sm leading-6 text-zinc-400">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 border-t border-zinc-800 pt-5">
          <p className="text-sm leading-6 text-zinc-400">
            Stable measurement → practical deployment → reliable data →
            operational decision support
          </p>
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

            <div className="mt-1 text-sm text-zinc-600">{point.desc}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="What problem we address"
          desc="Conventional online chlorine workflows can involve multiple reagents, limited reagent stability, and substantial maintenance requirements during routine operation. We are developing a more practical platform for automated monitoring."
        />

        <Card
          title="Why our reagent platform is different"
          desc="Our stabilized chromogenic system combines single-reagent practicality, predefined-time single-read detection, extended reagent life, and compatibility with integrated monitoring instruments."
        />

        <Card
          title="Who this is for"
          desc="Relevant to instrument companies, water-analysis teams, OEM partners, and organizations evaluating new reagent-integrated approaches to online chlorine monitoring."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="What we do"
          desc="We develop stabilized reagent concentrates and measurement-workflow architectures for analytical systems used in water monitoring, especially where repeatable manufacturing, operational simplicity, and long-term usability matter."
        />

        <Card
          title="Current focus"
          desc="Our current technical focus is next-generation online free chlorine monitoring using stabilized TMB-derived chromogenic chemistry and time-gated single-read optical detection."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-1">
        <Card
          title="Why this matters for OEM partners"
          desc="The platform is being developed to support lower-maintenance reagent workflows, extended reagent life, simplified signal processing, reliable machine-readable data, and practical integration into automated water-monitoring instruments and digital systems."
        />
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
            Patent Portfolio
          </h2>

          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
            Our intellectual property portfolio spans reagent chemistry,
            predefined-time optical detection, analytical system integration,
            deployment workflows, and industrial-scale manufacturing. Together,
            these filings reflect a platform-level approach to practical
            automated water monitoring.
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
    </div>
  );
}