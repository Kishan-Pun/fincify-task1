import React from "react";

interface StatItem {
  label: string;
  value: string;
}

const StatsOverview: React.FC = () => {
  const stats: StatItem[] = [
    { label: "Total Fund Count", value: "75" },
    { label: "Total Managed Assets", value: "75.7B TL" },
    { label: "Average Management Fee", value: "2.03%" },
    { label: "Average 1Y Return", value: "23.61%" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-linear-to-br from-gray-800 to-gray-900 p-4 sm:p-5 rounded-2xl shadow-md text-center hover:shadow-lg transition-all duration-200"
        >
          <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-2">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
