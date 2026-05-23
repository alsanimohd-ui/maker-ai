import type { Metadata } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { LanguageProvider } from "@/context/LanguageContext";

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
  title: "Maker AI | Custom AI Systems & Business Automation",
  description: "We build tailored AI automation systems, chatbots, smart analytics software, and robust cloud architectures to streamline your operations, reduce costs, and scale your business.",
  keywords: ["AI automation", "AI chatbots", "business automation", "Cloud DevOps", "smart systems", "artificial intelligence services"],
  icons: {
    icon: "/assets/logo/icon-dark.svg",
    shortcut: "/assets/logo/icon-dark.svg",
    apple: "/assets/logo/icon-dark.svg",
  },
  openGraph: {
    title: "Maker AI | Custom AI Systems & Business Automation",
    description: "Tailored artificial intelligence systems to automate workflows, engage customers, and optimize systems.",
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
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-gradient-to-b from-slate-50 via-sky-50/15 to-slate-50">
          {/* Ambient Grid Overlay */}
          <div className="absolute inset-0 bg-grid-masked" />

          {/* SVG filter definition for liquid smoke distortion */}
          <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="liquid-smoke">
                <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="3" result="noise">
                  <animate attributeName="baseFrequency" values="0.006 0.009; 0.010 0.014; 0.006 0.009" dur="45s" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>
          
          {/* Distorted Liquid Aurora Blob Container */}
          <div className="absolute inset-0 opacity-90" style={{ filter: 'url(#liquid-smoke)' }}>
            {/* Orb 1: Vibrant Teal (Top Left) */}
            <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] min-w-[380px] min-h-[380px] rounded-full bg-gradient-to-br from-brand/20 via-cyan-400/8 to-transparent blur-[90px] animate-aurora-1" />
            
            {/* Orb 2: Royal Purple/Indigo (Bottom Right) */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] min-w-[420px] min-h-[420px] rounded-full bg-gradient-to-tr from-indigo-500/18 via-purple-500/8 to-transparent blur-[100px] animate-aurora-2" />
            
            {/* Orb 3: Sky Blue (Center Left) */}
            <div className="absolute top-[35%] left-[5%] w-[45vw] h-[45vw] min-w-[300px] min-h-[300px] rounded-full bg-gradient-to-r from-blue-400/15 via-brand/8 to-transparent blur-[85px] animate-aurora-3" />
          </div>
          
          {/* Hero Premium Accent Spotlight (Center Top) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[75vw] h-[45vh] min-w-[650px] rounded-full bg-brand/[0.06] blur-[120px] animate-spotlight" />
        </div>

        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}

