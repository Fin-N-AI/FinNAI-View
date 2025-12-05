export default function CompanyNewsBanner({ company }) {
  return (
    <a
      href="#"
      className="group bg-primary text-white p-8 rounded-xl flex justify-between items-center 
                 hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-primary/20"
    >
      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-3 rounded-full">
          <span className="material-symbols-outlined text-3xl">newspaper</span>
        </div>

        <div>
          <h2 className="text-xl font-bold">{company}의 최신 뉴스가 궁금하신가요?</h2>
          <p className="text-blue-100">관련 뉴스를 모두 확인하고 시장의 흐름을 파악하세요.</p>
        </div>
      </div>

      <span className="material-symbols-outlined text-4xl transform 
                       group-hover:translate-x-2 transition-transform">
        arrow_forward_ios
      </span>
    </a>
  );
}
