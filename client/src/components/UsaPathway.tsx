import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  DollarSign,
  FileCheck2,
  Flag,
  Globe2,
  GraduationCap,
  Home,
  MapPin,
  Scale,
  Users,
} from "lucide-react";
import { usaPathway, type UsaIconMap } from "../data/usaPathway";
import { assetPath } from "../lib/assetPath";

const ICONS: UsaIconMap = {
  award: BadgeCheck,
  book: GraduationCap,
  briefcase: Briefcase,
  check: CheckCircle2,
  clock: Clock3,
  dollar: DollarSign,
  file: FileCheck2,
  flag: Flag,
  globe: Globe2,
  graduation: GraduationCap,
  heart: CheckCircle2,
  home: Home,
  hospital: Building2,
  map: MapPin,
  scale: Scale,
  shield: BadgeCheck,
  stethoscope: Building2,
  star: BadgeCheck,
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

function IconBox({ name, className = "" }: { name: keyof typeof ICONS; className?: string }) {
  const Icon = ICONS[name];
  return (
    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary ${className}`}>
      <Icon size={19} />
    </div>
  );
}

function SafeImage({ src, alt, className, loading = "lazy" }: { src: string; alt: string; className?: string; loading?: "eager" | "lazy" }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <img
      src={assetPath(currentSrc)}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => {
        if (currentSrc !== "/assets/usa/usa-flag.jpg") setCurrentSrc("/assets/usa/usa-flag.jpg");
      }}
    />
  );
}

export default function UsaPathway() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[350px] overflow-hidden bg-[#0b2d55]">
            <SafeImage src="/assets/usa/usa-flag.jpg" alt="United States flag" className="absolute inset-0 h-full w-full object-cover opacity-75" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#071b34]/95 via-[#0b2d55]/35 to-[#b22234]/55" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/75">USA guide for IMGs</div>
              <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">A clear route to residency in the United States.</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">A simple overview of the reasons, requirements, pathway, salaries, lifestyle, and hospitals that matter to international medical graduates.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="eyebrow">Guide / contents</div>
            <h2 className="mt-2 text-xl font-extrabold">What is on this page?</h2>
            <nav className="mt-4 grid gap-2 text-sm" aria-label="USA guide contents">
              {[
                ["why-usa", "Why choose the USA?"],
                ["requirements", "IMG requirements and USMLE"],
                ["pathway", "The IMG pathway"],
                ["life", "Salaries and life"],
                ["tradeoffs", "Advantages and disadvantages"],
                ["hospitals", "Nine important hospitals"],
              ].map(([href, label]) => (
                <a key={href} href={`#${href}`} className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2.5 font-bold hover:border-primary/40 hover:bg-secondary/50">
                  <span>{label}</span><ArrowRight size={14} className="text-primary" />
                </a>
              ))}
            </nav>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#d9b4b7] bg-[#fff7f7] p-3">
              <SafeImage src="/assets/usa/usa-reaction.gif" alt="Celebratory reaction GIF" className="h-16 w-20 shrink-0 rounded-lg object-cover" />
              <p className="text-xs leading-5 text-muted-foreground">Keep the ambition, then follow the checklist.</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 border-t border-border bg-secondary/30 p-4 sm:grid-cols-[1fr_1.25fr] sm:p-5">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <SafeImage src="/assets/usa/usa-country.jpg" alt="USA map and country visual" className="h-40 w-full object-cover" />
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="eyebrow">USA at a glance</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">A large, competitive country with many hospitals, residency programs, specialties, research opportunities, and different ways of living.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-secondary px-3 py-1.5">IMG route</span>
              <span className="rounded-full bg-secondary px-3 py-1.5">USMLE</span>
              <span className="rounded-full bg-secondary px-3 py-1.5">Residency</span>
              <span className="rounded-full bg-secondary px-3 py-1.5">Research</span>
            </div>
          </div>
        </div>
      </section>

      <section id="why-usa" aria-labelledby="why-usa-heading">
        <SectionHeading eyebrow="01 / Why choose the USA?" title="Six reasons IMGs look toward the United States" />
        <div id="why-usa-heading" className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {usaPathway.reasons.map((reason) => (
            <article key={reason.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <IconBox name={reason.icon} />
              <h3 className="mt-4 text-base font-extrabold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{reason.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="requirements" aria-labelledby="requirements-heading">
        <SectionHeading eyebrow="02 / IMG requirements" title="What you need before applying" body="Requirements can change by year and program, so IMGs should confirm the current rules before paying for an exam or application." />
        <div id="requirements-heading" className="mt-5 grid gap-5 lg:grid-cols-2">
          {usaPathway.requirements.map((requirement) => (
            <article key={requirement.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4"><IconBox name={requirement.icon} className="bg-[#e8f0ff] text-[#1d4ed8]" /><div><h3 className="text-lg font-extrabold">{requirement.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{requirement.body}</p></div></div>
              <div className="mt-5 space-y-3 border-t border-border pt-5">
                {requirement.details.map((detail) => <div key={detail} className="flex items-start gap-2.5 text-sm leading-6"><CheckCircle2 size={15} className="mt-1 shrink-0 text-primary" /><span>{detail}</span></div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pathway" aria-labelledby="pathway-heading">
        <SectionHeading eyebrow="03 / The IMG pathway" title="From medical school to U.S. residency" body="The exact order can vary, but these are the main steps an IMG usually needs to plan." />
        <div id="pathway-heading" className="mt-6 space-y-4">
          {usaPathway.stages.map((stage) => (
            <article key={stage.number} className="route-step rounded-2xl border border-border bg-card p-5 pl-14 shadow-sm sm:p-6 sm:pl-16">
              <span className="step-dot !top-6 !left-5">{stage.number}</span>
              <h3 className="text-lg font-extrabold">{stage.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{stage.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="life" aria-labelledby="life-heading">
        <SectionHeading eyebrow="04 / Salaries and life" title="Salary, work–life balance, opportunities, and passport" />
        <div id="life-heading" className="mt-5 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-secondary/70 text-xs uppercase tracking-wider text-muted-foreground"><tr><th className="px-5 py-4 font-extrabold">Role</th><th className="px-5 py-4 font-extrabold">Typical salary</th><th className="px-5 py-4 font-extrabold">Context</th></tr></thead><tbody>{usaPathway.salaryBands.map((band) => <tr key={band.role} className="border-t border-border align-top"><td className="px-5 py-4 font-extrabold">{band.role}</td><td className="px-5 py-4 font-bold text-primary">{band.typical}</td><td className="px-5 py-4 leading-6 text-muted-foreground">{band.note}</td></tr>)}</tbody></table></div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">{usaPathway.lifestyleCards.map((card) => <article key={card.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm"><IconBox name={card.icon} /><h3 className="mt-4 text-base font-extrabold">{card.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{card.body}</p></article>)}</div>
      </section>

      <section id="tradeoffs" aria-labelledby="tradeoffs-heading">
        <SectionHeading eyebrow="05 / Advantages and disadvantages" title="The opportunity is strong, but the pathway is demanding" />
        <div id="tradeoffs-heading" className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#b8dccf] bg-[#f3fbf7] p-6"><div className="flex items-center gap-2 text-[#267a5b]"><CheckCircle2 size={18} /><h3 className="text-base font-extrabold">Advantages</h3></div><ul className="mt-5 space-y-3">{usaPathway.advantages.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-6"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#267a5b]" />{item}</li>)}</ul></div>
          <div className="rounded-2xl border border-[#e6c39b] bg-[#fff9f0] p-6"><div className="flex items-center gap-2 text-[#ad6a16]"><Scale size={18} /><h3 className="text-base font-extrabold">Disadvantages</h3></div><ul className="mt-5 space-y-3">{usaPathway.disadvantages.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-6"><Scale size={15} className="mt-1 shrink-0 text-[#ad6a16]" />{item}</li>)}</ul></div>
        </div>
      </section>

      <section id="hospitals" aria-labelledby="hospitals-heading">
        <SectionHeading eyebrow="06 / Important hospitals" title="Nine U.S. hospitals and health systems to know" body="These institutions are examples of major U.S. academic medicine centers. Their inclusion does not guarantee admission, employment, or residency placement." />
        <div id="hospitals-heading" className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {usaPathway.hospitals.map((hospital) => <article key={hospital.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><div className="relative h-44 overflow-hidden bg-secondary"><SafeImage src={hospital.image} alt={`${hospital.name} hospital campus`} className="h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-12 text-white"><p className="text-xs font-bold uppercase tracking-wider text-white/80">{hospital.city}</p></div></div><div className="p-5"><h3 className="text-base font-extrabold">{hospital.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{hospital.body}</p><a href={hospital.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">Official site <ArrowUpRight size={13} /></a></div></article>)}
        </div>
      </section>

      <p className="rounded-lg bg-secondary/60 p-3 text-xs leading-5 text-muted-foreground">For education only. Requirements, salaries, visa rules, and citizenship timelines can change. Confirm current details with ECFMG, ERAS, NRMP, state boards, and USCIS.</p>
    </div>
  );
}
