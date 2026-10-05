import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "DizitalGrow — Websites, Apps & Ads That Grow Your Business",
  description:
    "We build websites, web apps, mobile apps, and advertising systems that help businesses get more customers.",
  metadataBase: new URL("https://dizitalgrow.in"),
  openGraph: {
    title: "DizitalGrow — Websites, Apps & Ads That Grow Your Business",
    description:
      "We build websites, web apps, mobile apps, and advertising systems that help businesses get more customers.",
    type: "website",
    url: "https://dizitalgrow.in",
    siteName: "DizitalGrow",
  },
  twitter: {
    card: "summary_large_image",
    title: "DizitalGrow — Websites, Apps & Ads That Grow Your Business",
    description:
      "We build websites, web apps, mobile apps, and advertising systems that help businesses get more customers.",
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
    <html lang="en" style={{ backgroundColor: "#050505" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-[#050505] text-[#FFFFFF] antialiased flex flex-col justify-between selection:bg-[#D5FF40] selection:text-[#050505]"
        style={{ backgroundColor: "#050505" }}
      >
        <Providers>
          <Header />
          <main className="pt-16 flex-1 bg-[#050505]" style={{ backgroundColor: "#050505" }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
