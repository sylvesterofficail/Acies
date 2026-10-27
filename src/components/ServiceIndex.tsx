"use client";

import { m } from "framer-motion";
import { useEffect, useState } from "react";
import { services } from "@/lib/site";
import { Icon } from "./Icon";

/** Sticky list of services that highlights whichever one you're reading. */
export function ServiceIndex() {
  const [active, setActive] = useState(services[0].slug);

  useEffect(() => {
    const els = services.map((s) => document.getElementById(s.slug)).filter(Boolean) as HTMLElement[];
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.4;
        let current = services[0].slug;
        for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id;
        setActive(current);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); cancelAnimationFrame(raf); };
  }, []);

  return (
    <nav aria-label="Services on this page" className="sticky top-28 hidden lg:block">
      <ul className="space-y-1">
        {services.map((s) => {
          const on = active === s.slug;
          return (
            <li key={s.slug}>
              <a href={`#${s.slug}`} aria-current={on ? "true" : undefined}
                className={`relative flex items-center gap-3 rounded px-4 py-3 font-medium transition-colors ${on ? "text-onteal" : "text-body hover:text-ink"}`}>
                {on && <m.span layoutId="svc-pill" className="absolute inset-0 rounded bg-teal" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <Icon name={s.icon} className="relative h-5 w-5" />
                <span className="relative">{s.title}</span>
                {s.soon && <span className={`relative ml-auto text-xs font-semibold ${on ? "text-onteal" : "text-sun"}`}>Soon</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
