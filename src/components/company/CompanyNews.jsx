export default function CompanyNews({ news }) {
  return (
    <div className="bg-card-light p-8 rounded-xl shadow-sm border border-border-light">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">관련 뉴스</h2>
        <button className="px-4 py-2 text-sm bg-blue-100 text-primary rounded-lg hover:bg-blue-200">
          상세 뉴스 페이지 →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <NewsColumn title="호재" color="positive" list={news.good} />
        <NewsColumn title="악재" color="negative" list={news.bad} />
        <NewsColumn title="중립" color="neutral" list={news.neutral} />
      </div>
    </div>
  );
}

function NewsColumn({ title, color, list }) {

  // ✅ 제목에 따라 아이콘 자동 매핑
  const icon =
    title === "호재"
      ? "trending_up"
      : title === "악재"
      ? "trending_down"
      : "horizontal_rule";

  return (
    <div>
      <h3 className="flex items-center text-lg font-bold mb-4">
        <span className={`material-symbols-outlined mr-2 text-${color}`}>
          {icon}
        </span>
        {title}
      </h3>

      <ul className="space-y-2">
        {list.map((item, idx) => (
          <li key={idx}>
            <a
              className="flex justify-between items-center py-3 border-b border-border-light dark:border-border-dark group"
              href="#"
            >
              <div className="flex-1 min-w-0 pr-4">
                <p className="font-semibold text-text-primary-light dark:text-text-primary-dark line-clamp-1">
                  {item.title}
                </p>
                <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1 block">
                  {item.date}
                </span>
              </div>

              <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 transition shrink-0">
                chevron_right
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
