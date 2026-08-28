export type CanadaIconName =
  | "alert"
  | "award"
  | "book"
  | "briefcase"
  | "building"
  | "check"
  | "clock"
  | "flag"
  | "globe"
  | "graduation"
  | "heart"
  | "home"
  | "language"
  | "map"
  | "plane"
  | "scale"
  | "shield"
  | "stethoscope"
  | "users"
  | "wallet";

export type CanadaReason = {
  title: string;
  body: string;
  icon: CanadaIconName;
};
export type CanadaRequirementGroup = {
  title: string;
  intro: string;
  items: string[];
  icon: CanadaIconName;
};
export type CanadaStage = {
  number: number;
  title: string;
  timeframe: string;
  body: string;
  actions: string[];
  checkpoint: string;
};
export type CanadaCostItem = { item: string; amount: string; note: string };
export type CanadaSalaryBand = {
  role: string;
  monthly: string;
  annual: string;
  note: string;
};
export type CanadaLifeCard = {
  title: string;
  body: string;
  icon: CanadaIconName;
};
export type CanadaVisaType = {
  title: string;
  body: string;
  icon: CanadaIconName;
};
export type CanadaHospital = {
  province: string;
  name: string;
  image: string;
  city: string;
  body: string;
  url: string;
  photoCredit: string;
  photoUrl: string;
};
export type CanadaSource = { label: string; url: string };

