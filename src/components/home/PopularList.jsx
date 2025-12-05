const POPULAR_LIST = [
  "삼성전자",
  "SK하이닉스",
  "LG에너지솔루션",
  "현대자동차",
  "NAVER",
];

export default function PopularList() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <ul className="space-y-2">
        {POPULAR_LIST.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between p-3 hover:bg-primary-light 
                       rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <span className="text-lg font-bold text-primary w-6 text-center">
                {idx + 1}
              </span>
              <span className="font-semibold text-lg text-gray-800">{item}</span>
            </div>

            <span className="material-symbols-outlined text-gray-400">
              arrow_forward_ios
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
