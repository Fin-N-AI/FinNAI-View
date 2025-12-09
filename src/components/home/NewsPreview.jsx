const NEWS_DATA = [
  {
    title: "미 연준, 금리 동결 시사... 시장은 안도 랠리",
    desc: "연준 의장이 인플레이션 둔화세를 긍정적으로 평가하며 당분간 금리를 동결...",
    img: "https://picsum.photos/80?1",
  },
  {
    title: "글로벌 전기차 시장, 2024년 25% 성장 전망",
    desc: "각국의 친환경 정책과 신모델 출시로 내년 판매량이 증가할 것으로 전망...",
    img: "https://picsum.photos/80?2",
  },
  {
    title: "국내 AI 반도체 기업, 1조 규모 투자 유치",
    desc: "국내 팹리스 스타트업이 차세대 AI 반도체 개발을 위해 대규모 투자를 유치...",
    img: "https://picsum.photos/80?3",
  },
];

export default function NewsPreview() {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        놓치면 안 될 최신 금융 뉴스
      </h2>

      <div className="space-y-4">
        {NEWS_DATA.map((news, idx) => (
          <a
            key={idx}
            href="#"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <img
              src={news.img}
              alt="news"
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <p className="font-semibold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                {news.title}
              </p>
              <p className="text-sm text-slate-500 mt-1">{news.desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="px-5 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-semibold text-slate-600">
          뉴스 더보기
        </button>
      </div>
    </section>
  );
}
