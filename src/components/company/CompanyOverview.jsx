export default function CompanyOverview({ data }) {
  return (
    <div className="bg-card-light p-8 rounded-xl shadow-sm border border-border-light">
      <h2 className="text-xl font-bold mb-4">기업 개요</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm">
        <Item label="대표이사" value={data.ceo} />
        <Item label="설립일" value={data.founded} />
        <Item label="상장일" value={data.listed} />
        <Item label="본사" value={data.location} />
        <Item label="임직원 수" value={data.employees} />
        <Item label="홈페이지" value={<a href={data.homepage} className="text-primary underline">samsung.com</a>} />
        <Item label="업종" value={data.industry} />
        <Item label="주요 산업" value={data.sectors} />
        <Item label="시가총액 순위" value={data.rank} />
        <Item label="발행주식수" value={data.shares} />
        <Item label="EPS" value={data.eps} />
        <Item label="BPS" value={data.bps} />
      </div>

      <p className="mt-6 text-sm text-text-secondary-light leading-relaxed border-t pt-4">
        {data.description}
      </p>
    </div>
  );
}

function Item({ label, value }) {
  return (
    <div className="flex">
      <span className="w-32 shrink-0 font-medium text-text-secondary-light">
        {label}
      </span>
      <span>{value}</span>
    </div>
  );
}
