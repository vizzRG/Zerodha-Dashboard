import { positionsData } from "../../utils/data";

const PositionsTab = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      <div className="p-6">
        <h2 className="text-xl font-light text-gray-800 mb-6">
          Positions ({positionsData.length})
        </h2>

        <div className="border border-gray-200 rounded overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-600">
              <tr>
                <th className="text-left p-3 font-medium">Instrument</th>
                <th className="text-left p-3 font-medium">Product</th>
                <th className="text-right p-3 font-medium">Qty</th>
                <th className="text-right p-3 font-medium">Avg.</th>
                <th className="text-right p-3 font-medium">LTP</th>
                <th className="text-right p-3 font-medium">P&L</th>
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
      </div>
    </div>
  );
};

export default PositionsTab;
