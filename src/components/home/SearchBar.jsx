export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
        어떤 기업의 정보가<br />궁금하신가요?
      </h2>
      <div className="relative">
        <input
          type="text"
          placeholder="기업명 또는 종목코드를 입력하세요"
          className="w-full bg-white border-2 border-transparent rounded-lg pl-6 pr-14 py-4 text-lg 
                     focus:ring-4 focus:ring-primary/30 focus:outline-none 
                     focus:border-primary shadow-lg-blue"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white rounded-md 
                           w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors">
          <span className="material-symbols-outlined text-1xl">search</span>
        </button>
      </div>
    </div>
  );
}
