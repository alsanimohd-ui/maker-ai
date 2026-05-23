"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const navLinks = [
    { name: t.nav_home, href: "/" },
    { name: t.nav_services, href: "/services" },
    { name: t.nav_use_cases, href: "/#use-cases" },
    { name: t.nav_how_it_works, href: "/#how-it-works" },
    { name: t.nav_contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(15,23,42,0.03)] transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo inside small premium dark glass pill */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-950/90 hover:bg-black border border-slate-900 rounded-full shadow-[0_4px_15px_rgba(15,23,42,0.18)] hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src="/assets/logo/logo-white.svg"
                alt="Maker AI Logo"
                className="h-7 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-brand"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-brand/40 text-xs font-semibold text-slate-700 bg-white/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand to-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:from-brand-hover hover:to-blue-500 hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(14,179,186,0.25)] transition-all duration-300"
            >
              {t.nav_book}
            </Link>
          </div>

          {/* Mobile menu button & Language Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-2.5 py-1 rounded-md border border-slate-200 text-xs font-semibold text-slate-700 hover:border-brand/40 transition-all duration-200"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md" id="mobile-menu">
          <div className="space-y-1 px-2 pb-4 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-slate-50 text-brand"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 px-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setLang(lang === "en" ? "ar" : "en");
                  setIsOpen(false);
                }}
                className="flex w-full items-center justify-center rounded-xl border border-slate-200 py-3 text-base font-semibold text-slate-700 hover:border-brand/40 hover:bg-slate-50 transition-all duration-300"
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand to-blue-600 py-3 text-base font-bold text-white hover:from-brand-hover hover:to-blue-500 hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(14,179,186,0.25)] transition-all duration-300"
              >
                {t.nav_book}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
