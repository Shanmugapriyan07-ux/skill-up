import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import logoo from "../assets/logoo.png";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#6D4AFF] flex items-center justify-center shadow-lg shadow-[#6D4AFF]/25">
           <div className="w-9 h-9 rounded-xl bg-[#6D4AFF] flex items-center justify-center shadow-lg shadow-[#6D4AFF]/25">
  {/* REMOVED THE SVG TAG COMPLETELY */}
  <img 
    src={logoo} 
    alt="Logo" 
    className="w-5 h-5 mb-0.5" 
  />
</div>
          </div>
          <span
            className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            MindMates
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            Privacy Policy
          </span>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
