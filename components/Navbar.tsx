"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang];

  const navLinks = [
    { name: t.nav_home, href: "/" },
    { name: t.nav_services, href: "/services" },
    { name: t.nav_use_cases, href: "/#use-cases" },
    { name: t.nav_how_it_works, href: "/#how-it-works" },
    { name: t.nav_contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--navbar-bg)] backdrop-blur-xl shadow-[var(--navbar-shadow)] transition-all duration-300 navbar-neon-glow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo inside small premium glass pill */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3.5 py-2 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-slate-100/80 dark:hover:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.03)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:scale-[1.01] transition-all duration-300"
            >
              <img
                src={theme === "dark" ? "/assets/logo/logo-white.svg" : "/assets/logo/logo-dark.svg"}
                alt="Maker AI Logo"
                className="h-8 w-auto"
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
                      : "text-slate-600 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/60 hover:border-brand/45 text-slate-600 dark:text-slate-300 bg-white/60 dark:bg-slate-900/40 transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_2px_8px_rgba(15,23,42,0.02)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg className="w-4.5 h-4.5 text-amber-500 animate-spin" style={{ animationDuration: '30s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M3 12h2.25m13.5 0H21M5.75 5.75l1.636 1.636m10.228 10.228l1.636 1.636M5.75 18.25l1.636-1.636m10.228-10.228l1.636-1.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand/40 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-900/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
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
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-900/40 transition-all duration-200 flex items-center justify-center cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M3 12h2.25m13.5 0H21M5.75 5.75l1.636 1.636m10.228 10.228l1.636 1.636M5.75 18.25l1.636-1.636m10.228-10.228l1.636-1.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-350 hover:border-brand/40 transition-all duration-200"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white focus:outline-none"
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
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-[var(--navbar-bg)] backdrop-blur-xl" id="mobile-menu">
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
                      ? "bg-slate-50 dark:bg-slate-900 text-brand"
                      : "text-slate-600 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
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
                className="flex w-full items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 hover:border-brand/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300"
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
