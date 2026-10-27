"use client";

import Link from "next/link";
import { animate, m, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { faqs as allFaqs, industries, processSteps, waLink } from "@/lib/site";
import { Icon } from "./Icon";
import { Reveal, ease } from "./motion";

/* ---------------- Animated number ---------------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.4, ease, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ---------------- Industry marquee ---------------- */
export function IndustryMarquee() {
  const row = [...industries, ...industries];
  return (
    <div className="marquee-mask overflow-hidden border-y border-line py-5" aria-label="Industries we serve">
      <m.div className="flex w-max gap-10"
        animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
        {row.map((ind, k) => (
          <span key={k} className="flex items-center gap-10 whitespace-nowrap font-display text-xl text-ink md:text-2xl" aria-hidden={k >= industries.length}>
            {ind.name}
            <span className="h-2.5 w-2.5 rotate-45 bg-teal" aria-hidden="true" />
          </span>
        ))}
      </m.div>
    </div>
  );
}

/* ---------------- Process with a line that draws as you scroll ---------------- */
export function ProcessSteps() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <ol ref={ref} className="relative grid gap-12 md:grid-cols-4 md:gap-6">
      {/* desktop: horizontal line; mobile: vertical line */}
      <span className="absolute left-[22px] right-[8%] top-[22px] hidden h-[2px] bg-line md:block" aria-hidden="true" />
      <m.span style={{ scaleX: progress }} className="absolute left-[22px] right-[8%] top-[22px] hidden h-[2px] origin-left bg-teal md:block" aria-hidden="true" />
      <span className="absolute bottom-6 left-[21px] top-6 w-[2px] bg-line md:hidden" aria-hidden="true" />
      <m.span style={{ scaleY: progress }} className="absolute bottom-6 left-[21px] top-6 w-[2px] origin-top bg-teal md:hidden" aria-hidden="true" />

      {processSteps.map((s, i) => (
        <m.li key={s.title} className="relative grid grid-cols-[44px_1fr] gap-5 md:block"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.55, delay: i * 0.12, ease }}>
          <span className="relative grid h-11 w-11 place-items-center">
            <span className="absolute inset-[5px] rotate-45 rounded-[4px] bg-teal" aria-hidden="true" />
            <span className="relative font-display font-semibold text-onteal">{i + 1}</span>
          </span>
          <div className="md:mt-7 md:pr-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-body">{s.body}</p>
          </div>
        </m.li>
      ))}
    </ol>
  );
}

/* ---------------- FAQ accordion ---------------- */
export function Faq({ items = allFaqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left text-md font-semibold text-ink">
              {f.q}
              <m.span animate={{ rotate: isOpen ? 135 : 0 }} transition={{ duration: 0.3, ease }}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-[1.5px] border-line text-teal-strong">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </m.span>
            </button>
            <m.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, ease }} className="overflow-hidden">
              <p className="max-w-[64ch] pb-6 text-body">{f.a}</p>
            </m.div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Closing call-to-action band ---------------- */
export function CtaBand({ title = "Let's build your next system.", body = "Tell us what you're trying to fix. We'll come back with a plan, a timeline and a price, usually within 24 hours." }: { title?: string; body?: string }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="diag-texture relative overflow-hidden rounded-2xl bg-teal-deep px-6 py-14 text-white sm:px-12 md:py-20">
            <m.div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rotate-45 border-[36px] border-teal/50"
              initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 1, ease }} />
            <div className="relative max-w-2xl">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">{title}</h2>
              <p className="mt-5 text-md text-[#cdeceb]">{body}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={waLink("Hello Acies Africa Technologies, I would like to start a project.")} target="_blank" rel="noopener" className="btn-light">
                  <Icon name="chat" /> Chat on WhatsApp
                </a>
                <Link href="/contact/" className="btn border-[1.5px] border-white/40 text-white hover:border-white">
                  Other ways to reach us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Card that tilts toward the pointer ---------------- */
export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  return (
    <m.div
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </m.div>
  );
}
