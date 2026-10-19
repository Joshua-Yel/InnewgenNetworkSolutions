import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/site";
import { services } from "@/components/site/data";
import { createPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    createPageSeo({
      title: "Web, Software & AI Development Services | Innewgen",
      description:
        "Explore Innewgen's web development, custom business systems, AI software, mobile apps, full-stack development, and QA services.",
      path: "/services",
    }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 font-mono text-sm text-primary">[ S ]</div>

          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-muted-foreground">Services</p>

          <h1 className="max-w-5xl font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Expert development,
            <br />
            <span className="text-primary">zero fluff.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We specialize in expert-driven software designed to elevate your business with
            innovation and efficiency. Pick one discipline or let us run the whole build.
          </p>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          {services.map((s, i) => (
            <article
              id={s.slug}
              key={s.slug}
              className="group sticky grid scroll-mt-28 gap-8 border-t border-border bg-background py-14 md:grid-cols-[0.6fr_1.4fr_1fr] md:py-20"
              style={{ top: `${80 + i * 14}px` }}
            >
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 rotate-45 place-items-center border-2 border-primary transition-transform duration-700 group-hover:rotate-[225deg]">
                  <span className="-rotate-45 font-mono text-sm text-primary">{s.n}</span>
                </span>
              </div>

              <div>
                <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
                  {s.title}
                </h2>

                <p className="mt-5 max-w-lg text-lg text-muted-foreground">{s.line}</p>
              </div>

              <ul className="flex flex-wrap content-start gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    {t}
                  </li>
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
