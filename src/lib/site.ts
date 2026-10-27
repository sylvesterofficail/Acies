/* ------------------------------------------------------------------
   All site content lives here. Edit this file to change text, team
   members, services or contact details — the pages update themselves.
   ------------------------------------------------------------------ */
import type { StaticImageData } from "next/image";
import sylvester from "@/assets/team/sylvester.jpeg";
import ebube from "@/assets/team/ebube.jpeg";
import chimah from "@/assets/team/chimah.jpeg";

export const contact = {
  phoneDisplay: "+234 814 397 2347",
  phone: "+2348143972347",
  whatsapp: "2348143972347",
  email: "aciesafricatech@gmail.com",
  instagram: "aciesafricatechnologies",
  address: "35 Nkanga Street, Nkap GRA, Ikot Ekpene, Akwa Ibom State",
  mapUrl: "https://maps.google.com/?q=35+Nkanga+Street+Nkap+GRA+Ikot+Ekpene+Akwa+Ibom",
  cac: "BN 9165061",
  registered: "5 January 2026",
};

export const waLink = (text: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/team/", label: "Team" },
  { href: "/contact/", label: "Contact" },
];

export type IconName =
  | "code" | "globe" | "ai" | "flow" | "cctv" | "panel" | "home" | "wrench"
  | "phone" | "mail" | "chat" | "ig" | "pin" | "shield" | "bolt" | "spark" | "check" | "arrow";

export type Service = {
  slug: string;
  icon: IconName;
  lane: "digital" | "physical";
  title: string;
  short: string;
  long: string;
  includes: string[];
  forWho: string;
  soon?: boolean;
};

export const services: Service[] = [
  {
    slug: "software",
    icon: "code",
    lane: "digital",
    title: "Custom software",
    short: "Management systems built around how your organisation actually works.",
    long: "We design and build software for the jobs your team does every day: patient records, school results, stock, billing, staff and reports. Every system is built for your workflow, works on phones and computers, and can keep running offline where the internet is unreliable.",
    includes: ["Hospital & clinic systems", "School portals", "POS & inventory", "HR & payroll", "Mobile apps (iOS & Android)", "Dashboards & reports"],
    forWho: "Hospitals, schools, government agencies, retailers and any team still running on paper or spreadsheets.",
  },
  {
    slug: "websites",
    icon: "globe",
    lane: "digital",
    title: "Websites",
    short: "Fast, mobile-first websites and web platforms you can update yourself.",
    long: "From a sharp company website to a full web platform with logins, payments and listings. We handle design, writing, hosting and search visibility, and hand you a site your team can update without calling a developer.",
    includes: ["Company websites", "Online stores", "Booking & listings platforms", "Payment integration", "Hosting & domains", "Search optimisation"],
    forWho: "Businesses, firms and institutions that need to be found and trusted online.",
  },
  {
    slug: "ai",
    icon: "ai",
    lane: "digital",
    title: "AI systems",
    short: "Assistants, document reading and forecasting trained on your own data.",
    long: "Practical AI that saves your staff hours: WhatsApp assistants that answer customers, systems that read forms and IDs, face-recognition attendance, and forecasts for stock and demand. Built on your data and kept private.",
    includes: ["WhatsApp & web assistants", "Document & ID scanning", "Face-recognition attendance", "Demand forecasting", "Data analysis & reporting"],
    forWho: "Organisations handling lots of documents, customer questions or data.",
  },
  {
    slug: "automation",
    icon: "flow",
    lane: "digital",
    title: "Automations",
    short: "Invoices, reminders, reports and approvals that happen on their own.",
    long: "We connect the tools you already use so repetitive work runs itself. Payment reminders go out on time, reports land in your inbox every Monday, and approvals move without anyone chasing them.",
    includes: ["Payment & rent reminders", "Automatic reports", "Approval workflows", "Tool & data integrations", "SMS, email & WhatsApp alerts"],
    forWho: "Any team losing hours to copy-paste, follow-ups and manual reports.",
  },
  {
    slug: "cctv",
    icon: "cctv",
    lane: "physical",
    title: "CCTV installation",
    short: "Camera systems you can watch live from your phone, day or night.",
    long: "We survey your site, plan camera positions, install and configure everything, and set up live viewing on your phone. Systems include night vision, recording with backup, and alerts when something moves where it shouldn't.",
    includes: ["Site survey & camera plan", "IP & HD cameras", "Night vision", "Live phone viewing", "Recording & backup", "Servicing"],
    forWho: "Offices, schools, estates, hospitals, shops and homes.",
  },
  {
    slug: "solar",
    icon: "panel",
    lane: "physical",
    title: "Solar panels & inverters",
    short: "Clean backup power sized to your load, so the lights and systems stay on.",
    long: "We measure what you actually use, then design and install solar panels, inverters and lithium batteries to match. Your building, servers and cameras keep running when the grid goes off, and you spend less on fuel.",
    includes: ["Load assessment", "Solar panel arrays", "Inverter & battery setup", "Changeover & wiring", "Monitoring", "Maintenance"],
    forWho: "Homes, offices, clinics, schools and businesses tired of generators.",
  },
  {
    slug: "support",
    icon: "wrench",
    lane: "physical",
    title: "Maintenance & support",
    short: "We stay after launch: updates, backups and on-site servicing.",
    long: "Every system we deliver can come with a support plan. We keep software updated, secure and backed up, and visit on schedule to service cameras, inverters and batteries.",
    includes: ["Software updates & security", "Daily backups", "Hosting", "Scheduled site visits", "Priority fixes"],
    forWho: "Every client who wants their system to keep working long after handover.",
  },
  {
    slug: "smart-home",
    icon: "home",
    lane: "physical",
    title: "Smart home automation",
    short: "Lights, gates, cameras, power and climate controlled from one app.",
    long: "Our next service brings everything together: control lighting, gates, cameras, air conditioning and your solar system from one app, with schedules and alerts. Built on the CCTV and power systems we already install.",
    includes: ["Smart lighting", "Gate & door control", "Climate control", "Energy monitoring", "One app for everything"],
    forWho: "Homeowners and estate developers.",
    soon: true,
  },
];

