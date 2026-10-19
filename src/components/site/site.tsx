import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import logoUrl from "@/assets/innewgen-logo.svg";

/* ---------- scroll reveal: adds .in to any [data-reveal] in view ---------- */

export function useRevealAll() {
  const path = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    // Wait until the new route has rendered.
    frame = requestAnimationFrame(() => {
      const elements =
        document.querySelectorAll<HTMLElement>(
          ".reveal, .clip-reveal, [data-reveal]",
        );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "0px 0px -5% 0px",
        },
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Reveal elements already visible on the new route.
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in");
        } else {
          observer?.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [path]);
}


/* ---------- 0..1 progress of an element through the viewport ---------- */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const total = r.height + window.innerHeight;
        setP(Math.min(1, Math.max(0, (window.innerHeight - r.top) / total)));
      }
    };
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return [ref, p] as const;
}

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return <img src={logoUrl} alt="Innewgen" className={className} />;
}

export function MaskText({ lines, className = "", delay = 0 }: { lines: ReactNode[]; className?: string; delay?: number }) {
  return (
    <span data-reveal className={className}>
      {lines.map((l, i) => (
        <span key={i} className="mask-line">
          <span style={{ "--d": `${delay + i * 110}ms` } as CSSProperties}>{l}</span>
        </span>
      ))}
    </span>
  );
}

export function Marquee({ items, speed = 30, className = "" }: { items: string[]; speed?: number; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee-wrap overflow-hidden ${className}`} aria-hidden>
      <div className="marquee flex w-max items-center gap-10" style={{ "--speed": `${speed}s` } as CSSProperties}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {t}
            <span className="inline-block h-3 w-3 rotate-45 bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("innewgen-theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-border transition-colors hover:border-foreground"
    >
      <Sun className={`absolute h-4 w-4 transition-all duration-500 ${dark ? "translate-y-8 rotate-90 opacity-0" : ""}`} />
      <Moon className={`absolute h-4 w-4 transition-all duration-500 ${dark ? "" : "-translate-y-8 -rotate-90 opacity-0"}`} />
    </button>
  );
}

const nav = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prog, setProg] = useState(0);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? window.scrollY / h : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : ""}`}
      >
        <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Innewgen home">
            <Logo className="h-8 w-8 shrink-0 transition-transform duration-700 group-hover:rotate-[360deg]" />
            <span className="font-display text-lg font-bold tracking-tight">INNEWGEN</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <Link to="/contact" className="btn-signal hidden !py-2.5 !px-5 text-sm sm:inline-flex">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="h-[2px] origin-left bg-signal" style={{ transform: `scaleX(${prog})` }} aria-hidden />
      </header>
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-end bg-background px-6 pb-12 transition-[clip-path] duration-700 md:hidden ${open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"}`}
      >
        {[...nav, { to: "/contact", label: "Contact" } as const].map((n, i) => (
          <Link
            key={n.to}
            to={n.to}
            className="border-b border-border py-4 font-display text-5xl font-bold tracking-tight"
            style={{ transition: `opacity .5s ${i * 60 + 200}ms`, opacity: open ? 1 : 0 }}
          >
            {n.label}
          </Link>
        ))}
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pt-24 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow text-paper/60">Have a project in mind?</p>
            <Link to="/contact" className="group mt-4 block font-display text-5xl font-bold leading-none tracking-tight md:text-7xl">
              Let’s build it <span className="text-signal">together</span>
              <ArrowUpRight className="ml-2 inline h-10 w-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 md:h-14 md:w-14" />
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <p className="eyebrow text-paper/50">Sitemap</p>
            {[...nav, { to: "/contact", label: "Contact" } as const].map((n) => (
              <Link key={n.to} to={n.to} className="link-line block w-fit">{n.label}</Link>
            ))}
          </div>
          <div className="space-y-3 text-sm">
            <p className="eyebrow text-paper/50">Elsewhere</p>
            <a href="https://www.facebook.com/Innewgen.Official/" target="_blank" rel="noreferrer" className="link-line block w-fit">Facebook ↗</a>
            <p className="text-paper/60">Manila, Philippines</p>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-between border-t border-paper/15 py-6 text-xs text-paper/50">
          <span>© {new Date().getFullYear()} Innewgen Software Solutions</span>
          <span className="eyebrow">Built with intent</span>
        </div>
      </div>
      <p aria-hidden className="pointer-events-none select-none px-3 font-display text-[22vw] font-bold leading-[0.75] tracking-[-0.06em] text-paper/[0.06]">
        INNEWGEN
      </p>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  useRevealAll();
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <div key={path} className="page-curtain pointer-events-none fixed inset-0 z-[70] bg-signal" aria-hidden />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

/* ---------- reusable page hero for subpages ---------- */
export function PageHero({ eyebrow, lines, intro, index }: { eyebrow: string; lines: ReactNode[]; intro: string; index: string }) {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-40 md:px-10 md:pt-48">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="reveal flex items-center gap-4">
          <span className="eyebrow text-primary">{index}</span>
          <span className="h-px w-16 bg-foreground" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="display-lg mt-8 max-w-5xl">
          <MaskText lines={lines} />
        </h1>
        <p className="reveal mt-10 max-w-xl text-lg text-muted-foreground" style={{ "--d": "300ms" } as CSSProperties}>
          {intro}
        </p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-24 md:px-10">
      <Link
        to="/contact"
        className="reveal group relative mx-auto flex max-w-[1400px] flex-col justify-between gap-10 overflow-hidden rounded-[2rem] bg-signal p-8 text-primary-foreground md:flex-row md:items-end md:p-14"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rotate-45 border-[28px] border-primary-foreground/15 transition-transform duration-1000 group-hover:rotate-[135deg]" aria-hidden />
        <div className="relative">
          <p className="eyebrow opacity-80">6 short steps · ~4 minutes</p>
          <p className="mt-4 font-display text-4xl font-bold leading-none tracking-tight md:text-7xl">
            Tell us what’s
            <br /> slowing you down.
          </p>
        </div>
        <span className="relative inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45 md:h-28 md:w-28">
          <ArrowUpRight className="h-8 w-8" />
        </span>
      </Link>
    </section>
  );
}
