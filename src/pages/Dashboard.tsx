import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import StatsOverview from "../components/Dashboard/StatsOverview";
import CompanyComparisonTable from "../components/Dashboard/CompanyComparisonTable";
import PerformanceChart from "../components/Dashboard/PerformanceChart";
import type { CompanyData } from "../components/Dashboard/CompanyComparisonTable";

const Dashboard: React.FC = () => {
  const companies: CompanyData[] = [
    {
      name: "Yapi Kredi Portfolio Management A.S.",
      funds: 12,
      size: "34.53",
      fee: "2.35%",
      return: 23.54,
    },
    {
      name: "Ak Portfolio Management A.S.",
      funds: 8,
      size: "28.12",
      fee: "2.10%",
      return: 21.3,
    },
    {
      name: "Is Portfolio Management A.S.",
      funds: 10,
      size: "30.25",
      fee: "1.85%",
      return: 19.8,
    },
    {
      name: "Garanti Portfolio Management A.S.",
      funds: 9,
      size: "26.74",
      fee: "2.05%",
      return: 20.1,
    },
    {
      name: "QNB Finans Portfolio A.S.",
      funds: 7,
      size: "22.91",
      fee: "1.95%",
      return: 18.4,
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full p-4 sm:p-6 lg:p-8 bg-gray-950 min-h-screen text-white">
      <section>
        <DashboardHeader />
      </section>

      <section>
        <StatsOverview />
      </section>

      <div className="max-w-screen-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <CompanyComparisonTable companies={companies} />
          <PerformanceChart companies={companies} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
