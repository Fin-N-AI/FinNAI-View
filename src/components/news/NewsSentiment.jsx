export default function NewsSentiment() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
        AI Sentiment 분석
      </h3>

      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-red-500">trending_up</span>
          <span className="font-bold text-red-600 dark:text-red-400">
            호재 (Positive)
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          FinNAI의 판단 근거:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="text-red-500 mr-2 mt-1">•</span>
            <span>신제품에 대한 시장의 긍정적 기대감 형성</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2 mt-1">•</span>
            <span>기술 혁신 및 디자인 경쟁력 부각</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2 mt-1">•</span>
            <span>주가 상승에 대한 잠재적 요인으로 작용</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
