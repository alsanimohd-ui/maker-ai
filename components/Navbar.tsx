"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { theme, setTheme, toggleTheme } = useTheme();
  const t = translations[lang];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav_home,      href: "/" },
    { name: t.nav_about,     href: "/about" },
    { name: t.nav_services,  href: "/services" },
    { name: t.nav_workspace, href: "https://mi.maker-ai.tech", external: true },
    { name: t.nav_contact,   href: "/contact" },
  ];

  return (
    <header 
      className={`navbar-neon-glow fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-premium border-b border-[var(--navbar-border)] ${
        isScrolled 
          ? "bg-[var(--navbar-bg)]/95 backdrop-blur-xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.35)]"
          : "bg-[var(--navbar-bg)]/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ease-premium ${isScrolled ? "h-16" : "h-20"}`}>
          {/* Logo with crisp, locked aspect ratio */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:scale-[1.01] transition-all duration-300"
            >
              <img
                src={theme === "dark" ? "/assets/logo/logo-white.svg" : "/assets/logo/logo-dark.svg"}
                alt="Maker AI Logo"
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-8" : "h-9"}`}
                style={{ aspectRatio: "240/64" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isExternal = link.href.startsWith("http");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`text-sm font-medium transition-all duration-200 tracking-wide uppercase whitespace-nowrap hover:text-brand-hover ${
                    isActive
                      ? "text-brand font-bold"
                      : "text-brand-muted"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA, Language Toggle, and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Desktop Theme Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="p-2.5 rounded-xl border border-[var(--card-border-default)] hover:border-brand/40 text-brand-muted bg-[var(--card-bg)] transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
                aria-label="Theme Menu"
              >
                {theme === "dark" && (
                  <svg className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '30s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M3 12h2.25m13.5 0H21M5.75 5.75l1.636 1.636m10.228 10.228l1.636 1.636M5.75 18.25l1.636-1.636m10.228-10.228l1.636-1.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )}
                {theme === "light" && (
                  <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
                {theme === "parchment" && (
                  <svg className="w-4 h-4 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a2.25 2.25 0 113.182 3.182l-9.37 9.39a1.5 1.5 0 01-1.06.44h-2.12a.75.75 0 01-.75-.75v-2.12a1.5 1.5 0 01.44-1.06z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25l3 3" />
                  </svg>
                )}
                {theme === "nordic" && (
                  <svg className="w-4 h-4 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3l4 4M12 21l-4-4M3 12l4 4M21 12l-4-4" />
                  </svg>
                )}

                {theme === "market" && (
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V21m-9-3h18m-18-6L12 3l9 9M3 12v9a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 21v-9" />
                  </svg>
                )}
                {theme === "symphony" && (
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 0v15m0-15l-10.5 3m0 0v15m0-15v15M9 18a3 3 0 11-6 0 3 3 0 016 0zm10.5-3a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>

              {themeMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setThemeMenuOpen(false)} />
                  <div className="absolute right-0 mt-2 w-36 rounded-xl border border-[var(--card-border-default)] bg-[var(--card-bg)] backdrop-blur-xl shadow-xl z-50 py-1.5 animate-fadeIn">
                    <button
                      onClick={() => { setTheme("dark"); setThemeMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-brand/10 transition-colors duration-150 cursor-pointer ${theme === "dark" ? "text-brand font-semibold" : "text-brand-muted"}`}
                    >
                      <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M3 12h2.25m13.5 0H21M5.75 5.75l1.636 1.636m10.228 10.228l1.636 1.636M5.75 18.25l1.636-1.636m10.228-10.228l1.636-1.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                      Dark
                    </button>
                    <button
                      onClick={() => { setTheme("light"); setThemeMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-brand/10 transition-colors duration-150 cursor-pointer ${theme === "light" ? "text-brand font-semibold" : "text-brand-muted"}`}
                    >
                      <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                      </svg>
                      Light
                    </button>
                    <button
                      onClick={() => { setTheme("parchment"); setThemeMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-brand/10 transition-colors duration-150 cursor-pointer ${theme === "parchment" ? "text-brand font-semibold" : "text-brand-muted"}`}
                    >
                      <svg className="w-3.5 h-3.5 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a2.25 2.25 0 113.182 3.182l-9.37 9.39a1.5 1.5 0 01-1.06.44h-2.12a.75.75 0 01-.75-.75v-2.12a1.5 1.5 0 01.44-1.06z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25l3 3" />
                      </svg>
                      Parchment
                    </button>
                    <button
                      onClick={() => { setTheme("nordic"); setThemeMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-brand/10 transition-colors duration-150 cursor-pointer ${theme === "nordic" ? "text-brand font-semibold" : "text-brand-muted"}`}
                    >
                      <svg className="w-3.5 h-3.5 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3l4 4M12 21l-4-4M3 12l4 4M21 12l-4-4" />
                      </svg>
                      Nordic
                    </button>

                    <button
                      onClick={() => { setTheme("market"); setThemeMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-brand/10 transition-colors duration-150 cursor-pointer ${theme === "market" ? "text-brand font-semibold" : "text-brand-muted"}`}
                    >
                      <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V21m-9-3h18m-18-6L12 3l9 9M3 12v9a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 21v-9" />
                      </svg>
                      Market
                    </button>
                    <button
                      onClick={() => { setTheme("symphony"); setThemeMenuOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-brand/10 transition-colors duration-150 cursor-pointer ${theme === "symphony" ? "text-brand font-semibold" : "text-brand-muted"}`}
                    >
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 0v15m0-15l-10.5 3m0 0v15m0-15v15M9 18a3 3 0 11-6 0 3 3 0 016 0zm10.5-3a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Symphony
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3.5 py-1.5 rounded-xl border border-[var(--card-border-default)] hover:border-brand/40 text-xs font-semibold text-brand-muted bg-[var(--card-bg)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
          </div>

          {/* Mobile menu button, Language & Theme Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--card-border-default)] text-brand-muted bg-[var(--card-bg)] flex items-center justify-center cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" && (
                <svg className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '30s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M3 12h2.25m13.5 0H21M5.75 5.75l1.636 1.636m10.228 10.228l1.636 1.636M5.75 18.25l1.636-1.636m10.228-10.228l1.636-1.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
              {theme === "light" && (
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
              {theme === "parchment" && (
                <svg className="w-4 h-4 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a2.25 2.25 0 113.182 3.182l-9.37 9.39a1.5 1.5 0 01-1.06.44h-2.12a.75.75 0 01-.75-.75v-2.12a1.5 1.5 0 01.44-1.06z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25l3 3" />
                </svg>
              )}
              {theme === "nordic" && (
                <svg className="w-4 h-4 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3l4 4M12 21l-4-4M3 12l4 4M21 12l-4-4" />
                </svg>
              )}

              {theme === "market" && (
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75V21m-9-3h18m-18-6L12 3l9 9M3 12v9a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 21v-9" />
                </svg>
              )}
              {theme === "symphony" && (
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 0v15m0-15l-10.5 3m0 0v15m0-15v15M9 18a3 3 0 11-6 0 3 3 0 016 0zm10.5-3a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-2.5 py-1 rounded-md border border-[var(--card-border-default)] text-xs font-semibold text-brand-muted bg-[var(--card-bg)] hover:border-brand/40 transition-all duration-200"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-muted hover:bg-brand/10 hover:text-brand focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
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
        <div className={`md:hidden border-b border-[var(--card-border-default)] bg-[var(--background)]/95 backdrop-blur-xl ${isScrolled ? "rounded-b-2xl" : ""}`} id="mobile-menu">
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
                      ? "bg-brand/10 text-brand"
                      : "text-brand-muted hover:bg-brand/5 hover:text-brand"
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
