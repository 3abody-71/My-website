import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  BriefcaseMedical,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  HeartPulse,
  Languages,
  LockKeyhole,
  PoundSterling,
  Stethoscope,
  TrainFront,
  Trophy,
} from "lucide-react";
import { assetPath } from "../lib/assetPath";

type Icon = typeof BadgeCheck;

const reasons = [
  {
    title: "Organised training",
    body: "The NHS uses a recognisable sequence: registration, service posts, foundation-equivalent experience, specialty recruitment, and certificate of completion of training (CCT).",
    icon: TrainFront,
  },
  {
    title: "English-language practice",
    body: "Clinical work, teaching, documentation, and exams are conducted in English, so there is no second-language requirement like the German language pathway.",
    icon: Languages,
  },
  {
    title: "Portable training",
    body: "GMC registration, NHS experience, and Royal College qualifications are widely understood by employers and training systems around the world.",
    icon: Trophy,
  },
  {
    title: "A more direct route than North America",
    body: "For many IMGs, PLAB and GMC registration can lead to paid NHS work without the USMLE–residency match sequence or Canada’s province-specific IMG bottlenecks. It is easier in relative terms, not easy.",
    icon: ArrowRight,
  },
];

const requirements = [
  {
    title: "English evidence",
    items: [
      "IELTS Academic: normally 7.5 overall with at least 7.0 in each component.",
      "OET Medicine: normally a B in each component; check the GMC’s current combination rules.",
      "The GMC may also accept other evidence, such as a qualifying UK job offer or primary medical qualification, in defined circumstances.",
    ],
  },
  {
    title: "Primary qualification and verification",
    items: [
      "A primary medical qualification that meets GMC criteria.",
      "Primary-source verification through the route required by the GMC/ECFMG before registration.",
      "Passport, identity documents, certificates, translations, and a complete five-year activity history.",
    ],
  },
  {
    title: "Internship and professional standing",
    items: [
      "For full registration after PLAB, an acceptable internship is normally required; the GMC assesses its rotations and supervision.",
      "Certificate of good standing from each relevant medical regulator.",
      "Fitness-to-practise declarations and evidence of recent clinical work where required.",
    ],
  },
  {
    title: "Registration route",
    items: [
      "PLAB 1 and PLAB 2 are the common IMG route to full GMC registration.",
      "An acceptable postgraduate qualification, including some Royal College qualifications such as MRCP (UK), may support another full-registration route.",
      "Registration with a licence to practise is separate from immigration permission and employment eligibility.",
    ],
  },
];

const stages = [
  [
    "1",
    "Confirm eligibility",
    "Check your medical school, internship pattern, English evidence, passport, and primary-source verification requirements on the GMC website.",
  ],
  [
    "2",
    "Pass English and PLAB 1",
    "PLAB 1 is a written single-best-answer examination. Prepare around UK clinical guidance, ethics, communication, and safe practice.",
  ],
  [
    "3",
    "Pass PLAB 2",
    "PLAB 2 is a practical clinical and communication examination held in the UK. Plan travel, documentation, and a realistic revision schedule.",
  ],
  [
    "4",
    "Apply for GMC registration",
    "After both parts and the remaining documents are ready, apply through GMC Online for full registration with a licence to practise.",
  ],
  [
    "5",
    "Get the first NHS job",
    "Most IMGs begin in a locally employed doctor, trust-grade, clinical fellow, or specialty doctor role. Use NHS Jobs, BMJ Careers, and trust websites.",
  ],
  [
    "6",
    "Build the training portfolio",
    "Collect NHS references, audits, quality-improvement work, teaching, courses, publications, and evidence of capability while learning the local system.",
  ],
  [
    "7",
    "Apply through Oriel",
    "Apply for the specialty and region that fit your experience. Some programmes are run-through; others are uncoupled and involve core followed by higher specialty training.",
  ],
];

