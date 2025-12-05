export default function PopularTabs() {
  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      <button className="bg-primary text-white font-bold py-2 px-6 rounded-full transition-colors">
        인기
      </button>
      <button className="bg-white text-gray-600 font-bold py-2 px-6 rounded-full 
                         hover:bg-gray-100 transition-colors">
        검색
      </button>
    </div>
  );
}
