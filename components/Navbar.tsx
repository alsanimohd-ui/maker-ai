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
    { name: t.nav_workspace, href: "https://mi.maker-ai.tech" },
    { name: t.nav_contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#030307]/70 border-b border-cyan-500/10 transition-all duration-300">
      {/* Dynamic Glow Line Leak */}
      <div 
        className="bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent blur-md h-[2px] w-full absolute bottom-0 left-0"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with crisp, locked aspect ratio */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:scale-[1.01] transition-all duration-300"
            >
              <img
                src="/assets/logo/logo-color.svg"
                alt="Maker AI Logo"
                className="h-9 w-auto object-contain"
                style={{ aspectRatio: "240/64" }} // Locked aspect ratio
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isExternal = link.href.startsWith("http");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`text-sm font-medium transition-all duration-200 tracking-wide uppercase hover:text-cyan-400 ${
                    isActive
                      ? "text-cyan-450 font-bold"
                      : "text-slate-350"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA, Language Toggle, and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 bg-white/[0.01] transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '30s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M3 12h2.25m13.5 0H21M5.75 5.75l1.636 1.636m10.228 10.228l1.636 1.636M5.75 18.25l1.636-1.636m10.228-10.228l1.636-1.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3.5 py-1.5 rounded-xl border border-white/[0.08] hover:border-cyan-400/40 text-xs font-semibold text-slate-300 bg-white/[0.01] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
          </div>

          {/* Mobile menu button, Language & Theme Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-white/[0.08] text-slate-300 bg-white/[0.01] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M3 12h2.25m13.5 0H21M5.75 5.75l1.636 1.636m10.228 10.228l1.636 1.636M5.75 18.25l1.636-1.636m10.228-10.228l1.636-1.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-2.5 py-1 rounded-md border border-white/[0.08] text-xs font-semibold text-slate-350 bg-white/[0.01] hover:border-cyan-400/40 transition-all duration-200"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/[0.05] hover:text-white focus:outline-none"
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
        <div className="md:hidden border-b border-white/[0.05] bg-[#020205]/95 backdrop-blur-xl" id="mobile-menu">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isExternal = link.href.startsWith("http");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-white/[0.03] text-cyan-400"
                      : "text-slate-350 hover:bg-white/[0.02] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
