export function InfoList({ items }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="w-5 h-5 rounded-full bg-[#6D4AFF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF]" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoCard({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
      {title && (
        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{title}</p>
      )}
      <div className="text-sm text-gray-500 dark:text-gray-400">{children}</div>
    </div>
  );
}

export function AlertBox({ type = "info", children }) {
  const styles = {
    info: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300",
    warning: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900 text-amber-700 dark:text-amber-300",
    success: "bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900 text-green-700 dark:text-green-300",
    purple: "bg-[#6D4AFF]/5 dark:bg-[#6D4AFF]/10 border-[#6D4AFF]/15 text-[#6D4AFF] dark:text-[#9D8AFF]",
  };
  return (
    <div className={`rounded-xl border p-4 text-sm ${styles[type]}`}>
      {children}
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#6D4AFF]/10 text-[#6D4AFF] mr-1.5 mb-1.5">
      {children}
    </span>
  );
}
