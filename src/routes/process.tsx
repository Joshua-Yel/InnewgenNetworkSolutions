import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, useScrollProgress } from "@/components/site/site";
import { createPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    createPageSeo({
      title: "Our Software Development Process | Innewgen",
      description:
        "Explore Innewgen's five-step software process: discovery, solution design, development, testing, launch, and ongoing support.",
      path: "/process",
    }),
  component: Process,
});

const steps = [
  {
    t: "Discover",
    d: "We map how your business actually runs — the people, the bottlenecks, the workarounds. Free strategy call included.",
    out: "Problem brief",
  },
  {
    t: "Design the logic",
    d: "Before a single line of code: flows, data, and screens that solve the real problem. You approve every decision.",
    out: "Blueprint + prototype",
  },
  {
    t: "Build",
    d: "Weekly releases you can click through. No black boxes, no surprise invoices.",
    out: "Working software",
  },
  {
    t: "Test & launch",
    d: "QA, security and performance checks, then a calm, planned go-live.",
    out: "Production launch",
  },
  {
    t: "Support & grow",
    d: "24/7 support and a long-term partner who already knows your system.",
    out: "Ongoing roadmap",
  },
];

function Process() {
  const [ref, p] = useScrollProgress<HTMLDivElement>();
  const fill = Math.min(1, Math.max(0, (p - 0.15) / 0.65));
  return (
    <>
      <PageHero
        index="[ P ]"
        eyebrow="Process"
        lines={["Logic before", <span className="text-primary">code.</span>]}
        intro="A clear, five-stage path from your first message to a system that runs itself. You always know what's happening and what's next."
      />
      <section className="px-5 pb-16 md:px-10">
        <div ref={ref} className="relative mx-auto max-w-[1100px]">
          <div
            className="absolute bottom-0 left-[1.4rem] top-0 w-px bg-border md:left-1/2"
            aria-hidden
          >
            <div
              className="h-full w-full origin-top bg-signal"
              style={{ transform: `scaleY(${fill})` }}
            />
          </div>
          {steps.map((s, i) => (
            <div
              key={s.t}
              className={`relative grid gap-6 py-14 pl-16 md:grid-cols-2 md:pl-0 ${i % 2 ? "" : ""}`}
            >
              <span
                className="absolute left-[1.4rem] top-16 h-5 w-5 -translate-x-1/2 rotate-45 border-2 border-signal bg-background transition-colors duration-500 md:left-1/2"
                style={{ background: fill > i / steps.length ? "var(--signal)" : undefined }}
                aria-hidden
              />
              <div
                className={`reveal ${i % 2 ? "md:col-start-2 md:pl-16" : "md:pr-16 md:text-right"}`}
              >
                <p className="eyebrow text-primary">Stage 0{i + 1}</p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
                  {s.t}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">{s.d}</p>
                <p className="eyebrow mt-6 inline-block rounded-full border border-border px-3 py-1.5">
                  → {s.out}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
