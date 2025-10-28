import { useState } from "react";
import {
  AppsTab,
  DashboardHeader,
  DashboardTab,
  FundsTab,
  HoldingsTab,
  OrdersTab,
  PositionsTab,
  Sidebar,
} from "./components";

const App = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader activeNav={activeNav} setActiveNav={setActiveNav} />

        {activeNav === "Dashboard" && <DashboardTab />}

        {activeNav === "Holdings" && <HoldingsTab />}

        {activeNav === "Orders" && <OrdersTab />}

        {activeNav === "Positions" && <PositionsTab />}

        {activeNav === "Funds" && <FundsTab />}

        {activeNav === "Apps" && <AppsTab />}
      </div>
    </div>
  );
};

export default App;
