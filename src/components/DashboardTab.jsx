import { profitData } from "../../utils/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const DashboardTab = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-light text-gray-800 mb-8">
          Hi, Rainmatter
        </h1>

        {/* Equity & Commodity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded border border-gray-200 p-6">
            <h3 className="text-sm text-gray-600 mb-4">Equity</h3>
            <div className="flex  justify-between items-start">
              <div>
                <div className="text-4xl font-light text-gray-800 mb-1">
                  10.21L
                </div>
                <div className="text-xs text-gray-500">Margin available</div>
                <div className="text-xs text-gray-500 mt-2">
                  Margins used: <span className="text-gray-800">37.57k</span>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <div>Margin used: 0</div>
                <div className="mt-1">Opening balance: 10.24L</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded border border-gray-200 p-6">
            <h3 className="text-sm text-gray-600 mb-4">Commodity</h3>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-4xl font-light text-gray-800 mb-1">
                  96.45k
                </div>
                <div className="text-xs text-gray-500">Margin available</div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <div>Margins used: 0</div>
                <div className="mt-1">Opening balance: 96.45k</div>
              </div>
            </div>
          </div>
        </div>

        {/* Holdings Section */}
        <div className="bg-white rounded border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base text-gray-700">Holdings (14)</h3>
            <div className="text-right">
              <div className="text-3xl font-light text-gray-800">55.04k</div>
              <div className="text-xs text-gray-500">+17.71k</div>
            </div>
          </div>

          {/*  Holdings Chart */}
          <div className="w-full h-64 bg-white rounded-lg shadow-sm p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={profitData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    borderColor: "#e5e7eb",
                    fontSize: "0.875rem",
                  }}
                  formatter={(value) => [`₹${value}`, "Value"]}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={"#3b82f6"}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-gray-400 text-center">
            * Top 20 Holdings by investment value shown
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;
