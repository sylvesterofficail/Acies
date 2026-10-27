import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center pt-24">
      <div className="shell text-center">
        <span className="mx-auto block h-10 w-10 rotate-45 bg-teal" aria-hidden="true" />
        <h1 className="mt-10 text-3xl font-semibold sm:text-4xl">This page doesn't exist.</h1>
        <p className="lede mx-auto mt-4">The link may be old or mistyped. Head back home or tell us what you were looking for.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Go to the home page</Link>
          <Link href="/contact/" className="btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
