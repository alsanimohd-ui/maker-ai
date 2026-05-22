import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-brand-border bg-transparent py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/assets/logo/logo-white.svg"
                alt="Maker AI Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-brand-muted max-w-xs leading-relaxed">
              We design and implement custom artificial intelligence solutions to automate operations, optimize workflows, and drive business growth.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-brand-muted hover:text-brand transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-brand-muted hover:text-brand transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-brand-muted hover:text-brand transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct Connect */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@maker-ai.tech"
                className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors duration-200"
              >
                <svg
                  className="h-5 w-5 text-brand"
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

        <div className="mt-12 border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-brand-muted">
            &copy; {currentYear} Maker AI. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-xs text-brand-muted">
            Building intelligent business solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
