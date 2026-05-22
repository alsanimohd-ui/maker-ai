"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const serviceDetails = [
    {
      title: "AI Automation",
      subtitle: "Eliminate manual tasks and speed up daily workflows.",
      impact: "Saves up to 20-30 hours per week per employee by automating data entry, report generation, and document processing.",
      useCases: [
        "Automated data entry between different business software",
        "Instant document classification and processing (e.g., invoices, emails)",
        "Daily report compilation and automated email notifications",
      ],
      icon: (
        <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "AI Chatbots",
      subtitle: "Intelligent support and automated sales qualification around the clock.",
      impact: "Responds instantly to 80% of routine client questions, decreasing support costs while generating qualified sales leads 24/7.",
      useCases: [
        "Automated customer support for common website inquiries",
        "Pre-qualifying incoming business leads before they reach your sales team",
        "Booking and scheduling consultations automatically with clients",
      ],
      icon: (
        <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Secure, fast, and scalable infrastructure designed for modern systems.",
      impact: "Ensures 99.9% system uptime, fast load speeds, and robust protection for your company and client data.",
      useCases: [
        "Setting up fast, secure, and modern cloud hosting environments",
        "Automated backup procedures and disaster recovery planning",
        "Smooth software updates with zero downtime for your users",
      ],
      icon: (
        <svg className="h-10 w-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
    },
    {
      title: "Smart Systems",
      subtitle: "Data-driven dashboards and software to guide your decisions.",
      impact: "Aggregates complex business records into clean visual summaries, helping leadership make highly informed, strategic choices.",
      useCases: [
        "Interactive analytics dashboards representing company performance",
        "Automated alerts tracking anomalies in your operational data",
        "Clear forecasts for supply chains, inventory, or sales trends",
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
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tailored, business-focused systems built to optimize operations, cut costs, and generate leads.
          </p>
        </div>
      </section>

      {/* Services detailed listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20 sm:space-y-28">
        {serviceDetails.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Service Icon and Title block */}
              <div className="w-full lg:w-1/2">
                <Reveal
                  delay={100}
                  className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-2xl p-8 sm:p-10 relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand/2 rounded-bl-full" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">{service.title}</h2>
                  <p className="text-brand font-semibold text-sm mb-4">{service.subtitle}</p>
                  <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {service.impact}
                  </p>
                </Reveal>
              </div>

              {/* Service Features & Typical Use Cases */}
              <div className="w-full lg:w-1/2">
                <Reveal delay={255} className="flex flex-col space-y-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    Common Business Applications
                  </h3>
                  <ul className="space-y-4">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-slate-300 leading-relaxed">
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
      <section className="mt-24 sm:mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <Reveal className="bg-gradient-to-br from-[#0c101c] to-[#05060b] border border-[#1f293d] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Background floating glow for CTA */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand/20 to-indigo-500/20 blur-3xl animate-float-glow" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-indigo-500/5 opacity-30 -z-20" />
          
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-6 backdrop-blur-md relative z-10">
            Consultation Call
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-4 relative z-10">
            Need a Custom AI Integration?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed relative z-10">
            Our engineers can help you assess your current operations and identify the easiest processes to automate first.
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.02] shadow-[0_0_20px_rgba(14,179,186,0.35)] hover:shadow-[0_0_35px_rgba(14,179,186,0.6)] transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
