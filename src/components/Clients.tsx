import { clients } from "@/lib/site";
import { Icon } from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { TiltCard } from "./blocks";

/** "Happy clients" band shown after the partners section. */
export function Clients({ className = "" }: { className?: string }) {
  return (
    <section className={`section ${className}`} aria-labelledby="clients-title">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="max-w-xl">
          <h2 id="clients-title" className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Happy clients</h2>
          <p className="lede mt-5">Organisations that trust Acies with their technology.</p>
        </Reveal>
        <Stagger className="grid gap-5">
          {clients.map((c) => (
            <StaggerItem key={c.name}>
              <TiltCard className="h-full">
                <a href={c.url} target="_blank" rel="noopener"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-[border-color,box-shadow] duration-300 hover:border-teal hover:shadow-lift sm:p-9">
                  <span aria-hidden="true"
                    className="absolute -right-10 -top-10 h-32 w-32 rotate-45 border-[18px] border-teal/25 transition-transform duration-500 group-hover:rotate-[135deg]" />
                  <div className="relative flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal-soft px-3 py-1 text-sm font-semibold text-teal-strong">
                      <Icon name="check" className="h-4 w-4" /> Client
                    </span>
                    <span className="chip">{c.industry}</span>
                  </div>
                  <h3 className="relative mt-6 text-2xl font-semibold sm:text-3xl">{c.name}</h3>
                  <p className="relative mt-4 flex-1 text-body">{c.about}</p>
                  <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-sm">
                    <span className="flex items-center gap-2 text-muted"><Icon name="pin" className="h-4 w-4" />{c.offices}</span>
                    <span className="inline-flex items-center gap-2 font-semibold text-teal-strong">
                      {c.site} <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
