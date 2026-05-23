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
    <div className="relative flex flex-col w-full py-16 sm:py-24 overflow-hidden">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16">
        <div className={`animate-on-load ${mounted ? "visible" : ""}`}>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            {t.contact_page_title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.contact_page_sub}
          </p>
        </div>
      </section>

      {/* Form & details section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Side Info Panel */}
          <Reveal
            delay={100}
            className="flex flex-col space-y-8 p-6 sm:p-8 card-neon-border"
          >
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.contact_side_title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.contact_side_desc}
              </p>
            </div>

            <div className="border-t border-slate-200/80 dark:border-slate-800/80 pt-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                {t.contact_side_hours_title}
              </h3>
              <p className="text-sm text-slate-550 dark:text-slate-400">{t.contact_side_hours_days}</p>
              <p className="text-sm text-slate-900 dark:text-white font-semibold">{t.contact_side_hours_time}</p>
            </div>

            <div className="border-t border-slate-200/80 dark:border-slate-800/80 pt-6 flex flex-col space-y-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                {t.contact_side_channels}
              </h3>
              <a
                href="mailto:info@maker-ai.tech"
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 font-semibold"
              >
                <svg
                  className="h-5 w-5 text-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
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
  );
}