export const industries = [
  { name: "Health", line: "Patient records, lab results, pharmacy stock and billing for hospitals and clinics." },
  { name: "Government", line: "Document tracking, staff verification and citizen-facing portals for ministries and agencies." },
  { name: "Education", line: "Results, fees, attendance and parent portals for schools and universities." },
  { name: "Real estate", line: "Listings, tenant records, rent reminders and estate security." },
  { name: "Law", line: "Case files, client records, deadlines and secure document storage for chambers." },
  { name: "Hospitality", line: "Reservations, ordering, kitchen screens and room management for hotels and restaurants." },
  { name: "Retail & wholesale", line: "Point of sale, stock control and branch reporting that works offline." },
  { name: "Finance", line: "Customer onboarding, records and reporting for cooperatives and microfinance." },
  { name: "Logistics & energy", line: "Dispatch, tracking and transaction pipelines for field operations." },
  { name: "Churches & NGOs", line: "Member records, giving, events and reporting for faith and non-profit groups." },
  { name: "Agriculture", line: "Farm records, produce tracking and solar power for remote sites." },
  { name: "Homes & estates", line: "CCTV, solar backup and, soon, full smart home control." },
];

export const processSteps = [
  { title: "Talk", body: "A free call or site visit to understand the problem, the people and the budget." },
  { title: "Plan", body: "A written scope, timeline and price, with the system design laid out before any work begins." },
  { title: "Build & install", body: "We develop and test in short cycles and install hardware on site, showing you progress as we go." },
  { title: "Support", body: "Training for your staff, then updates, backups and servicing for as long as you need." },
];

export type Member = {
  name: string;
  role: string;
  focus: string;
  degree?: string;
  photo?: StaticImageData;
  lead?: boolean;
};

/* To add a team member: copy one block, fill in the details.
   For a photo, put the image in src/assets/team/ and import it at the top of this file. */
export const team: Member[] = [
  {
    name: "Sylvester Edidiong",
    role: "Founder & CEO",
    focus: "Fullstack software engineer. Leads product, architecture and client delivery.",
    degree: "B.Sc. Software Engineering, Topfaith University",
    photo: sylvester,
    lead: true,
  },
  {
    name: "Ebube Onyekpe",
    role: "Co-founder & CTO",
    focus: "Fullstack and mobile developer. Owns the engineering standards behind every build.",
    degree: "B.Sc. Software Engineering, Topfaith University",
    photo: ebube,
    lead: true,
  },
  {
    name: "Chimah Chidozie",
    role: "Data Officer & Software Engineer",
    focus: "Designs the databases, reports and data pipelines our systems run on.",
    degree: "B.Sc. Software Engineering",
    photo: chimah,
  },
];

/* Wider team size shown on the site. Update when you add or remove people. */
export const supportingStaff = 10;

export const partners = {
  monarch: {
    name: "MonarchByte",
    full: "MonarchByte Tech Solutions",
    kind: "Software company",
    instagram: "monarchbyte00",
  },
  gidahaven: {
    name: "GidaHaven",
    url: "https://gidahaven.com",
    kind: "Property platform",
  },
};

export const faqs = [
  { q: "How long does a project take?", a: "A website or small system is usually ready in 2 to 4 weeks. Larger platforms take 1 to 3 months. CCTV and solar installations are typically done within a few days once equipment is confirmed." },
  { q: "Will the software work when the internet is down?", a: "Yes, where it matters. Point of sale, attendance and clinic systems can keep working offline and sync automatically once the connection is back." },
  { q: "Can you combine software with CCTV or solar?", a: "That's what we're built for. A school can get its portal, cameras and backup power from one team, with one point of contact." },
  { q: "Do you support systems after launch?", a: "Yes. Maintenance plans cover updates, security fixes, backups, hosting and scheduled servicing of installed hardware." },
  { q: "Where do you work?", a: "We're based in Ikot Ekpene, Akwa Ibom State. Software projects run anywhere; installations are scheduled across Nigeria." },
  { q: "How do payments work?", a: "After the free consultation you get a written quote. Projects are usually paid in milestones, so you pay as each stage is delivered." },
];

/** "Custom software" -> "custom software", but "AI systems" and "CCTV installation" keep their acronyms. */
export const inSentence = (title: string) =>
  /^[A-Z]{2,}/.test(title) ? title : title.charAt(0).toLowerCase() + title.slice(1);
