"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI Automation",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const data = {
      "Your Name": formData.name,
      "Business Email": formData.email,
      "Company Name": formData.company,
      "Service Interested": formData.service,
      "Project Requirements": formData.message,
    };

    try {
      const res = await fetch("https://vmi2868802.contaboserver.net/webhook/d6ed453a-e0ca-4f6f-82e2-de8efba97172", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "AI Automation",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(t.form_success_desc); // Fallback to a failure message translated dynamically
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(lang === "en" 
        ? "An error occurred while submitting the form. Please try again later."
        : "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى لاحقًا."
      );
    }
  };

  return (
    <div className="relative group/form w-full max-w-2xl mx-auto">
      {/* Premium Outer Gradient Glow Backdrop */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#0eb3ba]/20 via-indigo-500/10 to-blue-500/20 blur-2xl opacity-40 group-hover/form:opacity-85 transition-opacity duration-700 pointer-events-none" />

      <div className="relative w-full bg-white/85 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_60px_rgba(14,179,186,0.1)] hover:border-brand/40 transition-all duration-500">
        {status === "success" ? (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand/10 text-brand mb-6 animate-bounce">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">{t.form_success_title}</h3>
            <p className="text-slate-600 mb-8 font-medium max-w-md mx-auto">
              {t.form_success_desc}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2.5 rounded-xl border border-slate-200 hover:border-brand/40 text-sm font-semibold text-brand hover:text-brand-hover transition-colors duration-200 cursor-pointer"
            >
              {t.form_success_btn}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.form_name_label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/90 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 focus:shadow-[0_0_15px_rgba(14,179,186,0.1)] transition-all duration-300 placeholder:text-slate-400/80"
                  placeholder={t.form_name_placeholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.form_email_label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/90 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 focus:shadow-[0_0_15px_rgba(14,179,186,0.1)] transition-all duration-300 placeholder:text-slate-400/80"
                  placeholder={t.form_email_placeholder}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.form_company_label}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/90 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 focus:shadow-[0_0_15px_rgba(14,179,186,0.1)] transition-all duration-300 placeholder:text-slate-400/80"
                  placeholder={t.form_company_placeholder}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  {t.form_service_label}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/90 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 focus:shadow-[0_0_15px_rgba(14,179,186,0.1)] transition-all duration-300"
                >
                  <option value="AI Automation" className="bg-white text-slate-800">{t.form_service_opt1}</option>
                  <option value="AI Chatbots" className="bg-white text-slate-800">{t.form_service_opt2}</option>
                  <option value="Cloud & DevOps" className="bg-white text-slate-800">{t.form_service_opt3}</option>
                  <option value="Smart Systems" className="bg-white text-slate-800">{t.form_service_opt4}</option>
                  <option value="Other" className="bg-white text-slate-800">{t.form_service_opt5}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {t.form_msg_label}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-white/90 border border-slate-200/70 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 focus:shadow-[0_0_15px_rgba(14,179,186,0.1)] transition-all duration-300 resize-none placeholder:text-slate-400/80"
                placeholder={t.form_msg_placeholder}
              />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand to-indigo-600 px-8 py-4 text-base font-bold text-white hover:from-brand-hover hover:to-indigo-500 hover:scale-[1.01] shadow-[0_4px_20px_rgba(14,179,186,0.2)] hover:shadow-[0_4px_30px_rgba(14,179,186,0.35)] disabled:opacity-50 transition-all duration-300 cursor-pointer"
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t.form_btn_submitting}
                </span>
              ) : (
                t.form_btn_submit
              )}
            </button>
          </form>
        )}

        {/* Quick Contacts Footer in the Form */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm font-medium text-slate-500 mb-4">{t.contact_direct_title}</p>
          <div className="flex items-center justify-center">
            <a
              href="mailto:info@maker-ai.tech"
              className="group/mail flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 border border-slate-200 hover:border-brand/45 hover:bg-brand/5 rounded-xl text-sm text-slate-700 hover:text-brand hover:shadow-md hover:shadow-indigo-50 transition-all duration-300 font-semibold"
            >
              <svg
                className="h-4 w-4 text-brand group-hover/mail:scale-110 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
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
    </div>
  );
}
