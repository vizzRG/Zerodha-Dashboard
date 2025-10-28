import React from "react";

const DashboardHeader = ({ activeNav, setActiveNav }) => {
  return (
    <div className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
      <div className="flex items-center gap-2">
        <div className="text-red-500 text-2xl font-bold">⟨</div>
      </div>
      <div className="flex flex-row items-center gap-8">
        <div className="flex items-center gap-8 text-sm">
          {[
            "Dashboard",
            "Orders",
            "Holdings",
            "Positions",
            "Funds",
            "Apps",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`${
                activeNav === item
                  ? "text-red-500 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-xs text-white font-semibold">
            DA
          </div>
          <span className="text-sm text-gray-700">DA0017</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
