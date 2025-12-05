export default function CompanyHeader({ name, website, employees }) {
  return (
    <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{name}</h1>

          <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
            <a
              href={website}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-lg">link</span>
              <span>{website.replace("https://", "")}</span>
            </a>

            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-lg">groups</span>
              <span>{employees.toLocaleString()}명</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
