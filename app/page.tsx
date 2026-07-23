"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

interface AutomationNode {
  id: string;
  nameEn: string;
  nameAr: string;
  status: "idle" | "running" | "success" | "warning";
  type: "source" | "ai" | "security" | "action";
  detailsEn: string;
  detailsAr: string;
}

export default function Home() {
  const { lang } = useLanguage();
  const { theme, setTheme } = useTheme();
  const t = translations[lang];
  const isArabic = lang === "ar";

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  // Interactive Demo Widget State
  const [activeNodeId, setActiveNodeId] = useState<string>("node-ai");
  const [demoLog, setDemoLog] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const nodes: AutomationNode[] = [
    {
      id: "node-source",
      nameEn: "ERP Data Stream",
      nameAr: "تدفق بيانات ERP",
      status: "success",
      type: "source",
      detailsEn: "Listens to multi-tenant JoFotara compliance endpoint.",
      detailsAr: "يستمع لنقطة نهاية امتثال فوترة JoFotara متعددة المستأجرين.",
    },
    {
      id: "node-ai",
      nameEn: "Cognitive Parser",
      nameAr: "المحلل الإدراكي",
      status: "running",
      type: "ai",
      detailsEn: "Extracts line items, values, and entities with custom RAG models.",
      detailsAr: "يستخرج بنود الفواتير والقيم والكيانات باستخدام نماذج RAG مخصصة.",
    },
    {
      id: "node-security",
      nameEn: "Zero-Trust Perimeter",
      nameAr: "حاجز ثقة معدومة",
      status: "success",
      type: "security",
      detailsEn: "Runs runtime log check & secure CEH virtual firewall inspection.",
      detailsAr: "يقوم بفحص سجلات التشغيل وفحص جدار الحماية الافتراضي CEH.",
    },
    {
      id: "node-ledger",
      nameEn: "n8n Auto-Sync",
      nameAr: "مزامنة n8n التلقائية",
      status: "success",
      type: "action",
      detailsEn: "Synchronizes secure ledgers and sends automated payouts.",
      detailsAr: "يزامن السجلات الآمنة ويرسل الدفعات التلقائية.",
    },
  ];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const logs = isArabic ? [
        "⏳ جاري التحقق من أمن الحزمة المستلمة...",
        "✅ تم اجتياز فحص جدار الحماية الافتراضي CEH بنجاح.",
        "🤖 نموذج RAG يحلل مستند الفاتورة...",
        "🚀 n8n يستدعي خط معالجة الدفع التلقائي...",
        "💾 تمت المزامنة مع خادم قاعدة البيانات بنجاح.",
      ] : [
        "⏳ Inspecting incoming multi-tenant transaction packet...",
        "✅ CEH Zero-Trust virtual firewall inspection passed.",
        "🤖 RAG cognitive model analyzing document layout...",
        "🚀 n8n pipeline executing secure automated payout API...",
        "💾 Ledger successfully synchronized with database server.",
      ];
      setDemoLog((prev) => {
        const next = [...prev, logs[Math.floor(Math.random() * logs.length)]];
        return next.slice(-4);
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isRunning, isArabic]);

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[1];

  const servicePillars = [
    {
      title: t.pillar1_title,
      desc: t.pillar1_desc,
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 6.747M12 3a9.003 9.003 0 00-8.716 6.747M3 12h18" />
        </svg>
      ),
    },
    {
      title: t.pillar2_title,
      desc: t.pillar2_desc,
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: t.pillar3_title,
      desc: t.pillar3_desc,
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: t.pillar4_title,
      desc: t.pillar4_desc,
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      ),
    },
    {
      title: t.pillar5_title,
      desc: t.pillar5_desc,
      icon: (
        <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h7.5M12 3v1.5m6 3.75v10.5A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 016 18.75V8.25A2.25 2.25 0 0118 8.25zM10.5 12h3M12 10.5v3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative text-[#1d1f20] bg-[#f6f5f0] flex flex-col overflow-hidden min-h-screen">
      {/* Hero Section */}
          <section className="relative w-full pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-[#a68c89]/20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column */}
              <div className="col-span-1 lg:col-span-5 flex flex-col justify-center text-left rtl:text-right select-none">
                <Reveal delay={100}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-[#6ba3a0]/30 bg-[#6ba3a0]/10 text-[#6ba3a0] w-fit mb-5">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#6ba3a0]" />
                    {isArabic ? "حلول برمجية متكاملة" : "SaaS Automation Suite"}
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-serif mb-6 leading-[1.15] text-[#2d3233]">
                    {isArabic
                      ? "خطوط أتمتة مرئية تمنحك تحكماً كاملاً بالعمليات."
                      : "Operations pipelines that grant complete visual control."}
                  </h1>
                </Reveal>

                <Reveal delay={350}>
                  <p className="text-base sm:text-lg font-light text-[#505759] mb-8 leading-relaxed">
                    {isArabic
                      ? "نصمم لوحات تحكم متكاملة وواجهات برمجية آمنة لمراقبة وإدارة جميع عمليات شركتك وتدفقاتها البرمجية والمالية بدقة فائقة."
                      : "We design premium visual interfaces, custom dashboards, and zero-trust backend pipelines that let you inspect every automation node, script, and API call running in your business."}
                  </p>
                </Reveal>

                <Reveal delay={450}>
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <Link
                      href="https://mi.maker-ai.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#6ba3a0] hover:bg-[#568f8c] text-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/10 inline-flex items-center justify-center gap-2"
                    >
                      {t.hero_btn_launch}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/services"
                      className="bg-white/60 border border-[#a68c89]/25 hover:bg-white text-[#2d3233] px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center"
                    >
                      {isArabic ? "تفاصيل الخدمات" : "View Specifications"}
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Premium SaaS Workspace Mockup (Symphony theme styled) */}
              <div className="col-span-1 lg:col-span-7 flex justify-center items-center">
                <Reveal delay={250} className="w-full max-w-[620px] bg-white/45 border border-[#a68c89]/25 backdrop-blur-xl rounded-2xl p-6 shadow-xl shadow-slate-900/5 flex flex-col relative overflow-hidden">
                  
                  {/* Topbar of SaaS */}
                  <div className="flex items-center justify-between border-b border-[#a68c89]/20 pb-4 mb-4 select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                      <span className="text-[10px] font-bold text-[#505759] uppercase tracking-wider ml-2 font-mono">
                        Maker-AI // Admin Control Portal
                      </span>
                    </div>
                    <span className="text-[10px] text-[#6ba3a0] font-bold px-2 py-0.5 rounded bg-[#6ba3a0]/10 border border-[#6ba3a0]/20 font-mono">
                      ● Production Cluster
                    </span>
                  </div>

                  {/* Dashboard grid mock layout */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Left stats panel */}
                    <div className="col-span-4 border border-[#a68c89]/20 rounded-xl p-3 bg-white/40 flex flex-col justify-between h-[150px] select-none">
                      <span className="text-[9px] uppercase font-bold text-[#7a8587] tracking-wider">
                        {isArabic ? "العمليات الجارية" : "Running Pipelines"}
                      </span>
                      <span className="text-2xl font-serif font-black text-[#2d3233]">
                        42 Active
                      </span>
                      <span className="text-[9px] text-[#6ba3a0] font-bold">
                        ↑ 12% from yesterday
                      </span>
                    </div>

                    {/* Center Chart widget */}
                    <div className="col-span-8 border border-[#a68c89]/20 rounded-xl p-4 bg-white/40 flex flex-col justify-between h-[150px] relative select-none">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] uppercase font-bold text-[#7a8587] tracking-wider">
                          {isArabic ? "معدل استهلاك المعالج" : "Orchestration Latency (ms)"}
                        </span>
                        <span className="text-[10px] font-mono text-[#6ba3a0] font-bold">avg 45ms</span>
                      </div>

                      {/* Mock Line Graph */}
                      <div className="relative flex-grow flex items-end justify-between px-2 mt-4 pb-2">
                        <div className="absolute inset-x-0 bottom-[35%] h-[1px] bg-slate-400/15" />
                        <div className="absolute inset-x-0 bottom-[65%] h-[1px] bg-slate-400/15" />
                        
                        {/* Fake Chart Lines */}
                        <div className="w-[12%] h-[20%] bg-[#6ba3a0]/40 rounded-t" />
                        <div className="w-[12%] h-[40%] bg-[#6ba3a0]/40 rounded-t" />
                        <div className="w-[12%] h-[75%] bg-[#6ba3a0] rounded-t" />
                        <div className="w-[12%] h-[55%] bg-[#6ba3a0]/40 rounded-t" />
                        <div className="w-[12%] h-[90%] bg-[#6ba3a0] rounded-t" />
                        <div className="w-[12%] h-[30%] bg-[#6ba3a0]/40 rounded-t" />
                      </div>
                    </div>
                  </div>

                  {/* Interactive Nodes Switcher */}
                  <div className="mt-4 pt-3 border-t border-[#a68c89]/15">
                    <div className="flex items-center justify-between px-1 mb-2">
                      <span className="text-[9px] uppercase font-bold text-[#7a8587] tracking-wider">
                        {isArabic ? "وحدات الأتمتة المباشرة" : "Live Pipeline Nodes"}
                      </span>
                      <button 
                        onClick={() => setIsRunning(!isRunning)} 
                        className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase transition-all tracking-wider cursor-pointer ${
                          isRunning 
                            ? "bg-[#6ba3a0]/15 text-[#6ba3a0] border border-[#6ba3a0]/30" 
                            : "bg-red-500/10 text-red-600 border border-red-500/20"
                        }`}
                      >
                        {isRunning ? "● Live Orchestrator" : "■ Paused"}
                      </button>
                    </div>

                    <div className="grid grid-cols-4 gap-2 select-none">
                      {nodes.map((node) => {
                        const isActive = activeNodeId === node.id;
                        return (
                          <button
                            key={node.id}
                            onClick={() => setActiveNodeId(node.id)}
                            className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer ${
                              isActive
                                ? "bg-white border-[#6ba3a0] shadow-md shadow-emerald-950/5 text-[#2d3233]"
                                : "border-[#a68c89]/20 bg-white/30 text-[#7a8587] hover:bg-white/60"
                            }`}
                          >
                            <div className={`p-1 rounded-md ${isActive ? "text-[#6ba3a0]" : "text-[#7a8587]"}`}>
                              {node.type === "source" && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                              )}
                              {node.type === "ai" && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5L8 4z" /></svg>
                              )}
                              {node.type === "security" && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                              )}
                              {node.type === "action" && (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                              )}
                            </div>
                            <span className="text-[9px] font-bold text-center uppercase tracking-wide truncate max-w-full leading-tight">
                              {isArabic ? node.nameAr : node.nameEn}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Security Log Terminal Console */}
                  <div className="mt-3.5 h-[110px] border border-[#a68c89]/20 bg-white/70 rounded-xl p-3 font-mono text-[10px] text-[#2d3233] flex flex-col gap-1 overflow-hidden select-none">
                    <div className="text-[9px] text-[#7a8587] border-b border-[#a68c89]/15 pb-1 mb-1 font-sans uppercase font-bold tracking-wider flex items-center justify-between shrink-0">
                      <span>{isArabic ? "سجل الأحداث الأمني" : "Security Log Terminal"}</span>
                      <span className="text-[8px] text-[#6ba3a0] font-bold">● System online</span>
                    </div>
                    {demoLog.length === 0 ? (
                      <span className="text-[#7a8587] shrink-0">⏳ Awaiting logs from network orchestrator...</span>
                    ) : (
                      demoLog.map((log, index) => (
                        <div key={index} className="truncate transition-all duration-300 text-[#2d3233] flex items-center gap-1.5 shrink-0">
                          <span className="text-[#6ba3a0] font-bold">❯</span>
                          <span className="font-mono">{log}</span>
                        </div>
                      ))
                    )}
                  </div>

                </Reveal>
              </div>

            </div>
          </section>

          {/* Section 1: Metrics Section (Symphony Glass Styled) */}
          <section className="relative w-full border-b border-[#a68c89]/20 py-12 select-none bg-white/40 backdrop-blur-md">
            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
              {[
                { value: t.metric_workflows_value, label: t.metric_workflows_sub },
                { value: t.metric_uptime_value,    label: t.metric_uptime_sub,    divider: true },
                { value: t.metric_security_value,  label: t.metric_security_sub },
              ].map((m, i) => (
                <Reveal key={i} delay={100 + i * 150} className={
                  m.divider ? "border-y md:border-y-0 md:border-x border-[#a68c89]/20 py-6 md:py-0" : ""
                }>
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl sm:text-5xl font-black font-serif text-[#2d3233]">
                      {m.value}
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#6ba3a0] mt-1">
                      {m.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Section 2: 5 Pillars Core Services Grid (Symphony Glass Styled) */}
          <section id="services" className="relative w-full py-24 sm:py-32 border-b border-[#a68c89]/20">
            <div className="max-w-7xl mx-auto px-6">
              <Reveal delay={100} className="text-center mb-16">
                <span className="text-xs uppercase font-bold tracking-widest text-[#6ba3a0] mb-2 block">
                  {isArabic ? "مجالات الخدمة الأساسية" : "Service Architecture"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-[#2d3233]">
                  {t.services_arch_title}
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {servicePillars.map((p, i) => {
                  const getColSpan = (idx: number) => {
                    if (idx < 3) return "md:col-span-3 lg:col-span-2";
                    if (idx === 3) return "md:col-span-3 lg:col-span-3";
                    return "md:col-span-6 lg:col-span-3";
                  };
                  return (
                    <Reveal key={p.title} delay={150 + i * 100} className={`h-full ${getColSpan(i)}`}>
                      <div className="bg-white/50 border border-[#a68c89]/25 hover:border-[#6ba3a0]/40 backdrop-blur-xl rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 bg-[#6ba3a0]/15 border border-[#6ba3a0]/25 text-[#6ba3a0]">
                          {p.icon}
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-3 text-[#2d3233]">
                          {p.title}
                        </h3>
                        <p className="text-sm leading-relaxed font-light text-[#505759]">
                          {p.desc}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 3: Operational Blueprint (Symphony Glass Styled) */}
          <section className="relative w-full py-24 sm:py-32 border-b border-[#a68c89]/20">
            <div className="max-w-7xl mx-auto px-6">
              <Reveal delay={100} className="text-center mb-16">
                <span className="text-xs font-bold tracking-widest uppercase text-[#6ba3a0] mb-2 block">
                  {t.blueprint_subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-[#2d3233]">
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
                    <div className="h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 bg-[#6ba3a0]/15 border border-[#6ba3a0]/30 text-[#6ba3a0] shadow-sm">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-3 text-[#2d3233]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-light max-w-xs text-[#505759]">
                      {step.desc}
                    </p>
                    {i < 2 && (
                      <div className="hidden lg:block absolute top-8 left-[62%] rtl:left-auto rtl:right-[62%] w-[76%] h-px -z-10 bg-gradient-to-r rtl:bg-gradient-to-l from-[#6ba3a0]/40 via-[#6ba3a0]/15 to-transparent" />
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Enterprise Contact CTA Box */}
          <section className="relative w-full py-20">
            <div className="max-w-4xl mx-auto px-6">
              <Reveal delay={100} className="bg-white/60 border border-[#a68c89]/25 rounded-2xl p-10 sm:p-16 text-center backdrop-blur-xl shadow-xl shadow-slate-900/5 flex flex-col items-center">
                <span className="text-xs uppercase font-bold tracking-widest text-[#6ba3a0] mb-3">
                  {isArabic ? "ابدأ اليوم" : "Enterprise Automation"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2d3233] mb-4">
                  {isArabic ? "هل أنت مستعد لأتمتة عملياتك؟" : "Ready to orchestrate your visual pipelines?"}
                </h2>
                <p className="text-sm sm:text-base text-[#505759] max-w-lg mb-8 leading-relaxed font-light">
                  {isArabic 
                    ? "تواصل معنا لإجراء تدقيق شامل لهيكلية أعمالك وتصميم أنظمة أتمتة آمنة ومخصصة."
                    : "Connect with our engineering team to design custom visual pipelines and audit workflow bottlenecks."}
                </p>
                <Link
                  href="/contact"
                  className="bg-[#6ba3a0] hover:bg-[#568f8c] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-950/10"
                >
                  {t.cta_complexities}
                </Link>
              </Reveal>
            </div>
          </section>

    </div>
  );
}
