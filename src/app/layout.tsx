import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/motion";

const display = localFont({
  src: [
    { path: "./fonts/unbounded-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/unbounded-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/unbounded-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/instrument-sans-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/instrument-sans-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/instrument-sans-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/instrument-sans-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Acies Africa Technologies | Software, AI, CCTV & Solar",
    template: "%s | Acies Africa Technologies",
  },
  description:
    "Acies Africa Technologies builds software, websites, AI systems and automations, and installs CCTV and solar inverter systems for health, government, education, real estate, law and more.",
  openGraph: {
    title: "Acies Africa Technologies",
    description: "We write the software and wire the building.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEF3F2" },
    { media: "(prefers-color-scheme: dark)", color: "#07181C" },
  ],
};

/* Runs before paint so the saved or system theme shows with no flash. */
const themeScript = `(function(){var t=null;try{t=localStorage.getItem('acies-theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
