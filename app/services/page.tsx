"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang];
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const headingGradient = isDark
    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400"
    : "text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500";

  const servicePillars = [
    {
      title: t.pillar1_title,
      desc: t.pillar1_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      title: t.pillar2_title,
      desc: t.pillar2_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: t.pillar3_title,
      desc: t.pillar3_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: t.pillar4_title,
      desc: t.pillar4_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 6.747M12 3a9.003 9.003 0 00-8.716 6.747M3 12h18" />
        </svg>
      ),
    },
    {
      title: t.pillar5_title,
      desc: t.pillar5_desc,
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m1.5 7.5H3m3.75 3.75V21m7.5-3.75V21m3.75-12.75H21m-1.5 7.5H21M12 3v1.5m6 3.75v10.5A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 016 18.75V8.25A2.25 2.25 0 018.25 6h7.5A2.25 2.25 0 0118 8.25zM10.5 12h3M12 10.5v3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col w-full py-24 sm:py-32 z-10">
        {/* Header section */}
        <section className="max-w-7xl mx-auto px-6 w-full text-center mb-16 sm:mb-24">
          <div className={`animate-on-load ${mounted ? "visible" : ""}`}>
            <h1 className={`text-4xl font-black tracking-tight sm:text-5xl md:text-6xl uppercase select-none ${headingGradient}`}>
              {t.services_page_title}
            </h1>
            <p className={`mt-4 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.services_page_sub}
            </p>
          </div>
        </section>

        {/* 5 Pillars Grid Showcase */}
        <section className="max-w-7xl mx-auto px-6 w-full mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {servicePillars.map((pillar, index) => (
              <Reveal
                key={index}
                delay={100 * (index + 1)}
                className={`h-full ${index === 4 ? "md:col-span-2" : ""}`}
              >
                <div className="card-neon-border rounded-2xl p-8 sm:p-10 flex flex-col h-full overflow-hidden group">
                  {/* Immersive inner top radial glow on hover */}
                  <div 
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,179,186,0.08),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 dark:bg-cyan-950/20 border border-cyan-500/20 mb-6 text-cyan-500 dark:text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                      {pillar.icon}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {pillar.title}
                    </h2>
                    <p className={`text-sm leading-relaxed font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* High-Conversion CTA */}
        <section className="max-w-4xl mx-auto px-6 w-full text-center border-t border-[var(--card-border-default)] pt-20">
          <Reveal className="card-neon-border rounded-2xl p-10 sm:p-20 relative overflow-hidden shadow-2xl shadow-cyan-950/25">
            <div className="absolute top-[-35%] left-[-35%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 via-blue-500/2 to-transparent blur-[100px]" />
            <div className="absolute bottom-[-35%] right-[-35%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/5 via-purple-600/2 to-transparent blur-[100px]" />
            
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 dark:bg-cyan-950/20 px-3.5 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-6 backdrop-blur-md relative z-10">
              {lang === "ar" ? "التدقيق التشغيلي" : "Operational Audit"}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 relative z-10 leading-tight">
              {lang === "ar" ? "هل تبحث عن إزالة الاختناقات التشغيلية؟" : "Looking to remove operational bottlenecks?"}
            </h2>
            <p className={`text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed relative z-10 font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {lang === "ar" 
                ? "احجز جلسة تدقيق مجانية مدتها 30 دقيقة لنحدد فيها معاً أين يفقد عملك الوقت والأموال وكيفية أتمتة الأنظمة."
                : "Book a free 30-minute operational audit. We will map out exactly where you are losing time and how to automate it."}
            </p>
            <div className="relative z-10 inline-block group">
              <div className="absolute -inset-1.5 bg-brand blur-xl rounded-xl opacity-20 group-hover:opacity-35 transition-opacity duration-300" />
              <Link
                href="/contact"
                className="btn-primary relative inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
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