const examDetails = [
  {
    name: "PLAB 1",
    label: "Written licensing exam",
    format:
      "180 single-best-answer questions in 3 hours. Each question has five answer options and starts with a short clinical scenario.",
    content:
      "Tests the applied knowledge, clinical reasoning, ethics, communication, and safe-practice level expected of a doctor beginning the second year of the UK Foundation Programme (FY2).",
    locations:
      "Available in the UK and in a number of international countries. The GMC shows the current cities and dates inside GMC Online, so availability can change by diet.",
    url: "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab/a-guide-to-the-plab-test",
  },
  {
    name: "PLAB 2",
    label: "Practical OSCE",
    format:
      "16 clinical scenarios, each lasting 8 minutes, designed to reflect real-life settings such as consultations and acute-ward encounters.",
    content:
      "Assesses clinical examination, communication, history-taking, explaining and planning management, professionalism, patient safety, and the ability to deal with difficult or urgent situations.",
    locations:
      "Held at the GMC clinical assessment centre in Manchester, United Kingdom. PLAB 2 is not offered overseas, so international candidates must plan travel and any required visitor permission.",
    url: "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab/plab-2-guide",
  },
  {
    name: "MRCP (UK) Part 1",
    label: "Physician knowledge / written",
    format:
      "Two computer-based papers, 3 hours each, with 100 best-of-five questions per paper; 200 questions in total and no negative marking.",
    content:
      "Covers clinical sciences and common or important disorders across areas such as cardiology, respiratory, renal, neurology, infectious diseases, endocrinology, gastroenterology, rheumatology, haematology, and clinical pharmacology.",
    locations:
      "Computer-based at UK and international test centres. The Federation publishes the current centre list and may change delivery arrangements by exam diet.",
    url: "https://www.thefederation.uk/examinations/part-1/format",
  },
  {
    name: "MRCP (UK) Part 2 Written",
    label: "Applied medicine / written",
    format:
      "Two computer-based papers, 3 hours each, with 100 best-of-five questions per paper; 200 questions in total and no negative marking.",
    content:
      "Questions may include clinical photographs, pathology, ECGs, X-rays, CT, MRI, echocardiograms, and investigation results. The focus is diagnosis, investigation, management, prognosis, and clinical problem-solving across the medical specialties.",
    locations:
      "Available at UK and international test centres listed by the Federation of the Royal Colleges of Physicians of the UK.",
    url: "https://www.thefederation.uk/examinations/part-2/format",
  },
  {
    name: "MRCP (UK) PACES",
    label: "Clinical examination",
    format:
      "Five clinical stations, eight patient or surrogate encounters, and about 125 minutes including the changeover periods.",
    content:
      "Assesses physical examination, identifying signs, clinical communication, differential diagnosis, clinical judgement, managing patient concerns, and maintaining patient welfare. Encounters include communication, respiratory, cardiovascular, neurological, abdominal, and consultation stations.",
    locations:
      "Run in UK clinical centres and selected international centres, including locations across the Middle East, South Asia, Africa, Asia-Pacific, and the Caribbean. Places and centres vary by diet.",
    url: "https://www.thefederation.uk/examinations/paces/format",
  },
];

const passportSteps = [
  [
    "Start UK medical work",
    "A GMC licence and an NHS job do not automatically create a route to citizenship. Most IMGs first hold a work visa such as Skilled Worker, subject to the rules in force.",
  ],
  [
    "Usually around 5 years",
    "If eligible, a qualifying work route may lead to indefinite leave to remain (ILR) after the required qualifying residence period. This is not automatic: salary, sponsorship, continuous residence, absences, English, and other requirements can matter.",
  ],
  [
    "After ILR",
    "For the standard naturalisation route, GOV.UK normally requires 5 years of UK residence and 12 months holding ILR or settled status. You usually need the Life in the UK Test, English-language evidence, good character, and the required residence and absence limits.",
  ],
  [
    "Citizenship decision",
    "A naturalisation application usually receives a decision within 6 months, although some cases take longer. Approval is followed by a citizenship ceremony and a certificate of naturalisation.",
  ],
  [
    "British passport",
    "Citizenship and a passport are separate. After receiving the naturalisation certificate, apply for the first British passport. HM Passport Office says you will usually receive it within 3 weeks after it receives the required documents, although cases needing more information can take longer.",
  ],
];

