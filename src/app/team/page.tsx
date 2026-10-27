import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Portrait } from "@/components/Team";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Counter, CtaBand, TiltCard } from "@/components/blocks";
import { contact, supportingStaff, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the engineers behind Acies Africa Technologies: founders, data, testing and architecture specialists, and the wider team of installers and support staff.",
};

const disciplines = [
  { icon: "code" as const, title: "Software engineering", body: "Web, mobile and backend developers who build every system in-house." },
  { icon: "ai" as const, title: "Data & AI", body: "Database design, reporting and the models behind our AI tools." },
  { icon: "shield" as const, title: "Testing & architecture", body: "Every release is tested, and every system is designed to scale and stay secure." },
  { icon: "cctv" as const, title: "Installation", body: "Technicians who survey, install and service CCTV and solar on site." },
  { icon: "chat" as const, title: "Client support", body: "The people who answer when you call and make sure issues get fixed fast." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero kicker="Our team" title="The team behind the work."
        lede="Engineers, data specialists and installers who design, build and fit every system themselves. When you work with Acies, these are the people on your project." />

      {/* ---------- Core team ---------- */}
      <section className="pb-24">
        <div className="shell">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <TiltCard className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-teal hover:shadow-lift">
                    <Portrait m={m} className="aspect-[4/5]" />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm font-semibold text-teal-strong">{m.role}</p>
                      <h2 className="mt-1 text-lg font-semibold">{m.name}</h2>
                      <p className="mt-3 flex-1 text-body">{m.focus}</p>
                      {m.degree && (
                        <p className="mt-5 flex items-start gap-2 border-t border-line pt-4 text-sm text-muted">
                          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 9 12 4 2 9l10 5 10-5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /></svg>
                          {m.degree}
                        </p>
                      )}
                    </div>
                  </article>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- Wider team ---------- */}
      <section className="section diag-texture border-y border-line bg-surface">
        <div className="shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="font-display text-5xl font-semibold text-teal-strong md:text-6xl">+<Counter to={supportingStaff} /></p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">More people on the ground</h2>
            <p className="lede mt-5">
              Alongside the core team, {supportingStaff} more engineers, installers and support staff work on builds, site installations and client care every day.
            </p>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {disciplines.map((d) => (
              <StaggerItem key={d.title} className="flex gap-4 rounded-xl border border-line bg-paper p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded bg-teal-soft text-teal-strong"><Icon name={d.icon} className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-sans text-base font-semibold tracking-normal">{d.title}</h3>
                  <p className="mt-1 text-sm text-body">{d.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- Join ---------- */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-2xl border border-line p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold sm:text-3xl">Want to build with us?</h2>
                <p className="mt-4 text-body">We're always glad to hear from engineers, designers and installers who care about doing the job properly. Send your CV and a line about what you'd like to work on.</p>
              </div>
              <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Joining Acies Africa Technologies")}`} className="btn-primary shrink-0">
                <Icon name="mail" /> Email your CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Put this team on your project." />
    </>
  );
}
