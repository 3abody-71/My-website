import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock3,
  Euro,
  Globe2,
  HeartPulse,
  Home,
  Languages,
  Map,
  Scale,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { germanyPathway, type IconName } from "../data/germanyPathway";
import { assetPath } from "../lib/assetPath";

const ICONS: Record<IconName, LucideIcon> = {
  badge: Award,
  book: BookOpen,
  briefcase: Briefcase,
  check: CheckCircle2,
  clock: Clock3,
  euro: Euro,
  globe: Globe2,
  heart: HeartPulse,
  home: Home,
  language: Languages,
  map: Map,
  scale: Scale,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  users: Users,
};

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      {body ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p> : null}
    </div>
  );
}

function PhotoSection({
  src,
  alt,
  eyebrow,
  title,
  body,
  children,
  reverse = false,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative min-h-[280px] overflow-hidden bg-secondary lg:min-h-full">
          <img src={assetPath(src)} alt={alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d3b]/55 via-transparent to-transparent" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function GermanyPathway() {
  return (
    <div className="space-y-10">
      <PhotoSection
        src="/assets/media/germany-hospital.jpg"
        alt="Doctor walking through a bright modern German hospital corridor"
        eyebrow="Germany pathway"
        title="From medical student to your first German hospital job"
        body="Germany offers a structured, paid route for internationally trained doctors, but the sequence is built around language, recognition, licensing, and a realistic job search. Use this page as an orientation map, then verify your exact case with the authority in your chosen federal state."
      >
        <div className="flex flex-wrap gap-2">
          <a
            href="#germany-route"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs"
          >
            See the full route <ArrowRight size={14} />
          </a>
          <a
            href="#germany-salary"
            className="btn-quiet inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold"
          >
            Salary and life <Euro size={14} />
          </a>
        </div>
      </PhotoSection>

      <section aria-labelledby="why-germany">
        <SectionHeading
          eyebrow="01 / Why Germany"
          title="Five reasons to consider Germany"
          body="Germany is not a shortcut: professional German and a state-by-state licensing process are real commitments. These are the practical reasons many international medical graduates still choose it."
        />
        <div id="why-germany" className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {germanyPathway.reasons.map((reason, index) => {
            const Icon = ICONS[reason.icon];
            return (
              <article key={reason.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon size={19} />
                </div>
                <div className="mt-4 text-xs font-bold text-primary">0{index + 1}</div>
                <h3 className="mt-1 text-sm font-extrabold leading-5">{reason.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{reason.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="germany-requirements" aria-labelledby="requirements-heading">
        <SectionHeading
          eyebrow="02 / Requirements"
          title="The requirements to prepare"
          body="The exact checklist depends on your qualification, nationality, and chosen federal state. Treat the groups below as a preparation framework, not a substitute for an official application checklist."
        />
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {germanyPathway.requirementGroups.map((group) => {
            const Icon = ICONS[group.icon];
            return (
              <article key={group.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold">{group.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{group.intro}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-5">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <PhotoSection
        src="/assets/media/german-language-books.jpg"
        alt="Medical textbooks and study notes for learning German clinical language"
        eyebrow="Language is part of the licence"
        title="Study German like a clinical skill"
        body="General German gets you through daily life; medical German helps you take a history, explain risk, write documentation, and hand over safely. Put language practice into your medical routine from the start."
        reverse
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-secondary/70 p-3">
            <Languages size={16} className="text-primary" />
            <p className="mt-2 text-xs font-bold">General German</p>
            <p className="mt-1 text-[11px] leading-4 text-muted-foreground">Build toward B2 communication.</p>
          </div>
          <div className="rounded-xl bg-secondary/70 p-3">
            <Stethoscope size={16} className="text-primary" />
            <p className="mt-2 text-xs font-bold">Medical German</p>
            <p className="mt-1 text-[11px] leading-4 text-muted-foreground">Practise C1-level clinical situations.</p>
          </div>
          <div className="rounded-xl bg-secondary/70 p-3">
            <BookOpen size={16} className="text-primary" />
            <p className="mt-2 text-xs font-bold">Fachsprachprüfung</p>
            <p className="mt-1 text-[11px] leading-4 text-muted-foreground">Train history, notes, and handovers.</p>
          </div>
        </div>
      </PhotoSection>

      <section id="germany-route" aria-labelledby="route-heading">
        <SectionHeading
          eyebrow="03 / The pathway"
          title="The route from preparation to employment"
          body="The pathway below shows the usual order, while allowing for overlap. Your authority may change the order, request additional documents, or require an examination."
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
          <ol className="space-y-5">
            {germanyPathway.stages.map((stage) => (
              <li key={stage.number} className="route-step rounded-2xl border border-border bg-card p-5 pl-14 shadow-sm sm:p-6 sm:pl-16">
                <span className="step-dot !top-6 !left-5">{stage.number}</span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-extrabold">{stage.title}</h3>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold text-primary">{stage.timeframe}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{stage.body}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                  {stage.actions.map((action) => (
                    <li key={action} className="rounded-lg bg-secondary/60 p-3 text-xs leading-5">
                      <CheckCircle2 size={14} className="mb-1 text-primary" />
                      {action}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-start gap-2 rounded-lg border border-primary/15 bg-primary/5 p-3 text-xs leading-5">
                  <ArrowRight size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span><span className="font-bold">Checkpoint:</span> {stage.checkpoint}</span>
                </div>
              </li>
            ))}
          </ol>

          <aside className="h-fit rounded-2xl border border-border bg-[#123f52] p-6 text-white shadow-lg lg:sticky lg:top-24">
            <div className="eyebrow !text-[#8bd3dc]">Keep this in view</div>
            <h3 className="mt-2 text-xl font-extrabold">A job offer is not the same as a licence</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Hospitals may speak with candidates while recognition is progressing, but the permission to work, permitted duties, start date, and supervision arrangements depend on the licence or temporary permission issued to you.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Confirm the responsible federal-state authority",
                "Ask what exam or licence stage applies to you",
                "Get the role, rota, pay, and licence condition in writing",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs leading-5 text-white/90">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#8bd3dc]" />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="tradeoffs-heading">
        <SectionHeading
          eyebrow="04 / Trade-offs"
          title="Advantages and disadvantages"
          body="Germany can be a strong fit for a disciplined, language-focused applicant. It can be frustrating if you need an immediate move, dislike administrative processes, or are choosing a country only for salary."
        />
        <div id="tradeoffs-heading" className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#b8dccf] bg-[#f3fbf7] p-6">
            <div className="flex items-center gap-2 text-[#267a5b]"><CheckCircle2 size={18} /><h3 className="text-base font-extrabold">Advantages</h3></div>
            <ul className="mt-5 space-y-3">
              {germanyPathway.advantages.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-6"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#267a5b]" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#e6c39b] bg-[#fff9f0] p-6">
            <div className="flex items-center gap-2 text-[#ad6a16]"><Scale size={18} /><h3 className="text-base font-extrabold">Disadvantages</h3></div>
            <ul className="mt-5 space-y-3">
              {germanyPathway.disadvantages.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-6"><Scale size={15} className="mt-1 shrink-0 text-[#ad6a16]" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <PhotoSection
        src="/assets/media/euro-salary.jpg"
        alt="Euro banknotes, coins, calculator, hospital ID badge, and stethoscope"
        eyebrow="05 / Salary and life"
        title="The numbers matter, but the whole package matters more"
        body="Salary figures below are broad gross estimates based on common hospital tariff ranges and should be checked against the current contract. Net pay depends on tax class, insurance, family situation, church tax, overtime, and other deductions."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-secondary/70 p-3"><Euro size={16} className="text-primary" /><p className="mt-2 text-xs font-bold">Gross pay</p><p className="mt-1 text-[11px] leading-4 text-muted-foreground">Before tax and deductions.</p></div>
          <div className="rounded-xl bg-secondary/70 p-3"><Clock3 size={16} className="text-primary" /><p className="mt-2 text-xs font-bold">Working time</p><p className="mt-1 text-[11px] leading-4 text-muted-foreground">Check the rota and on-call model.</p></div>
          <div className="rounded-xl bg-secondary/70 p-3"><Home size={16} className="text-primary" /><p className="mt-2 text-xs font-bold">Cost of living</p><p className="mt-1 text-[11px] leading-4 text-muted-foreground">Rent differs sharply by region.</p></div>
        </div>
      </PhotoSection>

      <section id="germany-salary" aria-labelledby="salary-heading">
        <SectionHeading
          eyebrow="Salary snapshot"
          title="Typical hospital salary bands"
          body="Use these as orientation ranges, not promises. Public-hospital tariffs, university-hospital agreements, private employers, overtime, and on-call payments can all change the final amount."
        />
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-secondary/70 text-xs uppercase tracking-wider text-muted-foreground">
              <tr><th className="px-5 py-4 font-bold">Role</th><th className="px-5 py-4 font-bold">Monthly gross</th><th className="px-5 py-4 font-bold">Annual gross</th><th className="px-5 py-4 font-bold">What changes it</th></tr>
            </thead>
            <tbody>
              {germanyPathway.salaryBands.map((band) => (
                <tr key={band.role} className="border-t border-border align-top">
                  <td className="px-5 py-4 font-extrabold">{band.role}</td>
                  <td className="px-5 py-4 font-bold text-primary">{band.monthly}</td>
                  <td className="px-5 py-4">{band.annual}</td>
                  <td className="px-5 py-4 text-xs leading-5 text-muted-foreground">{band.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="life-heading">
        <SectionHeading
          eyebrow="Beyond the payslip"
          title="Work-life balance, people, and daily life"
          body="There is no single German experience. Department, city, contract, language confidence, housing, and your support network shape how the move feels."
        />
        <div id="life-heading" className="mt-5 grid gap-4 md:grid-cols-3">
          {germanyPathway.lifeCards.map((card) => {
            const Icon = ICONS[card.icon];
            return <article key={card.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm"><div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary"><Icon size={19} /></div><h3 className="mt-4 text-base font-extrabold">{card.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{card.body}</p></article>;
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8" aria-labelledby="sources-heading">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><ShieldCheck size={19} /></div>
          <div><div className="eyebrow">Verify before you act</div><h2 id="sources-heading" className="mt-1 text-xl font-extrabold">Official starting points</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Rules and salary tables change. Start with official sources, then confirm the checklist for your federal state and your personal qualification.</p></div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {germanyPathway.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background p-4 text-sm font-bold transition-colors hover:border-primary/40 hover:bg-secondary/50"><span>{source.label}</span><ArrowUpRight size={15} className="shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}
        </div>
        <p className="mt-5 rounded-lg bg-secondary/60 p-3 text-xs leading-5 text-muted-foreground">For education only. This guide is not legal, immigration, financial, or medical advice. Requirements, timelines, salary agreements, and work permissions vary by case and by federal state.</p>
      </section>
    </div>
  );
}
