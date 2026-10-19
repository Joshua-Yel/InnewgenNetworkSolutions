import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { CtaBand, Logo, Marquee, PageHero, useScrollProgress } from "@/components/site/site";
import { stack } from "@/components/site/data";
import { createPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    createPageSeo({
      title: "About Innewgen | Manila Software Studio",
      description:
        "Meet Innewgen, a Manila software studio building practical digital products with clarity, craft, and long-term support.",
      path: "/about",
    }),
  component: About,
});

const values = [
  { k: "Clarity", v: "Plain language, honest timelines, no jargon walls." },
  { k: "Craft", v: "Clean code and careful interfaces — details are the product." },
  { k: "Ownership", v: "One team from idea to deployment, and long after." },
  { k: "Momentum", v: "Weekly progress you can see and click." },
];

function About() {
  const [ref, p] = useScrollProgress<HTMLElement>();
  return (
    <>
      <PageHero
        index="[ A ]"
        eyebrow="About"
        lines={["Innovation for a", <span className="text-primary">new generation.</span>]}
        intro="Innewgen — in·new·gen. We're a Manila-based software team for founders and organisations who want technology that simply works."
      />
      <section ref={ref} className="overflow-hidden px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-square">
            <div
              className="absolute inset-[6%] rotate-45 border border-border"
              style={{ transform: `rotate(${45 + p * 60}deg)` }}
            />
            <div
              className="absolute inset-[18%] rotate-45 bg-muted"
              style={{ transform: `rotate(${45 - p * 40}deg)` }}
            />
            <Logo className="absolute inset-[28%] h-[44%] w-[44%]" />
          </div>
          <div>
            <p className="eyebrow text-primary">The mark</p>
            <h2 className="display-lg mt-5 text-5xl md:text-7xl">
              Brackets around an <span className="text-primary">i</span>.
            </h2>
            <p className="reveal mt-6 text-lg text-muted-foreground">
              Our logo is two code brackets holding a single “i” — the individual, the idea, the
              innovation. Everything we build sits inside that frame: engineering discipline wrapped
              around a human need.
            </p>
            <p
              className="reveal mt-4 text-lg text-muted-foreground"
              style={{ "--d": "120ms" } as CSSProperties}
            >
              Red for signal and decisiveness. A diamond because good software has structure from
              every angle.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border md:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.k}
              className="reveal group bg-background p-8 transition-colors duration-500 hover:bg-signal hover:text-primary-foreground md:p-10"
              style={{ "--d": `${i * 90}ms` } as CSSProperties}
            >
              <span className="font-mono text-sm opacity-60">0{i + 1}</span>
              <h3 className="mt-16 font-display text-3xl font-bold">{v.k}</h3>
              <p className="mt-3 text-muted-foreground group-hover:text-primary-foreground/80">
                {v.v}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16">
        <p className="eyebrow mb-8 px-5 text-center text-muted-foreground md:px-10">
          Our technology stack
        </p>
        <div className="font-display text-4xl font-bold md:text-6xl">
          <Marquee items={stack} speed={45} />
        </div>
        <div className="mt-4 font-display text-4xl font-bold text-muted-foreground md:text-6xl [&_.marquee]:[animation-direction:reverse]">
          <Marquee items={[...stack].reverse()} speed={50} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
