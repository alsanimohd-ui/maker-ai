"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // Metallic chrome text gradient segments for standard copy and cyan/teal for key highlights
  const titleContent = lang === "ar" ? (
    <>
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 font-black">
        أتمتة{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        الذكاء الاصطناعي
      </span>{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 font-black">
        من الجيل القادم. هندسة معززة بـ{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        أمن المؤسسات.
      </span>
    </>
  ) : (
    <>
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-450 font-black">
        Next-Gen{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        AI Automation
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-450 font-black">
        . Engineered with Enterprise{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        Security.
      </span>
    </>
  );

  return (
    <div className="relative min-h-screen bg-[#030307] text-white flex flex-col justify-center overflow-hidden">
      {/* 1. Global Ambience Upgrades (Soft Aurora Canvas & Faint 2% Opacity Cybernetic Grid Matrix) */}
      <div 
        className="absolute top-0 inset-x-0 h-full pointer-events-none -z-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(0, 242, 254, 0.08) 0%, rgba(29, 78, 216, 0.04) 30%, rgba(0, 0, 0, 0) 70%)' }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-16 sm:pt-32 sm:pb-20 border-b border-white/[0.03]">
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
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
                {/* Primary Launch button */}
                <Link
                  href="#"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-[#0eb3ba] hover:from-cyan-300 hover:to-[#14d2db] px-8 py-4 text-base font-black tracking-wide uppercase text-[#020205] shadow-[0_0_30px_rgba(0,242,254,0.35)] hover:shadow-[0_0_50px_rgba(0,242,254,0.7)] border border-cyan-300/10 active:scale-95 transition-all duration-300"
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

          {/* Right Column: Dynamic Cyber-Core */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center relative">
            <Reveal delay={300} className="w-full max-w-[440px] aspect-square relative flex items-center justify-center">
              
              {/* Layer 1: Outer Ring (dashed spinning circle clockwise) */}
              <div 
                className="animate-[spin_120s_linear_infinite] border border-dashed border-cyan-500/10 rounded-full w-full h-full absolute pointer-events-none" 
                aria-hidden="true"
              />

              {/* Layer 2: Inner Ring (dotted concentric circle spinning counter-clockwise) */}
              <div 
                className="animate-[spin_60s_linear_infinite] [animation-direction:reverse] border border-dotted border-white/5 rounded-full w-[80%] h-[80%] absolute pointer-events-none" 
                aria-hidden="true"
              />

              {/* Layer 3: The Core Pulsing Glow Sphere */}
              <div 
                className="w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full absolute pointer-events-none animate-pulse" 
                aria-hidden="true"
              />

              {/* Layer 4: The Central Node Icon */}
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

      {/* SECTION 1: Core Infrastructure Metrics Bar */}
      <section className="relative w-full border-b border-white/[0.05] bg-white/[0.01] backdrop-blur-md py-10 select-none">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          
          <Reveal delay={100}>
            <div className="flex flex-col gap-1.5">
              <span className="text-3xl sm:text-4xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                {t.metric_workflows_value}
              </span>
              <span className="text-xs sm:text-sm text-slate-455 font-bold tracking-wider uppercase">
                {t.metric_workflows_sub}
              </span>
            </div>
          </Reveal>

          <Reveal delay={250} className="border-y md:border-y-0 md:border-x border-white/[0.05] py-6 md:py-0">
            <div className="flex flex-col gap-1.5">
              <span className="text-3xl sm:text-4xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                {t.metric_uptime_value}
              </span>
              <span className="text-xs sm:text-sm text-slate-455 font-bold tracking-wider uppercase">
                {t.metric_uptime_sub}
              </span>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col gap-1.5">
              <span className="text-3xl sm:text-4xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                {t.metric_security_value}
              </span>
              <span className="text-xs sm:text-sm text-slate-455 font-bold tracking-wider uppercase">
                {t.metric_security_sub}
              </span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* SECTION 2: Core Services Architecture Grid */}
      <section id="services" className="relative w-full py-24 sm:py-32 border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          
          <Reveal delay={100} className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 uppercase select-none">
              {t.services_arch_title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: SaaS ERP (Isolated Multi-tenant ERP in Docker & JoFotara E-Invoicing) */}
            <Reveal delay={200} className="h-full">
              <div className="relative group overflow-hidden h-full backdrop-blur-xl bg-white/[0.01] border border-white/[0.04] hover:border-cyan-400/40 rounded-[24px] p-8 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,242,254,0.05)] transition-all duration-500 flex flex-col justify-between">
                {/* Immersive inner top radial glow on hover */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,242,254,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />
                
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-cyan-955/20 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                    {t.services_card1_title}
                  </h3>
                  <p className="text-slate-400/90 text-sm leading-relaxed font-light">
                    {t.services_card1_desc}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 2: High-Scale Automation (Orchestrating 100+ n8n workflows on optimized Linux runtime) */}
            <Reveal delay={350} className="h-full">
              <div className="relative group overflow-hidden h-full backdrop-blur-xl bg-white/[0.01] border border-white/[0.04] hover:border-cyan-400/40 rounded-[24px] p-8 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,242,254,0.05)] transition-all duration-500 flex flex-col justify-between">
                {/* Immersive inner top radial glow on hover */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,242,254,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-cyan-955/20 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                    {t.services_card2_title}
                  </h3>
                  <p className="text-slate-400/90 text-sm leading-relaxed font-light">
                    {t.services_card2_desc}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Network Security (CEH Framework & Virtual Firewalling perimeter defense) */}
            <Reveal delay={500} className="h-full">
              <div className="relative group overflow-hidden h-full backdrop-blur-xl bg-white/[0.01] border border-white/[0.04] hover:border-cyan-400/40 rounded-[24px] p-8 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,242,254,0.05)] transition-all duration-500 flex flex-col justify-between">
                {/* Immersive inner top radial glow on hover */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,242,254,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-cyan-955/20 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                    {t.services_card3_title}
                  </h3>
                  <p className="text-slate-400/90 text-sm leading-relaxed font-light">
                    {t.services_card3_desc}
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* SECTION 3: The Operational Blueprint */}
      <section className="relative w-full py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          <Reveal delay={100} className="text-center mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase">
              {t.blueprint_subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 uppercase mt-3 select-none">
              {t.blueprint_title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            
            {/* Step 1 */}
            <Reveal delay={200} className="relative flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-xl font-black text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-6 z-10">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {t.blueprint_step1_title}
              </h3>
              <p className="text-slate-400/90 text-sm leading-relaxed font-light max-w-xs">
                {t.blueprint_step1_desc}
              </p>
              {/* Connector line (points opposite direction on RTL) */}
              <div className="hidden lg:block absolute top-8 left-[65%] rtl:left-auto rtl:right-[65%] w-[70%] h-[1px] bg-gradient-to-r rtl:bg-gradient-to-l from-cyan-500/30 to-transparent -z-10" />
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={350} className="relative flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-xl font-black text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-6 z-10">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {t.blueprint_step2_title}
              </h3>
              <p className="text-slate-400/90 text-sm leading-relaxed font-light max-w-xs">
                {t.blueprint_step2_desc}
              </p>
              {/* Connector line (points opposite direction on RTL) */}
              <div className="hidden lg:block absolute top-8 left-[65%] rtl:left-auto rtl:right-[65%] w-[70%] h-[1px] bg-gradient-to-r rtl:bg-gradient-to-l from-cyan-500/30 to-transparent -z-10" />
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={500} className="relative flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-xl font-black text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-6 z-10">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {t.blueprint_step3_title}
              </h3>
              <p className="text-slate-400/90 text-sm leading-relaxed font-light max-w-xs">
                {t.blueprint_step3_desc}
              </p>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
