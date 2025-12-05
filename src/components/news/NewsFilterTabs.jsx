export default function NewsFilterTabs() {
  return (
    <div className="flex items-center border-b border-gray-200 dark:border-gray-700 mb-6">
      <button className="py-2 px-4 text-primary font-semibold border-b-2 border-primary">
        전체
      </button>
      <button className="py-2 px-4 text-gray-500 dark:text-gray-400 hover:text-primary">
        호재
      </button>
      <button className="py-2 px-4 text-gray-500 dark:text-gray-400 hover:text-primary">
        악재
      </button>
      <button className="py-2 px-4 text-gray-500 dark:text-gray-400 hover:text-primary">
        중립
      </button>
    </div>
  );
}
