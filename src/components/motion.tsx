"use client";

import { LazyMotion, m, MotionConfig, type Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={{ ease }}>{children}</MotionConfig>
    </LazyMotion>
  );
}

/** Fades and lifts content into place the first time it scrolls into view. */
export function Reveal({
  children, delay = 0, y = 28, className,
}: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </m.div>
  );
}

const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

/** Container whose <StaggerItem> children cascade in one after another. */
export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <m.div className={className} variants={group} initial="hidden" whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}>
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <m.div className={className} variants={staggerItem}>{children}</m.div>;
}

/** Headline whose words rise out of a mask one after another. */
export function WordsRise({ text, className, delay = 0, as = "h1" }: { text: string; className?: string; delay?: number; as?: "h1" | "h2" }) {
  const Tag = as;
  const words = text.split(" ");
  // CSS-driven so the headline animates the moment the HTML arrives.
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i}>
          <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
            <span className="word-up" style={{ animationDelay: `${delay + i * 0.07}s` }}>{w}</span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
