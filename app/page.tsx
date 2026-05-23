"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "AI Automation",
      description: "Streamline repetitive tasks and daily workflows to save your team hours of manual labor.",
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "AI Chatbots",
      description: "Provide 24/7 customer support and capture qualified leads automatically.",
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      title: "Cloud & DevOps",
      description: "Fast, secure, and reliable cloud setups to ensure your business systems are always online.",
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
    },
    {
      title: "Smart Systems",
      description: "Custom software that analyzes your business data to help you make smarter decisions.",
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-36 bg-transparent border-b border-[#1a1f2e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Logo and Premium badge above headline */}
          <div className={`animate-on-load ${heroVisible ? "visible" : ""} flex flex-col items-center mb-8`}>
            <img
              src="/assets/logo/icon-color.svg"
              alt="Maker AI Icon"
              className="h-20 w-auto mb-6 drop-shadow-[0_0_20px_rgba(14,179,186,0.25)]"
            />
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand/35 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand backdrop-blur-md select-none shadow-[0_0_15px_rgba(14,179,186,0.15)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand animate-pulse" />
              Automations & Systems Engineering
            </div>
          </div>

          <h1 className={`animate-on-load ${heroVisible ? "visible" : ""} delay-200 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400`}>
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cyan-400 to-[#14d2db] drop-shadow-[0_0_20px_rgba(14,179,186,0.35)] font-extrabold">AI Systems</span> <br className="hidden sm:inline" />
            That Automate Your Business
          </h1>

          <p className={`animate-on-load ${heroVisible ? "visible" : ""} delay-400 mt-8 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed`}>
            We design and implement custom artificial intelligence solutions to streamline operations, cut costs, and accelerate your business growth.
          </p>

          <p className={`animate-on-load ${heroVisible ? "visible" : ""} delay-500 mt-5 text-base sm:text-lg text-slate-400 font-medium italic`}>
            Stop wasting hours on manual work. Let your business run itself.
          </p>

          <div className={`animate-on-load ${heroVisible ? "visible" : ""} delay-600 mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto`}>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.03] shadow-[0_0_25px_rgba(14,179,186,0.4)] hover:shadow-[0_0_35px_rgba(14,179,186,0.65)] transition-all duration-300"
            >
              Book Consultation
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-[#2d3748] hover:border-brand/50 px-8 py-4 text-base font-bold text-white bg-[#0d0f17]/40 backdrop-blur-sm hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(14,179,186,0.15)] transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Key Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted">
            Simple, focused software and system integrations to scale your operations.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Reveal
              key={index}
              delay={index * 120}
              className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-xl p-7 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300 h-full cursor-default"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand transition-colors duration-300">{service.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed flex-grow group-hover:text-slate-100 transition-colors duration-300">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-28 bg-[#0a0d16]/60 border-y border-[#1a1f2e] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Work With Maker AI
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted">
              We focus on delivering measurable business results, not just implementing technology.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={100} className="flex flex-col items-start space-y-3 border-l-2 border-brand/20 pl-6 py-2 hover:border-brand/70 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400 drop-shadow-[0_0_12px_rgba(14,179,186,0.3)]">80%+</div>
              <h3 className="text-lg font-bold text-white">Efficiency Increase</h3>
              <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                By automating repetitive tasks, emails, and data entry, we give your team their hours back to focus on high-impact work.
              </p>
            </Reveal>

            <Reveal delay={220} className="flex flex-col items-start space-y-3 border-l-2 border-brand/20 pl-6 py-2 hover:border-brand/70 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400 drop-shadow-[0_0_12px_rgba(14,179,186,0.3)]">Cost Reduction</div>
              <h3 className="text-lg font-bold text-white">Lesser Overhead</h3>
              <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                Automated pipelines and smart bots handle high volumes of tasks seamlessly, lowering operational costs significantly.
              </p>
            </Reveal>

            <Reveal delay={340} className="flex flex-col items-start space-y-3 border-l-2 border-brand/20 pl-6 py-2 hover:border-brand/70 transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400 drop-shadow-[0_0_12px_rgba(14,179,186,0.3)]">Bespoke Custom</div>
              <h3 className="text-lg font-bold text-white">Built for Your Logic</h3>
              <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                No generic boxes. We study your custom workflows and build systems that adapt perfectly to how your business actually runs.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32 bg-transparent border-t border-[#1a1f2e] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted">
              A simple process to turn your business into an automated system
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <Reveal delay={100} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300 h-full cursor-default relative">
              <div className="absolute top-6 right-8 text-4xl font-extrabold text-slate-800/50 group-hover:text-brand/20 transition-colors duration-300 select-none">
                01
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                We Analyze Your Business
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                We identify inefficiencies, repetitive tasks, and areas where automation can deliver the biggest impact.
              </p>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={220} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300 h-full cursor-default relative">
              <div className="absolute top-6 right-8 text-4xl font-extrabold text-slate-800/50 group-hover:text-brand/20 transition-colors duration-300 select-none">
                02
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                We Build Your System
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                We design and implement a custom AI-powered system tailored to your workflows — not generic tools.
              </p>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={340} className="group flex flex-col bg-[#0c0f17] border border-[#1f293d] hover:border-brand/50 rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(14,179,186,0.15)] transition-all duration-300 h-full cursor-default relative">
              <div className="absolute top-6 right-8 text-4xl font-extrabold text-slate-800/50 group-hover:text-brand/20 transition-colors duration-300 select-none">
                03
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 mb-6 group-hover:border-brand/45 group-hover:bg-brand/20 transition-all duration-300">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors duration-300">
                You Save Time & Scale
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                Your operations run faster, with less manual work and lower costs — freeing your team to focus on growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 sm:py-28 bg-[#0a0d16]/30 border-t border-[#1a1f2e] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Real Impact
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted">
              Tangible results delivered through custom automated systems
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Impact 1 */}
            <Reveal delay={100} className="flex items-start gap-4 bg-[#0c0f17] border border-[#1f293d] rounded-2xl p-6 hover:border-brand/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">Data Efficiency</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Reduced manual data entry time by up to 80%
                </p>
              </div>
            </Reveal>

            {/* Impact 2 */}
            <Reveal delay={200} className="flex items-start gap-4 bg-[#0c0f17] border border-[#1f293d] rounded-2xl p-6 hover:border-brand/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">24/7 Availability</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Automated customer inquiries with 24/7 AI responses
                </p>
              </div>
            </Reveal>

            {/* Impact 3 */}
            <Reveal delay={300} className="flex items-start gap-4 bg-[#0c0f17] border border-[#1f293d] rounded-2xl p-6 hover:border-brand/40 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors duration-300 flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">Seamless Scaling</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Replaced repetitive workflows with fully automated systems
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <Reveal className="bg-gradient-to-br from-[#0c101c] to-[#05060b] border border-[#1f293d] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Background floating glow for CTA */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand/20 to-indigo-500/20 blur-3xl animate-float-glow" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-indigo-500/5 opacity-30 -z-20" />
          
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-brand mb-6 backdrop-blur-md relative z-10">
            Optimize & Scale
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4 relative z-10">
            Let’s Find Where You’re Losing Time
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 relative z-10 leading-relaxed">
            We’ll identify automation opportunities and show you exactly how to improve your operations.
          </p>
          <div className="relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.02] shadow-[0_0_20px_rgba(14,179,186,0.35)] hover:shadow-[0_0_35px_rgba(14,179,186,0.6)] transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-24 sm:py-28 bg-transparent border-t border-[#1a1f2e] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get Started Today
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-muted">
              Submit your project scope and our solution engineers will reach out to schedule a discovery call.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
