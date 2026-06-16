import type { Metadata } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Maker AI | Secure Infrastructure & Business Automation",
  description: "Delivering secure, scalable multi-tenant SaaS ERP integration, high-performance Linux n8n automation engines, and CEH zero-trust virtual firewalling topologies.",
  keywords: ["SaaS ERP Integration", "JoFotara compliance", "n8n automation", "Linux automation", "CEH network security", "Virtual Firewalling", "zero-trust architecture", "Maker AI"],
  icons: {
    icon: "/assets/logo/icon-dark.svg",
    shortcut: "/assets/logo/icon-dark.svg",
    apple: "/assets/logo/icon-dark.svg",
  },
  openGraph: {
    title: "Maker AI | Secure Infrastructure & Business Automation",
    description: "Delivering secure, scalable multi-tenant SaaS ERP integration, high-performance Linux n8n automation engines, and CEH zero-trust virtual firewalling topologies.",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden">
        {/* Dynamic Background System */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none transition-colors duration-500"
          style={{ background: 'linear-gradient(135deg, var(--bg-gradient-from) 0%, var(--bg-gradient-via) 50%, var(--bg-gradient-to) 100%)' }}>

          {/* Ultra-subtle micro-mesh grid (80px cells, radially masked, ≤2% opacity) */}
          <div className="absolute inset-0 bg-grid-masked" aria-hidden="true" />

          {/* SVG filter: organic liquid-smoke distortion for aurora blobs */}
          <svg className="hidden" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <filter id="liquid-smoke">
                <feTurbulence type="fractalNoise" baseFrequency="0.005 0.008" numOctaves="4" result="noise">
                  <animate attributeName="baseFrequency" values="0.005 0.008;0.009 0.013;0.005 0.008" dur="50s" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>

          {/* ── DARK MODE AURORA BLOBS ── */}
          <div className="absolute inset-0 animate-aurora-1" style={{ filter: 'url(#liquid-smoke)', opacity: 'var(--blob-opacity)', transition: 'opacity 0.6s ease' }}>
            {/* Blob 1: Teal (Top-left sweep) */}
            <div className="absolute top-[-15%] left-[-12%] w-[60vw] h-[60vw] min-w-[400px] min-h-[400px] rounded-full bg-gradient-to-br from-brand/25 via-cyan-400/10 to-transparent blur-[110px]" />
            {/* Blob 2: Indigo/Violet (Bottom-right anchor) */}
            <div className="absolute bottom-[-12%] right-[-12%] w-[65vw] h-[65vw] min-w-[450px] min-h-[450px] rounded-full bg-gradient-to-tl from-indigo-600/20 via-violet-500/10 to-transparent blur-[120px] animate-aurora-2" />
            {/* Blob 3: Azure (Center-left drift) */}
            <div className="absolute top-[30%] left-[3%] w-[50vw] h-[50vw] min-w-[320px] min-h-[320px] rounded-full bg-gradient-to-r from-blue-500/16 via-brand/8 to-transparent blur-[95px] animate-aurora-3" />
          </div>

          {/* ── LIGHT MODE AMBIENT FLARES (separate opacity layer) ── */}
          <div className="bg-light-flares">
            {/* Flare 1: Soft teal wash top-left */}
            <div className="absolute top-[-20%] left-[-15%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-cyan-200/60 via-teal-100/30 to-transparent blur-[140px]" />
            {/* Flare 2: Lavender bottom-right */}
            <div className="absolute bottom-[-20%] right-[-15%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-tl from-indigo-200/50 via-violet-100/25 to-transparent blur-[150px]" />
          </div>

          {/* Hero crown spotlight (top-center glow beacon) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] min-w-[600px] rounded-full bg-brand/[0.055] blur-[130px] animate-spotlight" aria-hidden="true" />
        </div>

        {/* Content Stacking Layer wrapper */}
        <div className="relative z-10 min-h-full flex flex-col flex-grow">
          <ThemeProvider>
            <LanguageProvider>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <ChatBot />
            </LanguageProvider>
          </ThemeProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

