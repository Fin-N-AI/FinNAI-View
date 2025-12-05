import HeaderNav from "../components/layout/HeaderNav";
import NewsHeader from "../components/news/NewsHeader";
import NewsFilterTabs from "../components/news/NewsFilterTabs";
import NewsList from "../components/news/NewsList";
import NewsPagination from "../components/news/NewsPagination";
import NewsDetailPanel from "../components/news/NewsDetailPanel";

export default function NewsDetail() {
  // 실제 API 연동 전 임시 데이터
  const newsList = [
    {
      title: "삼성전자, 4분기 실적 발표: 시장 기대치 상회",
      publisher: "파이낸셜뉴스",
      date: "2023.10.26",
      sentiment: "positive",
    },
    {
      title: "신규 AI 칩셋 공개, 업계 혁신 주도",
      publisher: "전자신문",
      date: "2023.10.25",
      sentiment: "positive",
    },
    {
      title: "노조 파업 리스크 부각, 생산 차질 우려",
      publisher: "한국경제",
      date: "2023.10.25",
      sentiment: "negative",
    },
    {
      title: "글로벌 반도체 시장 경쟁 심화",
      publisher: "블룸버그",
      date: "2023.10.24",
      sentiment: "neutral",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <HeaderNav />

      <main className="container mx-auto px-6 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <NewsHeader />

            <NewsFilterTabs />

            <NewsList list={newsList} />
            <NewsPagination />
          </div>

          {/* Right Side Detail Panel */}
          <NewsDetailPanel />
        </div>
      </main>
    </div>
  );
}
