export default function Section({ id, icon, title, children, tinted = false }) {
  return (
    <section
      id={id}
      className={`py-12 px-6 sm:px-8 rounded-2xl mb-3 scroll-mt-28 transition-all ${
        tinted
          ? "bg-gray-50 dark:bg-gray-900/50"
          : "bg-white dark:bg-transparent"
      }`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#6D4AFF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          {icon}
        </div>
        <h2
          className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pt-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
      </div>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4 text-[15px]">
        {children}
      </div>
    </section>
  );
}
