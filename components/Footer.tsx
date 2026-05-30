"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="mt-auto border-t border-brand-border bg-brand-card/30 backdrop-blur-md py-12 md:py-16 text-brand-muted transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column: Logo & Corporate Statement */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/assets/logo/logo-color.svg"
                alt="Maker AI Logo"
                className="h-8 w-auto object-contain"
                style={{ aspectRatio: "240/64" }} // Locked aspect ratio
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {t.footer_desc}
            </p>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer_nav_title}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {t.nav_home}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {t.nav_services}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {t.nav_contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Details & Direct Connect */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.footer_contact_title}
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@maker-ai.tech"
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-white transition-colors duration-200 font-semibold"
              >
                <svg
                  className="h-5 w-5 text-cyan-400"
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
        </div>

        {/* Bottom Row */}
        <div className="mt-12 border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>
            &copy; {currentYear} Maker AI. {t.footer_rights}
          </p>
          <p className="mt-4 md:mt-0">
            {t.footer_tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
