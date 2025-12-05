import HeaderNav from "../components/layout/HeaderNav";
import SearchBar from "../components/home/SearchBar";
import PopularTabs from "../components/home/PopularTabs";
import PopularList from "../components/home/PopularList";

export default function Home() {
  return (
    <div className="bg-background-light text-gray-800 min-h-screen flex flex-col">
      <HeaderNav />

      <main className="flex-grow flex flex-col items-center justify-center container mx-auto px-6 pb-12">
        <SearchBar />
        <div className="w-full max-w-5xl">
          <PopularTabs />
          <PopularList />
        </div>
      </main>
    </div>
  );
}
