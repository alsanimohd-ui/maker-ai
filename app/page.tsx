"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: t.service_1_title,
      description: t.service_1_desc,
      before: lang === "ar" ? "إدخال يدوي للبيانات في جداول متعددة وتكرار العمل بين الأدوات." : "Manually entering data into spreadsheets and copy-pasting between tools.",
      after: lang === "ar" ? "تتدفق البيانات تلقائيًا بين الأنظمة مع انعدام إدخال البيانات اليدوي." : "Data flows automatically between systems with zero manual entry required.",
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: t.service_2_title,
      description: t.service_2_desc,
      before: lang === "ar" ? "تراكم تذاكر الدعم وخسارة العملاء المحتملين لعدم الرد السريع خارج ساعات العمل." : "Support tickets pile up and leads are lost because of slow off-hours response times.",
      after: lang === "ar" ? "ردود فورية على الأسئلة الشائعة وتصنيف فوري للعملاء على مدار الساعة." : "Instant answers to common questions and immediate lead profiling 24 hours a day.",
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      title: t.service_3_title,
      description: t.service_3_desc,
      before: lang === "ar" ? "تصدير ملفات CSV يدوياً ورفعها لتحديث بيانات العملاء والمنتجات." : "Manually exporting CSVs and uploading them to update client and product files.",
      after: lang === "ar" ? "ربط الأنظمة عبر واجهات API ومزامنة البيانات التشغيلية لحظياً." : "Systems connected via APIs syncing operational database records in real-time.",
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      title: t.service_4_title,
      description: t.service_4_desc,
      before: lang === "ar" ? "قضاء ساعات في نهاية كل أسبوع لتجميع التقارير وحساب الأرقام يدوياً." : "Spending hours at the end of the week gathering reports and typing calculations manually.",
      after: lang === "ar" ? "تقارير مؤتمتة تجمع أرقامك في لوحة قيادة واحدة نظيفة ومحدثة باستمرار." : "Automated workflows compile metrics into one clean dashboard updated constantly.",
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-36 bg-gradient-to-b from-indigo-950/[0.03] via-sky-500/[0.01] to-transparent border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Logo and Premium badge above headline */}
          <div className={`animate-on-load ${heroVisible ? "visible" : ""} flex flex-col items-center mb-8 relative`}>
            {/* Double pulsing logo lighting glow - high impact radial light bloom */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-80 h-80 rounded-full bg-gradient-to-r from-brand/40 via-cyan-400/25 to-transparent blur-[70px] animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-56 h-56 rounded-full bg-indigo-500/30 blur-[50px] animate-pulse" />
            <img
              src="/assets/logo/icon-color.svg"
              alt="Maker AI Icon"
              className="h-20 w-auto mb-6 drop-shadow-[0_8px_25px_rgba(14,179,186,0.3)] animate-float-gentle"
              style={{ animationDuration: "8s" }}
            />
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/35 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand backdrop-blur-md select-none shadow-[0_0_15px_rgba(14,179,186,0.15)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand animate-pulse" />
              {t.hero_badge}
            </div>
          </div>

          <h1 className={`animate-on-load ${heroVisible ? "visible" : ""} delay-200 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl leading-tight text-slate-950`}>
            {t.hero_title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cyan-500 to-indigo-600 drop-shadow-[0_2px_15px_rgba(14,179,186,0.25)] font-black animate-text-gradient-flow">{t.hero_title_2}</span> <br className="hidden sm:inline" />
            {t.hero_title_3}
          </h1>

          <p className={`animate-on-load ${heroVisible ? "visible" : ""} delay-400 mt-8 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed`}>
            {t.hero_desc}
          </p>

          <p className={`animate-on-load ${heroVisible ? "visible" : ""} delay-500 mt-5 text-base sm:text-lg text-slate-500 font-medium italic`}>
            {t.hero_punch}
          </p>

          <div className={`animate-on-load ${heroVisible ? "visible" : ""} delay-600 mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto`}>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand to-indigo-600 px-8 py-4 text-base font-bold text-white hover:from-brand-hover hover:to-indigo-500 hover:scale-[1.04] shadow-md shadow-brand/10 hover:shadow-[0_0_30px_rgba(14,179,186,0.45)] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {t.hero_btn_book}
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand/40 px-8 py-4 text-base font-bold text-slate-800 dark:text-slate-200 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm hover:scale-[1.04] hover:shadow-[0_6px_25px_rgba(14,179,186,0.12)] active:scale-95 transition-all duration-300"
            >
              {t.hero_btn_explore}
            </Link>
          </div>
          <div className={`animate-on-load ${heroVisible ? "visible" : ""} delay-700 mt-20 w-full max-w-4xl mx-auto hidden sm:block relative p-6 bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--card-border-default)] rounded-2xl shadow-sm animate-float-gentle`}>
            {/* Background grid or glow inside container */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/20 via-teal-50/20 to-indigo-50/20 rounded-2xl pointer-events-none -z-10" />
            
            <svg className="w-full h-auto min-h-[140px]" viewBox="0 0 800 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connector lines (Paths) */}
              <path id="flow-line-1" d="M120 70H320" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="6 6" />
              <path id="flow-line-2" d="M480 70H680" stroke="url(#line-grad-2)" strokeWidth="2" strokeDasharray="6 6" />
              
              {/* Moving dash animation lines overlay */}
              <path d="M120 70H320" stroke="url(#flow-pulse-1)" strokeWidth="3" className="animate-dash" />
              <path d="M480 70H680" stroke="url(#flow-pulse-2)" strokeWidth="3" className="animate-dash" />

              {/* Node 1: Input */}
              <g transform="translate(40, 30)">
                <rect width="80" height="80" rx="16" className="fill-[var(--form-input-bg)] stroke-[var(--card-border-default)]" strokeWidth="1" filter="url(#node-shadow)" />
                <circle cx="40" cy="30" r="16" className="fill-teal-50/85 dark:fill-teal-950/40" />
                <path d="M35 30H45M40 25V35" stroke="#0eb3ba" strokeWidth="2" strokeLinecap="round" />
                <text x="40" y="65" textAnchor="middle" className="text-[10px] font-bold fill-slate-500 dark:fill-slate-400 tracking-wide uppercase">
                  {lang === "ar" ? "المدخلات" : "Inputs"}
                </text>
              </g>

              {/* Node 2: AI Automation Engine */}
              <g transform="translate(320, 20)">
                <rect width="160" height="100" rx="20" className="fill-[var(--card-bg)] dark:fill-slate-900/60 stroke-brand" strokeWidth="1.5" filter="url(#core-shadow)" />
                <circle cx="80" cy="40" r="22" fill="rgba(14, 179, 186, 0.1)" />
                {/* Gears/Cog icon or AI brain node */}
                <path d="M72 40C72 35.5817 75.5817 32 80 32C84.4183 32 88 35.5817 88 40C88 44.4183 84.4183 48 80 48C75.5817 48 72 44.4183 72 40Z" stroke="#0eb3ba" strokeWidth="2" />
                <path d="M80 27V32M80 48V53M67 40H72M88 40H93M71 31L75 35M85 45L89 49M71 49L75 45M85 35L89 31" stroke="#0eb3ba" strokeWidth="2" strokeLinecap="round" />
                <text x="80" y="80" textAnchor="middle" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200 tracking-wider uppercase">
                  {lang === "ar" ? "نظام الأتمتة" : "AI ENGINE"}
                </text>
              </g>

              {/* Node 3: Output */}
              <g transform="translate(680, 30)">
                <rect width="80" height="80" rx="16" className="fill-[var(--form-input-bg)] stroke-[var(--card-border-default)]" strokeWidth="1" filter="url(#node-shadow)" />
                <circle cx="40" cy="30" r="16" className="fill-blue-50/85 dark:fill-blue-950/40" />
                <path d="M34 30L38 34L46 26" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="40" y="65" textAnchor="middle" className="text-[10px] font-bold fill-slate-500 dark:fill-slate-400 tracking-wide uppercase">
                  {lang === "ar" ? "النتائج" : "Outputs"}
                </text>
              </g>

              {/* Definitions for Gradients, Shadows & Filters */}
              <defs>
                <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#0eb3ba" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0eb3ba" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="flow-pulse-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0eb3ba" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0eb3ba" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="flow-pulse-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0eb3ba" />
                  <stop offset="100%" stopColor="#0eb3ba" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="node-border" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="core-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f0fdfa" />
                </linearGradient>
                <filter id="node-shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.04" />
                </filter>
                <filter id="core-shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0eb3ba" floodOpacity="0.1" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-200/50">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.services_title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            {t.services_sub}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Reveal
              key={index}
              delay={index * 120}
              className="group flex flex-col rounded-3xl p-8 card-neon-border h-full cursor-default"
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 rounded-xl bg-brand/15 blur-md opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 -z-10" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 group-hover:border-brand/45 group-hover:bg-brand/20 shadow-[0_0_15px_rgba(14,179,186,0.12)] group-hover:shadow-[0_0_25px_rgba(14,179,186,0.35)] transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">{service.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Before/After Blocks */}
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800/80 pt-5 text-xs">
                <div className="flex flex-col bg-red-50/50 dark:bg-red-950/20 border border-red-100/80 dark:border-red-900/40 rounded-lg p-3.5 shadow-sm dark:shadow-none">
                  <span className="text-red-600 dark:text-red-400 font-bold uppercase tracking-wider mb-1.5">{lang === "ar" ? "قبل" : "Before"}</span>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{service.before}</p>
                </div>
                <div className="flex flex-col bg-teal-50/50 dark:bg-teal-950/20 border border-brand/20 dark:border-brand/40 rounded-lg p-3.5 shadow-sm dark:shadow-none">
                  <span className="text-brand font-bold uppercase tracking-wider mb-1.5">{lang === "ar" ? "بعد" : "After"}</span>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-28 bg-gradient-to-b from-transparent via-transparent to-transparent border-b border-slate-200/50 dark:border-slate-800/60 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.why_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500">
              {t.why_sub}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100} className="flex flex-col items-start space-y-3 border-l-2 border-brand/35 pl-6 py-2 hover:border-brand/75 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-600 drop-shadow-[0_2px_8px_rgba(14,179,186,0.15)]">
                {t.why_1_stat}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.why_1_title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
                {t.why_1_desc}
              </p>
            </Reveal>

            <Reveal delay={220} className="flex flex-col items-start space-y-3 border-l-2 border-brand/35 pl-6 py-2 hover:border-brand/75 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-600 drop-shadow-[0_2px_8px_rgba(14,179,186,0.15)]">
                {t.why_2_stat}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.why_2_title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
                {t.why_2_desc}
              </p>
            </Reveal>

            <Reveal delay={340} className="flex flex-col items-start space-y-3 border-l-2 border-brand/35 pl-6 py-2 hover:border-brand/75 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-600 drop-shadow-[0_2px_8px_rgba(14,179,186,0.15)]">
                {t.why_3_stat}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.why_3_title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
                {t.why_3_desc}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-200/50 dark:border-slate-800/60 bg-transparent">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.who_title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            {t.who_sub}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Agencies */}
          <Reveal delay={100} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t.who_agencies_title}
            </h3>
            <p className="text-sm text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 border border-red-100/80 dark:border-red-900/40 rounded-lg p-3 mb-4 leading-relaxed font-medium">
              {t.who_agencies_pain}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.who_agencies_solve}
            </p>
          </Reveal>

          {/* E-Commerce */}
          <Reveal delay={220} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t.who_ecommerce_title}
            </h3>
            <p className="text-sm text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 border border-red-100/80 dark:border-red-900/40 rounded-lg p-3 mb-4 leading-relaxed font-medium">
              {t.who_ecommerce_pain}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.who_ecommerce_solve}
            </p>
          </Reveal>

          {/* Service Companies */}
          <Reveal delay={320} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t.who_services_title}
            </h3>
            <p className="text-sm text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 border border-red-100/80 dark:border-red-900/40 rounded-lg p-3 mb-4 leading-relaxed font-medium">
              {t.who_services_pain}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.who_services_solve}
            </p>
          </Reveal>

          {/* Operations Teams */}
          <Reveal delay={420} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t.who_ops_title}
            </h3>
            <p className="text-sm text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-950/20 border border-red-100/80 dark:border-red-900/40 rounded-lg p-3 mb-4 leading-relaxed font-medium">
              {t.who_ops_pain}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.who_ops_solve}
            </p>
          </Reveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-transparent w-full border-b border-slate-200/50 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.how_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500">
              {t.how_sub}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <Reveal delay={100} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg h-full cursor-default relative">
              <div className={`absolute top-6 ${lang === "ar" ? "left-8" : "right-8"} text-4xl font-extrabold text-slate-200 dark:text-slate-800 group-hover:text-brand/25 transition-colors duration-300 select-none`}>
                01
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 shadow-[0_0_15px_rgba(14,179,186,0.15)] group-hover:shadow-[0_0_25px_rgba(14,179,186,0.35)] transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                {t.how_1_title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                {t.how_1_desc}
              </p>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={220} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg h-full cursor-default relative">
              <div className={`absolute top-6 ${lang === "ar" ? "left-8" : "right-8"} text-4xl font-extrabold text-slate-200 dark:text-slate-800 group-hover:text-brand/25 transition-colors duration-300 select-none`}>
                02
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 shadow-[0_0_15px_rgba(14,179,186,0.15)] group-hover:shadow-[0_0_25px_rgba(14,179,186,0.35)] transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                {t.how_2_title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                {t.how_2_desc}
              </p>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={340} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg h-full cursor-default relative">
              <div className={`absolute top-6 ${lang === "ar" ? "left-8" : "right-8"} text-4xl font-extrabold text-slate-200 dark:text-slate-800 group-hover:text-brand/25 transition-colors duration-300 select-none`}>
                03
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 shadow-[0_0_15px_rgba(14,179,186,0.15)] group-hover:shadow-[0_0_25px_rgba(14,179,186,0.35)] transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                {t.how_3_title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                {t.how_3_desc}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Real Use Cases Section */}
      <section id="use-cases" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-slate-200/50 dark:border-slate-800/60">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.cases_title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            {t.cases_sub}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case 1 */}
          <Reveal delay={100} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 group-hover:text-brand transition-colors duration-300">
              {t.cases_1_title}
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent dark:border-slate-700/60 mt-0.5">IN</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.cases_1_input}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent dark:border-slate-700/60 mt-0.5">RUN</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.cases_1_process}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-semibold border border-brand/20 dark:border-brand/40 mt-0.5">OUT</span>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{t.cases_1_output}</p>
              </div>
            </div>
          </Reveal>

          {/* Case 2 */}
          <Reveal delay={200} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 group-hover:text-brand transition-colors duration-300">
              {t.cases_2_title}
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent dark:border-slate-700/60 mt-0.5">IN</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.cases_2_input}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent dark:border-slate-700/60 mt-0.5">RUN</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.cases_2_process}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-semibold border border-brand/20 dark:border-brand/40 mt-0.5">OUT</span>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{t.cases_2_output}</p>
              </div>
            </div>
          </Reveal>

          {/* Case 3 */}
          <Reveal delay={300} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 group-hover:text-brand transition-colors duration-300">
              {t.cases_3_title}
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent dark:border-slate-700/60 mt-0.5">IN</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.cases_3_input}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent dark:border-slate-700/60 mt-0.5">RUN</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.cases_3_process}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-semibold border border-brand/20 dark:border-brand/40 mt-0.5">OUT</span>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{t.cases_3_output}</p>
              </div>
            </div>
          </Reveal>

          {/* Case 4 */}
          <Reveal delay={400} className="group flex flex-col bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-8 hover:border-brand/45 shadow-md dark:shadow-none transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 group-hover:text-brand transition-colors duration-300">
              {t.cases_4_title}
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent dark:border-slate-700/60 mt-0.5">IN</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.cases_4_input}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-transparent dark:border-slate-700/60 mt-0.5">RUN</span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.cases_4_process}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-semibold border border-brand/20 dark:border-brand/40 mt-0.5">OUT</span>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{t.cases_4_output}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 sm:py-28 bg-transparent w-full border-b border-slate-200/50 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.proof_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500">
              {t.proof_sub}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Impact 1 */}
            <Reveal delay={100} className="flex items-start gap-4 bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-6 hover:border-brand/45 transition-all duration-300 group hover:shadow-md dark:hover:shadow-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand transition-colors duration-300">{t.proof_1_title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.proof_1_desc}
                </p>
              </div>
            </Reveal>

            {/* Impact 2 */}
            <Reveal delay={200} className="flex items-start gap-4 bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-6 hover:border-brand/45 transition-all duration-300 group hover:shadow-md dark:hover:shadow-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand transition-colors duration-300">{t.proof_2_title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.proof_2_desc}
                </p>
              </div>
            </Reveal>

            {/* Impact 3 */}
            <Reveal delay={300} className="flex items-start gap-4 bg-[var(--card-bg)] backdrop-blur-md border border-[var(--card-border-default)] rounded-2xl p-6 hover:border-brand/45 transition-all duration-300 group hover:shadow-md dark:hover:shadow-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand transition-colors duration-300">{t.proof_3_title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.proof_3_desc}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-36 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <Reveal className="bg-gradient-to-br from-indigo-950 via-slate-950 to-black border border-slate-900 rounded-3xl p-10 sm:p-20 relative overflow-hidden shadow-2xl shadow-indigo-950/40">
          {/* Background moving fluid gradients for CTA - expanded and strengthened */}
          <div className="absolute top-[-35%] left-[-35%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-brand/30 via-cyan-500/15 to-transparent blur-[100px] animate-aurora-1" style={{ animationDuration: '18s' }} />
          <div className="absolute bottom-[-35%] right-[-35%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-600/15 to-transparent blur-[100px] animate-aurora-2" style={{ animationDuration: '15s' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-indigo-500/5 opacity-40 -z-20" />
          
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-6 backdrop-blur-md relative z-10">
            {t.cta_badge}
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 relative z-10 leading-tight">
            {t.cta_title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
            {t.cta_desc}
          </p>
          <div className="relative z-10 inline-block group">
            {/* Button Glow Halo - with active pulse animation */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand to-indigo-500 blur-xl rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.03] shadow-[0_0_20px_rgba(14,179,186,0.35)] hover:shadow-[0_0_35px_rgba(14,179,186,0.6)] transition-all duration-300 cursor-pointer"
            >
              {t.cta_btn}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-24 sm:py-28 bg-transparent border-t border-slate-200/50 dark:border-slate-800/60 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.contact_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500">
              {t.contact_sub}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
