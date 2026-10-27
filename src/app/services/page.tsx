import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { ServiceIndex } from "@/components/ServiceIndex";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CtaBand, Faq, ProcessSteps } from "@/components/blocks";
import { industries, inSentence, services, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom software, websites, AI systems, automations, CCTV installation, solar panels and inverters, maintenance, and smart home automation (coming soon).",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero kicker="Services" title="Everything your organisation runs on, from code to cables."
        lede="Seven services delivered by one team, with an eighth on the way. Pick one, or let us combine them into a single system." />

      <section className="pb-24">
        <div className="shell grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <ServiceIndex />

          <div className="space-y-6">
            {services.map((s) => {
              const power = s.slug === "solar";
              return (
                <Reveal key={s.slug}>
                  <article id={s.slug}
                    className={`scroll-mt-28 rounded-2xl border p-6 sm:p-10 ${s.soon ? "border-dashed border-sun/60 bg-sun-soft" : "border-line bg-surface"}`}>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className={`grid h-14 w-14 place-items-center rounded ${power || s.soon ? "bg-sun-soft text-sun" : "bg-teal-soft text-teal-strong"} ${s.soon ? "bg-surface" : ""}`}>
                        <Icon name={s.icon} className="h-7 w-7" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-muted">{s.lane === "digital" ? "Digital" : "Physical"}{s.soon && <span className="ml-2 font-semibold text-sun">Coming soon</span>}</p>
                        <h2 className="text-xl font-semibold sm:text-2xl">{s.title}</h2>
                      </div>
                    </div>

                    <p className="mt-6 max-w-[64ch] text-md text-body">{s.long}</p>

                    <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_1fr]">
                      <div>
                        <h3 className="font-sans text-base font-semibold tracking-normal">What's included</h3>
                        <Stagger className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {s.includes.map((inc) => (
                            <StaggerItem key={inc} className="flex items-start gap-2.5 text-body">
                              <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal text-onteal"><Icon name="check" className="h-3.5 w-3.5" /></span>
                              {inc}
                            </StaggerItem>
                          ))}
                        </Stagger>
                      </div>
                      <div className="rounded-xl bg-paper p-5">
                        <h3 className="font-sans text-base font-semibold tracking-normal">Who it's for</h3>
                        <p className="mt-2 text-body">{s.forWho}</p>
                      </div>
                    </div>

                    <a href={waLink(s.soon
                        ? `Hello Acies Africa, please add me to the ${inSentence(s.title)} waitlist.`
                        : `Hello Acies Africa, I'd like to ask about ${inSentence(s.title)}.`)}
                      target="_blank" rel="noopener" className={`${s.soon ? "btn-ghost bg-surface" : "btn-primary"} mt-8`}>
                      <Icon name="chat" /> {s.soon ? "Join the waitlist" : `Ask about ${inSentence(s.title)}`}
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-surface">
        <div className="shell">
          <Reveal className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Industries we serve</h2>
            <p className="lede mt-5">The same team, adapted to the rules and routines of your sector.</p>
          </Reveal>
          <Stagger className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <StaggerItem key={ind.name} className="bg-paper p-6 transition-colors duration-300 hover:bg-teal-soft">
                <h3 className="text-md font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted">{ind.line}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">How we deliver</h2>
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      <section className="pb-8">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Questions</h2></Reveal>
          <Reveal delay={0.1}><Faq /></Reveal>
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" body="Describe the problem and we'll recommend the right mix of software and hardware, with a clear price." />
    </>
  );
}
