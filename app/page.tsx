"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang];
  const isDark = theme === "dark";

  // ── Hero title: sharp chrome in dark, deep corporate ink in light ──
  const titleContent = lang === "ar" ? (
    <>
      <span className={`text-transparent bg-clip-text font-black ${
        isDark
          ? "bg-gradient-to-b from-white via-slate-100 to-slate-400"
          : "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600"
      }`}>
        أتمتة{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        الذكاء الاصطناعي
      </span>{" "}
      <span className={`text-transparent bg-clip-text font-black ${
        isDark
          ? "bg-gradient-to-b from-white via-slate-100 to-slate-400"
          : "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600"
      }`}>
        من الجيل القادم. هندسة معززة بـ{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        أمن المؤسسات.
      </span>
    </>
  ) : (
    <>
      <span className={`text-transparent bg-clip-text font-black ${
        isDark
          ? "bg-gradient-to-b from-white via-slate-100 to-slate-400"
          : "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600"
      }`}>
        Next-Gen{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        AI Automation
      </span>
      <span className={`text-transparent bg-clip-text font-black ${
        isDark
          ? "bg-gradient-to-b from-white via-slate-100 to-slate-400"
          : "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600"
      }`}>
        . Engineered with Enterprise{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        Security.
      </span>
    </>
  );

  // ── Section heading gradient class (shared) ──
  const headingGradient = isDark
    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400"
    : "text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500";

  // ── Service pillar data ──
  const pillars = [
    {
      key: "pillar1",
      title: t.pillar1_title,
      desc: t.pillar1_desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      key: "pillar2",
      title: t.pillar2_title,
      desc: t.pillar2_desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      key: "pillar3",
      title: t.pillar3_title,
      desc: t.pillar3_desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      key: "pillar4",
      title: t.pillar4_title,
      desc: t.pillar4_desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 6.747M12 3a9.003 9.003 0 00-8.716 6.747M3 12h18" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative text-foreground flex flex-col overflow-hidden">

      {/* ── HERO SECTION ──────────────────────────────────────────── */}
      <section className="relative w-full pt-24 pb-16 sm:pt-32 sm:pb-20 border-b border-[var(--card-border-default)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Value Proposition */}
          <div className="col-span-1 lg:col-span-7 flex flex-col text-left rtl:text-right select-none">

            <Reveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] tracking-tight leading-[1.12] pt-2">
                {titleContent}
              </h1>
            </Reveal>

            <Reveal delay={380}>
              <p className={`text-base sm:text-lg lg:text-xl leading-relaxed mt-6 mb-10 max-w-2xl font-light ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                {t.hero_subtitle_secure}
              </p>
            </Reveal>

            <Reveal delay={530}>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">

                {/* Primary CTA — launch Mi Tools */}
                <Link
                  href="https://mi.maker-ai.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl
                    bg-gradient-to-r from-cyan-400 to-[#0eb3ba]
                    hover:from-cyan-300 hover:to-[#14d2db]
                    px-8 py-4 text-sm font-black tracking-widest uppercase text-[#020209]
                    shadow-[0_0_28px_rgba(14,179,186,0.4)] hover:shadow-[0_0_50px_rgba(14,179,186,0.75)]
                    border border-cyan-300/20 active:scale-[0.97]
                    transition-all duration-300"
                >
                  {t.hero_btn_launch}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {/* Secondary CTA — explore solutions */}
                <Link
                  href="/services"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl
                    px-8 py-4 text-sm font-bold tracking-wide
                    transition-all duration-300 active:scale-[0.97] backdrop-blur-md
                    ${isDark
                      ? "border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/20 text-slate-200"
                      : "border border-slate-300 bg-white/70 hover:bg-white hover:border-slate-400 text-slate-800 shadow-sm hover:shadow-md"
                    }`}
                >
                  {t.hero_btn_explore_enterprise}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Reimagined Cyber Core Graphic */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center relative">
            <Reveal delay={250} className="w-full max-w-[420px] aspect-square relative flex items-center justify-center">

              {/* ── Deep ambient glow pool behind the entire composition ── */}
              <div
                className={`absolute inset-[-15%] rounded-full blur-[80px] pointer-events-none ${
                  isDark
                    ? "bg-gradient-radial from-cyan-500/18 via-indigo-600/8 to-transparent"
                    : "bg-gradient-radial from-cyan-400/15 via-blue-200/10 to-transparent"
                }`}
                aria-hidden="true"
              />

              {/* ── Outer ring: ultra-slow clockwise, single-pixel, gradient ── */}
              <div
                className="absolute inset-0 rounded-full animate-ring-slow pointer-events-none"
                style={{
                  background: 'transparent',
                  border: '1px solid transparent',
                  backgroundImage: isDark
                    ? 'linear-gradient(black, black), conic-gradient(from 0deg, rgba(14,179,186,0.5) 0%, rgba(99,102,241,0.3) 40%, transparent 60%, rgba(14,179,186,0.5) 100%)'
                    : 'linear-gradient(#f5f7fa, #f5f7fa), conic-gradient(from 0deg, rgba(14,179,186,0.4) 0%, rgba(99,102,241,0.2) 40%, transparent 60%, rgba(14,179,186,0.4) 100%)',
                  backgroundClip: 'padding-box, border-box',
                  backgroundOrigin: 'padding-box, border-box',
                }}
                aria-hidden="true"
              />

              {/* ── Inner orbit ring: reverse slow spin ── */}
              <div
                className="absolute w-[76%] h-[76%] rounded-full animate-ring-reverse pointer-events-none"
                style={{
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(14,179,186,0.15)"}`,
                  background: 'transparent',
                }}
                aria-hidden="true"
              />

              {/* ── Orbiting accent dot — rides the outer ring ── */}
              <div
                className="absolute inset-0 rounded-full animate-ring-slow pointer-events-none"
                aria-hidden="true"
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                  isDark ? "bg-cyan-400 shadow-[0_0_10px_4px_rgba(14,179,186,0.5)]" : "bg-cyan-500 shadow-[0_0_8px_3px_rgba(14,179,186,0.4)]"
                }`} />
              </div>

              {/* ── Secondary orbiting dot on inner ring (phase-shifted) ── */}
              <div
                className="absolute w-[76%] h-[76%] rounded-full animate-ring-reverse pointer-events-none"
                aria-hidden="true"
              >
                <div className={`absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-1.5 h-1.5 rounded-full ${
                  isDark ? "bg-indigo-400 shadow-[0_0_8px_3px_rgba(99,102,241,0.5)]" : "bg-indigo-500 shadow-[0_0_6px_2px_rgba(99,102,241,0.4)]"
                }`} />
              </div>

              {/* ── Central pulsing core glow sphere ── */}
              <div
                className={`w-36 h-36 rounded-full absolute pointer-events-none animate-pulse ${
                  isDark ? "bg-cyan-500/15 blur-[45px]" : "bg-cyan-400/12 blur-[40px]"
                }`}
                aria-hidden="true"
              />

              {/* ── Localized brand flare behind icon ── */}
              <div
                className={`w-52 h-52 rounded-full absolute -z-10 pointer-events-none animate-hero-orb ${
                  isDark
                    ? "bg-gradient-to-br from-cyan-500/12 via-indigo-500/6 to-transparent blur-[60px]"
                    : "bg-gradient-to-br from-cyan-400/10 via-blue-300/6 to-transparent blur-[55px]"
                }`}
                aria-hidden="true"
              />

              {/* ── Hexagonal accent lines (SVG, purely decorative) ── */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Cross-hair fine lines */}
                <line x1="200" y1="0" x2="200" y2="400" stroke="#0eb3ba" strokeWidth="0.5" strokeDasharray="6 14" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="#0eb3ba" strokeWidth="0.5" strokeDasharray="6 14" />
                {/* 45° diagonals */}
                <line x1="0" y1="0" x2="400" y2="400" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="4 18" />
                <line x1="400" y1="0" x2="0" y2="400" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="4 18" />
              </svg>

              {/* ── Central Icon ── */}
              <img
                src="/assets/logo/icon-color.svg"
                alt="Maker-AI Core Icon"
                className="w-[30%] h-[30%] object-contain select-none pointer-events-none z-10 animate-float-gentle"
                style={{ animationDuration: "5.5s", filter: isDark ? "none" : "drop-shadow(0 4px 16px rgba(14,179,186,0.25))" }}
              />

            </Reveal>
          </div>

        </div>
      </section>

      {/* ── SECTION 1: Metrics Bar ─────────────────────────────────── */}
      <section className="relative w-full border-b border-[var(--card-border-default)] py-10 select-none" style={{ background: 'var(--card-bg)' }}>
        <div className="absolute inset-0 backdrop-blur-md pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">

          {[
            { value: t.metric_workflows_value, label: t.metric_workflows_sub },
            { value: t.metric_uptime_value,    label: t.metric_uptime_sub,    divider: true },
            { value: t.metric_security_value,  label: t.metric_security_sub },
          ].map((m, i) => (
            <Reveal key={i} delay={100 + i * 150} className={
              m.divider ? "border-y md:border-y-0 md:border-x border-[var(--card-border-default)] py-6 md:py-0" : ""
            }>
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl sm:text-4xl font-black text-cyan-500 dark:text-cyan-400 drop-shadow-[0_0_18px_rgba(14,179,186,0.35)]">
                  {m.value}
                </span>
                <span className={`text-xs sm:text-sm font-bold tracking-widest uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {m.label}
                </span>
              </div>
            </Reveal>
          ))}

        </div>
      </section>

      {/* ── SECTION 2: Core Services Grid ─────────────────────────── */}
      <section id="services" className="relative w-full py-24 sm:py-32 border-b border-[var(--card-border-default)]">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal delay={100} className="text-center mb-16 sm:mb-20">
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight uppercase select-none ${headingGradient}`}>
              {t.services_arch_title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.key} delay={150 + i * 100} className="h-full">
                <div className="card-neon-border rounded-2xl p-7 flex flex-col h-full group overflow-hidden">

                  {/* Hover radial flare */}
                  <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,179,186,0.08),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    aria-hidden="true"
                  />

                  {/* Icon badge */}
                  <div className={`relative z-10 h-11 w-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300
                    ${isDark
                      ? "bg-cyan-900/30 border border-cyan-500/25 text-cyan-400 shadow-[0_0_16px_rgba(14,179,186,0.12)] group-hover:shadow-[0_0_24px_rgba(14,179,186,0.25)]"
                      : "bg-cyan-50 border border-cyan-200 text-cyan-600 shadow-sm group-hover:shadow-[0_0_16px_rgba(14,179,186,0.2)]"
                    }`}>
                    {p.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`relative z-10 text-lg font-bold mb-3 tracking-wide transition-colors duration-300
                    ${isDark
                      ? "text-white group-hover:text-cyan-300"
                      : "text-slate-900 group-hover:text-cyan-700"
                    }`}>
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className={`relative z-10 text-sm leading-relaxed font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 3: Operational Blueprint ──────────────────────── */}
      <section className="relative w-full py-24 sm:py-32 border-b border-[var(--card-border-default)]">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal delay={100} className="text-center mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase">
              {t.blueprint_subtitle}
            </span>
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight uppercase mt-3 select-none ${headingGradient}`}>
              {t.blueprint_title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {[
              { num: "01", title: t.blueprint_step1_title, desc: t.blueprint_step1_desc },
              { num: "02", title: t.blueprint_step2_title, desc: t.blueprint_step2_desc },
              { num: "03", title: t.blueprint_step3_title, desc: t.blueprint_step3_desc },
            ].map((step, i) => (
              <Reveal key={step.num} delay={200 + i * 150} className="relative flex flex-col items-center text-center">
                <div className={`h-16 w-16 rounded-full flex items-center justify-center text-xl font-black mb-6 z-10 transition-all duration-300
                  ${isDark
                    ? "bg-cyan-950/50 border border-cyan-500/35 text-cyan-400 shadow-[0_0_22px_rgba(14,179,186,0.22)]"
                    : "bg-cyan-50 border border-cyan-300 text-cyan-600 shadow-md"
                  }`}>
                  {step.num}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed font-light max-w-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {step.desc}
                </p>
                {/* Connector line (desktop only) */}
                {i < 2 && (
                  <div className="hidden lg:block absolute top-8 left-[62%] rtl:left-auto rtl:right-[62%] w-[76%] h-px bg-gradient-to-r rtl:bg-gradient-to-l from-cyan-500/30 via-cyan-500/15 to-transparent -z-10" />
                )}
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: High-Conversion CTA ────────────────────────── */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-t border-[var(--card-border-default)]">

        {/* Ambient background glow sweep */}
        <div
          className={`absolute inset-0 pointer-events-none -z-10 ${
            isDark
              ? "bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(14,179,186,0.04),transparent)]"
              : "bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(14,179,186,0.02),transparent)]"
          }`}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <Reveal delay={100} className="mb-10 text-center">
            <h2 className={`text-3xl sm:text-4xl font-black tracking-tight uppercase select-none ${headingGradient}`}>
              {lang === "ar" ? "هل أنت مستعد لأتمتة أعمالك؟" : "Ready to Automate Your Business?"}
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed mt-4 max-w-lg mx-auto font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {lang === "ar" 
                ? "تخلص من المهام اليدوية المكررة ودعنا نهندس لك الحلول المناسبة لتسريع نموك."
                : "Remove manual operational bottlenecks. Partner with us to engineer robust digital systems."}
            </p>
          </Reveal>

          <Reveal delay={250}>
            {/* Glowing halo layer - subtle premium glow */}
            <div className="relative inline-block group">
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-teal-500 blur-xl rounded-xl opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center rounded-xl
                  bg-gradient-to-r from-cyan-400 via-[#0eb3ba] to-teal-500
                  hover:from-cyan-300 hover:via-[#14d2db] hover:to-teal-400
                  px-8 py-4
                  text-sm font-bold tracking-wider uppercase text-[#020209]
                  shadow-[0_4px_20px_rgba(14,179,186,0.15)] hover:shadow-[0_4px_30px_rgba(14,179,186,0.25)]
                  border border-cyan-300/10
                  hover:scale-[1.01] active:scale-[0.98]
                  transition-all duration-300 cursor-pointer"
              >
                {t.cta_complexities}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
