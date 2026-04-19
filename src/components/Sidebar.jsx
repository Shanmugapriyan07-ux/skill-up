import { useState, useEffect } from "react";
import { SECTIONS } from "../data/sections";

export default function Sidebar() {
  const [active, setActive] = useState("introduction");
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const copyLink = (id) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-hide">
        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 px-3">
          On this page
        </p>
        <nav className="space-y-0.5">
          {SECTIONS.map(({ id, label }) => (
            <div
              key={id}
              className="group flex items-center justify-between rounded-lg pr-1"
            >
              <button
                onClick={() => scrollTo(id)}
                className={`flex-1 text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  active === id
                    ? "bg-[#6D4AFF]/10 text-[#6D4AFF] font-semibold"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/60"
                }`}
              >
                <span className="flex items-center gap-2">
                  {active === id && (
                    <span className="w-1 h-1 rounded-full bg-[#6D4AFF] flex-shrink-0" />
                  )}
                  {label}
                </span>
              </button>
              <button
                onClick={() => copyLink(id)}
                className="opacity-0 group-hover:opacity-100 p-1.5 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all"
                title="Copy link"
              >
                {copied === id ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                )}
              </button>
            </div>
          ))}
        </nav>

        <div className="mt-6 mx-3 p-3 rounded-xl bg-gradient-to-br from-[#6D4AFF]/10 to-[#6D4AFF]/5 border border-[#6D4AFF]/15">
          <p className="text-xs text-[#6D4AFF] font-semibold mb-1">Last updated</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">April 18, 2026</p>
        </div>
      </div>
    </aside>
  );
}
