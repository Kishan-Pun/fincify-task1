import React, { useState } from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Search, Filter } from "lucide-react";

const data = {
  sectors: [
    { label: "Very High", value: 49.3 },
    { label: "High", value: 12.53 },
    { label: "Medium", value: 14 },
    { label: "Low", value: 8 },
    { label: "Very Low", value: 3 },
  ],
  topFunds: [
    {
      name: "Atlas Portföy Yönetimi Fonu",
      company: "Deniz Portföy Yönetimi A.Ş.",
      category: "Bond Funds",
      oneYReturn: 10.53,
      threeYReturn: 23.35,
      risk: "Low",
    },
    {
      name: "Yapı Kredi Portföy Yönetimi Fonu",
      company: "Yapı Kredi Portföy",
      category: "Equity Funds",
      oneYReturn: 12.66,
      threeYReturn: 25.22,
      risk: "High",
    },
  ],
};

const COLORS = ["#2563eb", "#facc15", "#10b981", "#4ade80", "#ef4444"];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e293b] border border-gray-700 p-3 rounded-md text-white text-sm">
        <p className="font-semibold">{payload[0].name}</p>
        <p>{`Value: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PieChartDashboard: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedFunds = [...data.topFunds].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const aValue = a[key as keyof typeof a];
    const bValue = b[key as keyof typeof b];
    if (aValue < bValue) return direction === "asc" ? -1 : 1;
    if (aValue > bValue) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  return (
    <div className="p-8 bg-[#0d1424] text-white rounded-2xl shadow-xl max-w-7xl mx-auto mt-10 space-y-8">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Sektör Risk Analizi
      </h2>

      <div className="bg-[#101a33] rounded-xl p-6 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-1/2 h-72 sm:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart>
              <Pie
                data={data.sectors}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius="50%"
                outerRadius="80%"
                paddingAngle={3}
                animationDuration={1200}
                animationEasing="ease-out"
              >
                {data.sectors.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="#0d1424"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </RePieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 w-full lg:w-1/2">
          {data.sectors.map((sector, index) => (
            <div
              key={sector.label}
              className="flex flex-col items-center justify-center bg-[#1e293b] p-4 rounded-lg shadow-md w-full"
            >
              <div
                className="w-4 h-4 rounded-full mb-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <p className="text-gray-300 text-sm">{sector.label}</p>
              <p className="text-lg font-semibold">{sector.value}%</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#101a33] rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Sektörde En İyi Performans Gösteren Fonlar
          </h3>
          <div className="flex gap-3 items-center">
            <button className="p-2 bg-blue-600 hover:bg-blue-500 rounded-md">
              <Filter size={18} />
            </button>
            <div className="flex items-center bg-[#1e293b] px-2 py-1 rounded-md">
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Fon adı, kurucu, kategori ara..."
                className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-48 sm:w-64"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-300">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400">
                {[
                  { key: "name", label: "Fon Adı" },
                  { key: "company", label: "Kurucu" },
                  { key: "category", label: "Kategori" },
                  { key: "oneYReturn", label: "1Y (%)" },
                  { key: "threeYReturn", label: "3Y (%)" },
                  { key: "risk", label: "Risk Seviyesi" },
                ].map(({ key, label }) => (
                  <th
                    key={key}
                    className="px-4 py-3 text-left cursor-pointer select-none"
                    onClick={() => handleSort(key)}
                  >
                    {label}
                    {sortConfig?.key === key && (
                      <span className="ml-1">
                        {sortConfig.direction === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedFunds.map((fund, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-800 hover:bg-[#1e293b]/50 transition"
                >
                  <td className="px-4 py-3 whitespace-nowrap">{fund.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {fund.company}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {fund.category}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {fund.oneYReturn.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {fund.threeYReturn.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-blue-400 font-semibold">
                    {fund.risk}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PieChartDashboard;
