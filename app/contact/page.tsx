"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030308] text-white flex flex-col justify-center overflow-hidden">
      {/* Background Ambience (Soft Aurora Canvas & Faint 2% Opacity Cybernetic Grid Matrix) */}
      <div 
        className="absolute top-0 inset-x-0 h-full pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.07) 0%, rgba(2, 2, 5, 0) 70%)' }}
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
              {t.contact_page_title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-400/90 max-w-2xl mx-auto leading-relaxed font-light">
              {t.contact_page_sub}
            </p>
          </div>
        </section>

        {/* Form & details section */}
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Side Info Panel - Restyled with hover radial glow container */}
            <Reveal
              delay={100}
              className="group flex flex-col space-y-8 p-8 rounded-[24px] relative overflow-hidden backdrop-blur-xl bg-white/[0.01] border border-white/[0.04] hover:border-cyan-400/40 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,242,254,0.05)] transition-all duration-500"
            >
              {/* Immersive inner top radial glow on hover */}
              <div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />
              
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">
                  {t.contact_side_title}
                </h2>
                
                {/* List of 3 technical consulting benefits */}
                <ul className="space-y-4">
                  {[t.contact_side_benefit1, t.contact_side_benefit2, t.contact_side_benefit3].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-400/90 leading-relaxed font-light">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amman Operating Hours */}
              <div className="relative z-10 border-t border-white/[0.05] pt-6">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                  {t.contact_side_hours_title}
                </h3>
                <p className="text-sm text-slate-400/80 font-light">{t.contact_side_hours_days}</p>
                <p className="text-sm text-white font-bold">{t.contact_side_hours_time}</p>
              </div>

              {/* Direct Channels */}
              <div className="relative z-10 border-t border-white/[0.05] pt-6 flex flex-col space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {t.contact_side_channels}
                </h3>
                <a
                  href="mailto:info@maker-ai.tech"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 font-semibold"
                >
                  <svg
                    className="h-5 w-5 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  info@maker-ai.tech
                </a>
              </div>
            </Reveal>

            {/* Form area */}
            <Reveal delay={200} className="col-span-1 lg:col-span-2">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}
