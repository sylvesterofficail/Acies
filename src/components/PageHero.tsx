import { WordsRise } from "./motion";

/** Opening band for inner pages: title rises in, the logo's roof line draws behind it.
 *  Pure CSS animation so it plays before JavaScript loads. */
export function PageHero({ kicker, title, lede, children }: { kicker: string; title: string; lede?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
      <svg viewBox="0 0 400 220" aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 w-[min(70vw,640px)] opacity-[0.16] md:right-[-4%] md:top-20 md:opacity-25">
        <polyline className="draw" pathLength={1} points="20,200 200,20 380,200" fill="none" stroke="rgb(var(--teal))" strokeWidth="34"
          style={{ animationDelay: "0.1s" }} />
        <polyline className="draw" pathLength={1} points="90,200 200,90 310,200" fill="none" stroke="rgb(var(--teal))" strokeWidth="22"
          style={{ animationDelay: "0.35s" }} />
      </svg>

      <div className="shell relative">
        <p className="slide-in mb-6 inline-flex items-center gap-3 font-medium text-teal-strong">
          <span className="h-2.5 w-2.5 rotate-45 bg-teal" aria-hidden="true" />
          {kicker}
        </p>
        <WordsRise text={title} delay={0.1} className="max-w-[18ch] text-3xl font-semibold sm:text-4xl lg:text-5xl" />
        {lede && <p className="lede rise mt-6" style={{ animationDelay: "0.45s" }}>{lede}</p>}
        {children && <div className="rise" style={{ animationDelay: "0.6s" }}>{children}</div>}
      </div>
    </section>
  );
}
