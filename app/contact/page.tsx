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
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-900 to-slate-850 sm:text-5xl md:text-6xl">
            {t.contact_page_title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
            className="flex flex-col space-y-8 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-md shadow-slate-100/50 hover:border-brand/35 hover:shadow-xl transition-all duration-300 card-hover-premium"
          >
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">{t.contact_side_title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.contact_side_desc}
              </p>
            </div>

            <div className="border-t border-slate-200/80 pt-6">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                {t.contact_side_hours_title}
              </h3>
              <p className="text-sm text-slate-500">{t.contact_side_hours_days}</p>
              <p className="text-sm text-slate-900 font-semibold">{t.contact_side_hours_time}</p>
            </div>

            <div className="border-t border-slate-200/80 pt-6 flex flex-col space-y-4">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                {t.contact_side_channels}
              </h3>
              <a
                href="mailto:info@maker-ai.tech"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200 font-semibold"
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
