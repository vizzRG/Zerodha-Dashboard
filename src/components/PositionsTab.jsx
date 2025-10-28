import { positionsData } from "../../utils/data";

const PositionsTab = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="p-6">
        <h2 className="text-xl font-light text-gray-800 mb-6">
          Positions ({positionsData.length})
        </h2>

        {/*  Desktop Table */}
        <div className="hidden md:block border border-gray-200 rounded overflow-x-auto overflow-y-auto max-h-[70vh]">
          <table className="min-w-[700px] w-full text-sm">
            <thead className="bg-gray-50 text-xs text-gray-600 sticky top-0">
              <tr>
                <th className="text-left p-3 font-medium">Instrument</th>
                <th className="text-left p-3 font-medium">Product</th>
                <th className="text-right p-3 font-medium">Qty</th>
                <th className="text-right p-3 font-medium">Avg.</th>
                <th className="text-right p-3 font-medium">LTP</th>
                <th className="text-right p-3 font-medium">P&amp;L</th>
                <th className="text-right p-3 font-medium">Chg.</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {positionsData.map((position, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3 text-blue-600 font-medium">
                    {position.instrument}
                  </td>
                  <td className="p-3 text-gray-600">{position.product}</td>
                  <td
                    className={`text-right p-3 font-medium ${
                      position.qty > 0 ? "text-blue-600" : "text-red-600"
                    }`}
                  >
                    {position.qty > 0 ? "+" : ""}
                    {position.qty}
                  </td>
                  <td className="text-right p-3 text-gray-700">
                    ₹{position.avg.toFixed(2)}
                  </td>
                  <td className="text-right p-3 text-gray-700">
                    ₹{position.ltp.toFixed(2)}
                  </td>
                  <td
                    className={`text-right p-3 font-medium ${
                      position.pnl >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {position.pnl >= 0 ? "+" : ""}₹{position.pnl.toFixed(2)}
                  </td>
                  <td
                    className={`text-right p-3 ${
                      position.netChg.includes("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {position.netChg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4">
          {positionsData.map((position, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-blue-600 font-medium">
                  {position.instrument}
                </p>
                <p
                  className={`text-sm font-semibold ${
                    position.qty > 0 ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  {position.qty > 0 ? "+" : ""}
                  {position.qty}
                </p>
              </div>

              <div className="text-xs text-gray-500 mb-1">
                Product: {position.product}
              </div>

              <div className="grid grid-cols-2 text-sm text-gray-600 gap-y-1">
                <span>Avg.:</span>
                <span className="text-right font-medium text-gray-800">
                  ₹{position.avg.toFixed(2)}
                </span>

                <span>LTP:</span>
                <span className="text-right font-medium text-gray-800">
                  ₹{position.ltp.toFixed(2)}
                </span>

                <span>P&amp;L:</span>
                <span
                  className={`text-right font-medium ${
                    position.pnl >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {position.pnl >= 0 ? "+" : ""}₹{position.pnl.toFixed(2)}
                </span>

                <span>Chg.:</span>
                <span
                  className={`text-right ${
                    position.netChg.includes("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {position.netChg}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositionsTab;
