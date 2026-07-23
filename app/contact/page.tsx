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
    <div className="relative min-h-screen text-[#1d1f20] bg-[#f6f5f0] flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col w-full py-24 sm:py-32 z-10">
        {/* Header section */}
        <section className="max-w-7xl mx-auto px-6 w-full text-center mb-16 sm:mb-24 select-none">
          <div className={`animate-on-load ${mounted ? "visible" : ""}`}>
            <span className="text-xs uppercase font-bold tracking-widest text-[#6ba3a0] mb-3 block">
              {lang === "ar" ? "تواصل معنا" : "Get In Touch"}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-serif text-[#2d3233] leading-tight">
              {t.contact_page_title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light text-[#505759]">
              {t.contact_page_sub}
            </p>
          </div>
        </section>

        {/* Form & details section */}
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Side Info Panel */}
            <Reveal
              delay={100}
              className="h-full"
            >
              <div className="bg-white/50 border border-[#a68c89]/25 backdrop-blur-xl rounded-2xl p-8 flex flex-col space-y-8 overflow-hidden h-full shadow-sm">
                <div>
                  <h2 className="text-xl font-serif font-bold text-[#2d3233] mb-6 uppercase tracking-wide">
                    {t.contact_side_title}
                  </h2>
                  
                  {/* List of 3 technical consulting benefits */}
                  <ul className="space-y-4">
                    {[t.contact_side_benefit1, t.contact_side_benefit2, t.contact_side_benefit3].map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#6ba3a0]/15 text-[#6ba3a0] flex items-center justify-center">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm leading-relaxed font-light text-[#505759]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Operating Hours */}
                <div className="border-t border-[#a68c89]/20 pt-6">
                  <h3 className="text-sm font-semibold text-[#2d3233] uppercase tracking-wider mb-2">
                    {t.contact_side_hours_title}
                  </h3>
                  <p className="text-sm text-[#7a8587] font-light">{t.contact_side_hours_days}</p>
                  <p className="text-sm text-[#2d3233] font-bold">{t.contact_side_hours_time}</p>
                </div>

                {/* Direct Channels */}
                <div className="border-t border-[#a68c89]/20 pt-6 flex flex-col space-y-4">
                  <h3 className="text-sm font-semibold text-[#2d3233] uppercase tracking-wider">
                    {t.contact_side_channels}
                  </h3>
                  <a
                    href="mailto:info@maker-ai.tech"
                    className="flex items-center gap-2.5 text-sm text-[#505759] hover:text-[#6ba3a0] transition-colors duration-200 font-semibold"
                  >
                    <svg
                      className="h-5 w-5 text-[#6ba3a0]"
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

            {/* Main Interactive Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
