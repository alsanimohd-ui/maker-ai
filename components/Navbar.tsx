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
    { name: t.nav_contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/assets/logo/logo-color.svg"
                alt="Maker AI Logo"
                className="h-10 w-auto"
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
                      : "text-brand-muted hover:text-white"
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
              className="px-3 py-1.5 rounded-lg border border-[#2d3748] hover:border-brand/40 text-xs font-semibold text-white bg-transparent transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(14,179,186,0.35)] transition-all duration-300"
            >
              {t.nav_book}
            </Link>
          </div>

          {/* Mobile menu button & Language Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-2.5 py-1 rounded-md border border-[#2d3748] text-xs font-semibold text-white transition-all duration-200"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-muted hover:bg-brand-card hover:text-white focus:outline-none"
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
        <div className="md:hidden border-b border-brand-border bg-background" id="mobile-menu">
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
                      ? "bg-brand-card text-brand"
                      : "text-brand-muted hover:bg-brand-card hover:text-white"
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
                className="flex w-full items-center justify-center rounded-xl border border-[#2d3748] py-3 text-base font-semibold text-white hover:border-brand/40 transition-all duration-300"
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-brand py-3 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(14,179,186,0.35)] transition-all duration-300"
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
