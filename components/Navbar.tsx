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
  const { lang, setLang } = useLanguage();
  const { theme } = useTheme();
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
            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3.5 py-1.5 rounded-xl border border-[var(--card-border-default)] hover:border-brand/40 text-xs font-semibold text-brand-muted bg-[var(--card-bg)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
          </div>

          {/* Mobile menu button & Language */}
          <div className="flex md:hidden items-center gap-3">
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
