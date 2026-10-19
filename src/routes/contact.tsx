import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, Calendar } from "lucide-react";
import { PageHero } from "@/components/site/site";
import { createPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    createPageSeo({
      title: "Start a Software Project | Contact Innewgen",
      description:
        "Tell Innewgen about your business and software project in a guided six-step inquiry. Get a clear next step from our Manila team.",
      path: "/contact",
    }),
  component: Contact,
});

/** Destination inbox for all project inquiries */
const INQUIRY_EMAIL = "business@innewgen.com";

/**
 * FormSubmit AJAX endpoint — free, no backend required.
 * First submission triggers a one-time confirmation email to business@innewgen.com.
 * After you click "Activate Form", every inquiry lands in that inbox.
 * Docs: https://formsubmit.co/ajax-documentation
 */
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${INQUIRY_EMAIL}`;

const STEPS = [
  { id: "you", label: "About You", short: "You" },
  { id: "business", label: "Business", short: "Business" },
  { id: "challenges", label: "Challenges", short: "Challenges" },
  { id: "goals", label: "Goals", short: "Goals" },
  { id: "details", label: "Details", short: "Details" },
  { id: "schedule", label: "Schedule", short: "Schedule" },
] as const;

type FormData = {
  name: string;
  email: string;
  role: string;
  company: string;
  industry: string;
  size: string;
  challenges: string[];
  otherChallenge: string;
  goals: string[];
  otherGoal: string;
  budget: string;
  timeline: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

const initial: FormData = {
  name: "",
  email: "",
  role: "",
  company: "",
  industry: "",
  size: "",
  challenges: [],
  otherChallenge: "",
  goals: [],
  otherGoal: "",
  budget: "",
  timeline: "",
  description: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

const challengeOptions = [
  "Manual / spreadsheet workflows",
  "Outdated or slow website",
  "No mobile presence",
  "Need automation or AI",
  "Scaling internal systems",
  "Quality / reliability issues",
  "Other",
];

const goalOptions = [
  "Launch a new product or site",
  "Replace legacy tools",
  "Grow online revenue",
  "Digitize operations",
  "Improve speed & reliability",
  "Explore AI features",
  "Other",
];

const sizes = ["1–10", "11–50", "51–200", "201–500", "500+"];
const budgets = ["Under $5k", "$5k–$15k", "$15k–$40k", "$40k–$100k", "$100k+", "Not sure yet"];
const timelines = ["ASAP", "1–2 months", "3–6 months", "6+ months", "Just exploring"];
const times = ["Morning (PH)", "Afternoon (PH)", "Evening (PH)", "Flexible"];

function toggle(arr: string[], value: string) {
  return arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value];
}

function buildPayload(data: FormData) {
  const challenges = [
    ...data.challenges.filter((c) => c !== "Other"),
    ...(data.otherChallenge.trim() ? [`Other: ${data.otherChallenge.trim()}`] : []),
  ].join("; ");

  const goals = [
    ...data.goals.filter((g) => g !== "Other"),
    ...(data.otherGoal.trim() ? [`Other: ${data.otherGoal.trim()}`] : []),
  ].join("; ");

  return {
    _subject: `New project inquiry from ${data.name} — ${data.company || "No company"}`,
    _template: "table",
    _replyto: data.email,
    _captcha: "false",
    name: data.name,
    email: data.email,
    role: data.role || "—",
    company: data.company,
    industry: data.industry || "—",
    team_size: data.size || "—",
    challenges: challenges || "—",
    goals: goals || "—",
    budget: data.budget || "—",
    timeline: data.timeline || "—",
    details: data.description || "—",
    preferred_date: data.preferredDate || "—",
    preferred_time: data.preferredTime || "—",
    call_notes: data.notes || "—",
  };
}

async function sendInquiry(data: FormData): Promise<{ ok: boolean; message: string }> {
  const body = buildPayload(data);

  try {
    const res = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const json = (await res.json().catch(() => null)) as
      | { success?: string | boolean; message?: string }
      | null;

    const success =
      res.ok &&
      (json?.success === true ||
        json?.success === "true" ||
        (typeof json?.message === "string" && /success|sent|thank/i.test(json.message)));

    if (success) {
      return { ok: true, message: json?.message || "Sent" };
    }

    if (json?.message) {
      return { ok: false, message: json.message };
    }

    return {
      ok: false,
      message: "Could not send right now. Please email us directly.",
    };
  } catch {
    return {
      ok: false,
      message: "Network error. Please try again or email us directly.",
    };
  }
}

function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  const validate = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!data.name.trim()) e.name = "Name is required";
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        e.email = "Valid email required";
    }
    if (s === 1) {
      if (!data.company.trim()) e.company = "Company or project name helps";
    }
    if (s === 2) {
      if (data.challenges.length === 0 && !data.otherChallenge.trim())
        e.challenges = "Pick at least one";
    }
    if (s === 3) {
      if (data.goals.length === 0 && !data.otherGoal.trim()) e.goals = "Pick at least one goal";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate(step)) return;
    setSubmitError(null);
    // Advance only — never submit from Continue
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setSubmitError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const send = async () => {
    if (!validate(step)) return;
    setSending(true);
    setSubmitError(null);

    const result = await sendInquiry(data);

    setSending(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setSubmitError(result.message);
    }
  };

  /** Form submit (Enter key). Only sends on the last step; otherwise advances. */
  const onFormSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (step < STEPS.length - 1) {
      next();
      return;
    }
    void send();
  };

  if (submitted) {
    return (
      <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 py-32 text-center md:px-10">
        <div className="reveal mx-auto max-w-lg">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-signal text-primary-foreground">
            <Check className="h-8 w-8" />
          </span>
          <h1 className="display-lg mt-8 text-4xl md:text-6xl">We got it.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Thanks {data.name.split(" ")[0] || "there"}. We’ll review your notes and reply within
            one business day at <strong>{data.email}</strong>.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-signal">
              Back home
            </Link>
            <Link to="/work" className="btn-ghost">
              See our work
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <>
      <PageHero
        index="[ C ]"
        eyebrow="Start a project"
        lines={["Tell us what’s", <span className="text-primary">slowing you down.</span>]}
        intro="Six short steps. About four minutes. No sales pitch — just enough for us to give you a useful next step."
      />

      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10">
            <div className="mb-3 flex items-center justify-between text-xs">
              <span className="eyebrow text-primary">
                Step {step + 1} of {STEPS.length} — {STEPS[step].label}
              </span>
              <span className="text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full origin-left rounded-full bg-signal transition-transform duration-500 ease-out"
                style={{ transform: `scaleX(${progress / 100})` }}
              />
            </div>
            <div className="mt-4 hidden gap-1 sm:flex" aria-hidden>
              {STEPS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => i < step && setStep(i)}
                  className={`flex-1 rounded-full py-1.5 text-center text-[10px] font-medium uppercase tracking-wider transition-colors ${
                    i === step
                      ? "bg-foreground text-background"
                      : i < step
                        ? "bg-signal/20 text-signal"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s.short}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={onFormSubmit} className="space-y-8" noValidate>
            {step === 0 && (
              <div className="space-y-6 step-in">
                <Field label="Your name" error={errors.name}>
                  <input
                    className="field"
                    value={data.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Jane Reyes"
                    autoComplete="name"
                    autoFocus
                    required
                  />
                </Field>
                <Field label="Work email" error={errors.email}>
                  <input
                    className="field"
                    type="email"
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="jane@company.com"
                    autoComplete="email"
                    required
                  />
                </Field>
                <Field label="Role (optional)">
                  <input
                    className="field"
                    value={data.role}
                    onChange={(e) => set("role", e.target.value)}
                    placeholder="Founder, CTO, Ops lead…"
                    autoComplete="organization-title"
                  />
                </Field>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6 step-in">
                <Field label="Company or project name" error={errors.company}>
                  <input
                    className="field"
                    value={data.company}
                    onChange={(e) => set("company", e.target.value)}
                    placeholder="Acme Co. or Project X"
                    autoFocus
                    required
                  />
                </Field>
                <Field label="Industry (optional)">
                  <input
                    className="field"
                    value={data.industry}
                    onChange={(e) => set("industry", e.target.value)}
                    placeholder="E-commerce, church, SaaS, retail…"
                  />
                </Field>
                <Field label="Team size">
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((s) => (
                      <Chip key={s} active={data.size === s} onClick={() => set("size", s)}>
                        {s}
                      </Chip>
                    ))}
                  </div>
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 step-in">
                <Field label="What’s getting in the way?" error={errors.challenges}>
                  <div className="flex flex-wrap gap-2">
                    {challengeOptions.map((c) => (
                      <Chip
                        key={c}
                        active={data.challenges.includes(c)}
                        onClick={() => set("challenges", toggle(data.challenges, c))}
                      >
                        {c}
                      </Chip>
                    ))}
                  </div>
                </Field>
                {data.challenges.includes("Other") && (
                  <Field label="Tell us more">
                    <input
                      className="field"
                      value={data.otherChallenge}
                      onChange={(e) => set("otherChallenge", e.target.value)}
                      placeholder="Describe the challenge"
                      autoFocus
                    />
                  </Field>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 step-in">
                <Field label="What does success look like?" error={errors.goals}>
                  <div className="flex flex-wrap gap-2">
                    {goalOptions.map((g) => (
                      <Chip
                        key={g}
                        active={data.goals.includes(g)}
                        onClick={() => set("goals", toggle(data.goals, g))}
                      >
                        {g}
                      </Chip>
                    ))}
                  </div>
                </Field>
                {data.goals.includes("Other") && (
                  <Field label="Other goal">
                    <input
                      className="field"
                      value={data.otherGoal}
                      onChange={(e) => set("otherGoal", e.target.value)}
                      placeholder="Describe the outcome you want"
                      autoFocus
                    />
                  </Field>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 step-in">
                <Field label="Rough budget">
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <Chip key={b} active={data.budget === b} onClick={() => set("budget", b)}>
                        {b}
                      </Chip>
                    ))}
                  </div>
                </Field>
                <Field label="Timeline">
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <Chip key={t} active={data.timeline === t} onClick={() => set("timeline", t)}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                </Field>
                <Field label="Anything else we should know? (optional)">
                  <textarea
                    className="field min-h-[120px] resize-y"
                    value={data.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="Links, constraints, must-haves…"
                    rows={4}
                  />
                </Field>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6 step-in">
                <p className="text-sm text-muted-foreground">
                  Optional — pick a preferred window for a short intro call. We’ll confirm by email.
                </p>
                <Field label="Preferred date">
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      className="field pl-11"
                      type="date"
                      value={data.preferredDate}
                      onChange={(e) => set("preferredDate", e.target.value)}
                      min={new Date().toISOString().slice(0, 10)}
                    />
                  </div>
                </Field>
                <Field label="Preferred time">
                  <div className="flex flex-wrap gap-2">
                    {times.map((t) => (
                      <Chip
                        key={t}
                        active={data.preferredTime === t}
                        onClick={() => set("preferredTime", t)}
                      >
                        {t}
                      </Chip>
                    ))}
                  </div>
                </Field>
                <Field label="Notes for the call (optional)">
                  <textarea
                    className="field min-h-[80px] resize-y"
                    value={data.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="Topics you want to cover…"
                    rows={3}
                  />
                </Field>
              </div>
            )}

            {submitError && (
              <div
                className="rounded-xl border border-signal/40 bg-signal/10 px-4 py-3 text-sm text-foreground"
                role="alert"
              >
                <p className="font-medium text-signal">Couldn’t send yet</p>
                <p className="mt-1 text-muted-foreground">{submitError}</p>
                <p className="mt-2">
                  You can also email us directly at{" "}
                  <a href={`mailto:${INQUIRY_EMAIL}`} className="link-line font-medium text-foreground">
                    {INQUIRY_EMAIL}
                  </a>
                  .
                </p>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 border-t border-border pt-8">
              <button
                type="button"
                onClick={back}
                disabled={step === 0 || sending}
                className="btn-ghost disabled:pointer-events-none disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              {step < STEPS.length - 1 ? (
                <button type="button" onClick={next} disabled={sending} className="btn-signal disabled:opacity-70">
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                /* type="button" avoids the Continue→Submit click-through that auto-sends */
                <button
                  type="button"
                  disabled={sending}
                  onClick={() => void send()}
                  className="btn-signal disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Submit inquiry"} <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            Prefer email?{" "}
            <a href={`mailto:${INQUIRY_EMAIL}`} className="link-line text-foreground">
              {INQUIRY_EMAIL}
            </a>{" "}
            · Or message us on{" "}
            <a
              href="https://www.facebook.com/Innewgen.Official/"
              target="_blank"
              rel="noreferrer"
              className="link-line text-foreground"
            >
              Facebook
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block text-muted-foreground">{label}</span>
      {children}
      {error && (
        <span className="mt-1.5 block text-sm text-signal" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border hover:border-foreground"
      }`}
    >
      {children}
    </button>
  );
}
