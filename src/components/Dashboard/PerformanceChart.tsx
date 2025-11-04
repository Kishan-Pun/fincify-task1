import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { CompanyData } from "./CompanyComparisonTable";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface PerformanceChartProps {
  companies: CompanyData[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ companies }) => {
  const [timeframe, setTimeframe] = useState("1M");

  const getRandomData = (multiplier: number) =>
    companies.map(() => Number((Math.random() * 20 * multiplier).toFixed(2)));

  const data = {
    labels: companies.map((c) => c.name.split(" ")[0]),
    datasets: [
      {
        label: `Return (${timeframe})`,
        data:
          timeframe === "1D"
            ? getRandomData(0.2)
            : timeframe === "1W"
            ? getRandomData(0.6)
            : getRandomData(1),
        backgroundColor: "rgba(37, 99, 235, 0.8)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#9ca3af" } },
      y: { ticks: { color: "#9ca3af" } },
    },
  };

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h3 className="text-lg font-semibold mb-3 sm:mb-0">
          Company Performance Comparison
        </h3>
        <div className="flex gap-2">
          {["1D", "1W", "1M"].map((tf) => (
            <button
              key={tf}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition 
                ${
                  timeframe === tf
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              onClick={() => setTimeframe(tf)}
            >
              {tf === "1D" ? "1 Day" : tf === "1W" ? "1 Week" : "1 Month"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceChart;
