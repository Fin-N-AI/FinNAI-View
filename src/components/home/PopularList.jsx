export default function PopularList({ title, items }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-4">{title}</h2>
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li
              key={item}
              className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold text-primary w-6 text-center">
                  {idx + 1}
                </span>
                <span className="font-semibold text-gray-800">{item}</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                chevron_right
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
