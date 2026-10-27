import Image from "next/image";
import logoLight from "@/assets/brand/logo-light.png";
import logoDark from "@/assets/brand/logo-dark.png";

/** Navy wordmark in light mode, white wordmark in dark mode. */
export function Logo({ className = "h-9 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <>
      <Image src={logoLight} alt="Acies Africa Technologies" className={`${className} dark:hidden`} priority={priority} />
      <Image src={logoDark} alt="Acies Africa Technologies" className={`${className} hidden dark:block`} priority={priority} />
    </>
  );
}
