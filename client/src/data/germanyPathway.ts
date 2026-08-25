export type IconName =
  | "badge"
  | "book"
  | "briefcase"
  | "check"
  | "clock"
  | "euro"
  | "globe"
  | "heart"
  | "home"
  | "language"
  | "map"
  | "scale"
  | "shield"
  | "stethoscope"
  | "users";

export type GermanyReason = {
  title: string;
  body: string;
  icon: IconName;
};

export type GermanyRequirementGroup = {
  title: string;
  intro: string;
  items: string[];
  icon: IconName;
};

export type GermanyStage = {
  number: number;
  title: string;
  timeframe: string;
  body: string;
  actions: string[];
  checkpoint: string;
};

export type GermanySalaryBand = {
  role: string;
  monthly: string;
  annual: string;
  note: string;
};

export const germanyPathway = {
  reasons: [
    {
      title: "A paid route into specialty training",
      body: "German specialty training is employment-based: junior physicians are paid while they gain supervised clinical experience, rather than treating residency as an unpaid course.",
      icon: "briefcase",
    },
    {
      title: "A clear licensing destination",
      body: "Approbation is the full, unrestricted licence to practise medicine. The recognition process gives international graduates a defined route to compare their qualification with German standards.",
      icon: "badge",
    },
    {
      title: "Many types of hospitals and regions",
      body: "You can compare university hospitals, teaching hospitals, regional clinics, and smaller towns. The right first job may be outside the largest cities, where demand and competition can differ.",
      icon: "map",
    },
    {
      title: "A strong long-term professional base",
      body: "Germany combines structured specialty training, social insurance, and the possibility of continuing toward a Facharzt qualification or another clinical career path.",
      icon: "shield",
    },
    {
      title: "A new language and life experience",
      body: "German is a serious commitment, but it also opens everyday life, patient relationships, and professional opportunities that are not available through English alone.",
      icon: "globe",
    },
  ] satisfies GermanyReason[],
  requirementGroups: [
    {
      title: "Medical education and professional standing",
      intro: "Start with evidence that you completed the training required to qualify as a doctor in your home country.",
      items: [
        "Medical degree or diploma and evidence of completed medical education",
        "Internship or practical training evidence, where required for your qualification",
        "Certificate of current professional status or good standing from the relevant authority",
        "Detailed transcript, curriculum, and employment or specialty certificates if requested",
      ],
      icon: "stethoscope",
    },
    {
      title: "German language evidence",
      intro: "Patient safety depends on accurate communication, documentation, and handovers.",
      items: [
        "General German commonly at B2 level before the professional language stage",
        "Medical German assessment, usually the Fachsprachprüfung at approximately C1 Medizin level",
        "A plan to keep improving clinical vocabulary, pronunciation, documentation, and patient explanations",
      ],
      icon: "language",
    },
    {
      title: "Recognition and licensing",
      intro: "The competent authority is normally the Approbationsbehörde in the federal state (Land) where you plan to work.",
      items: [
        "An equivalence assessment of your foreign medical qualification",
        "Approbation for unrestricted practice, or a time-limited Berufserlaubnis where the authority permits it",
        "Kenntnisprüfung if the authority identifies substantial differences in medical knowledge",
        "Registration or membership with the responsible State Chamber of Physicians once you are working in that area",
      ],
      icon: "badge",
    },
    {
      title: "Personal, health, and legal documents",
      intro: "Exact lists vary by Land and by your nationality, so confirm the current checklist with the responsible authority.",
      items: [
        "Passport or identity document and a current CV",
        "Certified copies and German translations of requested documents",
        "Police clearance or certificate of good conduct",
        "Medical fitness certificate and any required proof of professional reliability",
        "Proof of address, visa, residence permission, or right to work when applicable",
      ],
      icon: "shield",
    },
    {
      title: "Job-readiness and practical preparation",
      intro: "Licensing paperwork and job applications run in parallel; do not wait until the last week to prepare for interviews.",
      items: [
        "A German-format CV and a short application letter for hospitals",
        "References, translated work certificates, and a clear explanation of your clinical experience",
        "Interview preparation for patient communication, ward rounds, and emergency scenarios",
        "A realistic budget for exams, translations, travel, housing, and the period before your first salary",
      ],
      icon: "briefcase",
    },
  ] satisfies GermanyRequirementGroup[],
  stages: [
    {
      number: 1,
      title: "Choose your target Land and check eligibility",
      timeframe: "Start here",
      body: "Germany’s licensing process is administered through the federal states. Select where you realistically want to live or work, then identify the responsible Approbationsbehörde and State Chamber of Physicians.",
      actions: [
        "Compare the authority checklist for your chosen Land",
        "Check whether your medical school and internship documents can be verified",
        "Create a simple budget and timeline for language, documents, exams, and relocation",
      ],
      checkpoint: "You know which authority receives your application and which documents it expects.",
    },
    {
      number: 2,
      title: "Build German from everyday communication to medical language",
      timeframe: "Often the longest preparation stage",
      body: "Aim for strong general German first, then train specifically for clinical conversations, patient histories, discharge summaries, and handovers. The commonly used pattern is B2 general German plus a professional medical language exam.",
      actions: [
        "Study grammar, listening, speaking, and writing—not vocabulary alone",
        "Practise explaining diagnoses and treatment plans in plain German",
        "Use role-play to prepare for the Fachsprachprüfung format used in your Land",
      ],
      checkpoint: "You can conduct a structured history, write a concise medical note, and explain your reasoning clearly.",
    },
    {
      number: 3,
      title: "Prepare, certify, and translate your documents",
      timeframe: "Before submission",
      body: "Collect the full application set early. Missing translations, inconsistent names, or unclear internship evidence can slow an otherwise strong application.",
      actions: [
        "Request degree verification, transcript, internship evidence, and good standing documents",
        "Use the translation and certification format accepted by the authority",
        "Keep a digital folder with scans, expiry dates, and submission receipts",
      ],
      checkpoint: "Your file is complete enough for the authority to assess rather than return for missing items.",
    },
    {
      number: 4,
      title: "Apply for recognition and the licence route",
      timeframe: "Authority review",
      body: "Submit your application for recognition to the responsible state authority. The result can be direct equivalence, a request for additional evidence, or a requirement to demonstrate knowledge through an exam.",
      actions: [
        "Submit through the official channel and answer follow-up requests promptly",
        "Track the decision and any deadline for examinations or additional documents",
        "Ask the authority which temporary work permission may be available while the case is progressing",
      ],
      checkpoint: "You have a written decision or a clear next action from the competent authority.",
    },
    {
      number: 5,
      title: "Pass the Fachsprachprüfung and, if required, the Kenntnisprüfung",
      timeframe: "Only the exams that apply to your decision",
      body: "The Fachsprachprüfung tests professional communication. A Kenntnisprüfung may be required when the authority finds substantial differences between your training and German medical standards.",
      actions: [
        "Prepare with clinical case simulations, documentation practice, and handover language",
        "Build a subject plan for internal medicine, surgery, emergency care, pharmacology, and legal basics if the knowledge exam applies",
        "Confirm the exam provider, format, fees, and retake rules in your Land",
      ],
      checkpoint: "You have the language and knowledge results required for the licence step identified in your decision.",
    },
    {
      number: 6,
      title: "Secure your first hospital position",
      timeframe: "Job search can overlap with licensing",
      body: "Search for Assistenzarzt or junior physician positions at accredited training institutions. Some employers will interview while your licence process is active, but your start date and permitted duties depend on the permission you hold.",
      actions: [
        "Apply through hospital career pages, the Federal Employment Agency, and medical job boards",
        "Ask each employer whether the role supports specialty training and what licence is required on day one",
        "Compare salary, on-call duties, supervision, teaching quality, housing, and commute—not salary alone",
      ],
      checkpoint: "You have a written offer that states the role, department, salary, hours, start date, and licence condition.",
    },
    {
      number: 7,
      title: "Start supervised work and complete the full licence step",
      timeframe: "After the required permission is granted",
      body: "Once the relevant authority allows you to work, begin in the role permitted by your licence. With Approbation, you hold the unrestricted professional licence; specialty training then continues through paid clinical employment under the rules of the relevant State Chamber.",
      actions: [
        "Complete hospital onboarding, occupational health checks, and local documentation training",
        "Register with the responsible State Chamber of Physicians where required",
        "Keep a log of training rotations, competencies, certificates, and feedback",
      ],
      checkpoint: "You are legally permitted to work in the role, understand your supervision structure, and have a documented training plan.",
    },
  ] satisfies GermanyStage[],
  advantages: [
    "Paid specialty training with salary from employment rather than an unpaid residency model",
    "A nationally recognisable Approbation and a structured route through State Chambers of Physicians",
    "Strong social insurance and public services compared with many alternative destinations",
    "A wide range of hospitals, regions, specialties, and long-term career options",
    "German language skills can support deeper patient relationships and daily integration",
  ],
  disadvantages: [
    "German is essential for safe clinical work; reaching and maintaining professional fluency takes sustained effort",
    "The recognition process is document-heavy and details differ between federal states",
    "You may need one or more exams, and the timeline can be unpredictable",
    "Shift work, nights, weekends, and administrative pressure can still make hospital life demanding",
    "Large cities can be expensive and competitive for housing, while smaller towns may require more effort to build a social network",
  ],
  salaryBands: [
    {
      role: "Assistenzarzt / resident physician",
      monthly: "About €5,500–€6,200 gross / month",
      annual: "About €66,000–€74,000 gross / year",
      note: "Usually increases with training year and depends on the hospital tariff or contract.",
    },
    {
      role: "Facharzt / specialist",
      monthly: "About €7,300–€8,300 gross / month",
      annual: "About €88,000–€100,000 gross / year",
      note: "On-call work, experience, specialty, and employer can change total compensation.",
    },
    {
      role: "Oberarzt / senior physician",
      monthly: "About €9,200–€10,600 gross / month",
      annual: "About €110,000–€127,000 gross / year",
      note: "Leadership responsibility and additional duties may materially affect the package.",
    },
  ] satisfies GermanySalaryBand[],
  lifeCards: [
    {
      title: "Work-life balance",
      body: "A contract may offer defined working-time rules, leave, and social protections, but medicine still includes nights, weekends, emergency work, and overtime. Ask about the real rota, not only the headline hours.",
      icon: "clock" as IconName,
    },
    {
      title: "People and workplace culture",
      body: "Germany is diverse, and hospital teams vary by region and department. Communication can feel direct and formal at first; reliable teamwork, respectful questions, and steady language practice usually matter more than trying to copy a stereotype.",
      icon: "users" as IconName,
    },
    {
      title: "Everyday life",
      body: "Public transport, healthcare, education, parks, and cultural life can make Germany comfortable for many professionals. Budget for rent, deposits, insurance, transport, and the cost differences between major cities and smaller towns.",
      icon: "home" as IconName,
    },
  ],
  sources: [
    {
      label: "German Medical Association — Work and training in Germany",
      url: "https://www.bundesaerztekammer.de/en/work-and-training-in-germany",
    },
    {
      label: "Recognition in Germany — Doctor of medicine",
      url: "https://www.anerkennung-in-deutschland.de/html/en/2688.php",
    },
    {
      label: "Marburger Bund — collective agreements and salary tables",
      url: "https://www.marburger-bund.de/bundesverband/tarifvertraege",
    },
    {
      label: "Federal Employment Agency — Germany job portal",
      url: "https://www.arbeitsagentur.de/",
    },
  ],
} as const;
