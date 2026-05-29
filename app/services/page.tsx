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

  // 3 true core infrastructure pillars
  const serviceDetails = [
    {
      title: lang === "ar" ? "عمليات نشر أنظمة SaaS ERP الآمنة" : "Enterprise SaaS ERP Integration",
      subtitle: lang === "ar" ? "تخطيط موارد المؤسسات داخل بيئات Docker معزولة وممتثلة لـ JoFotara" : "Isolated multi-tenant ERP environments compliant with JoFotara invoicing",
      impact: lang === "ar"
        ? "نحن ننشر بيئات تخطيط موارد المؤسسات (ERP) المعزولة ومتعددة المستأجرين داخل حاويات Docker المرنة، مع ضمان استمرارية قوية للبيانات وتنسيق مخصص لوحدات التخزين. تم تصميم البنية الأساسية خصيصاً لتتكامل بسلاسة مع متطلبات نظام الفوترة الإلكترونية الأردني (جو فوتورة - JoFotara)، مما يؤتمت الامتثال والتقارير."
        : "We deploy isolated, multi-tenant ERP environments inside resilient Docker containers, ensuring robust data persistence and custom volume orchestration. The core architecture is specifically engineered to seamlessly integrate with local Jordanian e-invoicing (JoFotara) requirements, automating compliance and reporting.",
      problem: lang === "ar" 
        ? "المشكلة: صعوبة الامتثال لقوانين الفوترة المحلية JoFotara مع الحفاظ على خصوصية بيانات العملاء المتعددين."
        : "Problem: Navigating local JoFotara invoicing compliance while ensuring tenant data isolation and persistence.",
      stopsDoing: lang === "ar"
        ? "ما يتوقف عملك عن فعله يدوياً: إعداد الفواتير الضريبية يدوياً ورفعها للهيئة، وتخزين سجلات البيانات في قواعد بيانات مشتركة غير آمنة."
        : "What you stop doing manually: Generating taxation invoices by hand for reporting, and managing shared unisolated DB systems.",
      before: lang === "ar" ? "عمليات يدوية متعبة لإدخال الفواتير ومخاطر عالية في تسريب البيانات." : "Manual tax calculation entries and data vulnerability in shared multi-tenant space.",
      after: lang === "ar" ? "امتثال فوري مؤتمت لـ JoFotara مع عزل تام للبيانات بفضل Docker." : "Fully automated JoFotara compliance report dispatching and isolated container network.",
      useCases: lang === "ar" ? [
        "نشر أنظمة ERP مخصصة ومعزولة لكل فرع أو شركة تابعة",
        "تكامل مباشر وتلقائي مع نظام الفوترة الإلكترونية الأردني JoFotara",
        "تأمين قواعد البيانات بالكامل مع نسخ احتياطي دوري مؤتمت",
      ] : [
        "Deploying custom ERP software stacks isolated per subsidiary or department",
        "Direct webhook integrations pushing tax records to JoFotara portal in real-time",
        "Hardened database storage configuration with automatic volume backups",
      ],
      icon: (
        <svg className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      title: lang === "ar" ? "محرك أتمتة Linux واسع النطاق" : "High-Scale Linux Automation Engine",
      subtitle: lang === "ar" ? "استضافة وإدارة أكثر من 100 خط عمل نشط على بنية n8n تحتية" : "Hosting 100+ active asynchronous n8n workflows on optimized runtimes",
      impact: lang === "ar"
        ? "تنسيق أكثر من 100 سير عمل نشط وغير متزامن في n8n المستضافة على مثيلات تشغيل Linux المحسّنة. نحن نصمم خطوط معالجة طلبات الويب (Webhooks) المقاومة للأعطال، وأنظمة إدارة زمام الأمور، ومسارات واجهة البرمجة (API) عالية التردد لمزامنة البيانات التشغيلية دون أي تدخل بشري."
        : "Orchestrating 100+ active, asynchronous n8n workflows hosted on optimized Linux runtime instances. We engineer fault-tolerant webhooks, queue management systems, and high-frequency cross-platform API pipelines to synchronize operational data without human friction.",
      problem: lang === "ar"
        ? "المشكلة: بطء معالجة طلبات الويب وتعطل المهام بسبب ضعف خوادم الأتمتة وصعوبة تكامل الأنظمة المشتتة."
        : "Problem: Webhook processing drops and delayed jobs due to weak pipeline infrastructure.",
      stopsDoing: lang === "ar"
        ? "ما يتوقف عملك عن فعله يدوياً: مزامنة قواعد البيانات التشغيلية يدوياً، وحل مشكلات تعطل واجهات البرمجة (APIs) باستمرار."
        : "What you stop doing manually: Executing manual CSV reports between tools and debugging broken API hooks daily.",
      before: lang === "ar" ? "عمليات نقل ملفات بطيئة ومهام متوقفة بسبب انقطاع الاتصال بين الأنظمة." : "Fragmented operations and job failures due to weak server setups and data delays.",
      after: lang === "ar" ? "سير عمل مؤتمت بالكامل بنسبة تشغيل عالية مع مراقبة حية لأعطال n8n." : "Instant asynchronous n8n workflow pipeline running on hardened CentOS/Ubuntu layers.",
      useCases: lang === "ar" ? [
        "بناء مسارات تدفق ومزامنة البيانات التشغيلية لحظياً بين الأنظمة المختلفة",
        "تصميم نقاط نهاية (Webhooks) آمنة ومقاومة للأعطال والضغط العالي",
        "تنسيق خطوط العمل على خوادم Ubuntu/CentOS مع معالجة الأخطاء تلقائياً",
      ] : [
        "Constructing real-time operational database synchronizations across platforms",
        "Engineering high-volume secure webhooks that resist request floods",
        "Managing n8n automation workloads hosted on hardened Ubuntu/CentOS servers",
      ],
      icon: (
        <svg className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: lang === "ar" ? "جدران الحماية الافتراضية وهندسة صفري الثقة" : "Virtual Firewalling & Zero-Trust Architecture",
      subtitle: lang === "ar" ? "دفاع محيطي وتحصين أمني مبني وفق معايير الهاكر الأخلاقي CEH" : "Perimeter defense blueprints built under Certified Ethical Hacker standards",
      impact: lang === "ar"
        ? "تم هندستها بموجب أطر عمل الهكر الأخلاقي المعتمد (CEH) لتأمين محيط الشبكات الحديثة. نحن ننشر جدران حماية افتراضية متطورة، وننشئ حدوداً صارمة للشبكات القائمة على مبدأ صفري الثقة، ونجري عمليات تدقيق تلقائية للثغرات الأمنية، ونصمم لوحات معلومات لقياس مؤشرات التهديد في الوقت الفعلي."
        : "Engineered under Certified Ethical Hacker (CEH) frameworks to secure modern network perimeters. We deploy sophisticated virtual firewalls, establish strict zero-trust network boundaries, conduct automated vulnerability auditing, and design real-time threat-scoring dashboards.",
      problem: lang === "ar"
        ? "المشكلة: تعرض شبكات الأعمال الداخلية والوصول السحابي لخطر التسلل والهجمات بسبب ضعف الدفاع المحيطي."
        : "Problem: Exposure of internal subnet hosts to open networks without perimeter defense validation.",
      stopsDoing: lang === "ar"
        ? "ما يتوقف عملك عن فعله يدوياً: القلق بشأن نقاط ضعف خوادم السحاب وتتبع الثغرات الأمنية بشكل يدوي."
        : "What you stop doing manually: Manually checking port listening states and worrying about network breaches.",
      before: lang === "ar" ? "شبكات غير محمية تفتقر لعزل السيرفرات وأنظمة كشف التهديدات الحية." : "Open, unsegmented subnets easily vulnerable to scanning and privilege escalation.",
      after: lang === "ar" ? "شبكة محصنة بجدران حماية FortiGate مع عزل تام وتدقيق أمني مستمر." : "Segmented subnets behind FortiGate virtual firewalls with zero-trust credentials.",
      useCases: lang === "ar" ? [
        "نشر وإعداد جدران حماية افتراضية متقدمة (مثل FortiGate)",
        "تقسيم الشبكات السحابية إلى شبكات فرعية معزولة لمنع تسلل الهجمات",
        "تأسيس نظام متكامل لقياس التهديدات ومراقبة المحيط الأمني لحظياً",
      ] : [
        "Deploying and hardening enterprise virtual firewalls (e.g. FortiGate architectures)",
        "Isolating cloud server instances into secure network subnets to prevent lateral movement",
        "Establishing continuous perimeter security auditing and real-time threat telemetry",
      ],
      icon: (
        <svg className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030307] text-white flex flex-col justify-center overflow-hidden">
      {/* Background Ambience (Soft Aurora Canvas & Faint 2% Opacity Cybernetic Grid Matrix) */}
      <div 
        className="absolute top-0 inset-x-0 h-full pointer-events-none -z-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(0, 242, 254, 0.08) 0%, rgba(29, 78, 216, 0.04) 30%, rgba(0, 0, 0, 0) 70%)' }}
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
              {lang === "ar" ? "أنظمة أتمتة الأعمال المخصصة" : "Bespoke Business Automation"}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-400/90 max-w-2xl mx-auto leading-relaxed font-light">
              {lang === "ar" 
                ? "أنظمة برمجية مخصصة وموجهة لخدمة الأعمال لمساعدتك في تحسين كفاءة العمليات وتقليل التكاليف وتوفير الوقت."
                : "Tailored, business-focused systems built to optimize operations, cut costs, and secure your workflows."}
            </p>
          </div>
        </section>

        {/* Services detailed listing */}
        <section className="max-w-7xl mx-auto px-6 w-full space-y-24 sm:space-y-36">
          {serviceDetails.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-stretch ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Service Details Card */}
                <div className="w-full lg:w-1/2 flex">
                  <Reveal
                    delay={100}
                    className="group flex flex-col w-full rounded-[24px] p-8 sm:p-10 relative overflow-hidden backdrop-blur-xl bg-white/[0.01] border border-white/[0.04] hover:border-cyan-400/40 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,242,254,0.05)] transition-all duration-500"
                  >
                    {/* Immersive inner top radial glow on hover */}
                    <div 
                      className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      aria-hidden="true"
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-955/20 border border-cyan-500/20 mb-6 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-cyan-400 font-semibold text-sm mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-slate-400/90 leading-relaxed mb-6 font-light">
                        {service.impact}
                      </p>

                      <div className="mt-auto border-t border-white/[0.05] pt-4 text-xs space-y-3">
                        <p className="text-slate-500 font-medium">{service.problem}</p>
                        <p className="text-slate-500 font-medium">{service.stopsDoing}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Before/After and Common Use Cases */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between py-2">
                  <Reveal delay={255} className="flex flex-col space-y-6">
                    {/* Before / After visual block */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-4">
                      <div className="flex flex-col bg-red-950/20 border border-red-900/40 rounded-xl p-4.5">
                        <span className="text-red-500 font-bold uppercase tracking-wider mb-2">
                          {lang === "ar" ? "قبل الأتمتة" : "Before Automation"}
                        </span>
                        <p className="text-slate-400 leading-relaxed font-light">{service.before}</p>
                      </div>
                      <div className="flex flex-col bg-cyan-955/20 border border-cyan-500/20 rounded-xl p-4.5">
                        <span className="text-cyan-400 font-bold uppercase tracking-wider mb-2">
                          {lang === "ar" ? "بعد الأتمتة" : "After Automation"}
                        </span>
                        <p className="text-slate-300 leading-relaxed font-medium">{service.after}</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                      {lang === "ar" ? "تطبيقات وحالات استخدام شائعة" : "Common Applications & Use Cases"}
                    </h3>
                    <ul className="space-y-4">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-slate-400/90 leading-relaxed font-light">
                            {useCase}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </section>

        {/* Call to Action */}
        <section className="mt-24 sm:mt-32 max-w-6xl mx-auto px-6 w-full text-center">
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
                className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-[#0eb3ba] hover:from-cyan-300 hover:to-[#14d2db] px-8 py-4 text-base font-black tracking-wide uppercase text-[#020205] shadow-[0_0_20px_rgba(0,242,254,0.2)] hover:scale-[1.02] border border-cyan-300/10 transition-all duration-300 cursor-pointer"
              >
                {t.services_page_why_btn}
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
