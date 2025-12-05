import HeaderNav from "../components/layout/HeaderNav";
import CompanyHeader from "../components/company/CompanyHeader";
import CompanyNewsBanner from "../components/company/CompanyNewsBanner";
import CompanyStats from "../components/company/CompanyStats";
import CompanyOverview from "../components/company/CompanyOverview";

export default function Company() {
  const stats = [
    { label: "시가총액", value: "453조 2,345억" },
    { label: "PER", value: "15.82" },
    { label: "PBR", value: "1.75" },
    { label: "배당수익률", value: "2.15%" },
  ];

  const description = `
    삼성전자는 대한민국의 다국적 기술 기업으로, 본사는 경기도 수원시에 위치하고 있습니다. 
    세계 최대의 스마트폰, TV, 메모리 반도체 제조업체 중 하나이며, 가전제품, 디스플레이 패널 등 
    다양한 전자 제품을 생산 및 판매합니다. 1969년에 설립된 이래로 지속적인 기술 혁신과 글로벌 
    시장 확장을 통해 전 세계 전자 산업을 선도하고 있습니다. 주요 사업 부문은 CE, IM, DS로 구성됩니다.
  `;

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <HeaderNav />

      <main className="container mx-auto px-6 py-8 flex-grow">
        <div className="space-y-6">

          <CompanyHeader
            name="삼성전자"
            website="https://samsung.com"
            employees={113485}
          />

          <CompanyNewsBanner company="삼성전자" />

          <CompanyStats stats={stats} />

          <CompanyOverview description={description} />
        </div>
      </main>
    </div>
  );
}
