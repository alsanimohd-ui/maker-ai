"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const servicePillars = [
    {
      title: t.pillar1_title,
      desc: t.pillar1_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      title: t.pillar2_title,
      desc: t.pillar2_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: t.pillar3_title,
      desc: t.pillar3_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: t.pillar4_title,
      desc: t.pillar4_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 6.747M12 3a9.003 9.003 0 00-8.716 6.747M3 12h18" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030308] text-white flex flex-col justify-center overflow-hidden">
      {/* Background Ambience (Soft Aurora Canvas & Faint 2% Opacity Cybernetic Grid Matrix) */}
      <div 
        className="absolute top-0 inset-x-0 h-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.07) 0%, rgba(2, 2, 5, 0) 70%)' }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="flex flex-col w-full py-24 sm:py-32 z-10">
        {/* Header section */}
        <section className="max-w-7xl mx-auto px-6 w-full text-center mb-16 sm:mb-24">
          <div className={`animate-on-load ${mounted ? "visible" : ""}`}>
            <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 sm:text-5xl md:text-6xl uppercase">
              {t.services_page_title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-400/90 max-w-2xl mx-auto leading-relaxed font-light">
              {t.services_page_sub}
            </p>
          </div>
        </section>

        {/* 4 Pillars Grid Showcase */}
        <section className="max-w-7xl mx-auto px-6 w-full mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePillars.map((pillar, index) => (
              <Reveal
                key={index}
                delay={100 * (index + 1)}
                className="group flex flex-col justify-between rounded-[24px] p-8 sm:p-10 relative overflow-hidden backdrop-blur-xl bg-white/[0.01] border border-white/[0.04] hover:border-cyan-400/40 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,242,254,0.05)] transition-all duration-500 min-h-[250px]"
              >
                {/* Immersive inner top radial glow on hover */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-955/20 border border-cyan-500/20 mb-6 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    {pillar.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {pillar.title}
                  </h2>
                  <p className="text-sm text-slate-400/90 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* High-Conversion CTA */}
        <section className="max-w-4xl mx-auto px-6 w-full text-center">
          <Reveal className="backdrop-blur-xl bg-white/[0.01] border border-white/[0.05] rounded-3xl p-10 sm:p-20 relative overflow-hidden shadow-2xl shadow-cyan-950/25">
            <div className="absolute top-[-35%] left-[-35%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent blur-[100px]" />
            <div className="absolute bottom-[-35%] right-[-35%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/10 via-purple-600/5 to-transparent blur-[100px]" />
            
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-1 text-xs font-semibold text-cyan-400 mb-6 backdrop-blur-md relative z-10">
              {lang === "ar" ? "التدقيق التشغيلي" : "Operational Audit"}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 relative z-10 leading-tight">
              {lang === "ar" ? "هل تبحث عن إزالة الاختناقات التشغيلية؟" : "Looking to remove operational bottlenecks?"}
            </h2>
            <p className="text-slate-400/90 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed relative z-10 font-light">
              {lang === "ar" 
                ? "احجز جلسة تدقيق مجانية مدتها 30 دقيقة لنحدد فيها معاً أين يفقد عملك الوقت والأموال وكيفية أتمتة الأنظمة."
                : "Book a free 30-minute operational audit. We will map out exactly where you are losing time and how to automate it."}
            </p>
            <div className="relative z-10 inline-block group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-teal-500 blur-xl rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-[#0eb3ba] hover:from-cyan-300 hover:to-[#14d2db] px-8 py-5 text-base sm:text-lg font-black tracking-wide text-[#020205] shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:scale-[1.02] border border-cyan-300/10 transition-all duration-300 cursor-pointer"
              >
                {t.cta_complexities}
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
