import React from "react";

export type CompanyData = {
  name: string;
  funds: number;
  size: string;
  fee: string;
  return: number;
};

interface Props {
  companies: CompanyData[];
}

const CompanyComparisonTable: React.FC<Props> = ({ companies }) => {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-2xl shadow-md w-full overflow-hidden">
      <h3 className="text-lg font-semibold mb-4">Company-Based Comparison</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm sm:text-base">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2 text-left whitespace-nowrap">Company</th>
              <th className="p-2 text-left whitespace-nowrap">Fund Count</th>
              <th className="p-2 text-left whitespace-nowrap">Total Size (TL)</th>
              <th className="p-2 text-left whitespace-nowrap">Average Fee</th>
              <th className="p-2 text-left whitespace-nowrap">Average Return (%)</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c, i) => (
              <tr
                key={i}
                className="border-b border-gray-800 hover:bg-gray-800 transition"
              >
                <td className="p-2">{c.name}</td>
                <td className="p-2">{c.funds}</td>
                <td className="p-2">{c.size}</td>
                <td className="p-2">{c.fee}</td>
                <td className="p-2">{c.return}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyComparisonTable;
