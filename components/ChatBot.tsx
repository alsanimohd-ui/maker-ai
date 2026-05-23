"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  sender: "user" | "mi";
  text: string;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      sender: "mi",
      text: "Hey, I’m Mi.\nPart of the Maker AI team.\nWhat are you trying to improve or automate today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    const textToSend = inputValue.trim();
    if (!textToSend || isTyping) return;

    // Add user message
    const userMsgId = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    const userMessage: Message = {
      id: userMsgId,
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("https://vmi2868802.contaboserver.net/webhook/a846b5d4-9ff9-4de9-a49a-b160d3e3e3cd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      const miReply = data.reply || "Sorry, I received an empty response. Let's try again.";

      const miMsgId = Date.now().toString() + Math.random().toString(36).substring(2, 5);
      setMessages((prev) => [
        ...prev,
        {
          id: miMsgId,
          sender: "mi",
          text: miReply,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("ChatBot integration error:", error);
      const errMsgId = Date.now().toString() + Math.random().toString(36).substring(2, 5);
      setMessages((prev) => [
        ...prev,
        {
          id: errMsgId,
          sender: "mi",
          text: "I hit a snag connecting to my brain. Mind asking that again?",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window Container */}
      <div
        className={`w-96 max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] mb-4 flex flex-col bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border-default)] shadow-[0_20px_50px_rgba(15,23,42,0.05)] dark:shadow-none rounded-2xl overflow-hidden pointer-events-auto transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-6 pointer-events-none"
        }`}
      >
        {/* Subtle Ambient Glow Inside Window */}
        <div className="absolute top-1/2 left-1/2 -z-10 w-44 h-44 rounded-full bg-brand/8 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-[var(--navbar-bg)] backdrop-blur-md border-b border-[var(--card-border-default)]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand/10 to-indigo-500/10 border border-brand/30 flex items-center justify-center text-brand text-sm font-extrabold tracking-widest select-none shadow-sm">
                Mi
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                Mi
              </div>
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Automations Expert</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
            aria-label="Close Chat"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 flex flex-col scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 max-w-[85%] ${
                msg.sender === "user" ? "self-end justify-end flex-row-reverse" : "self-start justify-start"
              }`}
            >
              {msg.sender === "mi" && (
                <div className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand text-[10px] font-bold flex-shrink-0 select-none">
                  Mi
                </div>
              )}
              <div
                className={`p-3.5 text-sm leading-relaxed whitespace-pre-line rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-brand to-indigo-600 text-white font-medium rounded-br-none shadow-[0_4px_12px_rgba(14,179,186,0.15)]"
                    : "bg-[var(--chat-msg-bot-bg)] border border-[var(--chat-msg-bot-border)] text-[var(--chat-msg-bot-text)] rounded-bl-none shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-end gap-2 max-w-[85%] self-start animate-pulse">
              <div className="w-6 h-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand text-[10px] font-bold flex-shrink-0 select-none">
                Mi
              </div>
              <div className="bg-[var(--chat-msg-bot-bg)] border border-[var(--chat-msg-bot-border)] rounded-2xl rounded-bl-none px-4 py-3.5 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand/80 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-brand/80 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-brand/80 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[var(--navbar-bg)] backdrop-blur-md border-t border-[var(--card-border-default)] flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isTyping}
            placeholder={isTyping ? "Thinking..." : "Ask Mi anything..."}
            className="flex-grow bg-[var(--form-input-bg)] border border-[var(--form-input-border)] rounded-xl px-4 py-2.5 text-sm text-[var(--foreground)] placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-[var(--form-input-bg)] focus:border-brand focus:ring-4 focus:ring-brand/10 focus:shadow-[0_0_10px_rgba(14,179,186,0.08)] transition-all duration-300 disabled:opacity-50 placeholder:text-slate-400/80 dark:placeholder:text-slate-500/80"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand to-indigo-600 text-white hover:from-brand-hover hover:to-indigo-500 hover:scale-[1.03] disabled:opacity-40 disabled:hover:scale-100 flex items-center justify-center shadow-md shadow-brand/10 hover:shadow-lg transition-all duration-200 cursor-pointer"
            aria-label="Send Message"
          >
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-r from-brand to-indigo-600 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(14,179,186,0.35)] hover:shadow-[0_0_30px_rgba(14,179,186,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        <span className="transition-all duration-300">
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5.096-.813a8.985 8.985 0 003.078-1.3C19.007 17.52 20 15.362 20 13c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 2.12.825 4.05 2.172 5.5.347.373.498.887.412 1.393L6 21l2.678-.536c.394-.079.807.018 1.135.242A8.97 8.97 0 0012 21c.78 0 1.536-.1 2.257-.288" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
