"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { supportingStaff, team } from "@/lib/site";
import { Icon } from "./Icon";
import { ease } from "./motion";
import { initials } from "./Team";

const INTERVAL = 5000;

/** Home-page spotlight: one team member at a time, CEO first, advancing every 5 seconds.
 *  Pauses on hover/focus and when off screen; thumbnails let people jump to anyone. */
export function TeamSpotlight() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cycle, setCycle] = useState(0); // restarts the progress bar
  const ref = useRef<HTMLDivElement>(null);

  const go = useCallback((n: number) => {
    setI((n + team.length) % team.length);
    setCycle((c) => c + 1);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = visible && !paused && !reduce;
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => go(i + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [running, i, cycle, go]);

  const mbr = team[i];

  return (
    <div ref={ref} className="grid items-center gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-10"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel" aria-label="Team spotlight">

      {/* Portrait */}
      <div className="relative mx-auto w-full max-w-[420px]">
        <span aria-hidden="true" className="absolute -left-4 -top-4 h-24 w-24 rotate-45 border-[14px] border-teal/40 md:-left-6 md:-top-6" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sunken shadow-lift">
          <AnimatePresence initial={false} mode="popLayout">
            <m.div key={mbr.name} className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.9, ease } }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5 } }}>
              {mbr.photo ? (
                <Image src={mbr.photo} alt={mbr.name} fill sizes="(min-width: 860px) 420px, 90vw" className="object-cover object-[center_22%]" />
              ) : (
                <div className="grid h-full place-items-center bg-gradient-to-br from-teal-soft to-sunken">
                  <span className="grid aspect-square w-[44%] rotate-45 place-items-center rounded-md bg-teal">
                    <span className="-rotate-45 font-display text-3xl font-semibold text-onteal">{initials(mbr.name)}</span>
                  </span>
                </div>
              )}
            </m.div>
          </AnimatePresence>
          <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
            {i + 1} / {team.length}
          </span>
        </div>
      </div>

      {/* Details */}
      <div>
        <div className="relative min-h-[15rem] sm:min-h-[13.5rem]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <m.div key={mbr.name}
              initial="hidden" animate="show" exit="exit"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } }, exit: { opacity: 0, y: -10, transition: { duration: 0.25 } } }}>
              {[
                <p key="r" className="font-semibold text-teal-strong">{mbr.role}</p>,
                <h3 key="n" className="mt-2 text-2xl font-semibold sm:text-3xl">{mbr.name}</h3>,
                <p key="f" className="mt-4 max-w-[46ch] text-md text-body">{mbr.focus}</p>,
                mbr.degree ? (
                  <p key="d" className="mt-4 flex items-start gap-2 text-sm text-muted">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 9 12 4 2 9l10 5 10-5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /></svg>
                    {mbr.degree}
                  </p>
                ) : null,
              ].filter(Boolean).map((node, k) => (
                <m.div key={k} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}>
                  {node}
                </m.div>
              ))}
            </m.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails with a 5-second progress bar */}
        <div className="mt-8 flex items-center gap-3" role="tablist" aria-label="Choose a team member">
          {team.map((t, k) => {
            const on = k === i;
            return (
              <button key={t.name} type="button" role="tab" aria-selected={on} aria-label={`${t.name}, ${t.role}`}
                onClick={() => go(k)}
                className={`group relative overflow-hidden rounded-xl transition-[transform,opacity] duration-300 ${on ? "opacity-100" : "opacity-55 hover:opacity-90"}`}>
                <span className={`relative block h-14 w-12 overflow-hidden rounded-xl border-2 sm:h-16 sm:w-14 ${on ? "border-teal" : "border-transparent"}`}>
                  {t.photo ? (
                    <Image src={t.photo} alt="" fill sizes="56px" className="object-cover object-[center_22%]" />
                  ) : (
                    <span className="grid h-full place-items-center bg-teal-soft font-display text-sm font-semibold text-teal-strong">{initials(t.name)}</span>
                  )}
                </span>
                <span className="absolute inset-x-1 bottom-1 h-1 overflow-hidden rounded-full bg-black/30" aria-hidden="true">
                  {on && (
                    <m.span key={`${cycle}-${running}`} className="block h-full origin-left rounded-full bg-teal"
                      initial={{ scaleX: 0 }} animate={{ scaleX: running ? 1 : 0 }}
                      transition={{ duration: running ? INTERVAL / 1000 : 0, ease: "linear" }} />
                  )}
                </span>
              </button>
            );
          })}
          <div className="ml-auto flex gap-2">
            <button type="button" onClick={() => go(i - 1)} aria-label="Previous team member"
              className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-line text-ink transition-colors hover:border-teal">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
            <button type="button" onClick={() => go(i + 1)} aria-label="Next team member"
              className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-line text-ink transition-colors hover:border-teal">
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted">
          Plus <span className="font-semibold text-ink">{supportingStaff} more</span> engineers, installers and support staff.{" "}
          <Link href="/team/" className="font-semibold text-teal-strong underline-offset-4 hover:underline">See everyone</Link>
        </p>
      </div>
    </div>
  );
}
