import {
  holdingsData,
  totalCurrentValue,
  totalInvested,
  totalPnL,
} from "../../utils/data";
import { Download, RefreshCw, Search } from "lucide-react";

const HoldingsTab = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-light text-gray-800">
            Holdings ({holdingsData.length})
          </h2>
          <div className="flex md:flex-row flex-col gap-3 text-sm">
            <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded">
              <RefreshCw size={16} />
              Authorise
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">
              <Download size={16} />
              Download
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded">
            <div className="text-xs text-gray-500 mb-1">Total investment</div>
            <div className="text-xl font-semibold text-gray-800">
              ₹{totalInvested.toFixed(2)}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="text-xs text-gray-500 mb-1">Current value</div>
            <div className="text-xl font-semibold text-gray-800">
              ₹{totalCurrentValue.toFixed(2)}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="text-xs text-gray-500 mb-1">Total P&L</div>
            <div
              className={`text-xl font-semibold ${
                totalPnL >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {totalPnL >= 0 ? "+" : ""}₹{totalPnL.toFixed(2)}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="text-xs text-gray-500 mb-1">Day's P&L</div>
            <div className="text-xl font-semibold text-green-600">+₹234.50</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Filter eg: RELIANCE"
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/*  Desktop Table */}
        <div className="hidden md:block border border-gray-200 rounded overflow-x-auto overflow-y-auto max-h-[70vh]">
          <table className="min-w-[800px] w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-600 sticky top-0">
              <tr>
                <th className="text-left p-3 font-medium">Instrument</th>
                <th className="text-right p-3 font-medium">Qty.</th>
                <th className="text-right p-3 font-medium">Avg. cost</th>
                <th className="text-right p-3 font-medium">LTP</th>
                <th className="text-right p-3 font-medium">Current value</th>
                <th className="text-right p-3 font-medium">P&L</th>
                <th className="text-right p-3 font-medium">Net chg.</th>
                <th className="text-right p-3 font-medium">Day chg.</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {holdingsData.map((holding, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3 text-blue-600 font-medium">
                    {holding.instrument}
                  </td>
                  <td className="text-right p-3 text-gray-700">
                    {holding.qty}
                  </td>
                  <td className="text-right p-3 text-gray-700">
                    {holding.avgCost.toFixed(2)}
                  </td>
                  <td className="text-right p-3 text-gray-700">
                    {holding.ltp.toFixed(2)}
                  </td>
                  <td className="text-right p-3 font-medium text-gray-800">
                    {holding.currentValue.toFixed(2)}
                  </td>
                  <td
                    className={`text-right p-3 font-medium ${
                      holding.pnl >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {holding.pnl >= 0 ? "+" : ""}
                    {holding.pnl.toFixed(2)}
                  </td>
                  <td
                    className={`text-right p-3 ${
                      holding.netChg.includes("+")
                        ? "text-green-600"
                        : holding.netChg.includes("-")
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {holding.netChg}
                  </td>
                  <td
                    className={`text-right p-3 ${
                      holding.dayChg.includes("+")
                        ? "text-green-600"
                        : holding.dayChg.includes("-")
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {holding.dayChg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*  Mobile Card View */}
        <div className="md:hidden space-y-4">
          {holdingsData.map((holding, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-blue-600 font-medium">
                  {holding.instrument}
                </p>
                <p className="text-xs text-gray-500">Qty: {holding.qty}</p>
              </div>

              <div className="grid grid-cols-2 text-sm text-gray-600 gap-y-1">
                <span>Avg. Cost:</span>
                <span className="text-right font-medium text-gray-800">
                  {holding.avgCost.toFixed(2)}
                </span>

                <span>LTP:</span>
                <span className="text-right font-medium text-gray-800">
                  {holding.ltp.toFixed(2)}
                </span>

                <span>Current Value:</span>
                <span className="text-right font-medium text-gray-800">
                  {holding.currentValue.toFixed(2)}
                </span>

                <span>P&L:</span>
                <span
                  className={`text-right font-medium ${
                    holding.pnl >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {holding.pnl >= 0 ? "+" : ""}
                  {holding.pnl.toFixed(2)}
                </span>

                <span>Net Chg:</span>
                <span
                  className={`text-right ${
                    holding.netChg.includes("+")
                      ? "text-green-600"
                      : holding.netChg.includes("-")
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {holding.netChg}
                </span>

                <span>Day Chg:</span>
                <span
                  className={`text-right ${
                    holding.dayChg.includes("+")
                      ? "text-green-600"
                      : holding.dayChg.includes("-")
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {holding.dayChg}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoldingsTab;
