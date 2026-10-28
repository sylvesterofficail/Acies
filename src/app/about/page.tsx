import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import cac from "@/assets/brand/cac-certificate.jpg";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { PartnerDiagram } from "@/components/Partnership";
import { Clients } from "@/components/Clients";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Counter, CtaBand, IndustryMarquee, TiltCard } from "@/components/blocks";
import { contact, industries, partners, services, supportingStaff, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Acies Africa Technologies is a CAC-registered technology company in Abuja, Port Harcourt and Akwa Ibom, building software and installing CCTV and solar for organisations across Nigeria.",
};

const principles = [
  { icon: "shield" as const, title: "We own the whole system", body: "Software, cameras and power from one team. When something needs fixing, there's one number to call and no finger-pointing between contractors." },
  { icon: "bolt" as const, title: "Built for real conditions", body: "Unreliable internet and power are design requirements, not excuses. Our systems work offline, sync later and stay on through outages." },
  { icon: "wrench" as const, title: "We stay after launch", body: "Handover is the start, not the end. We train your staff, keep systems updated and come back to service what we install." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About Acies" title="A technology company built for how Africa actually works."
        lede="Acies is Latin for the sharp edge of a blade, and the front line. We started Acies Africa Technologies to put that edge into the hands of hospitals, schools, government offices, firms and families across Nigeria." />

      {/* ---------- Story ---------- */}
      <section className="pb-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal className="space-y-6 text-md text-body">
            <h2 className="text-2xl font-semibold sm:text-3xl">Our story</h2>
            <p>
              Acies Africa Technologies was founded by software engineering graduates of Topfaith University with a simple idea: an organisation shouldn't need one vendor for software, another for cameras and a third for power, with nobody owning the result when something breaks.
            </p>
            <p>
              So we built a company that does all of it. Our engineers write the software, our installers fit the hardware, and the same team stays to keep everything running. Today we build management systems, websites, AI tools and automations, and install CCTV and solar inverter systems for clients in health, government, education, real estate, law and many more industries.
            </p>
            <p>
              We're registered with the Corporate Affairs Commission ({contact.cac}, {contact.registered}) and work from Abuja, Port Harcourt in Rivers State, and Akwa Ibom State, serving clients across Nigeria.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <TiltCard>
              <a href={cac.src} target="_blank" rel="noopener" className="group block rounded-2xl border border-line bg-surface p-4 shadow-soft">
                <div className="relative aspect-[727/927] overflow-hidden rounded-lg">
                  <Image src={cac} alt="Certificate of Registration for Acies Africa Technologies, Corporate Affairs Commission" fill
                    sizes="(min-width: 1080px) 36vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <p className="mt-4 flex items-center justify-between px-1 text-sm">
                  <span className="font-semibold text-ink">CAC Certificate of Registration</span>
                  <span className="text-muted">{contact.cac}</span>
                </p>
              </a>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ---------- Numbers ---------- */}
      <section className="diag-texture border-y border-line bg-surface py-16">
        <Stagger className="shell grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {[
            { n: 2026, label: "year registered with the CAC", raw: true },
            { n: services.filter((s) => !s.soon).length, label: "services under one roof" },
            { n: industries.length, label: "industries served" },
            { n: team.length + supportingStaff, label: "people on the team" },
          ].map((x) => (
            <StaggerItem key={x.label} className="border-l-2 border-teal pl-5">
              <p className="font-display text-3xl font-semibold text-ink md:text-4xl">{x.raw ? x.n : <Counter to={x.n} />}</p>
              <p className="mt-2 text-muted">{x.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------- Principles ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">How we work</h2>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <TiltCard className="h-full">
                  <div className="h-full rounded-xl border border-line bg-surface p-7 transition-[border-color,box-shadow] duration-300 hover:border-teal hover:shadow-lift">
                    <span className="grid h-12 w-12 place-items-center rounded bg-teal-soft text-teal-strong"><Icon name={p.icon} className="h-6 w-6" /></span>
                    <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-3 text-body">{p.body}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- Partners ---------- */}
      <section id="partners" className="section scroll-mt-20 border-y border-line bg-surface">
        <div className="shell">
          <Reveal className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Our partners</h2>
            <p className="lede mt-5">Good partners let us take on bigger work. These are the teams we build with.</p>
          </Reveal>

          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <Stagger className="grid gap-5">
              <StaggerItem>
                <div className="rounded-2xl border border-line bg-paper p-7 sm:p-9">
                  <p className="text-sm font-medium text-muted">Strategic partner · {partners.monarch.kind}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{partners.monarch.full}</h3>
                  <p className="mt-4 text-body">
                    MonarchByte is a software company and our closest engineering partner. We share projects, people and standards, and together we designed, built and launched gidahaven.com.
                  </p>
                  <a href={`https://www.instagram.com/${partners.monarch.instagram}/`} target="_blank" rel="noopener" className="btn-ghost mt-6"><Icon name="ig" /> @{partners.monarch.instagram}</a>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-2xl border border-line bg-paper p-7 sm:p-9">
                  <p className="text-sm font-medium text-muted">Partner platform · {partners.gidahaven.kind}</p>
                  <h3 className="mt-2 text-2xl font-semibold">GidaHaven</h3>
                  <p className="mt-4 text-body">
                    GidaHaven is a property platform for verified listings and tenant management, developed by Acies and MonarchByte. We continue to maintain and grow it together.
                  </p>
                  <a href={partners.gidahaven.url} target="_blank" rel="noopener" className="btn-ghost mt-6"><Icon name="globe" /> Visit gidahaven.com</a>
                </div>
              </StaggerItem>
            </Stagger>
            <div className="lg:sticky lg:top-32"><PartnerDiagram /></div>
          </div>
        </div>
      </section>

      <Clients />

      <section className="pt-4">
        <Reveal className="shell mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Industries we serve</h2>
          <Link href="/services/" className="font-semibold text-teal-strong underline underline-offset-4">See what we build for each</Link>
        </Reveal>
        <IndustryMarquee />
      </section>

      <CtaBand title="Work with a team that owns the result." />
    </>
  );
}
