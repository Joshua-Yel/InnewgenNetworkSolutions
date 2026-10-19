import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { CtaBand, PageHero } from "@/components/site/site";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Innewgen" },
      { name: "description", content: "Web development, custom systems, AI software, full-stack builds, mobile apps and software testing by Innewgen." },
      { property: "og:title", content: "Services — Innewgen" },
      { property: "og:description", content: "Six disciplines, one accountable team: web, systems, AI, full-stack, mobile and QA." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        index="[ S ]"
        eyebrow="Services"
        lines={["Expert development,", <span className="text-primary">zero fluff.</span>]}
        intro="We specialize in expert-driven software designed to elevate your business with innovation and efficiency. Pick one discipline or let us run the whole build."
      />
      <section className="px-5 pb-12 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          {services.map((s, i) => (
            <article
              id={s.slug}
              key={s.slug}
              className="group sticky grid scroll-mt-28 gap-8 border-t border-border bg-background py-14 md:grid-cols-[0.6fr_1.4fr_1fr] md:py-20"
              style={{ top: `${80 + i * 14}px` }}
            >
              <div className="reveal flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 rotate-45 place-items-center border-2 border-primary transition-transform duration-700 group-hover:rotate-[225deg]">
                  <span className="-rotate-45 font-mono text-sm text-primary">{s.n}</span>
                </span>
              </div>
              <div className="reveal" style={{ "--d": "100ms" } as CSSProperties}>
                <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{s.title}</h2>
                <p className="mt-5 max-w-lg text-lg text-muted-foreground">{s.line}</p>
              </div>
              <ul className="reveal flex flex-wrap content-start gap-2" style={{ "--d": "200ms" } as CSSProperties}>
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary">{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
