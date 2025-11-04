import React from "react";

const DashboardHeader: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-2xl shadow-md mb-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2 lg:mb-0">Company Comparison</h2>
          <p className="text-gray-400 text-sm">
            Select a portfolio to analyze its company-level details below.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-600 transition w-full sm:w-auto">
            Compare with Sector
          </button>
          <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-400 transition w-full sm:w-auto">
            Compare Within Company
          </button>
        </div>
      </div>

      <div className="mt-5 bg-gray-800 p-4 rounded-lg">
        <label className="text-gray-300 text-sm block mb-2">Portfolio to Analyze</label>
        <select className="w-full p-2 rounded-md bg-gray-900 text-gray-200 border border-gray-700">
          <option>INVEQ Portfolio Management A.S.</option>
        </select>
      </div>
    </div>
  );
};

export default DashboardHeader;
