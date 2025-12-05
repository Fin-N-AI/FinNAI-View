import NewsSentiment from "./NewsSentiment";
import NewsSummary from "./NewsSummary";

export default function NewsDetailPanel() {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
            차세대 폴더블폰 디자인 유출, 기대감 증폭
          </h2>

          <a
            href="#"
            className="text-sm text-primary flex items-center gap-1 hover:underline"
          >
            <span>더버지 • 2023.10.23</span>
            <span className="material-symbols-outlined text-base">open_in_new</span>
          </a>
        </div>

        <NewsSentiment />

        <NewsSummary />

        <div className="flex items-center gap-4">
          <button className="flex-grow bg-primary text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
            <span className="material-symbols-outlined">description</span>
            <span>원문 보기</span>
          </button>

          <button className="flex-shrink-0 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
              share
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
