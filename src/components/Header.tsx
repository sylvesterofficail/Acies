"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { ease } from "./motion";

const norm = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);

export function Header() {
  const pathname = norm(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 12);
    setHidden(y > 320 && y > prev && !open);
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <m.header
      className="fixed inset-x-0 top-0 z-50"
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.35, ease }}
    >
      <div
        className={`transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open ? "border-b border-line bg-paper/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-[76px] items-center justify-between gap-4">
          <Link href="/" aria-label="Acies Africa Technologies, home" className="shrink-0">
            <Logo className="h-9 w-auto md:h-10" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 p-1 md:flex">
            {nav.map((item) => {
              const active = pathname === norm(item.href);
              return (
                <Link key={item.href} href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                    active ? "text-onteal" : "text-body hover:text-ink"}`}>
                  {active && (
                    <m.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-teal"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact/" className="btn-primary hidden min-h-11 px-5 text-[0.95rem] lg:inline-flex">
              Start a project
            </Link>
            <button type="button" onClick={() => setOpen((o) => !o)}
              aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-line bg-surface text-ink md:hidden">
              <span className="sr-only">Menu</span>
              <m.span className="absolute h-[2px] w-5 rounded bg-current" animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }} />
              <m.span className="absolute h-[2px] w-5 rounded bg-current" animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }} />
            </button>
          </div>
        </div>
      </div>
    </m.header>

      <AnimatePresence>
        {open && (
          <m.nav id="mobile-menu" aria-label="Mobile"
            className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-paper md:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <m.ul className="shell flex flex-col pt-6"
              initial="hidden" animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}>
              {nav.map((item) => {
                const active = pathname === norm(item.href);
                return (
                  <m.li key={item.href} className="border-b border-line"
                    variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } } }}>
                    <Link href={item.href} onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-5 font-display text-2xl ${active ? "text-teal-strong" : "text-ink"}`}>
                      {item.label}
                      {active && <span className="h-3 w-3 rotate-45 bg-teal" aria-hidden="true" />}
                    </Link>
                  </m.li>
                );
              })}
              <m.li className="pt-8"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                <Link href="/contact/" onClick={() => setOpen(false)} className="btn-primary w-full">Start a project</Link>
              </m.li>
            </m.ul>
          </m.nav>
        )}
      </AnimatePresence>
    </>
  );
}
