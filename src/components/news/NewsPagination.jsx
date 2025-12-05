export default function NewsPagination() {
  return (
    <nav className="flex justify-center items-center gap-2">
      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>

      <button className="w-10 h-10 rounded-full bg-primary text-white font-bold">
        1
      </button>

      <button className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 font-bold">
        2
      </button>
      <button className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 font-bold">
        3
      </button>

      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>
    </nav>
  );
}
