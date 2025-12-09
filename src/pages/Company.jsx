import HeaderNav from "../components/layout/HeaderNav";
import CompanyHeader from "../components/company/CompanyHeader";
import CompanyStats from "../components/company/CompanyStats";
import CompanyOverview from "../components/company/CompanyOverview";
import CompanyNews from "../components/company/CompanyNews";

export default function Company() {
  const stats = [
    { label: "시가총액", value: "453조 2,345억" },
    { label: "PER", value: "15.82" },
    { label: "PBR", value: "1.75" },
    { label: "배당수익률", value: "2.15%" },
  ];

  const overview = {
    ceo: "한종희, 경계현",
    founded: "1969년 1월 13일",
    listed: "1975년 6월 11일",
    location: "경기도 수원시 영통구",
    employees: "113,485명",
    homepage: "https://www.samsung.com",
    industry: "통신 및 방송 장비 제조업",
    sectors: "가전, 반도체, 모바일",
    rank: "코스피 1위",
    shares: "5,969,782,550",
    eps: "4,772원",
    bps: "43,158원",
    description: `
      삼성전자는 대한민국의 다국적 기술 기업으로, 세계 최대의 스마트폰, TV, 
      메모리 반도체 제조업체 중 하나이며 다양한 전자 제품을 생산 및 판매합니다. 
      1969년 설립 이후 지속적인 기술 혁신과 글로벌 시장 확장을 통해 전 세계 
      전자 산업을 선도하고 있습니다.
    `,
  };

  const news = {
    good: [
      { title: "갤럭시 신제품, 역대급 사전판매량 기록", date: "2023.08.23" },
      { title: "차세대 메모리 반도체 개발 성공, 시장 선점 기대", date: "2023.08.22" },
      { title: "미국 파운드리 공장 증설, 공급망 안정성 확보", date: "2023.08.21" },
      { title: "영업이익 컨센서스 상회, 3분기 실적 ‘청신호’", date: "2023.08.20" },
    ],
    bad: [
      { title: "글로벌 스마트폰 시장 성장 둔화 우려", date: "2023.08.23" },
      { title: "반도체 업황 사이클 하락 국면 진입 가능성", date: "2023.08.22" },
      { title: "미·중 무역분쟁 심화로 불확실성 증가", date: "2023.08.21" },
      { title: "노조 파업 리스크, 생산 차질 우려", date: "2023.08.20" },
    ],
    neutral: [
      { title: "신규 폴더블폰 공개, 시장 반응은 ‘아직’", date: "2023.08.23" },
      { title: "IB 목표주가 유지", date: "2023.08.22" },
      { title: "ESG 경영 평가, 전년 대비 동일 등급", date: "2023.08.21" },
      { title: "3분기 스마트폰 출하량 전망치 보합", date: "2023.08.20" },
    ],
  };

  return (
    <div className="min-h-screen bg-background-light">
      <HeaderNav />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">

          <CompanyHeader />

          <CompanyStats stats={stats} />

          <CompanyOverview data={overview} />

          <CompanyNews news={news} />

        </div>
      </main>
    </div>
  );
}
