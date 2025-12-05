export default function CompanyStats({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-card-light dark:bg-card-dark p-6 rounded-xl 
                     border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            {item.label}
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
