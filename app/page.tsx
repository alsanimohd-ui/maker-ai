"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // Title segments with gradient highlights for English and Arabic
  const titleContent = lang === "ar" ? (
    <>
      أتمتة{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-extrabold animate-text-gradient-flow">
        الذكاء الاصطناعي
      </span>{" "}
      من الجيل القادم. هندسة معززة بـ{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-extrabold animate-text-gradient-flow">
        أمن المؤسسات.
      </span>
    </>
  ) : (
    <>
      Next-Gen{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-extrabold animate-text-gradient-flow">
        AI Automation
      </span>
      . Engineered with Enterprise{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-extrabold animate-text-gradient-flow">
        Security.
      </span>
    </>
  );

  return (
    <div className="relative min-h-screen bg-[#020205] text-white flex flex-col justify-center overflow-hidden">
      {/* 1. Subtle Radial Glow & Grid Overlay */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-cyan-500/8 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_at_top,black_55%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 2. Futuristic Hero Section (Asymmetrical Split) */}
      <section className="relative w-full py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="col-span-1 lg:col-span-7 flex flex-col text-left rtl:text-right select-none">
            
            {/* Micro-badge */}
            <Reveal delay={100} className="self-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-cyan-400 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)] mb-8">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse-glow" />
                {t.hero_badge_secure}
              </div>
            </Reveal>

            {/* Main Title */}
            <Reveal delay={250}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                {titleContent}
              </h1>
            </Reveal>

            {/* Subtitle statement */}
            <Reveal delay={400}>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed mt-6 mb-10 max-w-2xl font-light">
                {t.hero_subtitle_secure}
              </p>
            </Reveal>

            {/* Call to Action buttons */}
            <Reveal delay={550}>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                {/* Primary Launch button */}
                <Link
                  href="#"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-[#0eb3ba] hover:from-cyan-300 hover:to-[#14d2db] px-8 py-4 text-base font-bold text-[#020205] shadow-[0_0_15px_rgba(0,242,254,0.15)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] active:scale-95 transition-all duration-300"
                >
                  {t.hero_btn_launch}
                  <svg 
                    className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {/* Secondary solutions button */}
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 px-8 py-4 text-base font-bold text-white hover:scale-[1.01] active:scale-95 transition-all duration-300 backdrop-blur-md"
                >
                  {t.hero_btn_explore_enterprise}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: The Holographic Core */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center relative">
            <Reveal delay={300} className="w-full max-w-[400px] aspect-square">
              
              {/* Pulsing glow underlay */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/8 to-blue-500/8 blur-[30px] rounded-[40px] pointer-events-none -z-10 opacity-80 animate-pulse" 
                style={{ animationDuration: "4s" }}
              />

              {/* Holographic glass container */}
              <div className="w-full h-full backdrop-blur-xl bg-white/[0.01] border border-white/[0.08] rounded-[32px] flex items-center justify-center relative shadow-[0_0_50px_rgba(0,242,254,0.03)] overflow-hidden group">
                
                {/* Slow spinning technical SVG rings */}
                <svg 
                  className="absolute w-[80%] h-[80%] animate-spin-slow opacity-25 pointer-events-none" 
                  viewBox="0 0 100 100"
                  style={{ animationDuration: "25s" }}
                >
                  <circle cx="50" cy="50" r="45" stroke="url(#cyan-hologram)" strokeWidth="0.5" fill="none" strokeDasharray="12 18 35 12" />
                  <circle cx="50" cy="50" r="38" stroke="url(#cyan-hologram)" strokeWidth="0.25" fill="none" strokeDasharray="4 6" />
                  <defs>
                    <linearGradient id="cyan-hologram" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#4facfe" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Ambient glow directly behind the icon */}
                <div 
                  className="absolute w-36 h-36 bg-cyan-400/20 blur-[50px] rounded-full pointer-events-none" 
                />

                {/* Pulser visual node element */}
                <div className="absolute w-52 h-52 border border-cyan-400/10 rounded-full scale-75 animate-ping opacity-15 pointer-events-none" style={{ animationDuration: "3s" }} />

                {/* Floating Logo Icon */}
                <img
                  src="/assets/logo/icon-color.svg"
                  alt="Maker-AI Core Icon"
                  className="w-1/3 h-1/3 object-contain select-none pointer-events-none z-10 animate-float-gentle"
                  style={{ animationDuration: "5s" }}
                />

                {/* Cyberpunk grid overlay lines inside the holographic core card */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,2,5,0.85)_100%)] pointer-events-none" />
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </div>
  );
}