export const canadaPathway = {
  reasons: [
    {
      title: "A respected, publicly funded system",
      body: "Canada offers high-quality postgraduate education, strong academic centres, and a publicly funded health system. The attraction is professional development and long-term stability—not an easy shortcut.",
      icon: "shield",
    },
    {
      title: "Multiple IMG routes",
      body: "IMGs may pursue Canadian residency through CaRMS, Practice-Ready Assessment for experienced physicians, approved-jurisdiction routes, or specialty-specific eligibility routes. The right option depends on your training, experience, and province.",
      icon: "map",
    },
    {
      title: "Demand beyond the biggest cities",
      body: "Rural, remote, and underserved communities can offer recruitment opportunities and provincial support. Geographic flexibility may improve the practical options available to an IMG.",
      icon: "users",
    },
    {
      title: "A possible long-term immigration plan",
      body: "Canada provides permanent-residence routes through Express Entry and provincial, territorial, and regional programs. Current physician-focused measures are tied to Canadian work experience, job offers, or provincial support.",
      icon: "home",
    },
    {
      title: "English or French clinical practice",
      body: "Canada has two official languages and many training environments operate in English. French may be essential for specific provinces, programs, or patient populations, so language planning must be location-specific.",
      icon: "language",
    },
  ] satisfies CanadaReason[],
  requirementGroups: [
    {
      title: "Medical degree and source verification",
      intro:
        "Start by confirming that your medical school is acceptable for the Canadian route and that your credentials can be verified through the required service.",
      items: [
        "Medical degree from an international school listed in the World Directory of Medical Schools and recognised for the intended Canadian process",
        "Physiciansapply.ca account and source verification of the medical credential, unless the selected provincial authority gives different instructions",
        "Internship evidence, transcript, curriculum, licence or registration, certificates of employment, and specialty-training records where relevant",
        "Passport, identity documents, good-standing certificates, police clearances, and certified translations when requested",
      ],
      icon: "graduation",
    },
    {
      title: "MCC exams and the NAC Examination",
      intro:
        "Many CaRMS IMG streams require both the MCCQE Part I and the NAC Examination. Some provincial programs publish exceptions or additional assessments.",
      items: [
        "Pass the Medical Council of Canada Qualifying Examination Part I (MCCQE Part I)",
        "Pass the National Assessment Collaboration (NAC) Examination for the relevant CaRMS IMG route",
        "Obtain a Medical Identification Number for Canada (MINC) and enter it in the CaRMS application",
        "Check examination dates, eligibility, costs, score validity, and provincial exceptions directly before booking",
      ],
      icon: "award",
    },
    {
      title: "Language and communication",
      intro:
        "Safe practice requires clear communication with patients and teams in English or French. The accepted test and score depend on the regulator, province, program, and immigration route.",
      items: [
        "Confirm whether English or French evidence is required for the selected medical regulator and residency program",
        "Review accepted tests such as IELTS Academic, OET Medicine, CELPIP, or French-language assessments where applicable",
        "Prepare for patient-centred communication, consent, handover, documentation, and shared decision-making",
        "Check the immigration language requirement separately because it is not always identical to the medical regulator’s requirement",
      ],
      icon: "language",
    },
    {
      title: "Canadian status and provincial eligibility",
      intro:
        "The R-1 IMG match is not open on the same basis to every applicant worldwide. Citizenship, permanent residence, provincial criteria, and program streams control eligibility.",
      items: [
        "For the standard CaRMS R-1 IMG route, normally hold Canadian citizenship or permanent-resident status; exceptions may exist",
        "Review each province’s criteria, including return-of-service obligations, language rules, assessments, and program restrictions",
        "BC, Alberta, and Quebec may require a provincial assessment before an IMG can apply to certain CaRMS streams",
        "Do not assume that a work permit, visitor visa, or medical licence in one province automatically qualifies you for residency elsewhere",
      ],
      icon: "flag",
    },
    {
      title: "Professional and application readiness",
      intro:
        "The strongest applications combine exam readiness with evidence that you understand Canadian clinical practice and can contribute safely to the chosen program.",
      items: [
        "Current CV, personal statement, references, clinical experience, and a clear explanation of specialty and geographic preferences",
        "Canadian clinical exposure, observership, or supervised experience where useful and permitted; these do not guarantee a match",
        "Interview preparation for ethical reasoning, communication, teamwork, patient safety, and culturally safe care",
        "A realistic budget for exams, verification, travel, applications, relocation, licensing, and the period before the first salary",
      ],
      icon: "briefcase",
    },
  ] satisfies CanadaRequirementGroup[],
  stages: [
    {
      number: 1,
      title: "Choose the province and the IMG route",
      timeframe: "Start here",
      body: "First decide whether your profile fits CaRMS retraining, PRA, an approved-jurisdiction route, or a specialty-specific assessment. Compare the regulator, language, citizenship or status rules, return-of-service terms, and training locations before paying for exams.",
      actions: [
        "Read the current CaRMS provincial criteria and program descriptions",
        "Identify the provincial medical regulatory authority and its IMG checklist",
        "Compare CaRMS, PRA, approved-jurisdiction, and specialty routes",
      ],
      checkpoint:
        "You know which authority and pathway apply to your experience, status, and intended province.",
    },
    {
      number: 2,
      title: "Create physiciansapply.ca and verify credentials",
      timeframe: "Often several months",
      body: "Open the MCC account, confirm medical-school acceptability, and submit the primary credential for source verification. Start early because document requests, university responses, translations, and corrections can create delays.",
      actions: [
        "Confirm your school and graduation details in the World Directory",
        "Order official documents and track every submission and response",
        "Keep names, dates, and transliterations consistent across the file",
      ],
      checkpoint:
        "Your core medical credential is source-verified or you have a written explanation of the next step.",
    },
    {
      number: 3,
      title: "Complete language preparation and MCC exams",
      timeframe: "Plan around exam windows",
      body: "Prepare for the MCCQE Part I and NAC Examination when the selected route requires them. Build clinical communication skills alongside knowledge review; the NAC assesses readiness for supervised Canadian training, not only memorised facts.",
      actions: [
        "Confirm the current exam eligibility, dates, fee, and score rules",
        "Practise patient-centred communication and structured clinical reasoning",
        "Use official blueprints and provincial program guidance rather than old forum checklists",
      ],
      checkpoint:
        "You hold the exam results required by the stream and have confirmed any provincial assessment still outstanding.",
    },
    {
      number: 4,
      title: "Apply through CaRMS or to a provincial PRA",
      timeframe: "Route-dependent",
      body: "CaRMS is the retraining route for eligible IMGs who apply, interview, match, and complete a Canadian residency. PRA is designed for selected physicians who have already completed postgraduate training and practised independently abroad; its assessment period and obligations vary by province.",
      actions: [
        "Submit only to streams for which your citizenship/status and provincial profile are eligible",
        "For PRA, confirm specialty, independent practice history, employer support, assessment length, and return-of-service",
        "Keep a calendar for application opening, references, interviews, ranking, and licensing deadlines",
      ],
      checkpoint:
        "Your application is submitted to a route that explicitly accepts your profile—not just to a program that sounds relevant.",
    },
    {
      number: 5,
      title: "Secure supervised training and provincial registration",
      timeframe: "After selection",
      body: "A match or assessment invitation does not by itself equal an unrestricted licence. Complete the registration steps of the provincial regulator, follow supervision conditions, and clarify what clinical work is permitted before the start date.",
      actions: [
        "Read the registration decision and any practice restrictions carefully",
        "Confirm malpractice coverage, employer onboarding, immunisation, and health-screening requirements",
        "Document rotations, competencies, evaluations, and return-of-service terms",
      ],
      checkpoint:
        "The regulator and employer have confirmed your exact permitted role, supervision, start date, and conditions in writing.",
    },
    {
      number: 6,
      title: "Build the Canadian specialty record",
      timeframe: "During residency or assessment",
      body: "Residency duration depends on specialty and prior credit; PRA is shorter but is not a shortcut around competence assessment. Maintain a portfolio and ask the college or regulator how previous training will be counted.",
      actions: [
        "Review progress with the program director and provincial college",
        "Track procedures, rotations, exams, feedback, and continuing professional development",
        "Plan for certification through the CFPC, Royal College, or Quebec pathway as applicable",
      ],
      checkpoint:
        "Your training, certification, provincial registration, and immigration status all support the job you intend to do.",
    },
  ] satisfies CanadaStage[],
  costItems: [
    {
      item: "Credential verification and document preparation",
      amount: "Variable",
      note: "MCC services, university responses, translations, certified copies, courier fees, and country-specific verification can all add cost.",
    },
    {
      item: "MCCQE Part I",
      amount: "Check current MCC fee",
      note: "The fee and eligibility rules can change; use the current MCC examination page before payment.",
    },
    {
      item: "NAC Examination",
      amount: "Check current MCC fee",
      note: "The exam is used for CaRMS and some provincial routes; dates, locations, and fees are published by the responsible organisations.",
    },
    {
      item: "CaRMS applications",
      amount: "Program-dependent",
      note: "Application, translation, reference, travel, interview, and preparation costs vary with the number of programs and provinces.",
    },
    {
      item: "Travel and relocation",
      amount: "Case-dependent",
      note: "Budget for exams, interviews, observerships, rent deposit, insurance, winter clothing, transportation, and living costs before payroll.",
    },
    {
      item: "Licensing and registration",
      amount: "Province-specific",
      note: "Provincial colleges, specialty certification, liability coverage, and permits have separate requirements and fees.",
    },
  ] satisfies CanadaCostItem[],
  salaryBands: [
    {
      role: "Resident physician / PGY 1–5+",
      monthly: "About C$5.8k–C$7.6k gross",
      annual: "About C$69k–C$91k gross",
      note: "Planning range based on the current CaRMS postgraduate salary examples; exact salary, benefits, PGY scale, and province differ.",
    },
    {
      role: "Family physician after training",
      monthly: "Approximately C$7.6k–C$36.3k gross equivalent",
      annual: "C$90,826–C$435,240 wage range",
      note: "Government of Canada Job Bank wage data is a broad labour-market range, not a guaranteed offer. Billing model, overhead, location, hours, and practice mix matter.",
    },
    {
      role: "Specialist physician after training",
      monthly: "Varies substantially",
      annual: "Province, specialty, and model dependent",
      note: "Specialist compensation can differ materially by specialty, fee schedule, hospital funding, call, academic role, and community. Compare current provincial data rather than one national headline number.",
    },
  ] satisfies CanadaSalaryBand[],
  lifeCards: [
    {
      title: "Work-life balance",
      body: "Canada can offer a high quality of life, but residency and hospital practice still involve nights, weekends, call, documentation, exams, and emotional workload. Schedules vary by specialty, site, and collective agreement; ask for the actual rota and leave policy.",
      icon: "clock",
    },
    {
      title: "Gross is not take-home",
      body: "Taxes, pension or benefits, professional dues, malpractice coverage, childcare, housing, transportation, and—especially for physicians—practice overhead can change the amount available for personal spending.",
      icon: "wallet",
    },
    {
      title: "Geography changes the experience",
      body: "Toronto, Vancouver, and Montreal offer large academic networks but can be expensive and competitive. Smaller cities and rural communities may offer recruitment incentives, broader responsibilities, and different return-of-service obligations.",
      icon: "map",
    },
    {
      title: "Citizenship and passport timeline",
      body: "A common citizenship route requires permanent-resident status and at least 1,095 days of physical presence in Canada during the five-year eligibility period, plus other requirements such as tax filing where applicable, language proof and a citizenship test for many adults. A work permit or residency does not itself make you a citizen. After the citizenship certificate, apply separately for a Canadian passport.",
      icon: "flag",
    },
  ] satisfies CanadaLifeCard[],
  visaTypes: [
    {
      title: "Employer-specific work permit",
      body: "This permit is tied to an employer and usually requires a job offer plus the conditions required for the specific stream. It may be relevant to a physician or clinical role after the employer and provincial regulator confirm that the work is permitted.",
      icon: "briefcase",
    },
    {
      title: "Open work permit",
      body: "An open work permit generally does not require a specific job offer, but it is available only in defined situations. Do not assume that an open permit removes provincial medical-licensing or registration requirements.",
      icon: "globe",
    },
    {
      title: "Permanent residence through Express Entry",
      body: "Express Entry is an immigration selection system rather than a medical licence. Current IRCC physician information highlights a medical-doctor category tied to at least one year of full-time Canadian physician work experience in the last three years; confirm the current criteria before relying on it.",
      icon: "home",
    },
    {
      title: "Provincial or territorial nomination",
      body: "A province or territory may nominate a physician through its own program where the job offer, support letter, occupation, language, experience, and settlement conditions fit. IRCC states that physician nominees may have a work-permit process linked to the nomination; check the current provincial instructions.",
      icon: "flag",
    },
    {
      title: "Study or visitor status is not a practice licence",
      body: "A study permit or visitor status may support a different purpose, but neither automatically authorises patient-facing medical work. Confirm the immigration status, work authorisation, and provincial registration separately before starting any clinical activity.",
      icon: "plane",
    },
  ] satisfies CanadaVisaType[],
  advantages: [
    "High-quality postgraduate education and major academic health centres",
    "Several IMG routes, including CaRMS, PRA, approved jurisdictions, and specialty-specific pathways",
    "Potential long-term permanent-residence routes through Express Entry and provincial or territorial programs",
    "Strong professional communities, multicultural cities, and both English- and French-language environments",
    "Recruitment opportunities in rural, remote, and underserved communities may be stronger than in the largest cities",
  ],
  disadvantages: [
    "The IMG pathway is highly competitive, especially for popular specialties and metropolitan programs",
    "Citizenship or permanent-resident status is required for the standard CaRMS IMG route, subject to exceptions",
    "Requirements vary by province, program, regulator, language, assessment, and return-of-service agreement",
    "Winter can be extremely cold in many regions, and housing or childcare costs can be high in major cities",
    "Exam fees, credential verification, travel, licensing, and relocation create a substantial upfront budget",
    "A visa, work permit, or residency match does not automatically grant a full provincial medical licence",
  ],
  hospitals: [
    {
      province: "Ontario",
      name: "Toronto General Hospital — UHN",
      image: "/assets/canada/hospitals/toronto-general.jpg",
      city: "Toronto",
      body: "A major academic and tertiary-care centre within University Health Network, with broad specialty, research, and teaching activity.",
      url: "https://www.uhn.ca/PatientsFamilies/OurHospitals/TGH/Pages/default.aspx",
      photoCredit: "Wladyslaw / Wikimedia Commons, CC BY-SA 3.0",
      photoUrl:
        "https://commons.wikimedia.org/wiki/File:Toronto_-_ON_-_Toronto_General_Hospital.jpg",
    },
    {
      province: "British Columbia",
      name: "Vancouver General Hospital",
      image: "/assets/canada/hospitals/vancouver-general.jpg",
      city: "Vancouver",
      body: "A large teaching hospital and referral centre serving British Columbia through Vancouver Coastal Health and the University of British Columbia network.",
      url: "https://www.vch.ca/en/location/vancouver-general-hospital",
      photoCredit: "Vraptor888 / Wikimedia Commons, CC BY-SA 3.0",
      photoUrl:
        "https://commons.wikimedia.org/wiki/File:North_Vancouver_General_Hospital.jpg",
    },
    {
      province: "Quebec",
      name: "Montreal General Hospital — MUHC",
      image: "/assets/canada/hospitals/montreal-general.jpg",
      city: "Montreal",
      body: "Part of the McGill University Health Centre, with major clinical, academic, and teaching functions in Quebec’s bilingual environment.",
      url: "https://muhc.ca/homepage/page/mgh",
      photoCredit: "Colocho / Wikimedia Commons, CC BY-SA 3.0",
      photoUrl:
        "https://commons.wikimedia.org/wiki/File:Hôpital_Général_de_Montréal.JPG",
    },
    {
      province: "Alberta",
      name: "Foothills Medical Centre",
      image: "/assets/canada/hospitals/foothills-medical-centre.jpg",
      city: "Calgary",
      body: "A major Calgary teaching and referral hospital connected with Alberta Health Services and the University of Calgary.",
      url: "https://www.albertahealthservices.ca/fmc/page12787.aspx",
      photoCredit: "Qyd / Wikimedia Commons, CC BY-SA 3.0",
      photoUrl:
        "https://commons.wikimedia.org/wiki/File:Foothills_Hospital.JPG",
    },
    {
      province: "Alberta",
      name: "University of Alberta Hospital",
      image: "/assets/canada/hospitals/university-alberta.jpg",
      city: "Edmonton",
      body: "A tertiary academic hospital in Edmonton with complex-care, research, and teaching roles within the University of Alberta network.",
      url: "https://www.albertahealthservices.ca/ualberta/page13131.aspx",
      photoCredit: "KMW2700 / Wikimedia Commons, CC BY-SA 2.0",
      photoUrl:
        "https://commons.wikimedia.org/wiki/File:Medical_Helicopter_on_University_of_Alberta_Hospital_(8819942930).jpg",
    },
    {
      province: "Ontario",
      name: "St. Michael’s Hospital — Unity Health",
      image: "/assets/canada/hospitals/st-michaels.jpg",
      city: "Toronto",
      body: "An urban academic hospital with teaching, research, trauma, and complex-care services in downtown Toronto.",
      url: "https://unityhealth.to/st-michaels-hospital/",
      photoCredit: "Raysonho / Wikimedia Commons, CC0",
      photoUrl:
        "https://commons.wikimedia.org/wiki/File:StMichaelsHospital.jpg",
    },
    {
      province: "Ontario",
      name: "The Ottawa Hospital — Civic Campus",
      image: "/assets/canada/hospitals/ottawa-civic.jpg",
      city: "Ottawa",
      body: "The Civic Campus is part of The Ottawa Hospital, an academic network serving complex-care, trauma, and specialty needs in the national capital region.",
      url: "https://www.ottawahospital.on.ca/en/locations/civic-campus/",
      photoCredit: "SimonP / Wikimedia Commons, CC BY-SA 3.0",
      photoUrl:
        "https://commons.wikimedia.org/wiki/File:Civic_Hospital,_Ottawa.JPG",
    },
    {
      province: "Nova Scotia",
      name: "QEII Health Sciences Centre",
      image: "/assets/canada/hospitals/qeii-halifax.jpg",
      city: "Halifax",
      body: "Nova Scotia’s major academic and tertiary-care centre, linked with Dalhousie University and serving patients across Atlantic Canada.",
      url: "https://www.nshealth.ca/locations-and-facilities/qeii-health-sciences-centre",
      photoCredit: "Nephron / Wikimedia Commons, CC BY-SA 3.0",
      photoUrl: "https://commons.wikimedia.org/wiki/File:QE2HSC_2544.jpg",
    },
    {
      province: "Ontario",
      name: "London Health Sciences Centre",
      image: "/assets/canada/hospitals/london-health-sciences.jpg",
      city: "London",
      body: "A large teaching and research hospital network in southwestern Ontario with broad tertiary-care and specialty programs.",
      url: "https://www.lhsc.on.ca/",
      photoCredit: "Ken Lund / Wikimedia Commons, CC BY-SA 2.0",
      photoUrl:
        "https://commons.wikimedia.org/wiki/File:Downtown_London,_Ontario_(21838599905).jpg",
    },
  ] satisfies CanadaHospital[],
  sources: [
    {
      label: "Medical Council of Canada — IMG pathways",
      url: "https://mcc.ca/credentials-and-services/pathways-to-licensure/pathways-for-international-medical-graduates/",
    },
    {
      label: "CaRMS — R-1 IMG eligibility criteria",
      url: "https://www.carms.ca/match/r-1-main-residency-match/eligibility-criteria/",
    },
    {
      label: "CaRMS — postgraduate salary and benefits",
      url: "https://www.carms.ca/match/r-1-main-residency-match/salary/",
    },
    {
      label: "IRCC — live and work as a medical doctor in Canada",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/medical-doctors.html",
    },
    {
      label: "IRCC — temporary work permits",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary.html",
    },
    {
      label: "IRCC — citizenship eligibility and physical presence",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/adult-minor/who.html",
    },
    {
      label: "IRCC — after the citizenship ceremony and passport",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/citizenship-ceremony/after.html",
    },
    {
      label: "Government of Canada Job Bank — physician wages",
      url: "https://www.jobbank.gc.ca/wagereport/occupation/24431",
    },
    {
      label: "Canadian Medical Association — physician health survey",
      url: "https://www.cma.ca/latest-stories/pressure-progress-results-cmas-2025-national-physician-health-survey",
    },
  ],
} as const;
