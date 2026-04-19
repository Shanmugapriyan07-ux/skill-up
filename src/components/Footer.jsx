import logoo from "../assets/logoo.png";


export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-16 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6D4AFF] flex items-center justify-center">
             <img 
               src={logoo} 
               alt="Logo" 
               className="w-5 h-5 mb-0.5 ml-0.5 mt-0.5" 
             /> 
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300" style={{ fontFamily: "'Playfair Display', serif" }}>
            MindMates
          </span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
          © 2026 MindMates. All rights reserved. &nbsp;·&nbsp; Privacy Policy &nbsp;·&nbsp; Terms of Service
        </p>
      </div>
    </footer>
  );
}
