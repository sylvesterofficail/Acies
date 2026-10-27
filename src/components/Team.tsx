import Image from "next/image";
import type { Member } from "@/lib/site";

export function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

/** Photo if we have one; otherwise the Acies diamond with initials. */
export function Portrait({ m, className = "", sizes = "(min-width: 1080px) 25vw, 50vw" }: { m: Member; className?: string; sizes?: string }) {
  return (
    <div className={`relative overflow-hidden bg-sunken ${className}`}>
      {m.photo ? (
        <Image src={m.photo} alt={m.name} fill sizes={sizes}
          className="object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-teal-soft to-sunken" role="img" aria-label={m.name}>
          <span className="grid aspect-square w-[44%] rotate-45 place-items-center rounded-md bg-teal transition-transform duration-500 ease-out group-hover:rotate-[135deg]">
            <span className="-rotate-45 font-display text-[clamp(1.25rem,3vw,2rem)] font-semibold text-onteal transition-transform duration-500 ease-out group-hover:-rotate-[135deg]">
              {initials(m.name)}
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
