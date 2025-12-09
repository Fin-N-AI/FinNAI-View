import PopularList from "./PopularList";

const ORDER_POPULAR = [
  "삼성전자",
  "SK하이닉스",
  "LG에너지솔루션",
  "현대자동차",
  "NAVER",
];

const SEARCH_POPULAR = [
  "카카오",
  "셀트리온",
  "POSCO홀딩스",
  "기아",
  "KB금융",
];

export default function PopularSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <PopularList title="주문순 인기 기업" items={ORDER_POPULAR} />
      <PopularList title="검색순 인기 기업" items={SEARCH_POPULAR} />
    </section>
  );
}
