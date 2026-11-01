import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DizitalGrow — Grow Beyond Offline | Digital Growth Platform",
  description:
    "We help individuals, creators, entrepreneurs, startups and businesses establish their digital presence, reach the right audience, convert opportunities into customers and generate measurable business growth.",
  metadataBase: new URL("https://dizitalgrow.in"),
  alternates: {
    canonical: "https://dizitalgrow.in",
  },
  openGraph: {
    title: "DizitalGrow — Grow Beyond Offline",
    description:
      "The Digital World Has Opportunities. Let's Help You Grow With Them. Websites, applications, advertising, and server telemetry.",
    type: "website",
    url: "https://dizitalgrow.in",
    siteName: "DizitalGrow",
  },
  twitter: {
    card: "summary_large_image",
    title: "DizitalGrow — Grow Beyond Offline",
    description:
      "From building your digital presence to reaching the right audience and turning visitors into customers, we help you make the most of the digital world.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased flex flex-col justify-between selection:bg-[#D5FF40] selection:text-[#050505] transition-colors duration-200">
        <Providers>
          <GoogleAnalytics />
          <ScrollManager />
          <Header />
          <main className="pt-16 flex-1 bg-[var(--color-bg-primary)] transition-colors duration-200">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
