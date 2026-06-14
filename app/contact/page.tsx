"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang];
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const headingGradient = isDark
    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400"
    : "text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500";

  return (
    <div className="relative min-h-screen text-foreground flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col w-full py-24 sm:py-32 z-10">
        {/* Header section */}
        <section className="max-w-7xl mx-auto px-6 w-full text-center mb-16 sm:mb-24">
          <div className={`animate-on-load ${mounted ? "visible" : ""}`}>
            <h1 className={`text-4xl font-black tracking-tight sm:text-5xl md:text-6xl uppercase select-none ${headingGradient}`}>
              {t.contact_page_title}
            </h1>
            <p className={`mt-4 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
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
              className="h-full"
            >
              <div className="card-neon-border rounded-2xl p-8 flex flex-col space-y-8 overflow-hidden group h-full">
                {/* Immersive inner top radial glow on hover */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,179,186,0.08),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  aria-hidden="true"
                />
                
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wide">
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
                        <span className={`text-sm leading-relaxed font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Amman Operating Hours */}
                <div className="relative z-10 border-t border-[var(--card-border-default)] pt-6">
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-3">
                    {t.contact_side_hours_title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400/80 font-light">{t.contact_side_hours_days}</p>
                  <p className="text-sm text-slate-900 dark:text-white font-bold">{t.contact_side_hours_time}</p>
                </div>

                {/* Direct Channels */}
                <div className="relative z-10 border-t border-[var(--card-border-default)] pt-6 flex flex-col space-y-4">
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white uppercase tracking-wider">
                    {t.contact_side_channels}
                  </h3>
                  <a
                    href="mailto:info@maker-ai.tech"
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-white transition-colors duration-200 font-semibold"
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
