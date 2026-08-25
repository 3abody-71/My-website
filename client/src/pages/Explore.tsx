import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bookmark,
  Clock3,
  GitCompareArrows,
  HeartPulse,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import specialties from "../data/specialties.json";
import countries from "../data/countries.json";
import { useApp } from "../contexts/AppContext";

const CATEGORIES = ["All", "Medicine", "Surgery", "Diagnostics", "Acute care"];
const FEATURED_IDS = ["cardiology", "orthopaedic-surgery", "ophthalmology"];
const PRIMARY_COUNTRY_IDS = ["usa", "uk", "australia", "canada", "germany", "ireland"];

type SpecialtyRecord = (typeof specialties)[number] & {
  image?: string;
  subspecialties?: string[];
  coreWork?: string[];
  goodFit?: string[];
  trainingYearsByCountry?: Record<string, string>;
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${visible ? "scroll-reveal-visible" : "scroll-reveal"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Explore() {
  const { savedSpecialtyIds, toggleSpecialty, compareIds, setCompareIds } = useApp();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const primaryCountries = countries.filter((country) => PRIMARY_COUNTRY_IDS.includes(country.id));
  const richSpecialties = specialties as SpecialtyRecord[];
  const featured = FEATURED_IDS.map((id) => richSpecialties.find((specialty) => specialty.id === id)).filter(Boolean) as SpecialtyRecord[];

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return richSpecialties.filter(
      (specialty) =>
        (category === "All" || specialty.category === category) &&
        `${specialty.name} ${specialty.category} ${specialty.description} ${specialty.tags.join(" ")} ${(specialty.subspecialties ?? []).join(" ")}`
          .toLowerCase()
          .includes(q),
    );
  }, [query, category, richSpecialties]);

  const addCompare = (id: string) => {
    setCompareIds((prev) => (prev.includes(id) || prev.length >= 3 ? prev : [...prev, id]));
  };

  const removeCompare = (id: string) => setCompareIds((prev) => prev.filter((x) => x !== id));

  return (
    <div className="space-y-12 pb-16">
      <Reveal>
        <section className="specialties-hero relative overflow-hidden rounded-[28px] p-7 text-white shadow-[0_18px_50px_rgba(30,110,146,0.18)] sm:p-10 lg:p-12">
          <div className="specialties-hero-glow" />
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow text-white/70">SPECIALTY PATHWAYS · 2026 GUIDE</div>
            <h1 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Choose the kind of medicine you want to practise.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              Compare training time, earnings, work rhythm, and subspecialty options before you commit to a pathway. Start with three detailed guides built for internationally minded doctors.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs font-bold">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2"><HeartPulse size={14} /> Cardiology</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2"><Sparkles size={14} /> Orthopaedic surgery</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2">◎ Ophthalmology</span>
            </div>
          </div>
          <div className="relative z-10 mt-9 flex flex-wrap gap-5 border-t border-white/15 pt-5 text-xs text-white/70 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0 sm:border-t-0 sm:pt-0">
            <span><strong className="block text-lg text-white">6</strong> primary destinations</span>
            <span><strong className="block text-lg text-white">3</strong> deep-dive guides</span>
            <span><strong className="block text-lg text-white">1</strong> clear next step</span>
          </div>
        </section>
      </Reveal>

      <section>
        <Reveal>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Start here</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Featured specialties</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Each guide brings the full picture together: what you do, how long it takes, what you can specialise in, and what the numbers look like across the six primary countries.</p>
            </div>
            <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold text-muted-foreground">Updated for planning · verify locally</span>
          </div>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((specialty, index) => (
            <Reveal key={specialty.id} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(31,75,98,0.14)]">
                <div className="specialty-card-image relative h-44 overflow-hidden">
                  <img src={specialty.image} alt={`${specialty.name} visual`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092a3b]/80 via-[#092a3b]/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-bold text-white"><span className="rounded-full bg-white/15 px-2.5 py-1 backdrop-blur">{specialty.category}</span><span className="rounded-full bg-white/15 px-2.5 py-1 backdrop-blur">{specialty.competitiveness}</span></div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-extrabold tracking-tight">{specialty.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{specialty.description}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2 border-y border-border py-4 text-xs">
                    <div><p className="font-bold text-foreground">Training</p><p className="mt-1 text-muted-foreground">{specialty.trainingYearsByCountry?.usa ?? "See guide"}</p></div>
                    <div><p className="font-bold text-foreground">Work shape</p><p className="mt-1 text-muted-foreground">{specialty.workStyle}</p></div>
                  </div>
                  <Link to={`/explore/${specialty.id}`} className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">Open the full guide <ArrowRight size={13} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow">Six-country lens</p>
              <h2 className="mt-2 text-xl font-extrabold tracking-tight">The comparison covers your main destinations</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Training names, registration routes, and salary conventions differ. Use the country pathway next to each guide for the local requirements.</p>
            </div>
            <Clock3 className="text-primary" size={20} />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {primaryCountries.map((country) => <div key={country.id} className="rounded-xl bg-secondary/60 px-3 py-3 text-center text-xs font-bold text-secondary-foreground"><span className="block text-[10px] text-muted-foreground">{country.flag}</span>{country.name}</div>)}
          </div>
        </section>
      </Reveal>

      <section>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Full library</p>
              <h2 className="mt-2 text-xl font-extrabold tracking-tight">Browse every pathway</h2>
            </div>
            <span className="text-xs font-bold text-muted-foreground">{filtered.length} specialties shown</span>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <div className="relative min-w-[230px] flex-1">
              <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search specialties or subspecialties" aria-label="Search specialties" className="h-11 w-full rounded-xl border border-border bg-card pl-9 pr-9 text-sm outline-hidden focus:border-primary/50 focus:ring-2 focus:ring-primary/15" />
              {query && <button onClick={() => setQuery("")} className="icon-button absolute right-0 top-1/2 h-9 w-9 -translate-y-1/2" aria-label="Clear specialty search"><X size={14} /></button>}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((item) => <button key={item} onClick={() => setCategory(item)} className={`filter-pill rounded-full px-3 py-2 text-xs font-bold ${category === item ? "active" : ""}`}>{item}</button>)}
            </div>
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-border bg-card/60 p-10 text-center"><p className="font-bold">No specialties match that search</p><p className="mt-1 text-sm text-muted-foreground">Try a broader term or clear the filters to see the full library.</p></div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((specialty, index) => {
              const saved = savedSpecialtyIds.includes(specialty.id);
              const compared = compareIds.includes(specialty.id);
              return (
                <Reveal key={specialty.id} delay={(index % 3) * 50}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    {specialty.image && <img src={specialty.image} alt="" className="mb-4 h-24 w-full rounded-xl object-cover" />}
                    <div className="flex items-start justify-between gap-2"><div><p className="text-[11px] font-bold uppercase tracking-wider text-primary">{specialty.category}</p><h3 className="mt-1 text-lg font-extrabold tracking-tight">{specialty.name}</h3></div><button onClick={() => toggleSpecialty(specialty.id)} className={`icon-button h-9 w-9 ${saved ? "text-primary" : ""}`} aria-label={`Save ${specialty.name}`}><Bookmark size={15} fill={saved ? "currentColor" : "none"} /></button></div>
                    <p className="mt-3 flex-1 text-sm leading-5 text-muted-foreground">{specialty.description}</p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-bold text-muted-foreground"><span>Competitiveness: {specialty.competitiveness}</span><span>{specialty.workStyle}</span></div>
                    <div className="mt-3 flex flex-wrap gap-1.5">{specialty.tags.map((tag) => <span key={tag} className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[10px] font-bold text-secondary-foreground">{tag}</span>)}</div>
                    <div className="mt-5 flex items-center justify-between gap-2"><Link to={`/explore/${specialty.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">See the pathway <ArrowRight size={12} /></Link>{compared ? <button onClick={() => removeCompare(specialty.id)} className="btn-quiet rounded-lg px-3 py-1.5 text-[11px] font-bold"><X size={11} className="mr-1 inline" /> In comparison</button> : <button onClick={() => addCompare(specialty.id)} className="btn-quiet rounded-lg px-3 py-1.5 text-[11px] font-bold">Add to comparison</button>}</div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      {compareIds.length > 0 && <aside className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 p-4 shadow-[0_-6px_24px_rgba(42,82,111,0.12)] backdrop-blur md:inset-x-auto md:left-1/2 md:max-w-3xl md:-translate-x-1/2 md:rounded-t-2xl"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><GitCompareArrows size={16} className="text-primary" /><p className="text-sm font-extrabold">Your working comparison</p><span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground">{compareIds.length}/3</span></div><button onClick={() => setCompareIds([])} className="text-xs font-bold text-muted-foreground hover:text-primary">Clear comparison</button></div>{compareIds.length < 3 ? <p className="mt-2 text-xs text-muted-foreground">Choose up to three specialties. Compare training shape and competitiveness together.</p> : <Link to="/compare" className="btn-primary mt-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs">Side-by-side view <ArrowRight size={13} /></Link>}</aside>}
    </div>
  );
}
