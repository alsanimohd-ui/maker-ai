import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maker AI | Custom AI Systems & Business Automation",
  description: "We build tailored AI automation systems, chatbots, smart analytics software, and robust cloud architectures to streamline your operations, reduce costs, and scale your business.",
  keywords: ["AI automation", "AI chatbots", "business automation", "Cloud DevOps", "smart systems", "artificial intelligence services"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden">
        {/* Dynamic Background System */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-gradient-to-b from-[#0a0c16] via-[#05060b] to-[#030406]">
          {/* Ambient Grid Overlay */}
          <div className="absolute inset-0 bg-grid-masked" />
          
          {/* Orb 1: Teal/Cyan (Top Left) */}
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[350px] min-h-[350px] rounded-full bg-gradient-to-br from-brand/15 via-cyan-500/5 to-transparent blur-[120px] animate-orb-float-1" />
          
          {/* Orb 2: Royal Violet/Indigo (Bottom Right) */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] min-w-[400px] min-h-[400px] rounded-full bg-gradient-to-tr from-indigo-500/12 via-purple-600/6 to-transparent blur-[130px] animate-orb-float-2" />
          
          {/* Orb 3: Deep Blue (Center Left) */}
          <div className="absolute top-[35%] left-[5%] w-[40vw] h-[40vw] min-w-[280px] min-h-[280px] rounded-full bg-gradient-to-r from-blue-600/10 via-brand/3 to-transparent blur-[100px] animate-orb-float-3" />
          
          {/* Hero Premium Accent Spotlight (Center Top) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] min-w-[600px] rounded-full bg-brand/[0.06] blur-[130px]" />
        </div>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatBot />
      </body>

    </html>
  );
}

