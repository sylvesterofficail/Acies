import Link from "next/link";
import { contact, nav, partners, services } from "@/lib/site";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo className="h-10 w-auto" />
          <p className="mt-5 text-muted">Software, websites, AI, automation, CCTV and solar, from one team in Akwa Ibom.</p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-ink">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="text-muted transition-colors hover:text-teal-strong">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-ink">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/#${s.slug}`} className="text-muted transition-colors hover:text-teal-strong">
                  {s.title}{s.soon && <span className="ml-2 text-xs font-semibold text-sun">Soon</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-ink">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li><a href={`tel:${contact.phone}`} className="flex items-center gap-3 hover:text-teal-strong"><Icon name="phone" className="h-4 w-4" />{contact.phoneDisplay}</a></li>
            <li><a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all hover:text-teal-strong"><Icon name="mail" className="h-4 w-4 shrink-0" />{contact.email}</a></li>
            <li><a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-teal-strong"><Icon name="ig" className="h-4 w-4" />@{contact.instagram}</a></li>
            <li className="flex items-start gap-3"><Icon name="pin" className="mt-1 h-4 w-4 shrink-0" />{contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Acies Africa Technologies. Registered with the CAC, {contact.cac}.</p>
          <p>
            Partners:{" "}
            <a href={`https://www.instagram.com/${partners.monarch.instagram}/`} target="_blank" rel="noopener" className="underline-offset-4 hover:text-teal-strong hover:underline">{partners.monarch.name}</a>
            {" & "}
            <a href={partners.gidahaven.url} target="_blank" rel="noopener" className="underline-offset-4 hover:text-teal-strong hover:underline">gidahaven.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
