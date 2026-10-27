"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";
import { contact, industries, services, waLink } from "@/lib/site";
import { Icon } from "./Icon";
import { ease } from "./motion";

const timelines = ["As soon as possible", "1–2 months", "3+ months", "Just exploring"];

/** Builds a message from the form and opens WhatsApp or email with it ready to send. */
export function ContactForm() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [industry, setIndustry] = useState("");
  const [when, setWhen] = useState(timelines[1]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const toggle = (t: string) => setNeeds((n) => (n.includes(t) ? n.filter((x) => x !== t) : [...n, t]));

  const compose = () =>
    [
      `Hello Acies Africa Technologies,`,
      ``,
      `My name is ${name.trim()}${org.trim() ? ` from ${org.trim()}` : ""}.`,
      needs.length ? `I need help with: ${needs.join(", ")}.` : "",
      industry ? `Industry: ${industry}` : "",
      `Timeline: ${when}`,
      ``,
      message.trim(),
    ].filter((l, i, a) => l !== "" || (a[i - 1] ?? "") !== "").join("\n");

  const send = (via: "whatsapp" | "email") => {
    if (!name.trim() || !message.trim()) {
      setError(!name.trim() ? "Add your name so we know who to reply to." : "Add a short description of what you need.");
      return;
    }
    setError("");
    const text = compose();
    const url = via === "whatsapp"
      ? waLink(text)
      : `mailto:${contact.email}?subject=${encodeURIComponent(`New project enquiry from ${name.trim()}`)}&body=${encodeURIComponent(text)}`;
    window.open(url, via === "whatsapp" ? "_blank" : "_self", "noopener");
  };

  return (
    <form className="grid gap-7" onSubmit={(e) => { e.preventDefault(); send("whatsapp"); }} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-semibold text-ink">Your name</span>
          <input className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        </label>
        <label className="grid gap-2">
          <span className="font-semibold text-ink">Organisation <span className="font-normal text-muted">(optional)</span></span>
          <input className="field" value={org} onChange={(e) => setOrg(e.target.value)} autoComplete="organization" />
        </label>
      </div>

      <fieldset>
        <legend className="mb-3 font-semibold text-ink">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const on = needs.includes(s.title);
            return (
              <m.button key={s.slug} type="button" onClick={() => toggle(s.title)} aria-pressed={on}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border-[1.5px] px-4 text-[0.95rem] transition-colors ${
                  on ? "border-teal bg-teal font-semibold text-onteal" : "border-line text-body hover:border-teal"}`}>
                <AnimatePresence initial={false}>
                  {on && (
                    <m.span initial={{ width: 0, opacity: 0 }} animate={{ width: 16, opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Icon name="check" className="h-4 w-4" />
                    </m.span>
                  )}
                </AnimatePresence>
                {s.title}{s.soon && " (soon)"}
              </m.button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-semibold text-ink">Industry</span>
          <select className="field" value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="">Choose one</option>
            {industries.map((i) => <option key={i.name}>{i.name}</option>)}
            <option>Other</option>
          </select>
        </label>
        <fieldset className="grid gap-2">
          <legend className="mb-2 font-semibold text-ink">When do you need it?</legend>
          <div className="flex flex-wrap gap-2">
            {timelines.map((t) => (
              <button key={t} type="button" onClick={() => setWhen(t)} aria-pressed={when === t}
                className={`min-h-11 rounded-full border-[1.5px] px-4 text-[0.95rem] transition-colors ${
                  when === t ? "border-teal bg-teal font-semibold text-onteal" : "border-line text-body hover:border-teal"}`}>
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <label className="grid gap-2">
        <span className="font-semibold text-ink">Tell us about the project</span>
        <textarea className="field min-h-36 py-3" value={message} onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you trying to fix or build? Where is it? Anything we should know?" required />
      </label>

      <AnimatePresence>
        {error && (
          <m.p role="alert" className="flex items-center gap-2 rounded bg-sun-soft px-4 py-3 font-medium text-ink"
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease }}>
            <span className="h-2.5 w-2.5 rotate-45 bg-sun" aria-hidden="true" /> {error}
          </m.p>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary"><Icon name="chat" /> Send on WhatsApp</button>
        <button type="button" onClick={() => send("email")} className="btn-ghost"><Icon name="mail" /> Send by email</button>
      </div>
      <p className="-mt-3 text-sm text-muted">Your message opens in WhatsApp or your email app, ready to send. Nothing is sent until you press send there.</p>
    </form>
  );
}
