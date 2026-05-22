"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      mounted ? null : setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col w-full py-16 sm:py-24 overflow-hidden">


      {/* Header section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16">
        <div className={`animate-on-load ${mounted ? "visible" : ""}`}>
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 sm:text-5xl md:text-6xl">
            Start Your AI Journey
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out to schedule a free 30-minute operational audit call. We will help map out your automation goals.
          </p>
        </div>
      </section>

      {/* Form & details section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Side Info Panel */}
          <Reveal
            delay={100}
            className="flex flex-col space-y-8 bg-[#0c0f17] border border-[#1f293d] hover:border-brand/40 rounded-2xl p-6 sm:p-8 hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Why Consult Us?</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                During our discovery call, we will analyze your core workflows, identify automation blockers, and estimate your potential cost savings.
              </p>
            </div>

            <div className="border-t border-[#1f293d] pt-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Operational Hours
              </h3>
              <p className="text-sm text-slate-400">Monday – Friday</p>
              <p className="text-sm text-white font-medium">9:00 AM – 6:00 PM EST</p>
            </div>

            <div className="border-t border-[#1f293d] pt-6 flex flex-col space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Direct Channels
              </h3>
              <a
                href="mailto:info@maker-ai.tech"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200"
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
