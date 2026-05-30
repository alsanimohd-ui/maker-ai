import subprocess
import codecs

result = subprocess.run(['git', 'show', 'HEAD:app/page.tsx'], capture_output=True)
content = result.stdout.decode('utf-8')
lines = content.split('\n')

about_code = '\n'.join(lines[70:393])

full_file = '''"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = translations[lang];
  const isDark = theme === "dark";
  const isRtl = lang === "ar";

  const headingGradient = isDark
    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400"
    : "text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500";

  return (
    <div
      className="relative flex flex-col w-full min-h-screen overflow-x-hidden pt-10"
      dir={isRtl ? "rtl" : "ltr"}
    >
''' + about_code + '''
    </div>
  );
}
'''

with codecs.open('app/about/page.tsx', 'w', 'utf-8') as f:
    f.write(full_file)
