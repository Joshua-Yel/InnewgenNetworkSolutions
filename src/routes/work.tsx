import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/site/site";
import { projects } from "@/components/site/data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Innewgen" },
      { name: "description", content: "Selected Innewgen projects: RCAM, Manila Cathedral PSMS, Heera Glow, Boxed Blossoms, PortfolioHub and Aura 300." },
      { property: "og:title", content: "Selected work — Innewgen" },
      { property: "og:description", content: "Transformative software that drives real business results." },
    ],
  }),
  component: Work,
});

const filters = ["All", "Web", "System", "E-commerce", "AI · Frontend"];

function Work() {
  const [f, setF] = useState("All");
  const [hover, setHover] = useState<number | null>(null);
  const list = projects.filter((p) => f === "All" || p.kind === f);
  return (
    <>
      <PageHero
        index="[ W ]"
        eyebrow="Our work"
        lines={["Turning concepts", <>into <span className="text-primary">results.</span></>]}
        intro="Transformative solutions that drive real business impact — for archdioceses, luxury brands, startups and AI ventures."
      />
      <section className="px-5 pb-16 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {filters.map((x) => (
              <button
                key={x}
                role="tab"
                aria-selected={f === x}
                onClick={() => setF(x)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${f === x ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`}
              >
                {x}
              </button>
            ))}
          </div>
          <ul onMouseLeave={() => setHover(null)}>
            {list.map((p, i) => {
              const Row = p.url ? "a" : "div";
              return (
                <li key={p.name} className="step-in" style={{ animationDelay: `${i * 60}ms` } as CSSProperties}>
                  <Row
                    {...(p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {})}
                    onMouseEnter={() => setHover(i)}
                    className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-border py-8 md:grid-cols-[3rem_minmax(0,1.3fr)_minmax(0,1fr)_10rem_auto] md:py-10"
                    style={{ opacity: hover === null || hover === i ? 1 : 0.3, transition: "opacity .4s" }}
                  >
                    <span className="eyebrow hidden text-muted-foreground md:block">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <p className="eyebrow text-primary">{p.kind}</p>
                      <h2 className="mt-2 truncate font-display text-3xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-6xl">{p.name}</h2>
                    </div>
                    <p className="hidden text-muted-foreground md:block">{p.desc}</p>
                    <div className="hidden text-right md:block">
                      <p className="font-display text-4xl font-bold">{p.metric}</p>
                      <p className="text-xs text-muted-foreground">{p.metricLabel}</p>
                    </div>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </Row>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
