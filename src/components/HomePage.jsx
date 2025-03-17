import React, { useState } from "react";
import Header from "./Header";
import BottomNav from "./BottomNav";
import AllCampaigns from "./Capaigns/AllCampaigns";
import AppliedCampaigns from "./Capaigns/AppliedCampaigns";
import HiredCampaigns from "./Capaigns/HiredCampaigns";
import ClosedCampaigns from "./Capaigns/ClosedCampaigns";

const HomePage = () => {
  const [currentTab, setCurrentTab] = useState("All"); // Default: All

  return (
    <div>
      <Header onTabChange={setCurrentTab} currentTab={currentTab} />
      
      <div className="campaigns-container">
        {currentTab === "All" && <AllCampaigns />}
        {currentTab === "Applied" && <AppliedCampaigns />}
        {currentTab === "Hired" && <HiredCampaigns />}
        {currentTab === "Closed" && <ClosedCampaigns />}
      </div>
      
    </div>
  );
};

export default HomePage;
