export default function HeroSection() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-8 text-center mb-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">
        FinNAI에 오신 것을 환영합니다!
      </h1>
      <p className="text-slate-600 max-w-3xl mx-auto">
        FinNAI는 AI 기반 금융 정보 분석 플랫폼입니다. 복잡한 기업 데이터를 쉽게
        이해하고, AI 분석을 통해 더 나은 투자 결정을 내릴 수 있도록 돕습니다.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* 카드 1 */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">insights</span>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">AI 기반 분석</h3>
            <p className="text-sm text-slate-500 mt-1">
              재무제표, 뉴스, 공시 데이터를 분석해 핵심 인사이트를 제공해요.
            </p>
          </div>
        </div>

        {/* 카드 2 */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">monitoring</span>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">실시간 데이터</h3>
            <p className="text-sm text-slate-500 mt-1">
              주가·거래량 등 시장 데이터를 실시간으로 추적합니다.
            </p>
          </div>
        </div>

        {/* 카드 3 */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">menu_book</span>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">심층 리포트</h3>
            <p className="text-sm text-slate-500 mt-1">
              성장성·안정성·수익성을 종합한 리포트를 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