const salaries = [
  [
    "Foundation training",
    "£41,226–£47,610",
    "Basic salary range in England from 1 April 2026; nights, weekends, on-call, and other supplements can increase total pay.",
  ],
  [
    "Specialist training",
    "£55,355–£77,348",
    "Basic salary range in England from 1 April 2026 for doctors in specialist training.",
  ],
  [
    "Specialty doctor",
    "£63,696–£102,689",
    "Basic salary range in England from 1 April 2026; grade, experience, duties, and supplements matter.",
  ],
  [
    "Consultant",
    "£113,565–£150,569",
    "Basic salary range in England from 1 April 2026, before extra responsibilities or private work.",
  ],
];

const friendly = [
  "General Practice",
  "Psychiatry",
  "Internal Medicine / Acute Medicine",
  "Geriatric Medicine",
  "Emergency Medicine",
  "Histopathology and other pathology routes",
];
const competitive = [
  "Neurosurgery",
  "Cardiothoracic Surgery",
  "Plastic Surgery",
  "Dermatology",
  "Ophthalmology",
  "ENT",
  "Paediatric Surgery",
  "Orthopaedic Surgery",
];

const hospitals = [
  {
    name: "Guy’s and St Thomas’ NHS Foundation Trust",
    city: "London",
    body: "Large teaching trust with major tertiary, specialist, and academic services.",
    image: "/assets/uk/hospitals/guys-hospital.jpg",
    url: "https://www.guysandstthomas.nhs.uk/",
  },
  {
    name: "University College London Hospitals (UCLH)",
    city: "London",
    body: "Academic centre known for complex medicine, surgery, cancer, and research.",
    image: "/assets/uk/hospitals/uclh.jpg",
    url: "https://www.uclh.nhs.uk/",
  },
  {
    name: "Imperial College Healthcare NHS Trust",
    city: "London",
    body: "Major teaching trust linked to Imperial College London and specialist hospitals.",
    image: "/assets/uk/hospitals/imperial-st-marys.jpg",
    url: "https://www.imperial.nhs.uk/",
  },
  {
    name: "King’s College Hospital NHS Foundation Trust",
    city: "London",
    body: "Tertiary centre with strong liver, neurosciences, maternity, and trauma services.",
    image: "/assets/uk/hospitals/kings-college.jpg",
    url: "https://www.kch.nhs.uk/",
  },
  {
    name: "Oxford University Hospitals NHS Foundation Trust",
    city: "Oxford",
    body: "University hospital group with broad tertiary care and research exposure.",
    image: "/assets/uk/hospitals/oxford.jpg",
    url: "https://www.ouh.nhs.uk/",
  },
  {
    name: "Cambridge University Hospitals NHS Foundation Trust",
    city: "Cambridge",
    body: "Academic centre including Addenbrooke’s Hospital and specialist services.",
    image: "/assets/uk/hospitals/cambridge.jpg",
    url: "https://www.cuh.nhs.uk/",
  },
  {
    name: "Manchester University NHS Foundation Trust",
    city: "Manchester",
    body: "One of the UK’s largest trusts, spanning major adult and paediatric services.",
    image: "/assets/uk/hospitals/manchester.jpg",
    url: "https://mft.nhs.uk/",
  },
  {
    name: "University Hospitals Birmingham NHS Foundation Trust",
    city: "Birmingham",
    body: "Large multi-site teaching trust including Queen Elizabeth Hospital Birmingham.",
    image: "/assets/uk/hospitals/birmingham.jpg",
    url: "https://www.uhb.nhs.uk/",
  },
  {
    name: "University Hospitals Bristol and Weston NHS Foundation Trust",
    city: "Bristol / Weston",
    body: "Teaching trust with regional specialist, cardiac, paediatric, and surgical services.",
    image: "/assets/uk/hospitals/bristol.jpg",
    url: "https://www.uhbw.nhs.uk/",
  },
];

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {body && (
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
      )}
    </div>
  );
}

function IconBox({ icon: Icon }: { icon: Icon }) {
  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
      <Icon size={19} />
    </div>
  );
}

function SourceLink({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
    >
      {label}
      <ArrowUpRight size={13} />
    </a>
  );
}

