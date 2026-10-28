import Link from "next/link";
import { DiamondHero } from "@/components/DiamondHero";
import { HeroCopy } from "@/components/HeroCopy";
import { Icon } from "@/components/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Counter, CtaBand, Faq, IndustryMarquee, ProcessSteps, TiltCard } from "@/components/blocks";
import { PartnerDiagram } from "@/components/Partnership";
import { Clients } from "@/components/Clients";
import { Portrait } from "@/components/Team";
import { faqs, industries, partners, services, supportingStaff, team, waLink } from "@/lib/site";

export default function Home() {
  const digital = services.filter((s) => s.lane === "digital");
  const physical = services.filter((s) => s.lane === "physical" && !s.soon);
  const soon = services.find((s) => s.soon)!;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="shell grid items-center gap-10 md:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <div className="order-2 md:order-1">
            <HeroCopy />
          </div>
          <div className="order-1 mx-auto w-[min(76vw,340px)] md:order-2 md:w-full md:max-w-[480px]">
            <DiamondHero />
          </div>
        </div>
      </section>

      <IndustryMarquee />

      {/* ---------- Numbers ---------- */}
      <section className="py-16 md:py-20">
        <Stagger className="shell grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {[
            { n: services.filter((s) => !s.soon).length, s: "", label: "services under one roof" },
            { n: industries.length, s: "+", label: "industries served" },
            { n: team.length + supportingStaff, s: "", label: "people on the team" },
            { n: 24, s: "h", label: "to reply with a plan" },
          ].map((x) => (
            <StaggerItem key={x.label} className="border-l-2 border-teal pl-5">
              <p className="font-display text-3xl font-semibold text-ink md:text-4xl"><Counter to={x.n} suffix={x.s} /></p>
              <p className="mt-2 text-muted">{x.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------- What we do ---------- */}
      <section className="section border-y border-line bg-surface">
        <div className="shell">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">On the screen and on the site</h2>
              <p className="lede mt-5">Most companies sell you either the software or the hardware. We do both, so one team owns the whole system and nothing falls between two contractors.</p>
            </div>
            <Link href="/services/" className="btn-ghost shrink-0">All services <Icon name="arrow" className="h-4 w-4" /></Link>
          </Reveal>

          {[{ name: "Digital", sub: "What runs on your screens", list: digital }, { name: "Physical", sub: "What we install on site", list: physical }].map((lane) => (
            <div key={lane.name} className="mt-14">
              <Reveal className="mb-6 flex items-baseline justify-between border-b-2 border-ink pb-3">
                <h3 className="text-xl font-semibold">{lane.name}</h3>
                <span className="text-muted">{lane.sub}</span>
              </Reveal>
              <Stagger className={`grid gap-5 sm:grid-cols-2 ${lane.list.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                {lane.list.map((s) => (
                  <StaggerItem key={s.slug}>
                    <TiltCard className="h-full">
                      <Link href={`/services/#${s.slug}`}
                        className="group flex h-full flex-col rounded-xl border border-line bg-paper p-6 transition-[border-color,box-shadow] duration-300 hover:border-teal hover:shadow-lift">
                        <span className={`grid h-12 w-12 place-items-center rounded transition-colors duration-300 ${
                          s.slug === "solar" ? "bg-sun-soft text-sun group-hover:bg-sun group-hover:text-paper" : "bg-teal-soft text-teal-strong group-hover:bg-teal group-hover:text-onteal"}`}>
                          <Icon name={s.icon} className="h-6 w-6" />
                        </span>
                        <h4 className="mt-6 text-lg font-semibold">{s.title}</h4>
                        <p className="mt-2 flex-1 text-body">{s.short}</p>
                        <span className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-strong">
                          Learn more <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}

          <Reveal className="mt-14">
            <div className="relative grid gap-6 overflow-hidden rounded-xl border-[1.5px] border-dashed border-sun/60 bg-sun-soft p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
              <span className="grid h-14 w-14 place-items-center rounded bg-surface text-sun"><Icon name="home" className="h-7 w-7" /></span>
              <div>
                <p className="font-semibold text-sun">Coming soon</p>
                <h3 className="mt-1 text-xl font-semibold">{soon.title}</h3>
                <p className="mt-2 max-w-[60ch] text-body">{soon.short} Built on the CCTV and solar systems we already install.</p>
              </div>
              <a href={waLink("Hello Acies Africa, please add me to the smart home automation waitlist.")} target="_blank" rel="noopener" className="btn-ghost justify-self-start bg-surface">
                Join the waitlist
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">How a project runs</h2>
            <p className="lede mt-5">Four clear stages. You always know what's happening and what comes next.</p>
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      {/* ---------- Team teaser ---------- */}
      <section className="section diag-texture border-y border-line bg-surface">
        <div className="shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">The team behind the work</h2>
            <p className="lede mt-5">Software engineers, data specialists and installers who build and fit every system themselves. No outsourcing, no middlemen.</p>
            <Link href="/team/" className="btn-primary mt-8">Meet the team <Icon name="arrow" className="h-4 w-4" /></Link>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4 sm:gap-5 lg:max-w-[560px] lg:justify-self-end">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <Link href="/team/" className="group block">
                  <Portrait m={m} className="aspect-[4/5] rounded-xl" sizes="(min-width: 1080px) 18vw, 45vw" />
                  <p className="mt-3 font-display text-sm font-semibold text-ink sm:text-base">{m.name}</p>
                  <p className="text-sm text-muted">{m.role}</p>
                </Link>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Link href="/team/" className="group grid aspect-[4/5] place-items-center rounded-xl bg-teal-deep p-4 text-center text-white transition-colors hover:bg-teal hover:text-onteal">
                <span>
                  <span className="block font-display text-3xl font-semibold sm:text-4xl">+{supportingStaff}</span>
                  <span className="mt-2 block text-sm">engineers, installers and support staff</span>
                </span>
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ---------- Partnership ---------- */}
      <section className="section">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Built with partners</h2>
            <p className="lede mt-5">
              We work hand in hand with {partners.monarch.full}. Together we designed and developed gidahaven.com, a property platform for verified listings and tenant management, and we continue to run and improve it side by side.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://www.instagram.com/${partners.monarch.instagram}/`} target="_blank" rel="noopener" className="btn-ghost"><Icon name="ig" /> @{partners.monarch.instagram}</a>
              <Link href="/about/#partners" className="btn-ghost">About our partners</Link>
            </div>
          </Reveal>
          <PartnerDiagram />
        </div>
      </section>

      {/* ---------- Happy clients ---------- */}
      <Clients className="border-y border-line bg-surface" />

      {/* ---------- FAQ ---------- */}
      <section className="pb-8 pt-20 md:pt-28">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Questions</h2>
            <p className="lede mt-5">Can't find yours? <Link href="/contact/" className="font-semibold text-teal-strong underline underline-offset-4">Ask us directly.</Link></p>
          </Reveal>
          <Reveal delay={0.1}><Faq items={faqs.slice(0, 4)} /></Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
