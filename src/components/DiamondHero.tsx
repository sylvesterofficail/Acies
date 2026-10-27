"use client";

import { AnimatePresence, m, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ease } from "./motion";

const WORDS = ["Software", "Websites", "AI systems", "Automations", "CCTV", "Solar & inverters", "Smart homes"];

/** The Acies mark, scaled up: the roof draws itself, the diamonds settle in,
 *  then the core cycles through everything we build. Layers drift with the pointer. */
export function DiamondHero({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const roofX = useTransform(sx, (v) => v * -10);
  const roofY = useTransform(sy, (v) => v * -10);
  const midX = useTransform(sx, (v) => v * 8);
  const midY = useTransform(sy, (v) => v * 8);
  const coreX = useTransform(sx, (v) => v * 16);
  const coreY = useTransform(sy, (v) => v * 16);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % WORDS.length), 2300);
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove);
    return () => { clearInterval(t); window.removeEventListener("pointermove", onMove); };
  }, [reduce, mx, my]);

  return (
    <div className={`relative aspect-square w-full [container-type:inline-size] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <radialGradient id="core-light" cx="38%" cy="34%" r="75%">
            <stop offset="0%" stopColor="rgb(var(--teal))" stopOpacity="0.55" />
            <stop offset="55%" stopColor="rgb(var(--teal-deep))" stopOpacity="1" />
            <stop offset="100%" stopColor="#083c42" />
          </radialGradient>
        </defs>

        {/* signal pulse */}
        {!reduce && (
          <m.polygon points="200,128 322,250 200,372 78,250" fill="none" stroke="rgb(var(--teal))" strokeWidth="2"
            style={{ transformOrigin: "200px 250px" }}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.55], opacity: [0.55, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 0.6, ease: "easeOut", delay: 1.6 }} />
        )}

        <m.g style={{ x: roofX, y: roofY }}>
          <m.polyline points="34,238 200,72 366,238" fill="none" stroke="rgb(var(--teal))" strokeWidth="44"
            strokeLinejoin="miter" strokeMiterlimit={4}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.15 }} />
        </m.g>

        <m.g style={{ x: midX, y: midY }}>
          <m.polygon points="200,128 322,250 200,372 78,250" fill="rgb(var(--teal))"
            style={{ transformOrigin: "200px 250px" }}
            initial={{ scale: 0.3, opacity: 0, rotate: -45 }} animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }} />
        </m.g>

        <m.g style={{ x: coreX, y: coreY }}>
          <m.polygon points="200,166 284,250 200,334 116,250" fill="url(#core-light)"
            style={{ transformOrigin: "200px 250px" }}
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.9 }} />
        </m.g>
      </svg>

      <div className="absolute left-1/2 top-[62.5%] w-[40%] -translate-x-1/2 -translate-y-1/2 text-center">
      <m.div style={{ x: coreX, y: coreY }}>
        <AnimatePresence mode="wait">
          <m.span key={WORDS[i]}
            className="block font-display text-[4.1cqw] font-semibold leading-tight text-white"
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease, delay: i === 0 ? 1.3 : 0 } }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)", transition: { duration: 0.3 } }}>
            {WORDS[i]}
          </m.span>
        </AnimatePresence>
      </m.div>
      </div>
    </div>
  );
}
