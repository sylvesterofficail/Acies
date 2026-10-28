import Image from "next/image";
import Link from "next/link";
import { clients, clientsOnHome, type Client } from "@/lib/site";
import { Icon } from "./Icon";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { TiltCard } from "./blocks";

/** One client: logo on a white plate (so any logo reads in light and dark), whole card links to their site. */
export function ClientCard({ c }: { c: Client }) {
  return (
    <TiltCard className="h-full">
      <a href={c.url} target="_blank" rel="noopener" aria-label={`${c.name}, visit ${c.site}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,box-shadow] duration-300 hover:border-teal hover:shadow-lift">
        <div className="relative grid aspect-[16/7] place-items-center overflow-hidden bg-white px-8">
          <span aria-hidden="true"
            className="absolute -right-8 -top-8 h-24 w-24 rotate-45 border-[14px] border-teal/20 transition-transform duration-500 group-hover:rotate-[135deg]" />
          {c.logo ? (
            <Image src={c.logo} alt={`${c.name} logo`} sizes="(min-width: 860px) 360px, 80vw"
              className="relative h-auto max-h-[64%] w-auto max-w-[82%] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
          ) : (
            <span className="relative font-display text-2xl font-semibold text-[#0F3947]">{c.name}</span>
          )}
        </div>
        <div className="flex flex-1 flex-col border-t border-line p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-soft px-2.5 py-0.5 text-sm font-semibold text-teal-strong">
              <Icon name="check" className="h-3.5 w-3.5" /> Client
            </span>
            <span className="chip py-0.5">{c.industry}</span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
          <p className="mt-2 flex-1 text-[0.95rem] text-body">{c.about}</p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-sm">
            {c.offices && <span className="flex items-center gap-2 text-muted"><Icon name="pin" className="h-4 w-4" />{c.offices}</span>}
            <span className="ml-auto inline-flex items-center gap-2 font-semibold text-teal-strong">
              Visit {c.site}
              <Icon name="arrow" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </a>
    </TiltCard>
  );
}

/** "Happy clients" band shown after the partners section, with a link to the full list. */
export function Clients({ className = "" }: { className?: string }) {
  const shown = clients.slice(0, clientsOnHome);
  const cols = shown.length >= 3 ? "sm:grid-cols-2 xl:grid-cols-3" : shown.length === 2 ? "sm:grid-cols-2" : "max-w-md";
  return (
    <section className={`section ${className}`} aria-labelledby="clients-title">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="max-w-xl">
          <h2 id="clients-title" className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Happy clients</h2>
          <p className="lede mt-5">Organisations that trust Acies with their technology. Tap a card to visit them.</p>
          <Link href="/clients/" className="btn-ghost mt-8">
            View all clients
            {clients.length > 1 && (
              <span className="rounded-full bg-teal-soft px-2 py-0.5 text-sm font-semibold text-teal-strong">{clients.length}</span>
            )}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
        <Stagger className={`grid gap-5 ${cols} lg:justify-self-end lg:w-full`}>
          {shown.map((c) => (
            <StaggerItem key={c.name}><ClientCard c={c} /></StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
