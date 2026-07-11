"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang];
  const isDark = theme === "dark";
  const isRtl = lang === "ar";

  const headingGradient = isDark
    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400"
    : "text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500";

  return (
    <div
      className="relative flex flex-col w-full min-h-screen overflow-x-hidden pt-0"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* ══════════════════════════════════════════════════════════════
          HERO — Premium Centered "About Us" Canvas
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden border-b border-[var(--card-border-default)] px-4 sm:px-6 pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16">

        {/* ── Centred radial glow behind logo ── */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: "70%", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,179,186,0.12) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        {/* ── Slow-spin decorative orbit circle ── */}
        <div
          className="absolute w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full pointer-events-none animate-ring-slow"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: `1px solid ${isDark ? "rgba(14,179,186,0.08)" : "rgba(14,179,186,0.12)"}`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute w-[min(480px,72vw)] h-[min(480px,72vw)] rounded-full pointer-events-none animate-ring-reverse"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: `1px solid ${isDark ? "rgba(99,102,241,0.06)" : "rgba(99,102,241,0.1)"}`,
          }}
          aria-hidden="true"
        />

        {/* ── Content stack (logo → tagline → description → CTAs) ── */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8">

          {/* Badge removed — logo anchors the brand identity directly */}

          {/* ── Mega Logo — centred showpiece ── */}
          <Reveal delay={150}>
            <div className="relative flex items-center justify-center">
              {/* Glow halo behind logo */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "min(520px, 80vw)",
                  height: "min(180px, 30vw)",
                  background: isDark
                    ? "radial-gradient(ellipse, rgba(14,179,186,0.14) 0%, transparent 70%)"
                    : "radial-gradient(ellipse, rgba(14,179,186,0.1) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
                aria-hidden="true"
              />
              <img
                src="/assets/logo/logo-color.svg"
                alt="Maker AI — Enterprise Automation Engineering"
                className="relative w-full object-contain animate-float-gentle select-none"
                style={{
                  maxWidth: "min(480px, 78vw)",
                  filter: "drop-shadow(0 0 44px rgba(14,179,186,0.28))",
                  animationDuration: "6s",
                }}
              />
            </div>
          </Reveal>

          {/* ── Hero headline ── */}
          <Reveal delay={300}>
            <h1
              className={`font-black tracking-tight leading-[1.1] select-none ${headingGradient}`}
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}
            >
              {lang === "ar"
                ? "هندسة الأتمتة الرقمية. موثوقية المؤسسات."
                : "Engineering Digital Automation. Enterprise-Grade Reliability."}
            </h1>
          </Reveal>

          {/* ── About Us body text — premium typographic placeholder ── */}
          <Reveal delay={450}>
            <p
              className={`leading-relaxed font-light max-w-2xl mx-auto ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
            >
              {t.hero_subtitle_secure}
            </p>
          </Reveal>

          {/* ── Decorative divider ── */}
          <Reveal delay={500}>
            <div className="flex items-center gap-3 w-full max-w-xs mx-auto">
              <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${isDark ? "rgba(14,179,186,0.3)" : "rgba(14,179,186,0.4)"})` }} />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
              <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${isDark ? "rgba(14,179,186,0.3)" : "rgba(14,179,186,0.4)"})` }} />
            </div>
          </Reveal>

          {/* ── CTA Buttons ── */}
          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center">

              {/* Primary — Launch Mi Tools */}
              <Link
                href="https://mi.maker-ai.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl font-black tracking-widest uppercase text-[#020209] transition-all duration-300 active:scale-[0.97]"
                style={{
                  padding: "clamp(0.85rem,2vw,1rem) clamp(1.75rem,4vw,2.5rem)",
                  fontSize: "clamp(0.75rem,1.5vw,0.875rem)",
                  background: "linear-gradient(135deg, #22d3ee 0%, #0eb3ba 100%)",
                  boxShadow: "0 0 32px rgba(14,179,186,0.45)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 55px rgba(14,179,186,0.75)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 32px rgba(14,179,186,0.45)"; }}
              >
                {t.hero_btn_launch}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              {/* Secondary — Explore Solutions */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl font-bold tracking-wide transition-all duration-300 active:scale-[0.97] backdrop-blur-md"
                style={{
                  padding: "clamp(0.85rem,2vw,1rem) clamp(1.75rem,4vw,2.5rem)",
                  fontSize: "clamp(0.75rem,1.5vw,0.875rem)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.15)"}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)",
                  color: isDark ? "#e2e8f0" : "#1e293b",
                  boxShadow: isDark ? "none" : "0 2px 8px rgba(15,23,42,0.06)",
                }}
              >
                {t.hero_btn_explore_enterprise}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ABOUT US — Premium Identity Section
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-[var(--card-border-default)] overflow-hidden" style={{ padding: "clamp(2.5rem, 5vw, 4.5rem) 1rem" }}>

        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: isDark ? "rgba(10,14,26,0.35)" : "rgba(248,250,252,0.6)" }}
          aria-hidden="true"
        />
        {/* Subtle right-side glow accent */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: isDark ? "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(14,179,186,0.05), transparent)" : "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(14,179,186,0.04), transparent)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Two-column layout: left label col + right rich text col ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

            {/* Left: section label + decorative line */}
            <Reveal delay={0} className="lg:col-span-4">
              <div className="flex flex-col gap-4">
                <div
                  className="inline-flex items-center gap-2 self-start"
                  style={{ color: "#0eb3ba" }}
                >
                  <div className="w-8 h-px" style={{ background: "#0eb3ba" }} />
                  <span
                    className="font-bold tracking-[0.2em] uppercase"
                    style={{ fontSize: "clamp(0.65rem,1.2vw,0.75rem)" }}
                  >
                    {lang === "ar" ? "من نحن" : "About Us"}
                  </span>
                </div>

                <h2
                  className={`font-black tracking-tight leading-[1.1] select-none ${headingGradient}`}
                  style={{ fontSize: "clamp(2rem,5vw,3.25rem)" }}
                >
                  {lang === "ar"
                    ? (<>بناء مستقبل <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">الأتمتة</span> الرقمية</>)
                    : (<>Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Digital Automation</span></>)
                  }
                </h2>

                {/* Decorative vertical rule */}
                <div
                  className="hidden lg:block w-px self-start mt-2"
                  style={{
                    height: "clamp(3rem,6vw,5rem)",
                    background: isDark
                      ? "linear-gradient(to bottom, rgba(14,179,186,0.4), transparent)"
                      : "linear-gradient(to bottom, rgba(14,179,186,0.35), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            {/* Right: rich content stack */}
            <div className="lg:col-span-8 flex flex-col gap-8">

              {/* Lead paragraph */}
              <Reveal delay={120}>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    fontSize: "clamp(1rem,2.2vw,1.2rem)",
                    color: isDark ? "#cbd5e1" : "#334155",
                  }}
                >
                  {lang === "ar"
                    ? "نحن Maker AI — شركة هندسة وأتمتة متخصصة في بناء البنى التحتية الرقمية للمؤسسات. نصمم أنظمة متكاملة تربط أدواتك وتحوّل عملياتك اليدوية إلى ماكينة رقمية دقيقة تعمل دون توقف."
                    : "We are Maker AI — an engineering and automation firm specializing in building digital infrastructure for businesses. We design integrated systems that connect your tools and transform manual operations into a precise, always-on digital engine."}
                </p>
              </Reveal>

              {/* Divider line */}
              <Reveal delay={200}>
                <div
                  className="w-full h-px"
                  style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)" }}
                  aria-hidden="true"
                />
              </Reveal>

              {/* Three identity pillars — inline stat-style layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                    label: lang === "ar" ? "أمن المؤسسات" : "Enterprise Security",
                    desc: lang === "ar" ? "بنية محمية بمنهجية Zero-Trust" : "Zero-trust perimeter architecture",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    ),
                    label: lang === "ar" ? "أتمتة n8n" : "n8n Automation",
                    desc: lang === "ar" ? "تشغيل أكثر من 100 خط عمل مؤتمت" : "100+ orchestrated workflow pipelines",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                      </svg>
                    ),
                    label: lang === "ar" ? "أنظمة ERP المعزولة" : "Isolated ERP Systems",
                    desc: lang === "ar" ? "نشر Docker مؤمّن ومتعدد المستأجرين" : "Secure multi-tenant Docker deployment",
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={260 + i * 80} className="h-full">
                    <div
                      className="relative flex flex-col gap-4 rounded-2xl p-6 h-full transition-all duration-300 card-neon-border overflow-hidden"
                      style={{
                        background: isDark ? "rgba(14,179,186,0.04)" : "rgba(14,179,186,0.03)",
                        border: `1px solid ${isDark ? "rgba(14,179,186,0.1)" : "rgba(14,179,186,0.12)"}`,
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isDark ? "rgba(14,179,186,0.1)" : "rgba(14,179,186,0.08)",
                          border: `1px solid ${isDark ? "rgba(14,179,186,0.22)" : "rgba(14,179,186,0.2)"}`,
                          color: "#0eb3ba",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          className="font-bold mb-1"
                          style={{ fontSize: "clamp(0.85rem,1.6vw,0.95rem)", color: isDark ? "#f1f5f9" : "#0f172a" }}
                        >
                          {item.label}
                        </div>
                        <div
                          className="font-light leading-snug"
                          style={{ fontSize: "clamp(0.75rem,1.3vw,0.825rem)", color: isDark ? "#94a3b8" : "#475569" }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Secondary body paragraph */}
              <Reveal delay={520}>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    fontSize: "clamp(0.875rem,1.8vw,1rem)",
                    color: isDark ? "#94a3b8" : "#475569",
                  }}
                >
                  {lang === "ar"
                    ? "نؤمن بأن كل مؤسسة تستحق منظومة رقمية مفصّلة تماماً لاحتياجاتها. لا حلول جاهزة، لا اختصارات. نبني من الصفر، بمعايير هندسة احترافية، ونضمن استمرارية الأعمال وأمانها على المدى الطويل."
                    : "We believe every business deserves a digital ecosystem tailored precisely to its needs. No off-the-shelf shortcuts. We engineer from the ground up, to professional standards, ensuring long-term business continuity and security."}
                </p>
              </Reveal>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
