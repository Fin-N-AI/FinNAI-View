export default function CompanyStats({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-card-light rounded-xl p-6 border border-border-light shadow-sm"
        >
          <p className="text-sm text-text-secondary-light">{item.label}</p>
          <p className="text-2xl font-bold mt-1">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
