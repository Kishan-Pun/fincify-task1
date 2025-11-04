export const statsData = [
  { label: "Total Fund Count", value: 75 },
  { label: "Total Managed Assets", value: "75.7B TL" },
  { label: "Avg. Management Fee", value: "2.03%" },
  { label: "Avg. Annual Yield", value: "23.61%" }
];

export const comparisonTableData = [
  {
    "Company": "Yapi Kredi Portfolio Management",
    "Total Funds": 12,
    "Total Assets (TLB)": "34.53",
    "Avg. Management Fee (%)": "2.14",
    "Avg. Annual Yield (%)": "22.33"
  },
  {
    "Company": "INVE Portfolio Management",
    "Total Funds": 75,
    "Total Assets (TLB)": "75.7",
    "Avg. Management Fee (%)": "2.03",
    "Avg. Annual Yield (%)": "23.61"
  }
  // More rows as per UI...
];

export const chartData = {
  labels: ["Tech Fund", "Short Term Bond Fund", "Eurobond Fund", "Balanced Fund", "Foreign Stocks Fund"],
  datasets: [
    {
      label: "Return (%)",
      data: [16.44, 16.44, 16.44, 16.44, 16.44],
      backgroundColor: [
        "#3B82F6",
        "#6366F1",
        "#A21CAF",
        "#1E293B",
        "#38BDF8"
      ]
    }
  ]
};

export const chartOptions = {
  indexAxis: 'y' as const,
  responsive: true,
  plugins: { legend: { display: false } },
  scales: { x: { beginAtZero: true, ticks: { color: "#E5E7EB" } }, y: { ticks: { color: "#E5E7EB" } } }
};
