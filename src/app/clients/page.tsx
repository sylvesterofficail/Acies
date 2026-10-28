import type { Metadata } from "next";
import { ClientCard } from "@/components/Clients";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/motion";
import { CtaBand } from "@/components/blocks";
import { clients } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clients",
  description: "Organisations that trust Acies Africa Technologies with their software, websites, CCTV and solar systems.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero kicker="Clients" title="The organisations we work for."
        lede="These are the teams that trust Acies with their technology. Tap any card to visit them." />

      <section className="pb-24">
        <div className="shell">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <StaggerItem key={c.name}><ClientCard c={c} /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand title="Become our next happy client." body="Tell us what you're trying to fix. We'll come back with a plan, a timeline and a price, usually within 24 hours." />
    </>
  );
}
