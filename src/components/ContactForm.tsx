"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
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
        setErrorMessage("Submission failed. Please check your inputs and try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("An error occurred while submitting the form. Please try again later.");
    }
  };


  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0c0f17] border border-[#1f293d] rounded-2xl p-6 sm:p-8 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-brand/35 transition-all duration-300">
      {status === "success" ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-4">
            <svg
              className="w-8 h-8"
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
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-slate-300 mb-6 font-medium">
            Thank you for reaching out. We will review your project details and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm font-semibold text-brand hover:text-brand-hover transition-colors duration-200"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#05070a] border border-[#1f293d] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand/80 focus:ring-1 focus:ring-brand/40 transition-all duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Business Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#05070a] border border-[#1f293d] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand/80 focus:ring-1 focus:ring-brand/40 transition-all duration-200"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#05070a] border border-[#1f293d] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand/80 focus:ring-1 focus:ring-brand/40 transition-all duration-200"
                placeholder="Company Inc."
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#05070a] border border-[#1f293d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand/80 focus:ring-1 focus:ring-brand/40 transition-all duration-200"
              >
                <option value="AI Automation" className="bg-[#0c0f17]">AI Automation</option>
                <option value="AI Chatbots" className="bg-[#0c0f17]">AI Chatbots</option>
                <option value="Cloud & DevOps" className="bg-[#0c0f17]">Cloud & DevOps</option>
                <option value="Smart Systems" className="bg-[#0c0f17]">Smart Systems</option>
                <option value="Other" className="bg-[#0c0f17]">Other Consultation</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Project Brief & Requirements
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-[#05070a] border border-[#1f293d] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand/80 focus:ring-1 focus:ring-brand/40 transition-all duration-200 resize-none"
              placeholder="Tell us about the processes you want to automate or systems you need built..."
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-bold text-[#05070a] hover:bg-brand-hover hover:scale-[1.02] shadow-[0_0_20px_rgba(14,179,186,0.35)] hover:shadow-[0_0_30px_rgba(14,179,186,0.6)] disabled:opacity-50 transition-all duration-300 cursor-pointer"
          >
            {status === "submitting" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-[#05070a]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing Request...
              </span>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </form>
      )}

      {/* Quick Contacts Footer in the Form */}
      <div className="mt-8 pt-6 border-t border-[#1f293d] text-center">
        <p className="text-sm text-brand-muted mb-4">Or connect with us directly</p>
        <div className="flex items-center justify-center">
          <a
            href="mailto:contact@makerai.com"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 border border-[#1f293d] hover:border-brand/50 hover:bg-brand/5 rounded-lg text-sm text-white hover:text-brand hover:shadow-[0_0_15px_rgba(14,179,186,0.15)] transition-all duration-300 font-semibold"
          >
            <svg
              className="h-4 w-4 text-brand"
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
            contact@makerai.com
          </a>
        </div>
      </div>
    </div>
  );
}
