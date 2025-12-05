import NewsCard from "./NewsCard";

export default function NewsList({ list }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {list.map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </div>
  );
}
