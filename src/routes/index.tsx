import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { CtaBand, Logo, MaskText, Marquee, useScrollProgress } from "@/components/site/site";
import { projects, services, stack } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innewgen — Software that actually works for your business" },
      { name: "description", content: "Manila software studio building websites, systems, AI and mobile apps. Trusted by RCAM, Manila Cathedral parishes, Heera Glow and more." },
      { property: "og:title", content: "Innewgen — Software that actually works" },
      { property: "og:description", content: "Websites, systems, AI and mobile apps built around how your business really runs." },
    ],
  }),
  component: Home,
});

const words = ["systems", "websites", "AI tools", "mobile apps"];

function Hero() {
  const [w, setW] = useState(0);
  const [m, setM] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const t = setInterval(() => setW((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);
  const [ref, p] = useScrollProgress<HTMLElement>();
  return (
    <section
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setM({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
      }}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-10 pt-32 md:px-10"
    >
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden />
      {/* the logo, exploded: brackets + i, reacting to the pointer and scroll */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[8%] h-[70vmin] w-[70vmin] md:right-[4%]"
        style={{ transform: `translate(${m.x * -30}px, ${m.y * -30 + p * 200}px) rotate(${p * 90}deg)` }}
        aria-hidden
      >
        <div className="absolute inset-[12%] rotate-45 border border-border" />
        <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-border" />
        <Logo className="absolute inset-[22%] h-[56%] w-[56%] opacity-95 transition-transform duration-300" />
        <span className="float-diamond absolute left-[8%] top-[18%] h-5 w-5 rotate-45 bg-volt" />
        <span className="float-diamond absolute bottom-[12%] right-[20%] h-3 w-3 rotate-45 bg-foreground [animation-delay:-2s]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="reveal mb-8 flex flex-wrap items-center gap-3">
          <span className="eyebrow rounded-full border border-border bg-background/70 px-3 py-1.5 backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 rotate-45 bg-signal" />Software Solutions · Manila
          </span>
          <span className="eyebrow text-muted-foreground">Est. for builders</span>
        </div>
        <h1 className="display-xl">
          <MaskText
            lines={[
              <>We build</>,
              <span className="relative inline-flex items-baseline">
                <span className="text-primary">&lt;</span>
                <span key={w} className="step-in inline-block text-secondary">{words[w]}</span>
                <span className="text-primary">/&gt;</span>
              </span>,
              <>that work.</>,
            ]}
          />
        </h1>
        <div className="mt-12 grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <p className="reveal max-w-md text-lg text-muted-foreground" style={{ "--d": "400ms" } as CSSProperties}>
            Not templates. Not guesswork. Software engineered around how your business actually runs — and built to keep up as it grows.
          </p>
          <div className="reveal flex flex-wrap gap-3" style={{ "--d": "550ms" } as CSSProperties}>
            <Link to="/contact" className="btn-signal">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/work" className="btn-ghost">See the work</Link>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-border pt-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><ArrowDown className="h-4 w-4 animate-bounce" /> Scroll</span>
          <span className="eyebrow hidden sm:inline">Web · Systems · AI · Mobile · QA</span>
        </div>
      </div>
    </section>
  );
}

/* words light up one by one as you scroll through */
function Statement() {
  const [ref, p] = useScrollProgress<HTMLElement>();
  const text = "Most businesses don’t need more software. They need the right software — built once, built well, and built around the way they already work.";
  const parts = text.split(" ");
  const lit = Math.floor(Math.min(1, Math.max(0, (p - 0.2) / 0.45)) * parts.length);
  return (
    <section ref={ref} className="px-5 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow mb-10 text-primary">[ 01 ] — Our belief</p>
        <p className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {parts.map((w, i) => (
            <span key={i} className="transition-colors duration-300" style={{ color: i < lit ? "var(--foreground)" : "color-mix(in oklab, var(--foreground) 15%, transparent)" }}>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function ServiceRows() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-lg max-w-3xl"><MaskText lines={["Six disciplines.", <span className="text-muted-foreground">One accountable team.</span>]} /></h2>
          <Link to="/services" className="btn-ghost reveal">All services <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <ul onMouseLeave={() => setHover(null)}>
          {services.map((s, i) => (
            <li key={s.slug} className="reveal" style={{ "--d": `${i * 70}ms` } as CSSProperties}>
              <Link
                to="/services"
                hash={s.slug}
                onMouseEnter={() => setHover(i)}
                className="group relative grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 overflow-hidden border-t border-border py-7 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:py-9"
                style={{ opacity: hover === null || hover === i ? 1 : 0.35, transition: "opacity .4s" }}
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100" aria-hidden />
                <span className="eyebrow relative text-primary">{s.n}</span>
                <span className="relative truncate font-display text-2xl font-bold tracking-tight transition-all duration-500 group-hover:translate-x-3 group-hover:text-paper md:text-5xl">{s.title}</span>
                <span className="relative hidden text-muted-foreground transition-colors group-hover:text-paper/70 md:block">{s.line}</span>
                <ArrowUpRight className="relative h-6 w-6 transition-all duration-500 group-hover:rotate-45 group-hover:text-signal" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* sticky section whose track slides horizontally as you scroll down */
function WorkRail() {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [h, setH] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (!track.current) return;
      const dist = track.current.scrollWidth - window.innerWidth;
      setH(dist + window.innerHeight);
    };
    const on = () => {
      if (!outer.current || !track.current) return;
      const r = outer.current.getBoundingClientRect();
      const dist = track.current.scrollWidth - window.innerWidth;
      const prog = Math.min(1, Math.max(0, -r.top / (r.height - window.innerHeight)));
      setX(-prog * dist);
    };
    measure();
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", measure);
    };
  }, []);
  const tone: Record<string, string> = { volt: "bg-volt text-secondary-foreground", ink: "bg-ink text-paper", signal: "bg-signal text-primary-foreground" };
  return (
    <section ref={outer} style={{ height: h || "300vh" }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 flex w-full max-w-[1400px] items-end justify-between gap-6 px-5 md:px-10">
          <div>
            <p className="eyebrow text-primary">[ 02 ] — Selected work</p>
            <h2 className="display-lg mt-4">Concepts → results.</h2>
          </div>
          <Link to="/work" className="btn-ghost hidden md:inline-flex">All projects</Link>
        </div>
        <div ref={track} className="flex w-max gap-6 px-5 will-change-transform md:px-10" style={{ transform: `translate3d(${x}px,0,0)` }}>
          {projects.map((pr, i) => (
            <article key={pr.name} className={`group relative flex h-[58vh] w-[82vw] shrink-0 flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 md:w-[38vw] md:p-10 ${tone[pr.hue]}`}>
              <div className="flex items-start justify-between">
                <span className="eyebrow opacity-80">{String(i + 1).padStart(2, "0")} / {pr.kind}</span>
                <span className="h-10 w-10 rotate-45 border-2 border-current opacity-40 transition-transform duration-700 group-hover:rotate-[225deg]" />
              </div>
              <div>
                <p className="font-display text-7xl font-bold leading-none tracking-tighter md:text-8xl">{pr.metric}</p>
                <p className="eyebrow mt-2 opacity-80">{pr.metricLabel}</p>
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-current/25 pt-5">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-bold md:text-3xl">{pr.name}</h3>
                  <p className="mt-1 text-sm opacity-75">{pr.desc}</p>
                </div>
                {pr.url && (
                  <a href={pr.url} target="_blank" rel="noreferrer" aria-label={`Visit ${pr.name}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background text-foreground transition-transform hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (t: number) => {
        const k = Math.min(1, (t - start) / 1400);
        setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Edge() {
  const items = [
    { k: "Engineered for reliability", v: "Code quality, security protocols and long-term support so your systems run under any conditions." },
    { k: "Built for scalability", v: "Future-proof architecture that handles growth without a rebuild every year." },
    { k: "Future-forward", v: "Modern tools and AI where they help — never as a gimmick." },
  ];
  return (
    <section className="bg-ink px-5 py-28 text-paper md:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-signal">[ 03 ] — The Innewgen edge</p>
          <h2 className="display-lg mt-6"><MaskText lines={["Code you", "can lean on."]} /></h2>
          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-paper/15 pt-8">
            {[
              { n: 2, s: "×", l: "Speed meets quality" },
              { n: 98, s: "%", l: "Client satisfaction" },
              { n: 24, s: "/7", l: "Support" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl font-bold md:text-6xl"><Counter to={s.n} suffix={s.s} /></p>
                <p className="mt-2 text-xs text-paper/60">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <ol className="space-y-0">
          {items.map((it, i) => (
            <li key={it.k} className="reveal border-t border-paper/15 py-8" style={{ "--d": `${i * 120}ms` } as CSSProperties}>
              <div className="flex gap-6">
                <span className="font-mono text-sm text-signal">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold md:text-3xl">{it.k}</h3>
                  <p className="mt-3 max-w-md text-paper/65">{it.v}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <div className="border-y border-border bg-background py-6 font-display text-3xl font-bold tracking-tight md:text-5xl">
        <Marquee items={stack} speed={40} />
      </div>
      <Statement />
      <ServiceRows />
      <WorkRail />
      <Edge />
      <CtaBand />
    </>
  );
}
