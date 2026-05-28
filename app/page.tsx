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
    <div className="relative min-h-screen bg-[#030307] text-white flex flex-col justify-center overflow-hidden">
      {/* 1. Luxury Immersive Background (The Aurora Canvas & Grid Overlay) */}
      <div 
        className="absolute top-0 inset-x-0 h-full pointer-events-none -z-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(0, 242, 254, 0.08) 0%, rgba(0, 0, 0, 0) 60%)' }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"
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
              <p className="text-slate-400/90 text-base sm:text-lg lg:text-xl leading-relaxed mt-6 mb-10 max-w-2xl font-light">
                {t.hero_subtitle_secure}
              </p>
            </Reveal>

            {/* Call to Action buttons */}
            <Reveal delay={550}>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                {/* Primary Launch button with sub-pixel border overlay & neon shadow */}
                <Link
                  href="#"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-[#0eb3ba] hover:from-cyan-300 hover:to-[#14d2db] px-8 py-4 text-base font-bold text-[#020205] shadow-[0_0_25px_rgba(0,242,254,0.2)] hover:shadow-[0_0_35px_rgba(0,242,254,0.4)] border border-cyan-300/10 active:scale-95 transition-all duration-300"
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

          {/* Right Column: Redesigned Dynamic Cyber-Core */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center relative">
            <Reveal delay={300} className="w-full max-w-[440px] aspect-square relative flex items-center justify-center">
              
              {/* Layer 1: Outer Ring (delicate, dashed spinning circle) */}
              <div 
                className="animate-[spin_120s_linear_infinite] border border-dashed border-cyan-500/10 rounded-full w-full h-full absolute pointer-events-none" 
                aria-hidden="true"
              />

              {/* Layer 2: Inner Ring (dotted concentric circle spinning counter-clockwise) */}
              <div 
                className="animate-[spin_60s_linear_infinite] border border-dotted border-white/5 rounded-full w-[80%] h-[80%] absolute pointer-events-none" 
                style={{ animationDirection: "reverse" }}
                aria-hidden="true"
              />

              {/* Layer 3: The Core Glow (turquoise blurred ambient shadow sphere) */}
              <div 
                className="w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full absolute pointer-events-none" 
                aria-hidden="true"
              />

              {/* Layer 4: The Central Node (Micro-floating corporate logo icon) */}
              <img
                src="/assets/logo/icon-color.svg"
                alt="Maker-AI Core Icon"
                className="w-1/3 h-1/3 object-contain select-none pointer-events-none z-10 animate-float-gentle"
                style={{ animationDuration: "5s" }}
              />
              
            </Reveal>
          </div>

        </div>
      </section>
    </div>
  );
}
