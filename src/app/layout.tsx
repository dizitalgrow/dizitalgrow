import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  title: "Dizital Grow — Digital Growth Platform for Businesses & Creators",
  description:
    "Dizital Grow helps people and businesses understand digital growth, build a stronger online presence, and take practical steps toward better marketing and business growth.",
  metadataBase: new URL("https://dizitalgrow.in"),
  alternates: {
    canonical: "https://dizitalgrow.in",
  },
  openGraph: {
    title: "Dizital Grow — Digital Growth Platform",
    description:
      "Understand what works, build a stronger online presence, and turn your digital efforts into meaningful business opportunities.",
    type: "website",
    url: "https://dizitalgrow.in",
    siteName: "Dizital Grow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dizital Grow — Digital Growth Platform",
    description:
      "Understand what works, build a stronger online presence, and turn your digital efforts into meaningful business opportunities.",
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
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased flex flex-col justify-between selection:bg-[#D5FF40] selection:text-[#050505] transition-colors duration-200">
        <Providers>
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
