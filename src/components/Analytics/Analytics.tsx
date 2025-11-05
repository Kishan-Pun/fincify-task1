import React from "react";

const data = {
  metrics: [
    {
      fund: "Atlas Portföy Yönetimi Fonu",
      values: [6.65, 6.42, 6.31, 5.98, 5.88],
    },
    {
      fund: "Deniz Portföy Yönetimi Fonu",
      values: [6.22, 6.18, 5.97, 5.61, 5.43],
    },
    {
      fund: "Yapı Kredi Portföy Yönetimi Fonu",
      values: [6.55, 6.3, 6.15, 5.82, 5.74],
    },
  ],
  scale: [0, 10],
};

const getColor = (value: number, scaleMin: number, scaleMax: number) => {
  const clamped = Math.min(Math.max(value, scaleMin), scaleMax);
  const ratio = (clamped - scaleMin) / (scaleMax - scaleMin);

  let r = 0,
    g = 0,
    b = 0;

  if (ratio <= 0.5) {
    r = Math.round(510 * ratio);
    g = 255;
  } else {
    r = 255;
    g = Math.round(510 * (1 - ratio));
  }

  return `rgb(${r}, ${g}, ${b})`;
};

const AnalyticsChart: React.FC = () => {
  const [scaleMin, scaleMax] = data.scale;
  const midValue = (scaleMin + scaleMax) / 2;

  return (
    <div className="p-8 bg-[#0d1424] text-white rounded-2xl shadow-xl max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Yatırım Fonu Karşılaştırmalı Risk Analizi
      </h2>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button className="px-5 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-md transition">
          Risk Metrikleri
        </button>
        <button className="px-5 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-md transition">
          Korelasyon Analizi
        </button>
        <button className="px-5 py-2 text-sm border border-gray-400 hover:bg-gray-700 rounded-md transition">
          Performans Attribution
        </button>
      </div>

      <div className="flex justify-center items-start relative bg-[#101a33] rounded-xl p-6">
        <div className="overflow-x-auto flex-1">
          <table className="w-full border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-3 border-b border-gray-700 font-semibold text-gray-300">
                  Risk Metrikleri Karşılaştırması
                </th>
                {data.metrics[0].values.map((_, i) => (
                  <th
                    key={i}
                    className="px-3 py-3 border-b border-gray-700 text-center font-medium text-gray-300"
                  >
                    Metric {i + 1}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.metrics.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="px-4 py-2 border-b border-gray-800 text-gray-200 font-medium whitespace-nowrap">
                    {row.fund}
                  </td>
                  {row.values.map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-3 py-2 text-center border-b border-gray-800"
                      style={{
                        backgroundColor: getColor(value, scaleMin, scaleMax),
                        color: "#000",
                        fontWeight: 600,
                      }}
                      title={`${row.fund}: ${value.toFixed(2)}`}
                    >
                      {value.toFixed(2)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ml-8 flex flex-col items-start relative">
          <div className="flex items-center">
            <div className="w-5 h-60 rounded-full bg-[linear-gradient(to_bottom,red,yellow,green)] shadow-md"></div>
            <div className="flex flex-col justify-between h-60 ml-2">
              <span className="text-sm text-gray-300">{scaleMax}</span>
              <span className="text-sm text-gray-300">{midValue}</span>
              <span className="text-sm text-gray-300">{scaleMin}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
