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
  title: "DizitalGrow — Digital Growth Agency | Web Development, Advertising & Tracking",
  description:
    "We build the digital experiences (websites & custom web apps), customer acquisition systems (Google & Meta Ads), and tracking infrastructure (GA4 & Meta CAPI) businesses need to grow online.",
  metadataBase: new URL("https://dizitalgrow.in"),
  alternates: {
    canonical: "https://dizitalgrow.in",
  },
  openGraph: {
    title: "DizitalGrow — Digital Growth Agency",
    description:
      "We build the digital experiences, customer acquisition systems, and tracking infrastructure businesses need to grow online.",
    type: "website",
    url: "https://dizitalgrow.in",
    siteName: "DizitalGrow",
  },
  twitter: {
    card: "summary_large_image",
    title: "DizitalGrow — Digital Growth Agency",
    description:
      "Build better digital experiences. Reach the right customers. Measure what matters.",
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
