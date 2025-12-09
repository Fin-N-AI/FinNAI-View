export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
        어떤 기업의 정보가 궁금하신가요?
      </h2>

      <div className="relative">
        <input
          type="text"
          placeholder="기업명 또는 종목코드를 입력하세요"
          className="w-full bg-white border border-slate-200 rounded-full pl-6 pr-16 py-4 text-lg
                     shadow-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
}
