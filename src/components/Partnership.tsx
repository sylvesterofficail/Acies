"use client";

import { m } from "framer-motion";
import { partners } from "@/lib/site";
import { Icon } from "./Icon";
import { ease } from "./motion";

/** Acies + MonarchByte → gidahaven.com, with connectors that draw on scroll. */
export function PartnerDiagram() {
  const node = "rounded-xl border border-line bg-surface p-5 text-center shadow-soft";
  return (
    <m.div className="relative mx-auto w-full max-w-md" initial="hidden" whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}>
      <div className="grid grid-cols-2 gap-5">
        <m.div className={node} variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}>
          <p className="font-display text-md font-semibold text-ink">Acies</p>
          <p className="text-sm text-muted">Africa Technologies</p>
        </m.div>
        <m.div className={node} variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}>
          <p className="font-display text-md font-semibold text-ink">{partners.monarch.name}</p>
          <p className="text-sm text-muted">Tech Solutions</p>
        </m.div>
      </div>

      <svg viewBox="0 0 400 90" className="block h-[90px] w-full" aria-hidden="true" preserveAspectRatio="none">
        <m.path d="M100 0 V40 Q100 55 115 55 H185 Q200 55 200 70 V90" fill="none" stroke="rgb(var(--teal))" strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.8, ease } } }} />
        <m.path d="M300 0 V40 Q300 55 285 55 H215 Q200 55 200 70 V90" fill="none" stroke="rgb(var(--teal))" strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 0.8, ease } } }} />
      </svg>

      <m.a href={partners.gidahaven.url} target="_blank" rel="noopener"
        className="group block rounded-xl border-2 border-teal bg-teal-soft p-6 text-center transition-colors hover:bg-teal"
        variants={{ hidden: { opacity: 0, y: 20, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } } }}>
        <p className="flex items-center justify-center gap-2 font-display text-lg font-semibold text-ink group-hover:text-onteal">
          <Icon name="globe" /> gidahaven.com
        </p>
        <p className="mt-1 text-sm text-body group-hover:text-onteal">Built and maintained together</p>
      </m.a>
    </m.div>
  );
}
