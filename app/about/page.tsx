"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isRtl = lang === "ar";

  return (
    <div
      className="relative flex flex-col w-full min-h-screen text-[#1d1f20] bg-[#f6f5f0] overflow-x-hidden pt-0"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* ══════════════════════════════════════════════════════════════
          HERO - Symphony Glass "About Us" Canvas
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden border-b border-[#a68c89]/20 px-4 sm:px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">

        {/* Decorative orbit circle */}
        <div
          className="absolute w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full pointer-events-none animate-ring-slow"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(107, 163, 160, 0.15)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8 select-none">

          {/* Logo */}
          <Reveal delay={150}>
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/logo/logo-color.svg"
                alt="Maker AI - Enterprise Automation Engineering"
                className="relative w-full object-contain animate-float-gentle select-none"
                style={{
                  maxWidth: "min(420px, 75vw)",
                  filter: "drop-shadow(0 4px 20px rgba(107, 163, 160, 0.2))",
                  animationDuration: "6s",
                }}
              />
            </div>
          </Reveal>

          {/* Hero headline */}
          <Reveal delay={300}>
            <h1
              className="font-serif font-bold tracking-tight leading-[1.15] text-[#2d3233]"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}
            >
              {lang === "ar"
                ? "هندسة الأتمتة الرقمية. موثوقية المؤسسات."
                : "Engineering Digital Automation. Enterprise-Grade Reliability."}
            </h1>
          </Reveal>

          {/* About Us body text */}
          <Reveal delay={450}>
            <p
              className="leading-relaxed font-light max-w-2xl mx-auto text-[#505759]"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
            >
              {t.hero_subtitle_secure}
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center pt-4">

              <Link
                href="https://mi.maker-ai.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6ba3a0] hover:bg-[#568f8c] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-950/10 inline-flex items-center gap-2"
              >
                {t.hero_btn_launch}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <Link
                href="/services"
                className="bg-white/60 border border-[#a68c89]/25 hover:bg-white text-[#2d3233] px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
              >
                {t.hero_btn_explore_enterprise}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ABOUT US - Symphony Glass Identity Section
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-[#a68c89]/20 overflow-hidden" style={{ padding: "clamp(2.5rem, 5vw, 4.5rem) 1rem" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

            {/* Left Column */}
            <Reveal delay={0} className="lg:col-span-4">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 self-start text-[#6ba3a0]">
                  <div className="w-8 h-px bg-[#6ba3a0]" />
                  <span className="font-bold tracking-[0.2em] uppercase text-xs">
                    {lang === "ar" ? "من نحن" : "About Us"}
                  </span>
                </div>

                <h2 className="font-serif font-bold tracking-tight leading-[1.15] text-[#2d3233] text-3xl sm:text-4xl">
                  {lang === "ar"
                    ? (<>بناء مستقبل <span className="text-[#6ba3a0]">الأتمتة</span> الرقمية</>)
                    : (<>Building the Future of <span className="text-[#6ba3a0]">Digital Automation</span></>)
                  }
                </h2>
              </div>
            </Reveal>

            {/* Right Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">

              <Reveal delay={120}>
                <p className="leading-relaxed font-light text-lg text-[#505759]">
                  {lang === "ar"
                    ? "نحن Maker AI - شركة هندسة وأتمتة متخصصة في بناء البنى التحتية الرقمية للمؤسسات. نصمم أنظمة متكاملة تربط أدواتك وتحوّل عملياتك اليدوية إلى ماكينة رقمية دقيقة تعمل دون توقف."
                    : "We are Maker AI - an engineering and automation firm specializing in building digital infrastructure for businesses. We design integrated systems that connect your tools and transform manual operations into a precise, always-on digital engine."}
                </p>
              </Reveal>

              {/* Three identity pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#6ba3a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                    label: lang === "ar" ? "أمن المؤسسات" : "Enterprise Security",
                    desc: lang === "ar" ? "بنية محمية بمنهجية Zero-Trust" : "Zero-trust perimeter architecture",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#6ba3a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    ),
                    label: lang === "ar" ? "أتمتة n8n" : "n8n Automation",
                    desc: lang === "ar" ? "تشغيل أكثر من 100 خط عمل مؤتمت" : "100+ orchestrated workflow pipelines",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#6ba3a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                      </svg>
                    ),
                    label: lang === "ar" ? "أنظمة ERP المعزولة" : "Isolated ERP Systems",
                    desc: lang === "ar" ? "نشر Docker مؤمّن ومتعدد المستأجرين" : "Secure multi-tenant Docker deployment",
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={260 + i * 80} className="h-full">
                    <div className="relative flex flex-col gap-3 rounded-2xl p-6 h-full bg-white/50 border border-[#a68c89]/25 backdrop-blur-md shadow-sm overflow-hidden">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#6ba3a0]/15 border border-[#6ba3a0]/25">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-serif font-bold text-[#2d3233] mb-1 text-base">
                          {item.label}
                        </div>
                        <div className="font-light text-xs text-[#505759] leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Secondary body paragraph */}
              <Reveal delay={520}>
                <p className="leading-relaxed font-light text-sm sm:text-base text-[#505759]">
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