function UkPathway() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[350px] overflow-hidden bg-[#1b2a3c]">
            <img
              src={assetPath("/assets/uk/uk-hero.jpg")}
              alt="United Kingdom pathway"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#111d2d]/95 via-[#203c58]/45 to-[#9c303e]/35" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/75">
                United Kingdom guide for IMGs
              </div>
              <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                A practical route into NHS medicine and specialty training.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">
                GMC registration, PLAB, MRCP, NHS jobs, salaries, work-life
                balance, immigration, specialties, and nine major hospitals.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <div className="eyebrow">Guide / contents</div>
            <h2 className="mt-2 text-xl font-extrabold">
              What is on this page?
            </h2>
            <nav
              className="mt-4 grid gap-2 text-sm"
              aria-label="UK guide contents"
            >
              {[
                ["why-uk", "Why choose the UK?"],
                ["requirements-uk", "IMG requirements"],
                ["pathway-uk", "PLAB, MRCP, and pathway"],
                ["life-uk", "Salaries and work-life"],
                ["specialties-uk", "Specialty difficulty"],
                ["hospitals-uk", "Nine important hospitals"],
                ["passport-uk", "Passport and settlement"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2.5 font-bold hover:border-primary/40 hover:bg-secondary/50"
                >
                  <span>{label}</span>
                  <ArrowRight size={14} className="text-primary" />
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="grid gap-4 border-t border-border bg-secondary/30 p-4 sm:grid-cols-[1fr_1.25fr] sm:p-5">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={assetPath("/assets/uk/uk-reaction-london.jpg")}
              alt="London skyline with the Palace of Westminster, London Eye, and River Thames"
              className="h-40 w-full object-cover"
            />
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="eyebrow">The honest version</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The UK can feel more straightforward than the USA or Canada
              because the registration route is nationally coordinated. It still
              involves exams, paperwork, competition, and persistence. In other
              words: bring your passport, your portfolio, and a respectable
              amount of tea.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-secondary px-3 py-1.5">GMC</span>
              <span className="rounded-full bg-secondary px-3 py-1.5">
                PLAB 1 + 2
              </span>
              <span className="rounded-full bg-secondary px-3 py-1.5">
                NHS jobs
              </span>
              <span className="rounded-full bg-secondary px-3 py-1.5">
                Oriel
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="why-uk">
        <SectionHeading
          eyebrow="01 / Why choose the UK?"
          title="Four reasons IMGs seriously consider Britain"
          body="The UK is not an effortless destination, but it offers a clearly signposted professional route and a large health service that employs doctors from around the world."
        />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <IconBox icon={reason.icon} />
              <div className="mt-4 text-xs font-bold text-primary">
                0{index + 1}
              </div>
              <h3 className="mt-1 text-base font-extrabold leading-5">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {reason.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="requirements-uk">
        <SectionHeading
          eyebrow="02 / IMG requirements"
          title="What you normally need before applying"
          body="The GMC decides the registration route. Treat the list below as a planning map and confirm every document, score, and deadline against the current official guidance."
        />
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {requirements.map(group => (
            <article
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <IconBox
                  icon={
                    group.title === "English evidence" ? Languages : BadgeCheck
                  }
                />
                <div>
                  <h3 className="text-lg font-extrabold">{group.title}</h3>
                  <div className="mt-4 space-y-3">
                    {group.items.map(item => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-6"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-1 shrink-0 text-primary"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-[#e5c992] bg-[#fffaf0] p-6">
          <div className="flex items-start gap-3">
            <LockKeyhole size={18} className="mt-0.5 shrink-0 text-[#9a5b12]" />
            <p className="text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground">Important:</strong> passing
              PLAB does not itself guarantee a job, a training number, or a
              visa. GMC registration, right to work, and employment are
              connected but separate decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="pathway-uk">
        <SectionHeading
          eyebrow="03 / Exams and pathway"
          title="PLAB first, then build your NHS career"
          body="For many IMGs, PLAB is the most direct registration route. MRCP and other Royal College qualifications are postgraduate credentials that can strengthen specialty applications and may support a different GMC registration route when the qualification and all other criteria are acceptable."
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
          <div className="space-y-4">
            {stages.map(([number, title, body]) => (
              <article
                key={number}
                className="route-step rounded-2xl border border-border bg-card p-5 pl-14 shadow-sm sm:p-6 sm:pl-16"
              >
                <span className="step-dot !top-6 !left-5">{number}</span>
                <h3 className="text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {body}
                </p>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-[#123f52] p-6 text-white shadow-lg lg:sticky lg:top-24">
            <div className="eyebrow !text-[#8bd3dc]">Exam decision</div>
            <h3 className="mt-2 text-xl font-extrabold">PLAB or MRCP?</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              PLAB is usually the quicker route to GMC registration and an NHS
              service job. MRCP is a demanding physician qualification with
              written and clinical components; it is valuable for medical
              specialties but is not a substitute for checking the GMC’s exact
              registration rules.
            </p>
            <div className="mt-5 space-y-3 text-xs leading-5 text-white/90">
              <div>
                <span className="font-bold text-[#8bd3dc]">PLAB:</span>{" "}
                registration-focused, broad clinical knowledge, practical
                communication.
              </div>
              <div>
                <span className="font-bold text-[#8bd3dc]">MRCP (UK):</span>{" "}
                postgraduate physician credential, useful for internal medicine
                progression.
              </div>
              <div>
                <span className="font-bold text-[#8bd3dc]">
                  Common strategy:
                </span>{" "}
                PLAB → NHS job → MRCP while working, if medicine is your
                intended specialty.
              </div>
            </div>
          </aside>
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="eyebrow">Exam detail / content and locations</div>
              <h3 className="mt-1 text-xl font-extrabold">
                What do PLAB and MRCP actually test?
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                “MRC” is often used informally to mean MRCP (UK). PLAB is the
                common IMG licensing assessment; MRCP (UK) is a postgraduate
                physician examination made up of Part 1, Part 2 Written, and
                PACES. They are different exams with different purposes.
              </p>
            </div>
            <BookOpen
              className="hidden shrink-0 text-primary sm:block"
              size={22}
            />
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {examDetails.map(exam => (
              <article
                key={exam.name}
                className="rounded-xl border border-border bg-secondary/30 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="text-base font-extrabold">{exam.name}</h4>
                  <span className="rounded-full bg-background px-2.5 py-1 text-[11px] font-bold text-primary">
                    {exam.label}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-6">
                  {exam.format}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {exam.content}
                </p>
                <div className="mt-3 rounded-lg border border-primary/15 bg-background/70 p-3 text-xs leading-5 text-muted-foreground">
                  <span className="font-bold text-foreground">Where:</span>{" "}
                  {exam.locations}
                </div>
                <a
                  href={exam.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Official exam guidance <ArrowUpRight size={13} />
                </a>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4">
            <SourceLink
              label="GMC PLAB guide"
              url="https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab/a-guide-to-the-plab-test"
            />
            <SourceLink
              label="MRCP written centres"
              url="https://www.thefederation.uk/examinations/part-1/uk-and-international-centres"
            />
            <SourceLink
              label="MRCP PACES centres"
              url="https://www.thefederation.uk/examinations/paces/centre-locations"
            />
          </div>
        </div>
      </section>

      <section id="life-uk">
        <SectionHeading
          eyebrow="04 / Money and lifestyle"
          title="Salary, work-life balance, and the passport question"
          body="The figures below are England basic salary ranges published for 2026. Scotland, Wales, and Northern Ireland use their own contracts and the total package changes with rota supplements, nights, weekends, location, and role."
        />
        <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
            {salaries.map(([role, pay, note]) => (
              <div key={role} className="p-5">
                <PoundSterling size={18} className="text-primary" />
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {role}
                </p>
                <p className="mt-1 text-xl font-extrabold">{pay}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6">
            <HeartPulse className="text-primary" size={20} />
            <h3 className="mt-3 text-lg font-extrabold">Work-life balance</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The NHS offers structured annual leave, pension access, study
              leave, and defined rotas. Reality varies by specialty and rota:
              emergency medicine, surgery, and understaffed departments can be
              intense, while psychiatry, pathology, and some outpatient roles
              may offer more predictable patterns.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <Globe2 className="text-primary" size={20} />
            <h3 className="mt-3 text-lg font-extrabold">
              Settlement and passport
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A medical job does not automatically grant British citizenship.
              Many doctors first use a work visa, later seek
              settlement/indefinite leave when eligible, and then apply for
              naturalisation if they meet residence, absence, character,
              language, and other legal requirements. Citizenship and a British
              passport are separate applications.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <Clock3 className="text-primary" size={20} />
            <h3 className="mt-3 text-lg font-extrabold">Time horizon</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The registration phase can be relatively quick, but specialty
              progression takes years. A realistic plan separates “getting
              licensed and employed” from “winning a training post” and from
              “qualifying as a consultant or GP.”
            </p>
          </article>
        </div>
        <div className="mt-7 rounded-2xl border border-[#d5e2f2] bg-[#f5f9ff] p-6 shadow-sm sm:p-7">
          <div className="flex items-start gap-3">
            <Globe2 className="mt-0.5 shrink-0 text-primary" size={20} />
            <div>
              <div className="eyebrow">
                Passport roadmap / general orientation
              </div>
              <h3 className="mt-1 text-xl font-extrabold">
                How long can an IMG expect to wait for a British passport?
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                For a doctor starting from overseas, a realistic minimum is
                often about six years before citizenship eligibility on the
                standard route: roughly five years of qualifying UK residence,
                then usually 12 months with ILR or settled status. This is a
                planning estimate, not a promise. Visa changes, gaps in
                residence, absences, processing time, and personal circumstances
                can make it longer.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {passportSteps.map(([title, body], index) => (
              <div
                key={title}
                className="relative rounded-xl border border-[#d5e2f2] bg-white/80 p-4"
              >
                <div className="text-xs font-extrabold text-primary">
                  0{index + 1}
                </div>
                <h4 className="mt-2 text-sm font-extrabold leading-5">
                  {title}
                </h4>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3 border-t border-[#d5e2f2] pt-4">
            <SourceLink
              label="Citizenship with ILR"
              url="https://www.gov.uk/apply-citizenship-indefinite-leave-to-remain"
            />
            <SourceLink
              label="First adult passport"
              url="https://www.gov.uk/apply-first-adult-passport"
            />
            <SourceLink
              label="HM Passport Office timing"
              url="https://www.gov.uk/government/organisations/hm-passport-office/about/about-our-services"
            />
          </div>
        </div>
      </section>

      <section id="specialties-uk">
        <SectionHeading
          eyebrow="05 / Specialty strategy"
          title="Which specialties are easier or harder for IMGs?"
          body="There is no permanently easy specialty. Competition changes by recruitment round, geography, portfolio, immigration policy, and the number of posts. These categories are strategic patterns, not guarantees."
        />
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#c9e6d3] bg-[#f5fff8] p-6">
            <h3 className="flex items-center gap-2 text-lg font-extrabold">
              <CheckCircle2 className="text-[#17834b]" size={19} /> Often more
              accessible
            </h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {friendly.map(item => (
                <div
                  key={item}
                  className="rounded-lg bg-white/75 p-3 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              Access can improve with NHS experience, geographic flexibility, a
              good portfolio, and evidence that you understand the specialty.
            </p>
          </article>
          <article className="rounded-2xl border border-[#edd1d1] bg-[#fff8f8] p-6">
            <h3 className="flex items-center gap-2 text-lg font-extrabold">
              <Trophy className="text-[#b52237]" size={19} /> Usually highly
              competitive
            </h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {competitive.map(item => (
                <div
                  key={item}
                  className="rounded-lg bg-white/80 p-3 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              These routes often require stronger evidence of commitment,
              audits, teaching, research, references, and excellent recruitment
              performance.
            </p>
          </article>
        </div>
      </section>

      <section id="hospitals-uk">
        <SectionHeading
          eyebrow="06 / Hospitals"
          title="Nine important UK hospitals and trusts to know"
          body="These are prominent teaching and tertiary centres, not a promise of IMG recruitment or a ranking. Check the trust’s current vacancies, training accreditation, and eligibility rules before applying."
        />
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital, index) => (
            <article
              key={hospital.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative h-44 overflow-hidden bg-secondary">
                <img
                  src={assetPath(hospital.image)}
                  alt={`${hospital.name} hospital exterior`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/85">
                    {hospital.city}
                  </p>
                  <span className="text-xs font-bold text-white/80">
                    0{index + 1}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-2">
                  <Building2
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <h3 className="text-base font-extrabold leading-5">
                    {hospital.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {hospital.body}
                </p>
                <a
                  href={hospital.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Official site <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="passport-uk"
        className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <IconBox icon={BriefcaseMedical} />
          <div>
            <h2 className="text-xl font-extrabold">
              Final checklist before you spend money
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Confirm the current GMC registration route, English evidence, PLAB
              booking rules, accepted postgraduate qualifications, visa route,
              and recruitment criteria. The GMC, NHS Employers, Health Careers,
              Oriel, Home Office, and each Royal College are the authoritative
              sources for current rules.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <SourceLink
                label="GMC registration"
                url="https://www.gmc-uk.org/registration-and-licensing"
              />
              <SourceLink
                label="GMC English guidance"
                url="https://www.gmc-uk.org/registration-and-licensing/join-our-registers/before-you-apply-guide-for-doctors/evidence-of-your-knowledge-of-english"
              />
              <SourceLink
                label="PLAB"
                url="https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab"
              />
              <SourceLink
                label="NHS pay"
                url="https://www.healthcareers.nhs.uk/explore-roles/doctors/pay-doctors"
              />
              <SourceLink
                label="British citizenship"
                url="https://www.gov.uk/british-citizenship"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Stethoscope };

// This guide is educational orientation, not medical, immigration, employment, or legal advice.
// Rules, salaries, exam formats, and recruitment priorities can change; verify each item with the relevant authority before applying.

export const ukPathwayMeta = {
  title: "The UK pathway for international medical graduates",
  updated: "August 2026",
};

export const ukPathwayIcon = Stethoscope;

export const ukPathwayNote =
  "An AI-authored orientation guide; check current GMC, NHS, Oriel, Royal College, and Home Office guidance before acting.";

export const ukPathwayComponents = { SectionHeading, IconBox, SourceLink };

export const ukPathwayVersion = 2;

export const ukPathwayFlags = {
  includesPlab: true,
  includesMrcp: true,
  includesHospitals: true,
};

export const ukPathwayAudience =
  "International medical graduates researching UK registration and training.";

export const ukPathwayDisclaimer =
  "This content is general information and not professional medical, legal, immigration, or employment advice.";

export const ukPathwaySources = [
  "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/registration-applications/application-guides/full-registration-for-international-medical-graduates",
  "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/before-you-apply-guide-for-doctors/evidence-of-your-knowledge-of-english",
  "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/before-you-apply-guide-for-doctors/acceptable-postgraduate-qualifications",
  "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/before-you-apply-guide-for-doctors/check-if-your-practical-training-internship-is-acceptable",
  "https://www.healthcareers.nhs.uk/explore-roles/doctors/pay-doctors",
  "https://www.gov.uk/british-citizenship",
  "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab/a-guide-to-the-plab-test",
  "https://www.thefederation.uk/examinations/part-1/format",
  "https://www.thefederation.uk/examinations/part-2/format",
  "https://www.thefederation.uk/examinations/paces/format",
  "https://www.thefederation.uk/examinations/part-1/uk-and-international-centres",
  "https://www.thefederation.uk/examinations/paces/centre-locations",
  "https://www.gov.uk/apply-citizenship-indefinite-leave-to-remain",
  "https://www.gov.uk/apply-first-adult-passport",
  "https://www.gov.uk/government/organisations/hm-passport-office/about/about-our-services",
];

export const ukPathwayData = {
  reasons,
  requirements,
  stages,
  salaries,
  friendly,
  competitive,
  hospitals,
};

export const ukPathwayBadge = "UK / IMG";

export const ukPathwayStatus = "published";

export const ukPathwaySections = [
  "why-uk",
  "requirements-uk",
  "pathway-uk",
  "life-uk",
  "specialties-uk",
  "hospitals-uk",
  "passport-uk",
];

export const ukPathwayDescription =
  "A nationally coordinated route through GMC registration, PLAB, NHS work, specialty training, salary, lifestyle, settlement, and major hospitals.";

export const ukPathwayLastReviewed = "2026-08-29";

export const ukPathwayHasGif = false;

export const ukPathwayImage = "/assets/uk/uk-reaction-london.jpg";

export const ukPathwayCountryId = "uk";

export const ukPathwayLanguage = "English";

export const ukPathwayLicenseNote =
  "The UK guide uses the user-supplied London skyline photo in the reaction-panel position.";

export const ukPathwayEnd = true;

export default UkPathway;
