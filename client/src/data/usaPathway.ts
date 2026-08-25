import type { LucideIcon } from "lucide-react";

export type UsaIconName =
  | "award"
  | "book"
  | "briefcase"
  | "check"
  | "clock"
  | "dollar"
  | "file"
  | "flag"
  | "globe"
  | "graduation"
  | "heart"
  | "home"
  | "hospital"
  | "map"
  | "scale"
  | "shield"
  | "stethoscope"
  | "star"
  | "users";

export type UsaReason = { title: string; body: string; icon: UsaIconName };
export type UsaRequirement = { title: string; body: string; details: string[]; icon: UsaIconName };
export type UsaStage = { number: number; title: string; body: string };
export type UsaSalaryBand = { role: string; typical: string; note: string };
export type UsaHospital = { name: string; city: string; body: string; image: string; url: string };

const image = (name: string) => `/assets/usa/${name}`;

export const usaPathway = {
  reasons: [
    { title: "High salaries", body: "The USA offers some of the highest physician salaries in the world, especially after residency.", icon: "dollar" },
    { title: "Advanced medicine", body: "Many hospitals use leading medical technology, tools, and treatments.", icon: "hospital" },
    { title: "Residency and research", body: "Powerful residency programs, research opportunities, and experienced doctors are available across the country.", icon: "graduation" },
    { title: "Trusted reputation", body: "U.S. medical training and institutions have a strong global reputation.", icon: "globe" },
    { title: "A lot of opportunity", body: "The USA is a large country with many jobs, specialties, cities, and career opportunities.", icon: "briefcase" },
    { title: "Build a life and wealth", body: "It is one of the countries many physicians choose for living, working, and building wealth.", icon: "home" },
  ] satisfies UsaReason[],
  requirements: [
    {
      title: "For international medical graduates (IMGs)",
      body: "Start by checking that your medical school is eligible for the ECFMG pathway and prepare your documents early.",
      details: [
        "Medical degree from an eligible school listed in the World Directory of Medical Schools.",
        "ECFMG account, identity documents, diploma, transcript, and primary-source verification.",
        "English and communication evidence according to the ECFMG pathway for your application year.",
        "A realistic plan for exam fees, applications, travel, clinical experience, visa, and living costs.",
      ],
      icon: "file",
    },
    {
      title: "USMLE Step 1 and Step 2 CK",
      body: "USMLE exams are a central part of the IMG route to U.S. residency.",
      details: [
        "Step 1 focuses on the basic science knowledge used in medicine and is reported as pass or fail.",
        "Step 2 Clinical Knowledge (CK) tests clinical knowledge and gives a three-digit score.",
        "After the exams, complete the applicable ECFMG certification requirements before residency starts.",
        "Always check the current ECFMG and Match-year rules before scheduling an exam.",
      ],
      icon: "check",
    },
  ] satisfies UsaRequirement[],
  stages: [
    { number: 1, title: "Finish medical school", body: "Complete your medical degree and keep your diploma, transcript, internship, and identity documents ready for IMG verification." },
    { number: 2, title: "Prepare for USMLE Step 1 and Step 2 CK", body: "Build a study plan, sit both exams, and protect enough time to submit a strong and accurate application." },
    { number: 3, title: "Complete ECFMG certification", body: "Create your ECFMG account, verify your school and credentials, complete the applicable pathway, and meet the English or communication requirement." },
    { number: 4, title: "Build the IMG application", body: "Gain suitable U.S. clinical experience where possible, prepare your CV and personal statement, and request strong letters of recommendation." },
    { number: 5, title: "Apply through ERAS and interview", body: "Research IMG-friendly programs, check graduation-year and visa rules, submit through ERAS, and prepare for interviews." },
    { number: 6, title: "Match into residency", body: "Enter the NRMP Match, rank programs carefully, and complete the visa, medical licensing, and onboarding steps for your program." },
    { number: 7, title: "Residency, fellowship, or attending work", body: "Complete residency, then choose attending practice, fellowship, research, teaching, public health, or another medical career." },
  ] satisfies UsaStage[],
  advantages: [
    "High physician salaries after training.",
    "Advanced technology and large academic hospitals.",
    "Many residency, fellowship, research, and specialty opportunities.",
    "A large country with many cities, communities, and lifestyles.",
    "Strong professional and global reputation.",
  ],
  disadvantages: [
    "The IMG pathway is expensive, competitive, and long.",
    "USMLE exams, applications, travel, and visa steps require planning and money.",
    "Residency can include long hours, night shifts, and pressure.",
    "IMGs may face stronger competition and fewer program options in some specialties.",
    "Housing, healthcare, transport, and childcare can be expensive.",
  ],
  salaryBands: [
    { role: "Resident", typical: "$68k–$94k per year", note: "Typical range changes by program year, hospital, and city." },
    { role: "Attending physician", typical: "$239k+ per year", note: "Specialty, location, practice type, taxes, and benefits change the final amount." },
  ] satisfies UsaSalaryBand[],
  lifestyleCards: [
    { title: "Work–life balance", body: "Residency is demanding. Later balance depends on specialty, workplace, schedule, location, and your personal priorities.", icon: "clock" as UsaIconName },
    { title: "Opportunities", body: "IMGs can find opportunities in clinical medicine, research, teaching, public health, health technology, and administration.", icon: "briefcase" as UsaIconName },
    { title: "Passport timeline", body: "Citizenship is commonly possible after about five years as a lawful permanent resident, if all requirements are met. Residency or a work visa alone does not give a passport.", icon: "flag" as UsaIconName },
  ],
  hospitals: [
    { name: "Cleveland Clinic", city: "Cleveland, Ohio", body: "Leading academic medical center and specialty health system.", image: image("cleveland-clinic.jpg"), url: "https://my.clevelandclinic.org/" },
    { name: "Mayo Clinic", city: "Rochester, Minnesota", body: "Well-known for integrated care, education, and research.", image: image("mayo-clinic.jpg"), url: "https://www.mayoclinic.org/" },
    { name: "Johns Hopkins Medicine", city: "Baltimore, Maryland", body: "Major academic medicine and biomedical research network.", image: image("johns-hopkins.jpg"), url: "https://www.hopkinsmedicine.org/" },
    { name: "NewYork-Presbyterian", city: "New York, New York", body: "Large teaching hospital network connected with major universities.", image: image("newyork-presbyterian.jpg"), url: "https://www.nyp.org/" },
    { name: "Massachusetts General Hospital", city: "Boston, Massachusetts", body: "Historic teaching hospital with advanced clinical care and research.", image: image("mass-general.jpeg"), url: "https://www.massgeneral.org/" },
    { name: "UCSF Medical Center", city: "San Francisco, California", body: "Academic medical center with specialist care and research programs.", image: image("ucsf-medical-center.jpg"), url: "https://www.ucsfhealth.org/" },
    { name: "Ronald Reagan UCLA Medical Center", city: "Los Angeles, California", body: "Major university hospital with complex-care services.", image: image("ucla-medical-center.jpg"), url: "https://www.uclahealth.org/hospitals/ronald-reagan" },
    { name: "NYU Langone Health", city: "New York, New York", body: "Academic health system with hospitals, research, and specialty care.", image: image("nyu-langone.jpg"), url: "https://nyulangone.org/" },
    { name: "Stanford Hospital", city: "Palo Alto, California", body: "University hospital known for innovation, technology, and research.", image: image("stanford-hospital.jpg"), url: "https://stanfordhealthcare.org/" },
  ] satisfies UsaHospital[],
} as const;

export type UsaPathway = typeof usaPathway;
export type UsaIconMap = Record<UsaIconName, LucideIcon>;
