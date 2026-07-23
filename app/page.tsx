"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

// Types for automation nodes in Variant A (Cyber Orchestrator)
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

  // Prototype state switcher
  const [variant, setVariant] = useState<string>("C");

  // Read/write variant query parameter in browser client-side
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get("variant");
    if (v === "A" || v === "B" || v === "C") {
      setVariant(v);
    }
    setTheme("light");
  }, [setTheme]);

  const handleVariantChange = (newV: string) => {
    setVariant(newV);
    const params = new URLSearchParams(window.location.search);
    params.set("variant", newV);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState(null, "", newUrl);

    setTheme("light");
  };

  const isDark = theme === "dark";

  // ==========================================
  // VARIANT A: MODERN DARK CYBER ORCHESTRATOR
  // ==========================================
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
    if (!isRunning || variant !== "A") return;

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
  }, [isRunning, isArabic, variant]);

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[1];

  const variantATitle = isArabic ? (
    <>
      <span className="text-transparent bg-clip-text font-black bg-gradient-to-b from-white via-slate-100 to-slate-400">
        أتمتة ذكية{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        لأعمالك الرقمية.
      </span>{" "}
      <span className="text-transparent bg-clip-text font-black bg-gradient-to-b from-white via-slate-100 to-slate-400">
        هندسة مدعومة بـ{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        أمن المؤسسات.
      </span>
    </>
  ) : (
    <>
      <span className="text-transparent bg-clip-text font-black bg-gradient-to-b from-white via-slate-100 to-slate-400">
        Autonomous{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        Workflows.
      </span>{" "}
      <span className="text-transparent bg-clip-text font-black bg-gradient-to-b from-white via-slate-100 to-slate-400">
        Engineered with{" "}
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black animate-text-gradient-flow">
        Zero-Trust.
      </span>
    </>
  );

  const variantAPillars = [
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
    <div className="relative text-foreground flex flex-col overflow-hidden">
      
      {/* ==================================================== */}
      {/* RENDER VARIANT A: DARK ENTERPRISE CYBER              */}
      {/* ==================================================== */}
      {variant === "A" && (
        <>
          <section className="relative w-full pt-28 pb-20 sm:pt-36 sm:pb-24 border-b border-[var(--card-border-default)]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left column */}
              <div className="col-span-1 lg:col-span-6 flex flex-col text-left rtl:text-right select-none">
                <Reveal delay={100}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-[var(--card-border-default)] bg-[var(--card-bg)] w-fit mb-5 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-cyan-400" />
                    {t.hero_badge_secure}
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1] pt-1">
                    {variantATitle}
                  </h1>
                </Reveal>

                <Reveal delay={350}>
                  <p className="text-base sm:text-lg leading-relaxed mt-6 mb-8 max-w-xl font-light text-slate-400">
                    {t.hero_subtitle_secure}
                  </p>
                </Reveal>

                <Reveal delay={450}>
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <Link
                      href="https://mi.maker-ai.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary group relative inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 text-[#020209]"
                    >
                      {t.hero_btn_launch}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.97] backdrop-blur-md border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-slate-200"
                    >
                      {t.hero_btn_explore_enterprise}
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Right column: Interactive Demo Widget */}
              <div className="col-span-1 lg:col-span-6 flex justify-center items-center relative">
                <Reveal delay={250} className="w-full max-w-[540px] aspect-[4/3] rounded-2xl border border-[var(--card-border-default)] bg-[var(--card-bg)] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] backdrop-blur-xl p-5 flex flex-col overflow-hidden relative">
                  <div className="flex items-center justify-between border-b border-[var(--card-border-default)] pb-3.5 mb-4.5 select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="text-[10px] uppercase font-mono tracking-wider ml-2 text-brand/60">
                        Mi Tools // n8n Pipeline Engine
                      </span>
                    </div>
                    <button 
                      onClick={() => setIsRunning(!isRunning)} 
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-all tracking-wider ${
                        isRunning 
                          ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                          : "bg-red-500/10 text-red-500 border border-red-500/20"
                      }`}
                    >
                      {isRunning ? "● Live Orchestrator" : "■ Paused"}
                    </button>
                  </div>

                  <div className="relative flex-grow w-full py-4 select-none flex flex-col justify-center">
                    <div className="relative w-full h-24">
                      <div className="absolute inset-0 flex items-center justify-between px-3">
                        {nodes.map((node) => {
                          const isActive = activeNodeId === node.id;
                          return (
                            <button
                              key={node.id}
                              onClick={() => setActiveNodeId(node.id)}
                              className={`relative z-10 p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all duration-300 w-[22%] aspect-square hover:scale-[1.05] cursor-pointer ${
                                isActive
                                  ? "bg-[var(--card-bg)] shadow-[0_0_15px_3px_color-mix(in_srgb,var(--brand-color)_20%,transparent)] border-cyan-400"
                                  : "border-[var(--card-border-default)] bg-[var(--card-bg)]/40 opacity-70"
                              }`}
                            >
                              <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-[var(--background)] ${
                                node.status === "running" ? "bg-amber-500 animate-pulse" : "bg-emerald-500"
                              }`} />
                              <div className={`p-1.5 rounded-lg ${isActive ? "bg-brand/15 text-brand" : "text-brand-muted"}`}>
                                {node.type === "source" && (
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                )}
                                {node.type === "ai" && (
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 11.172V5L8 4z" /></svg>
                                )}
                                {node.type === "security" && (
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                )}
                                {node.type === "action" && (
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
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
                  </div>

                  <div className="mt-4 p-3 rounded-xl border border-[var(--card-border-default)] bg-[var(--background)]/70 text-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        {isArabic ? "تفاصيل الوحدة" : "Node Details"}
                      </span>
                      <span className="text-[9px] font-mono text-brand-muted">
                        ID: {activeNode.id}
                      </span>
                    </div>
                    <p className="font-light leading-relaxed">
                      {isArabic ? activeNode.detailsAr : activeNode.detailsEn}
                    </p>
                  </div>

                  {/* Security Log Terminal Console */}
                  <div className="mt-3.5 h-[145px] border border-slate-800/80 bg-[#06060c] rounded-xl p-3 font-mono text-[10px] text-slate-300 flex flex-col gap-1 overflow-hidden select-none animate-none">
                    <div className="text-[9px] text-slate-500 border-b border-slate-800/50 pb-1 mb-1 font-sans uppercase font-bold tracking-wider flex items-center justify-between shrink-0">
                      <span>{isArabic ? "سجل الأحداث الأمني" : "Security Log Terminal"}</span>
                      <span className="text-[8px] text-emerald-500/80 animate-pulse">● System online</span>
                    </div>
                    {demoLog.length === 0 ? (
                      <span className="animate-pulse text-slate-400 shrink-0">⏳ Awaiting logs from network orchestrator...</span>
                    ) : (
                      demoLog.map((log, index) => (
                        <div key={index} className="truncate transition-all duration-300 text-slate-300 flex items-center gap-1.5 shrink-0">
                          <span className="text-cyan-500 font-bold">❯</span>
                          <span className="font-mono">{log}</span>
                        </div>
                      ))
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Section 1: Metrics */}
          <section className="relative w-full border-b border-[var(--card-border-default)] py-12 select-none" style={{ background: 'var(--card-bg)' }}>
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
                    <span className="text-4.5xl font-black drop-shadow-[0_0_20px_rgba(14,179,186,0.15)] text-cyan-400">
                      {m.value}
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                      {m.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Section 2: Services Grid */}
          <section id="services" className="relative w-full py-24 sm:py-32 border-b border-[var(--card-border-default)]">
            <div className="max-w-7xl mx-auto px-6">
              <Reveal delay={100} className="text-center mb-20">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase select-none heading-gradient-dark">
                  {t.services_arch_title}
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {variantAPillars.map((p, i) => {
                  const getColSpan = (idx: number) => {
                    if (idx < 3) return "md:col-span-3 lg:col-span-2";
                    if (idx === 3) return "md:col-span-3 lg:col-span-3";
                    return "md:col-span-6 lg:col-span-3";
                  };
                  return (
                    <Reveal key={p.title} delay={150 + i * 100} className={`h-full ${getColSpan(i)}`}>
                      <div className="card-neon-border rounded-2xl p-8 flex flex-col h-full overflow-hidden">
                        <div className="relative z-10 h-12 w-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-cyan-950/40 border border-cyan-500/25 text-cyan-400 shadow-[0_0_16px_rgba(14,179,186,0.12)]">
                          {p.icon}
                        </div>
                        <h3 className="relative z-10 text-xl font-bold mb-3 tracking-wide text-white">
                          {p.title}
                        </h3>
                        <p className="relative z-10 text-sm leading-relaxed font-light text-slate-400">
                          {p.desc}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 3: Operational Blueprint */}
          <section className="relative w-full py-24 sm:py-32 border-b border-[var(--card-border-default)]">
            <div className="max-w-7xl mx-auto px-6">
              <Reveal delay={100} className="text-center mb-20">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-400">
                  {t.blueprint_subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mt-3 select-none heading-gradient-dark">
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
                    <div className="h-16 w-16 rounded-full flex items-center justify-center text-xl font-black mb-6 z-10 transition-all duration-300 bg-cyan-950/50 border border-cyan-500/35 text-cyan-400 shadow-[0_0_22px_rgba(14,179,186,0.22)]">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-light max-w-xs text-slate-400">
                      {step.desc}
                    </p>
                    {i < 2 && (
                      <div className="hidden lg:block absolute top-8 left-[62%] rtl:left-auto rtl:right-[62%] w-[76%] h-px -z-10 bg-gradient-to-r rtl:bg-gradient-to-l from-cyan-500/30 via-cyan-500/10 to-transparent" />
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ==================================================== */}
      {/* RENDER VARIANT B: CLEAN MINIMALIST EDITORIAL         */}
      {/* ==================================================== */}
      {variant === "B" && (
        <div className="bg-[#fcfcfa] text-[#1e1e1a] py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* Minimal Header */}
            <div className="text-center mb-16 sm:mb-24 select-none">
              <span className="text-xs uppercase tracking-widest text-[#a35c37] font-semibold">
                {isArabic ? "منصة أتمتة الأنظمة" : "Systems & Workflow Engineering"}
              </span>
              <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mt-6 mb-8 leading-[1.1] text-[#2c2a29]">
                {isArabic 
                  ? "نبني أنظمة رقمية تدير أعمالك وتتحكم بها تلقائياً" 
                  : "We build digital systems that run your business automatically."}
              </h1>
              <p className="text-base sm:text-xl font-light text-[#575451] max-w-2xl mx-auto leading-relaxed">
                {t.hero_subtitle_secure}
              </p>
            </div>

            {/* Structured Numbers Row */}
            <div className="border-y border-[#e2e1dd] py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20 select-none">
              <div>
                <div className="text-4xl sm:text-5xl font-serif font-black text-[#a35c37]">
                  {t.metric_workflows_value}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#7c7875] mt-2 leading-relaxed">
                  {t.metric_workflows_sub}
                </div>
              </div>
              <div className="border-y md:border-y-0 md:border-x border-[#e2e1dd] py-6 md:py-0">
                <div className="text-4xl sm:text-5xl font-serif font-black text-[#2c2a29]">
                  0%
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#7c7875] mt-2 leading-relaxed">
                  {isArabic ? "نسبة الخطأ البشري المتبقية" : "Manual Error Margin Left"}
                </div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-serif font-black text-[#2c2a29]">
                  Bespoke
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#7c7875] mt-2 leading-relaxed">
                  {t.metric_security_sub}
                </div>
              </div>
            </div>

            {/* Vertical Services Accordion-style layout */}
            <div className="mb-24">
              <h2 className="text-xs uppercase tracking-widest text-[#7c7875] font-bold mb-8">
                {isArabic ? "مجالات الخدمة الأساسية" : "Service Offerings"}
              </h2>
              <div className="space-y-6">
                {[
                  { num: "I", title: t.pillar1_title, desc: t.pillar1_desc },
                  { num: "II", title: t.pillar2_title, desc: t.pillar2_desc },
                  { num: "III", title: t.pillar3_title, desc: t.pillar3_desc },
                  { num: "IV", title: t.pillar4_title, desc: t.pillar4_desc },
                  { num: "V", title: t.pillar5_title, desc: t.pillar5_desc },
                ].map((s) => (
                  <div key={s.num} className="border-b border-[#e2e1dd] pb-6 flex gap-6">
                    <span className="font-serif font-bold text-[#a35c37] text-lg select-none">{s.num}.</span>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2c2a29] mb-2">{s.title}</h3>
                      <p className="text-sm font-light text-[#575451] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimal Contact Box */}
            <div className="bg-[#f3f1ed] border border-[#e2e1dd] rounded-2xl p-10 text-center flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2c2a29] mb-4">
                {isArabic ? "دعنا نبدأ بأتمتة أعمالك اليوم" : "Let's automate your pipeline."}
              </h2>
              <p className="text-sm text-[#575451] max-w-md mb-8 leading-relaxed font-light">
                {isArabic 
                  ? "تواصل معنا لإجراء مراجعة شاملة لعمليات شركتك وهندسة حلول رقمية موثوقة."
                  : "Connect with our solution engineers to audit workflow bottlenecks and draft an operations blueprint."}
              </p>
              <Link
                href="/contact"
                className="bg-[#2c2a29] hover:bg-[#a35c37] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors"
              >
                {t.cta_complexities}
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* RENDER VARIANT C: SYMPHONY GLASS DASHBOARD           */}
      {/* ==================================================== */}
      {variant === "C" && (
        <div className="bg-[#f6f5f0] text-[#1d1f20] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs uppercase font-bold tracking-widest text-[#6ba3a0] mb-4">
                {isArabic ? "حلول برمجية متكاملة" : "SaaS Automation Suite"}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-serif mb-6 leading-tight text-[#2d3233]">
                {isArabic
                  ? "خطوط أتمتة مرئية تمنحك تحكماً كاملاً بالعمليات"
                  : "Operations pipelines that grant complete visual control."}
              </h1>
              <p className="text-sm sm:text-base font-light text-[#505759] mb-8 leading-relaxed">
                {isArabic
                  ? "نصمم لوحات تحكم متكاملة وواجهات برمجية آمنة لمراقبة وإدارة جميع عمليات شركتك وتدفقاتها البرمجية والمالية بدقة فائقة."
                  : "We design premium interfaces and custom dashboards that let you analyze and inspect every automation node, script, and API call running in your business."}
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-[#6ba3a0] hover:bg-[#568f8c] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-950/10"
                >
                  {t.cta_complexities}
                </Link>
                <Link
                  href="/services"
                  className="bg-white/40 border border-[#a68c89]/20 hover:bg-white text-[#2d3233] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                >
                  {isArabic ? "تفاصيل الخدمات" : "View Specifications"}
                </Link>
              </div>
            </div>

            {/* Right Content: Premium SaaS Workspace Mockup (Symphony theme styled) */}
            <div className="col-span-1 lg:col-span-7 flex justify-center items-center">
              <Reveal className="w-full max-w-[620px] bg-white/40 border border-[#a68c89]/25 backdrop-filter backdrop-blur-xl rounded-2xl p-6 shadow-xl shadow-slate-900/5 flex flex-col relative overflow-hidden">
                
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
                  <div className="col-span-4 border border-[#a68c89]/20 rounded-xl p-3 bg-white/30 flex flex-col justify-between h-[150px] select-none">
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
                  <div className="col-span-8 border border-[#a68c89]/20 rounded-xl p-4 bg-white/30 flex flex-col justify-between h-[150px] relative select-none">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase font-bold text-[#7a8587] tracking-wider">
                        {isArabic ? "معدل استهلاك المعالج" : "Orchestration Latency (ms)"}
                      </span>
                      <span className="text-[10px] font-mono text-[#6ba3a0] font-bold">avg 45ms</span>
                    </div>

                    {/* Mock Line Graph */}
                    <div className="relative flex-grow flex items-end justify-between px-2 mt-4 pb-2">
                      <div className="absolute inset-x-0 bottom-[35%] h-[1px] bg-slate-400/10" />
                      <div className="absolute inset-x-0 bottom-[65%] h-[1px] bg-slate-400/10" />
                      
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

                {/* Bottom list panel */}
                <div className="mt-4 border border-[#a68c89]/20 rounded-xl p-4 bg-white/30 flex flex-col gap-2 select-none">
                  <div className="text-[9px] uppercase font-bold text-[#7a8587] border-b border-[#a68c89]/15 pb-2 tracking-wider flex items-center justify-between">
                    <span>{isArabic ? "سجل الامتثال والتحقق" : "Compliance Audit Ledger"}</span>
                    <span className="font-mono text-[#6ba3a0]">4 Tasks Audited</span>
                  </div>
                  <div className="space-y-1.5 text-[10px]">
                    <div className="flex items-center justify-between py-1 border-b border-[#a68c89]/10">
                      <span className="font-bold text-[#2d3233]">🔗 Integration Endpoint</span>
                      <span className="text-[#6ba3a0] font-bold">100% OK</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-[#a68c89]/10">
                      <span className="font-bold text-[#2d3233]">🤖 Custom RAG Synthesizer</span>
                      <span className="text-[#6ba3a0] font-bold">Processed 4 documents</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="font-bold text-[#2d3233]">🛡️ CEH Firewall Check</span>
                      <span className="text-[#6ba3a0] font-bold">Secured</span>
                    </div>
                  </div>
                </div>

              </Reveal>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* DYNAMIC PROTOTYPE INTERACTIVE SWITCHER PILL          */}
      {/* ==================================================== */}
      <PrototypeSwitcher current={variant} onChange={handleVariantChange} />

    </div>
  );
}

// Fixed Switcher Pill at the bottom center of the browser screen (Hidden in Production)
function PrototypeSwitcher({
  current,
  onChange,
}: {
  current: string;
  onChange: (v: string) => void;
}) {
  const variants = ["A", "B", "C"];
  const names: Record<string, string> = {
    A: "A — Dark Cyber Orchestrator",
    B: "B — Minimal Light Editorial",
    C: "C — Symphony Glass Dashboard",
  };

  const handlePrev = () => {
    const idx = variants.indexOf(current);
    const nextIdx = (idx - 1 + variants.length) % variants.length;
    onChange(variants[nextIdx]);
  };

  const handleNext = () => {
    const idx = variants.indexOf(current);
    const nextIdx = (idx + 1) % variants.length;
    onChange(variants[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.hasAttribute("contenteditable"))
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current]);

  return (
    <div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-4 py-2.5 rounded-full shadow-2xl border select-none animate-none"
      style={{ backgroundColor: "#0a0b10", borderColor: "#1e293b", color: "#f8fafc" }}
    >
      <button 
        onClick={handlePrev} 
        className="hover:text-cyan-400 p-1.5 transition-colors cursor-pointer"
        style={{ color: "#f8fafc" }}
        aria-label="Previous Variant"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <span className="text-xs font-bold font-mono tracking-wide px-2 min-w-[200px] text-center" style={{ color: "#f8fafc" }}>
        {names[current] || current}
      </span>

      <button 
        onClick={handleNext} 
        className="hover:text-cyan-400 p-1.5 transition-colors cursor-pointer"
        style={{ color: "#f8fafc" }}
        aria-label="Next Variant"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
