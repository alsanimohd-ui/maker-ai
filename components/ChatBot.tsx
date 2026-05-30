"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

interface Message {
  id: string;
  sender: "user" | "mi";
  text: string;
  timestamp: Date;
}

// Welcome message shown on auto-open — high-converting, personalised
const WELCOME_MESSAGE = {
  en: "👋 Hey, I'm **Mi** — Maker AI's automation assistant.\n\nI can help you identify bottlenecks, scope a project, or simply answer questions about our services.\n\nWhat's the biggest operational challenge slowing your business down right now?",
  ar: "👋 مرحباً، أنا **Mi** — مساعد أتمتة Maker AI.\n\nيمكنني مساعدتك في تحديد نقاط الضعف التشغيلية، تحديد نطاق المشاريع، أو الإجابة على أي أسئلة حول خدماتنا.\n\nما هو أكبر تحدٍّ تشغيلي يُعيق عملك الآن؟",
};

export default function ChatBot() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showWelcomeBadge, setShowWelcomeBadge] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      sender: "mi",
      text: WELCOME_MESSAGE[lang as "en" | "ar"] ?? WELCOME_MESSAGE.en,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ── Auto-scroll to latest message ──
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // ── Auto-open after 1.5 s on first mount ──
  useEffect(() => {
    if (hasAutoOpened) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  // ── Show pulsing badge when closed after auto-open ──
  useEffect(() => {
    if (hasAutoOpened && !isOpen) {
      const timer = setTimeout(() => setShowWelcomeBadge(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowWelcomeBadge(false);
    }
  }, [hasAutoOpened, isOpen]);

  const handleSend = async () => {
    const textToSend = inputValue.trim();
    if (!textToSend || isTyping) return;

    const userMsgId = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setMessages((prev) => [...prev, { id: userMsgId, sender: "user", text: textToSend, timestamp: new Date() }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("https://vmi2868802.contaboserver.net/webhook/a846b5d4-9ff9-4de9-a49a-b160d3e3e3cd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      const miReply = data.reply || "Sorry, I received an empty response. Let's try again.";
      setMessages((prev) => [...prev, { id: Date.now().toString() + "_mi", sender: "mi", text: miReply, timestamp: new Date() }]);
    } catch (error) {
      console.error("ChatBot integration error:", error);
      setMessages((prev) => [...prev, { id: Date.now().toString() + "_err", sender: "mi", text: "I hit a snag connecting to my brain. Mind asking that again?", timestamp: new Date() }]);
    } finally {
      setIsTyping(false);
    }
  };

  const t = translations[lang as "en" | "ar"];
  const placeholder = lang === "ar" ? "اسأل Mi أي شيء..." : "Ask Mi anything...";
  const thinkingText = lang === "ar" ? "يفكر..." : "Thinking...";

  return (
    <div
      className={`fixed bottom-6 z-50 flex flex-col pointer-events-none ${
        lang === "ar" ? "left-6 items-start" : "right-6 items-end"
      }`}
    >

      {/* ════════════════════════════════════════════
          CHAT WINDOW
      ════════════════════════════════════════════ */}
      <div
        className={`w-[22rem] sm:w-96 max-w-[calc(100vw-2rem)] mb-4 flex flex-col rounded-2xl overflow-hidden pointer-events-auto
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8 pointer-events-none"}
        `}
        style={{
          height: isOpen ? "540px" : "0px",
          maxHeight: "calc(100vh - 8rem)",
          background: isDark
            ? "rgba(8, 12, 22, 0.92)"
            : "rgba(255, 255, 255, 0.94)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          border: `1px solid ${isDark ? "rgba(14,179,186,0.18)" : "rgba(14,179,186,0.22)"}`,
          boxShadow: isDark
            ? "0 24px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(14,179,186,0.08), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "0 20px 50px -10px rgba(15,23,42,0.15), 0 0 0 1px rgba(14,179,186,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        {/* Inner ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full pointer-events-none -z-0"
          style={{ background: "radial-gradient(ellipse at top, rgba(14,179,186,0.06), transparent 70%)" }}
          aria-hidden="true"
        />

        {/* ── Header ── */}
        <div
          className="relative z-10 flex items-center justify-between px-4 py-3.5 border-b"
          style={{ borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(14,179,186,0.12)" }}
        >
          <div className="flex items-center gap-3">
            {/* Mi Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold tracking-widest select-none"
                style={{
                  background: "linear-gradient(135deg, rgba(14,179,186,0.15) 0%, rgba(99,102,241,0.12) 100%)",
                  border: "1.5px solid rgba(14,179,186,0.4)",
                  color: "#0eb3ba",
                  boxShadow: "0 0 16px rgba(14,179,186,0.2)",
                }}
              >
                Mi
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[var(--background)] animate-pulse" />
            </div>
            <div>
              <div className={`text-sm font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>Mi</div>
              <div className="text-[11px] font-semibold text-cyan-500">Automations Expert · Online</div>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className={`p-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
              isDark ? "text-slate-400 hover:text-white hover:bg-white/[0.06]" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            }`}
            aria-label="Close Chat"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Messages Body ── */}
        <div className="relative z-10 flex-grow overflow-y-auto p-4 space-y-4 flex flex-col">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 max-w-[88%] ${
                msg.sender === "user" ? "self-end justify-end flex-row-reverse" : "self-start"
              }`}
            >
              {/* Mi avatar on bot messages */}
              {msg.sender === "mi" && (
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 select-none"
                  style={{
                    background: "rgba(14,179,186,0.1)",
                    border: "1px solid rgba(14,179,186,0.25)",
                    color: "#0eb3ba",
                  }}
                >
                  Mi
                </div>
              )}

              {/* Bubble */}
              <div
                className={`p-3.5 text-sm leading-relaxed whitespace-pre-line rounded-2xl ${
                  msg.sender === "user"
                    ? "rounded-br-none text-white font-medium"
                    : "rounded-bl-none"
                }`}
                style={
                  msg.sender === "user"
                    ? {
                        background: "linear-gradient(135deg, #0eb3ba 0%, #6366f1 100%)",
                        boxShadow: "0 4px 14px rgba(14,179,186,0.25)",
                      }
                    : {
                        background: isDark ? "rgba(14, 22, 42, 0.7)" : "rgba(241, 245, 249, 0.9)",
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(14,179,186,0.12)"}`,
                        color: isDark ? "#e2e8f0" : "#1e293b",
                        boxShadow: isDark ? "none" : "0 2px 8px rgba(15,23,42,0.06)",
                      }
                }
              >
                {/* Render **bold** markdown-like syntax */}
                {msg.text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={i}>{part.slice(2, -2)}</strong>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-end gap-2 max-w-[85%] self-start">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                style={{ background: "rgba(14,179,186,0.1)", border: "1px solid rgba(14,179,186,0.25)", color: "#0eb3ba" }}
              >
                Mi
              </div>
              <div
                className="px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5"
                style={{
                  background: isDark ? "rgba(14,22,42,0.7)" : "rgba(241,245,249,0.9)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(14,179,186,0.12)"}`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* ── Input Bar ── */}
        <div
          className="relative z-10 p-3.5 flex items-center gap-2 border-t"
          style={{ borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(14,179,186,0.1)" }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isTyping}
            placeholder={isTyping ? thinkingText : placeholder}
            className="flex-grow rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 disabled:opacity-50"
            style={{
              background: isDark ? "rgba(255,255,255,0.05)" : "#ffffff",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.09)" : "rgba(14,179,186,0.2)"}`,
              color: isDark ? "#f1f5f9" : "#0a0f1e",
            }}
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.05] active:scale-95"
            style={{ background: "linear-gradient(135deg, #0eb3ba 0%, #6366f1 100%)", boxShadow: "0 4px 14px rgba(14,179,186,0.3)" }}
            aria-label="Send"
          >
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          FLOATING LAUNCHER BUTTON
      ════════════════════════════════════════════ */}
      <div className="relative pointer-events-auto flex-shrink-0">

        {/* Pulsing unread-badge (shown when closed after auto-open) */}
        {showWelcomeBadge && !isOpen && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[var(--background)] animate-ping z-10"
            aria-hidden="true"
          />
        )}
        {showWelcomeBadge && !isOpen && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[var(--background)] z-10"
            aria-hidden="true"
          />
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
          style={{
            background: isOpen
              ? "linear-gradient(135deg, rgba(14,179,186,0.9) 0%, rgba(99,102,241,0.8) 100%)"
              : "linear-gradient(135deg, #0eb3ba 0%, #6366f1 100%)",
            boxShadow: isOpen
              ? "0 4px 20px rgba(14,179,186,0.45), inset 0 1px 0 rgba(255,255,255,0.15)"
              : "0 6px 32px rgba(14,179,186,0.5), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
          aria-label={isOpen ? "Close Chat" : "Chat with Mi"}
        >
          <span className="transition-all duration-300">
            {isOpen ? (
              /* Close icon */
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Branded chat icon with lightning bolt inner */
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
