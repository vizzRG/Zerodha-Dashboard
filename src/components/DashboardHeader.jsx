import { Menu, X } from "lucide-react";
import { useState } from "react";

const DashboardHeader = ({ activeNav, setActiveNav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Dashboard",
    "Orders",
    "Holdings",
    "Positions",
    "Funds",
    "Apps",
  ];

  return (
    <div className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
      <div className="flex items-center gap-2">
        <div className="text-red-500 text-2xl font-bold">
          <img
            onClick={() => setActiveNav("Dashboard")}
            src="https://kite.zerodha.com/static/images/kite-logo.svg"
            height={24}
            width={24}
          />
        </div>
      </div>
      <div className=" flex flex-row justify-between items-center gap-2">
        <div className=" hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
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
        <div className="md:hidden">{activeNav}</div>

        <div className="flex  items-center gap-3">
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-xs text-white font-semibold ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" p-2 rounded-lg hover:bg-red-400/80"
            >
              DA
            </button>
          </div>
          <span className="hidden md:flex  text-sm text-gray-700">DA0017</span>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-15  md:hidden gap-4 text-gray-500">
            <div className="bg-white text-black relative  min-w-fit p-4 rounded transition-all">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveNav(item);
                    setIsOpen(false);
                  }}
                  className={` 
                    flex flex-col gap-4 bottom-6
                    
                    ${
                      activeNav === item
                        ? "text-red-500 font-medium"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
