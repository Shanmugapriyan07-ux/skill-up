export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#6D4AFF]/5 via-white to-white dark:from-[#6D4AFF]/10 dark:via-gray-950 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#6D4AFF]/10 text-[#6D4AFF] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] animate-pulse" />
            Legal Document
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Privacy Policy
            <span className="block text-[#6D4AFF]">for MindMates</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            We believe privacy is a right, not a feature. This document explains exactly
            what data we collect, why we collect it, and how you stay in full control.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Effective: April 18, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              GDPR & DPDPA Compliant
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Version 1.0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
