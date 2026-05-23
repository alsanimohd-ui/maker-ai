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

  const serviceDetails = [
    {
      title: lang === "ar" ? "أتمتة البيانات والعمليات" : "Data & Process Automation",
      subtitle: lang === "ar" ? "تخلص من إدخال البيانات اليدوي بالكامل وسرّع سير العمل." : "Eliminate manual data entry entirely and speed up daily workflows.",
      impact: lang === "ar"
        ? "نوفر ما يصل إلى 20-30 ساعة أسبوعياً لكل موظف عن طريق جعل الأنظمة تقرأ المستندات، وتنقل البيانات، وتحدث السجلات بشكل تلقائي."
        : "We save up to 20-30 hours per week per employee by getting systems to read documents, transfer data, and update records automatically.",
      problem: lang === "ar" 
        ? "المشكلة: الموظفون يضيعون ساعات في نسخ الفواتير، ونقل البيانات بين الأنظمة، وتحديث جداول البيانات يدوياً."
        : "Problem: Employees waste hours copy-pasting invoice details, transferring files between tools, and updating spreadsheets manually.",
      stopsDoing: lang === "ar"
        ? "ما يتوقف المستخدم عن فعله يدوياً: تنزيل الفواتير، إعادة كتابة الأسماء والأرقام، وتنسيق الملفات يدوياً."
        : "What you stop doing manually: Downloading PDFs, retyping vendor names and totals, and formatting reports by hand.",
      before: lang === "ar" ? "إدخال يدوي للبيانات وتكرار العمل مع احتمالية كبيرة للخطأ البشري." : "Repetitive manual data entry and formatting with a high risk of human error.",
      after: lang === "ar" ? "تتدفق البيانات تلقائيًا بين الأنظمة مع انعدام إدخال البيانات اليدوي." : "Data flows automatically between tools in seconds with zero manual input required.",
      useCases: lang === "ar" ? [
        "معالجة فواتير PDF تلقائياً وإرسالها مباشرة إلى نظام المحاسبة",
        "تحديث قواعد بيانات العملاء لحظياً فور حدوث عمليات الشراء",
        "استخراج البيانات من رسائل البريد الإلكتروني وتحديث أنظمة إدارة علاقات العملاء CRM",
      ] : [
        "Processing PDF invoices and uploading them directly to your accounting system",
        "Updating client database records instantly when a new purchase occurs",
        "Extracting customer data from incoming emails to update CRM pipelines",
      ],
      icon: (
        <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: lang === "ar" ? "روبوتات الدردشة والدعم الذكي" : "AI Chatbots & Support",
      subtitle: lang === "ar" ? "دعم وتأهيل للمبيعات على مدار الساعة دون طوابير انتظار يدوية." : "Support and sales qualification around the clock without manual support queues.",
      impact: lang === "ar"
        ? "يستجيب على الفور لـ 80% من أسئلة العملاء الروتينية، مما يقلل تكاليف الدعم مع تصفية وتأهيل العملاء المحتملين تلقائياً."
        : "Responds instantly to 80% of routine client questions, reducing support costs while filtering and qualifying incoming leads automatically.",
      problem: lang === "ar"
        ? "المشكلة: بطء وقت الاستجابة للعملاء خارج ساعات العمل مما يؤدي لخسارة عملاء محتملين."
        : "Problem: Slow response times to customer inquiries outside business hours leads to missed pipeline opportunities.",
      stopsDoing: lang === "ar"
        ? "ما يتوقف المستخدم عن فعله يدوياً: الرد على نفس الأسئلة الشائعة وتأهيل العملاء المحتملين البسيط يدوياً."
        : "What you stop doing manually: Answering the exact same support questions repeatedly and profiling basic leads yourself.",
      before: lang === "ar" ? "تراكم تذاكر الدعم وخسارة العملاء المحتملين لعدم الرد خارج ساعات العمل." : "Lead drop-offs and support ticket backlogs because of delayed off-hours responses.",
      after: lang === "ar" ? "ردود فورية على الأسئلة الشائعة وتصفية وتأهيل فوري للعملاء على مدار الساعة." : "Instant support answers and automated lead profiling active 24 hours a day.",
      useCases: lang === "ar" ? [
        "روبوتات دردشة ذكية تجيب على الأسئلة الشائعة للعملاء بدقة",
        "تأهيل مسبق للعملاء المحتملين وحجز المواعيد على التقويم تلقائياً",
        "توجيه القضايا المعقدة تلقائياً إلى موظف الدعم البشري المناسب",
      ] : [
        "Intelligent chatbots that resolve website visitor questions accurately",
        "Pre-qualifying leads and booking consultation calls on calendars automatically",
        "Routing complex support issues to the correct human support member instantly",
      ],
      icon: (
        <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      title: lang === "ar" ? "تكامل الأنظمة والسحابة" : "System Integration & Cloud",
      subtitle: lang === "ar" ? "بنية تحتية سحابية آمنة وسريعة تربط جميع برمجياتك معاً." : "Secure, fast cloud setup that connects all your software tools together.",
      impact: lang === "ar"
        ? "نضمن بقاء أنظمتك متصلة بالإنترنت دائماً بنسبة تشغيل 99.9%، ونربط الأدوات ببعضها لتجنب الجزر المنعزلة للبيانات."
        : "We guarantee your systems stay online with 99.9% uptime, connecting tools directly so your business data isn't siloed.",
      problem: lang === "ar"
        ? "المشكلة: الأدوات لا تتحدث مع بعضها، مما يتطلب تنزيل البيانات يدوياً ورفعها لتحديث قواعد البيانات."
        : "Problem: Operations software tools don't communicate, forcing manual updates and siloed records.",
      stopsDoing: lang === "ar"
        ? "ما يتوقف المستخدم عن فعله يدوياً: تصدير ورفع ملفات CSV يدوياً وتتبع تحديثات البيانات بين الأنظمة المختلفة."
        : "What you stop doing manually: Exporting CSVs, uploading user credentials, and tracking data syncs across tools.",
      before: lang === "ar" ? "تحديث يدوي للملفات وتشتت البيانات بين أدوات متعددة غير مترابطة." : "Manual data syncing and siloed records across multiple disconnected platforms.",
      useCases: lang === "ar" ? [
        "ربط المتاجر الإلكترونية بموردي المخزون تلقائياً عبر واجهات البرمجة APIs",
        "تأمين وتشفير استضافات قواعد بيانات العملاء على سحابة AWS أو Google Cloud",
        "إجراء نسخ احتياطي مؤتمت وخطة تعافي تشغيلية كاملة لحماية البيانات",
      ] : [
        "Connecting storefronts with supply chains and suppliers via custom APIs",
        "Securing and hosting customer database environments on AWS or Google Cloud",
        "Automated backup pipelines and database disaster recovery plans",
      ],
      icon: (
        <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      title: lang === "ar" ? "التقارير ولوحات البيانات" : "Reporting & Dashboards",
      subtitle: lang === "ar" ? "لوحات معلومات تفاعلية تجمع بياناتك لحظياً في مكان واحد." : "Data dashboards that collect and display your metrics in one place.",
      impact: lang === "ar"
        ? "نحول السجلات المعقدة والبيانات المشتتة إلى لوحات معلومات نظيفة ومحدثة باستمرار لمساعدتك في اتخاذ قرارات دقيقة."
        : "We compile complex business records and spreadsheet files into clean visual summaries to help management make accurate decisions.",
      problem: lang === "ar"
        ? "المشكلة: قضاء الساعات في نهاية كل أسبوع لتجميع التقارير وحساب العائد على الاستثمار يدوياً."
        : "Problem: Spending hours at the end of the week gathering reports and typing calculations manually.",
      stopsDoing: lang === "ar"
        ? "ما يتوقف المستخدم عن فعله يدوياً: سحب البيانات من منصات الإعلانات، المبيعات، والتحليلات وحساب الأرقام يدوياً."
        : "What you stop doing manually: Pulling records from ad networks, sales CRM, and Web analytics to build weekly tables.",
      before: lang === "ar" ? "سجلات مشتتة وتقارير متأخرة أو غير دقيقة تُبنى يدوياً." : "Siloed sheets and delayed weekly reports that require manual mathematical entries.",
      useCases: lang === "ar" ? [
        "لوحات تحليلات تفاعلية تجمع المبيعات والمصروفات والتكاليف لحظياً",
        "نظام إرسال تقرير الأداء التشغيلي تلقائياً صباح كل جمعة إلى بريد الإدارة",
        "تنبيهات فورية للمشكلات والأعطال في العمليات التشغيلية",
      ] : [
        "Interactive analytics dashboards compiling sales and advertising spend in real-time",
        "Automated report deliveries sent to management email addresses every week",
        "Anomaly detection alerts notifying operations teams of processing drops instantly",
      ],
      icon: (
        <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full py-16 sm:py-24 overflow-hidden">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16 sm:mb-24">
        <div className={`animate-on-load ${mounted ? "visible" : ""}`}>
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-900 to-slate-850 dark:from-slate-100 dark:via-slate-50 dark:to-slate-200 sm:text-5xl md:text-6xl">
            {lang === "ar" ? "أتمتة الأعمال المخصصة" : "Bespoke Business Automation"}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {lang === "ar" 
              ? "أنظمة برمجية مخصصة وموجهة لخدمة الأعمال لمساعدتك في تحسين كفاءة العمليات وتقليل التكاليف وتوفير الوقت."
              : "Tailored, business-focused systems built to optimize operations, cut costs, and save your team hours of manual work."}
          </p>
        </div>
      </section>

      {/* Services detailed listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-24 sm:space-y-36">
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
                  className="group flex flex-col w-full rounded-3xl p-8 sm:p-10 relative overflow-hidden card-neon-border"
                >
                  <div className={`absolute top-0 ${lang === "ar" ? "left-0 rounded-br-full" : "right-0 rounded-bl-full"} w-24 h-24 bg-brand/2`} />
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 shadow-[0_0_15px_rgba(14,179,186,0.15)] group-hover:shadow-[0_0_25px_rgba(14,179,186,0.35)] transition-all duration-300">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">{service.title}</h2>
                  <p className="text-brand font-semibold text-sm mb-4">{service.subtitle}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.impact}
                  </p>

                  <div className="mt-4 border-t border-slate-200/80 dark:border-slate-800/80 pt-4 text-xs space-y-3">
                    <p className="text-slate-500 dark:text-slate-400 font-medium">{service.problem}</p>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">{service.stopsDoing}</p>
                  </div>
                </Reveal>
              </div>

              {/* Before/After and Common Use Cases */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between py-2">
                <Reveal delay={255} className="flex flex-col space-y-6">
                  {/* Before / After visual block */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-4">
                    <div className="flex flex-col bg-red-50/50 dark:bg-red-950/20 border border-red-100/80 dark:border-red-900/40 rounded-xl p-4.5">
                      <span className="text-red-600 dark:text-red-400 font-bold uppercase tracking-wider mb-2">{lang === "ar" ? "قبل الأتمتة" : "Before Automation"}</span>
                      <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{service.before}</p>
                    </div>
                    <div className="flex flex-col bg-teal-50/50 dark:bg-teal-950/20 border border-brand/20 dark:border-brand/40 rounded-xl p-4.5">
                      <span className="text-brand font-bold uppercase tracking-wider mb-2">{lang === "ar" ? "بعد الأتمتة" : "After Automation"}</span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.after}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                    {lang === "ar" ? "تطبيقات وحالات استخدام شائعة" : "Common Applications & Use Cases"}
                  </h3>
                  <ul className="space-y-4">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
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
      <section className="mt-24 sm:mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <Reveal className="bg-gradient-to-br from-indigo-950 via-slate-950 to-black border border-slate-900 rounded-3xl p-10 sm:p-20 relative overflow-hidden shadow-2xl shadow-indigo-950/40">
          {/* Background floating glow for CTA */}
          <div className="absolute top-[-35%] left-[-35%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-brand/30 via-cyan-500/15 to-transparent blur-[100px]" />
          <div className="absolute bottom-[-35%] right-[-35%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-600/15 to-transparent blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-indigo-500/5 opacity-40 -z-20" />
          
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-6 backdrop-blur-md relative z-10">
            {lang === "ar" ? "التدقيق التشغيلي" : "Operational Audit"}
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-6 relative z-10 leading-tight">
            {lang === "ar" ? "هل تبحث عن إزالة الاختناقات التشغيلية؟" : "Looking to remove operational bottlenecks?"}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
            {lang === "ar" 
              ? "احجز جلسة تدقيق مجانية مدتها 30 دقيقة لنحدد فيها معاً أين يفقد عملك الوقت والأموال وكيفية أتمتة الأنظمة."
              : "Book a free 30-minute operational audit. We will map out exactly where you are losing time and how to automate it."}
          </p>
          <div className="relative z-10 inline-block group">
            {/* Button Glow Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand to-indigo-500 blur-xl rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.03] shadow-[0_0_20px_rgba(14,179,186,0.35)] hover:shadow-[0_0_35px_rgba(14,179,186,0.6)] transition-all duration-300 cursor-pointer"
            >
              {t.services_page_why_btn}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
