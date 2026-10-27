import Link from "next/link";
import { contact } from "@/lib/site";
import { Icon } from "./Icon";
import { WordsRise } from "./motion";

export function HeroCopy() {
  const d = (s: number) => ({ animationDelay: `${s}s` });
  return (
    <>
      <WordsRise text="We write the software and wire the building."
        className="max-w-[14ch] text-[clamp(2.2rem,5.4vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.035em]" />
      <p className="lede rise mt-7" style={d(0.55)}>
        Acies Africa Technologies builds websites, apps, AI systems and automations, then installs the CCTV and solar power that keep them running. For hospitals, schools, government offices, law firms, estates and more.
      </p>
      <div className="rise mt-9 flex flex-wrap gap-3" style={d(0.7)}>
        <Link href="/contact/" className="btn-primary">Start a project <Icon name="arrow" className="h-4 w-4" /></Link>
        <Link href="/services/" className="btn-ghost">See our services</Link>
      </div>
      <dl className="rise mt-11 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-[0.95rem] text-muted" style={d(0.85)}>
        <div className="flex items-center gap-2"><Icon name="shield" className="h-4 w-4 text-teal-strong" /><dt className="font-semibold text-ink">CAC registered</dt><dd>{contact.cac}</dd></div>
        <div className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-teal-strong" /><dt className="font-semibold text-ink">Akwa Ibom</dt><dd>working across Nigeria</dd></div>
      </dl>
    </>
  );
}
