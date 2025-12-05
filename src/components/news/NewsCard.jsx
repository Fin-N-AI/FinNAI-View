export default function NewsCard({ item }) {
  const sentimentColor =
    item.sentiment === "positive"
      ? "text-red-500"
      : item.sentiment === "negative"
      ? "text-blue-500"
      : "text-gray-500";

  const sentimentIcon =
    item.sentiment === "positive"
      ? "trending_up"
      : item.sentiment === "negative"
      ? "trending_down"
      : "horizontal_rule";

  const sentimentText =
    item.sentiment === "positive"
      ? "호재"
      : item.sentiment === "negative"
      ? "악재"
      : "중립";

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all">
      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
        {item.title}
      </h3>

      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500 dark:text-gray-400">
          {item.publisher} • {item.date}
        </span>

        <div className={`flex items-center gap-1 font-semibold ${sentimentColor}`}>
          <span className="material-symbols-outlined text-base">
            {sentimentIcon}
          </span>
          <span>{sentimentText}</span>
        </div>
      </div>
    </div>
  );
}
