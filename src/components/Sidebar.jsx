import { watchlist } from "../../utils/data";

const Sidebar = () => {
  return (
    <div className="w-80 border-r border-gray-200 flex flex-col bg-white">
      {/* Market Indices */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">
              NIFTY 50
            </span>
            <span className="text-xs text-gray-500">25795.15</span>
            <span className="text-xs text-green-600">+8,225 (1.37%)</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">SENSEX</span>
            <span className="text-xs text-red-600">84211.88</span>
            <span className="text-xs text-gray-500">-344.52 (-6.41%)</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search eg: infy, banknifty, fund, e..."
            className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-2 text-xs text-gray-400">
            CTRL + K
          </span>
        </div>
      </div>

      {/* Watchlist Counter */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <span className="text-xs text-gray-500">1 / 250</span>
        <button className="text-xs text-blue-500 hover:text-blue-600">
          + New group
        </button>
      </div>

      {/* Default Group Header */}
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
        <span className="text-xs font-medium text-gray-600">Default (8)</span>
      </div>

      {/* Watchlist Items */}
      <div className="flex-1 overflow-y-auto">
        {watchlist
          .filter((s) => !s.isIndex)
          .map((stock, index) => (
            <div
              key={index}
              className="px-4 py-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="text-sm font-medium text-red-500 mb-1">
                    {stock.symbol}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <span className={`text-xs ${stock.color}`}>
                    {stock.change.replace("+", "").replace("%", "")}
                  </span>
                  <span className={`text-xs ${stock.color}`}>
                    {parseFloat(stock.change.replace("%", "")) >= 0 ? "+" : ""}
                    {stock.change}
                  </span>
                  <span className="text-sm font-medium text-gray-800 w-16">
                    {stock.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
