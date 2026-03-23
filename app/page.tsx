import { Badge, Card, PrimaryLink } from "../components/ui";

const patentGroups = [
  {
    title: "Reagent Chemistry",
    desc: "Stabilized chromogenic reagent architecture designed for longer usability, field practicality, and repeatable deployment.",
    items: [
      "Stabilized Chromogenic Reagent Architecture",
    ],
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

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Online Water Monitoring</Badge>
            <Badge>Stabilized Reagent Platform</Badge>
            <Badge>Reaction-Kinetic Detection</Badge>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
            Stabilized reagent systems for practical online free chlorine monitoring
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            OneStep Technologies develops stabilized chromogenic reagent platforms for
            automated water analysis, with a current focus on online free chlorine
            monitoring. Our technology is designed to improve reagent stability,
            simplify operation, and support integration into instrument-based monitoring systems.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
            The platform combines stabilized single-reagent chemistry with
            reaction-kinetic optical detection, creating a more practical route for
            continuous chlorine monitoring in real-world operating environments.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryLink href="/platform">Technology Overview</PrimaryLink>
            <PrimaryLink href="/manufacturing">Manufacturing Model</PrimaryLink>
            <PrimaryLink href="/contact">Request Technical Summary</PrimaryLink>
          </div>

          <p className="mt-4 text-xs leading-6 text-zinc-500">
            This site provides a high-level overview of the platform, application direction,
            and intellectual property portfolio. Additional technical materials may be shared
            in qualified discussions.
          </p>
        </div>

        <div className="md:col-span-4">
          <Card
            title="Why it matters"
            desc="Built for practical deployment in automated chlorine-monitoring systems."
          >
            <div className="mt-3 space-y-2 text-sm text-zinc-300">
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Reagent workflow</span>
                <span className="text-zinc-400">Simplified</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Reagent stability</span>
                <span className="text-zinc-400">Improved</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <span>Continuous operation</span>
                <span className="text-zinc-400">More practical</span>
              </div>
              <div className="flex items-center justify-between">
                <span>System integration</span>
                <span className="text-zinc-400">Instrument-ready</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="What problem we address"
          desc="Conventional online chlorine workflows can involve multiple reagents, limited stability, and higher maintenance demands during continuous operation. We are developing a more deployment-oriented reagent architecture for automated monitoring."
        />
        <Card
          title="Why our reagent platform is different"
          desc="Our stabilized chromogenic system is designed around single-reagent practicality, reaction-kinetic detection, manufacturing transferability, and compatibility with integrated monitoring systems."
        />
        <Card
          title="Who this is for"
          desc="Relevant to instrument companies, water-analysis teams, OEM partners, and organizations evaluating new reagent-integrated approaches to online chlorine monitoring."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="What we do"
          desc="We develop stabilized reagent concentrates and workflow architectures for analytical systems used in water monitoring, especially where repeatable manufacturing, operational simplicity, and long-term usability matter."
        />
        <Card
          title="Current focus"
          desc="Our current technical focus is next-generation online free chlorine monitoring using stabilized TMB-derived chromogenic chemistry and kinetics-based optical detection logic."
        />
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
            Patent Portfolio
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-300">
            Our intellectual property portfolio spans reagent chemistry, detection logic,
            analytical system integration, deployment workflows, and industrial-scale manufacturing.
            Together, these filings reflect a platform-level approach to practical automated water monitoring.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {patentGroups.map((group) => (
            <Card key={group.title} title={group.title} desc={group.desc}>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
                {group.items.map((item) => (
                  <li key={item} className="border-t border-zinc-800/70 pt-2 first:border-t-0 first:pt-0">
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