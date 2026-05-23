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
      <section className="relative overflow-hidden py-24 sm:py-36 bg-transparent border-b border-[#1a1f2e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Logo and Premium badge above headline */}
          <div className={`animate-on-load ${heroVisible ? "visible" : ""} flex flex-col items-center mb-8`}>
            <img
              src="/assets/logo/icon-color.svg"
              alt="Maker AI Icon"
              className="h-20 w-auto mb-6 drop-shadow-[0_0_20px_rgba(14,179,186,0.25)]"
            />
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/35 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand backdrop-blur-md select-none shadow-[0_0_15px_rgba(14,179,186,0.15)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand animate-pulse" />
              {t.hero_badge}
            </div>
          </div>

          <h1 className={`animate-on-load ${heroVisible ? "visible" : ""} delay-200 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400`}>
            {t.hero_title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cyan-400 to-[#14d2db] drop-shadow-[0_0_20px_rgba(14,179,186,0.35)] font-extrabold">{t.hero_title_2}</span> <br className="hidden sm:inline" />
            {t.hero_title_3}
          </h1>

          <p className={`animate-on-load ${heroVisible ? "visible" : ""} delay-400 mt-8 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed`}>
            {t.hero_desc}
          </p>

          <p className={`animate-on-load ${heroVisible ? "visible" : ""} delay-500 mt-5 text-base sm:text-lg text-slate-400 font-medium italic`}>
            {t.hero_punch}
          </p>

          <div className={`animate-on-load ${heroVisible ? "visible" : ""} delay-600 mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto`}>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.03] shadow-[0_0_25px_rgba(14,179,186,0.4)] hover:shadow-[0_0_35px_rgba(14,179,186,0.65)] transition-all duration-300"
            >
              {t.hero_btn_book}
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-[#2d3748] hover:border-brand/50 px-8 py-4 text-base font-bold text-white bg-[#0d0f17]/40 backdrop-blur-sm hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(14,179,186,0.15)] transition-all duration-300"
            >
              {t.hero_btn_explore}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-[#1a1f2e]">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.services_title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            {t.services_sub}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Reveal
              key={index}
              delay={index * 120}
              className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300 h-full cursor-default"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">{service.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Before/After Blocks */}
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#1f293d]/50 pt-5 text-xs">
                <div className="flex flex-col bg-[#05070a] border border-red-500/10 rounded-lg p-3.5">
                  <span className="text-red-400 font-bold uppercase tracking-wider mb-1.5">{lang === "ar" ? "قبل" : "Before"}</span>
                  <p className="text-slate-400 leading-relaxed">{service.before}</p>
                </div>
                <div className="flex flex-col bg-[#05070a] border border-brand/10 rounded-lg p-3.5">
                  <span className="text-brand font-bold uppercase tracking-wider mb-1.5">{lang === "ar" ? "بعد" : "After"}</span>
                  <p className="text-slate-300 leading-relaxed">{service.after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-28 bg-[#0a0d16]/60 border-b border-[#1a1f2e] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.why_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted">
              {t.why_sub}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100} className="flex flex-col items-start space-y-3 border-l-2 border-brand/20 pl-6 py-2 hover:border-brand/70 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400 drop-shadow-[0_0_12px_rgba(14,179,186,0.3)]">
                {t.why_1_stat}
              </div>
              <h3 className="text-lg font-bold text-white">{t.why_1_title}</h3>
              <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                {t.why_1_desc}
              </p>
            </Reveal>

            <Reveal delay={220} className="flex flex-col items-start space-y-3 border-l-2 border-brand/20 pl-6 py-2 hover:border-brand/70 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400 drop-shadow-[0_0_12px_rgba(14,179,186,0.3)]">
                {t.why_2_stat}
              </div>
              <h3 className="text-lg font-bold text-white">{t.why_2_title}</h3>
              <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                {t.why_2_desc}
              </p>
            </Reveal>

            <Reveal delay={340} className="flex flex-col items-start space-y-3 border-l-2 border-brand/20 pl-6 py-2 hover:border-brand/70 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400 drop-shadow-[0_0_12px_rgba(14,179,186,0.3)]">
                {t.why_3_stat}
              </div>
              <h3 className="text-lg font-bold text-white">{t.why_3_title}</h3>
              <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                {t.why_3_desc}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-[#1a1f2e]">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.who_title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            {t.who_sub}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Agencies */}
          <Reveal delay={100} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t.who_agencies_title}
            </h3>
            <p className="text-sm text-red-400 bg-red-500/5 border border-red-500/10 rounded-lg p-3 mb-4 leading-relaxed font-medium">
              {t.who_agencies_pain}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.who_agencies_solve}
            </p>
          </Reveal>

          {/* E-Commerce */}
          <Reveal delay={200} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t.who_ecommerce_title}
            </h3>
            <p className="text-sm text-red-400 bg-red-500/5 border border-red-500/10 rounded-lg p-3 mb-4 leading-relaxed font-medium">
              {t.who_ecommerce_pain}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.who_ecommerce_solve}
            </p>
          </Reveal>

          {/* Service Companies */}
          <Reveal delay={300} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t.who_services_title}
            </h3>
            <p className="text-sm text-red-400 bg-red-500/5 border border-red-500/10 rounded-lg p-3 mb-4 leading-relaxed font-medium">
              {t.who_services_pain}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.who_services_solve}
            </p>
          </Reveal>

          {/* Operations Teams */}
          <Reveal delay={400} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-xl p-8 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t.who_ops_title}
            </h3>
            <p className="text-sm text-red-400 bg-red-500/5 border border-red-500/10 rounded-lg p-3 mb-4 leading-relaxed font-medium">
              {t.who_ops_pain}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.who_ops_solve}
            </p>
          </Reveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-transparent w-full border-b border-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.how_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted">
              {t.how_sub}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <Reveal delay={100} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300 h-full cursor-default relative">
              <div className={`absolute top-6 ${lang === "ar" ? "left-8" : "right-8"} text-4xl font-extrabold text-slate-800/50 group-hover:text-brand/20 transition-colors duration-300 select-none`}>
                01
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                {t.how_1_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                {t.how_1_desc}
              </p>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={220} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300 h-full cursor-default relative">
              <div className={`absolute top-6 ${lang === "ar" ? "left-8" : "right-8"} text-4xl font-extrabold text-slate-800/50 group-hover:text-brand/20 transition-colors duration-300 select-none`}>
                02
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                {t.how_2_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                {t.how_2_desc}
              </p>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={340} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300 h-full cursor-default relative">
              <div className={`absolute top-6 ${lang === "ar" ? "left-8" : "right-8"} text-4xl font-extrabold text-slate-800/50 group-hover:text-brand/20 transition-colors duration-300 select-none`}>
                03
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                {t.how_3_title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                {t.how_3_desc}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Real Use Cases Section */}
      <section id="use-cases" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-[#1a1f2e]">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.cases_title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            {t.cases_sub}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case 1 */}
          <Reveal delay={100} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-xl p-8 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <h3 className="text-lg font-bold text-white mb-5 group-hover:text-brand transition-colors duration-300">
              {t.cases_1_title}
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 mt-0.5">IN</span>
                <p className="text-slate-300 leading-relaxed">{t.cases_1_input}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 mt-0.5">RUN</span>
                <p className="text-slate-300 leading-relaxed">{t.cases_1_process}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand mt-0.5">OUT</span>
                <p className="text-slate-200 leading-relaxed font-medium">{t.cases_1_output}</p>
              </div>
            </div>
          </Reveal>

          {/* Case 2 */}
          <Reveal delay={200} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-xl p-8 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <h3 className="text-lg font-bold text-white mb-5 group-hover:text-brand transition-colors duration-300">
              {t.cases_2_title}
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 mt-0.5">IN</span>
                <p className="text-slate-300 leading-relaxed">{t.cases_2_input}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 mt-0.5">RUN</span>
                <p className="text-slate-300 leading-relaxed">{t.cases_2_process}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand mt-0.5">OUT</span>
                <p className="text-slate-200 leading-relaxed font-medium">{t.cases_2_output}</p>
              </div>
            </div>
          </Reveal>

          {/* Case 3 */}
          <Reveal delay={300} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-xl p-8 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <h3 className="text-lg font-bold text-white mb-5 group-hover:text-brand transition-colors duration-300">
              {t.cases_3_title}
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 mt-0.5">IN</span>
                <p className="text-slate-300 leading-relaxed">{t.cases_3_input}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 mt-0.5">RUN</span>
                <p className="text-slate-300 leading-relaxed">{t.cases_3_process}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand mt-0.5">OUT</span>
                <p className="text-slate-200 leading-relaxed font-medium">{t.cases_3_output}</p>
              </div>
            </div>
          </Reveal>

          {/* Case 4 */}
          <Reveal delay={400} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-xl p-8 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
            <h3 className="text-lg font-bold text-white mb-5 group-hover:text-brand transition-colors duration-300">
              {t.cases_4_title}
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 mt-0.5">IN</span>
                <p className="text-slate-300 leading-relaxed">{t.cases_4_input}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 mt-0.5">RUN</span>
                <p className="text-slate-300 leading-relaxed">{t.cases_4_process}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand mt-0.5">OUT</span>
                <p className="text-slate-200 leading-relaxed font-medium">{t.cases_4_output}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 sm:py-28 bg-[#0a0d16]/30 w-full border-b border-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.proof_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted">
              {t.proof_sub}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Impact 1 */}
            <Reveal delay={100} className="flex items-start gap-4 bg-[#0c0f17] border border-[#1f293d] rounded-2xl p-6 hover:border-brand/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">{t.proof_1_title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {t.proof_1_desc}
                </p>
              </div>
            </Reveal>

            {/* Impact 2 */}
            <Reveal delay={200} className="flex items-start gap-4 bg-[#0c0f17] border border-[#1f293d] rounded-2xl p-6 hover:border-brand/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">{t.proof_2_title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {t.proof_2_desc}
                </p>
              </div>
            </Reveal>

            {/* Impact 3 */}
            <Reveal delay={300} className="flex items-start gap-4 bg-[#0c0f17] border border-[#1f293d] rounded-2xl p-6 hover:border-brand/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">{t.proof_3_title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {t.proof_3_desc}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <Reveal className="bg-gradient-to-br from-[#0c101c] to-[#05060b] border border-[#1f293d] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Background floating glow for CTA */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand/20 to-indigo-500/20 blur-3xl animate-float-glow" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-indigo-500/5 opacity-30 -z-20" />
          
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-6 backdrop-blur-md relative z-10">
            {t.cta_badge}
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4 relative z-10">
            {t.cta_title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 relative z-10 leading-relaxed">
            {t.cta_desc}
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.02] shadow-[0_0_20px_rgba(14,179,186,0.35)] hover:shadow-[0_0_35px_rgba(14,179,186,0.6)] transition-all duration-300"
            >
              {t.cta_btn}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-24 sm:py-28 bg-transparent border-t border-[#1a1f2e] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.contact_title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted">
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
