export default function CompanyOverview({ description }) {
  return (
    <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm 
                    border border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">기업 개요</h2>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
        {description}
      </p>
    </div>
  );
}
