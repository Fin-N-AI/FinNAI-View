import HeaderNav from "../components/layout/HeaderNav";
import HeroSection from "../components/home/HeroSection";
import SearchBar from "../components/home/SearchBar";
import PopularSection from "../components/home/PopularSection";
import NewsPreview from "../components/home/NewsPreview";

export default function Home() {
  return (
    <div className="bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <HeaderNav />

      <main className="flex-grow container mx-auto px-6 py-10">
        <HeroSection />
        <SearchBar />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 인기 기업 섹션 (좌측 2칸) */}
          <div className="lg:col-span-2">
            <PopularSection />
          </div>

          {/* 최신 뉴스 섹션 (우측 1칸) */}
          <NewsPreview />
        </div>
      </main>
    </div>
  );
}
