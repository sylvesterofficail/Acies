import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Faq } from "@/components/blocks";
import { contact, waLink } from "@/lib/site";
import type { IconName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Acies Africa Technologies. WhatsApp, call or email us, or visit us in Ikot Ekpene, Akwa Ibom.",
};

const channels: { icon: IconName; label: string; value: string; href: string; note: string; external?: boolean }[] = [
  { icon: "chat", label: "WhatsApp", value: contact.phoneDisplay, href: waLink("Hello Acies Africa Technologies, I would like to start a project."), note: "Fastest reply", external: true },
  { icon: "phone", label: "Call", value: contact.phoneDisplay, href: `tel:${contact.phone}`, note: "Talk to an engineer" },
  { icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}`, note: "For quotes and documents" },
  { icon: "ig", label: "Instagram", value: `@${contact.instagram}`, href: `https://instagram.com/${contact.instagram}`, note: "See our latest work", external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Tell us what you need built."
        lede="Share a few details and we'll reply with a plan, a timeline and a price, usually within 24 hours. The first consultation is free." />

      <section className="pb-24">
        <div className="shell">
          <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {channels.map((c) => (
              <StaggerItem key={c.label}>
                <a href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener" : undefined}
                  className="group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-teal hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded bg-teal-soft text-teal-strong transition-colors duration-300 group-hover:bg-teal group-hover:text-onteal">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <p className="mt-5 text-sm font-medium text-muted">{c.label} · {c.note}</p>
                  <p className="mt-1 break-words text-base font-semibold text-ink">{c.value}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-10">
                <h2 className="text-xl font-semibold sm:text-2xl">Start a project</h2>
                <p className="mb-8 mt-2 text-body">Fill this in and we'll have everything we need to give you a useful answer.</p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.12} className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                <iframe title="Map showing Acies Africa Technologies in Ikot Ekpene"
                  src="https://maps.google.com/maps?q=Nkanga%20Street%2C%20Ikot%20Ekpene%2C%20Akwa%20Ibom&z=15&output=embed"
                  className="h-64 w-full border-0 grayscale-[30%] dark:opacity-80 dark:invert-[0.9] dark:hue-rotate-180" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div className="p-6">
                  <h3 className="font-sans text-base font-semibold tracking-normal">Visit us</h3>
                  <p className="mt-2 text-body">{contact.address}</p>
                  <a href={contact.mapUrl} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 font-semibold text-teal-strong">
                    Get directions <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-teal-deep p-6 text-white">
                <h3 className="font-sans text-base font-semibold tracking-normal text-white">Registered business</h3>
                <p className="mt-2 text-[#cdeceb]">Acies Africa Technologies is registered with the Corporate Affairs Commission, {contact.cac}.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal><h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Before you ask</h2></Reveal>
          <Reveal delay={0.1}><Faq /></Reveal>
        </div>
      </section>
    </>
  );
}
