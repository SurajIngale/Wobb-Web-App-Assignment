import React from "react";
import "../../styles/Campaigns.css";

const HiredCampaigns = () => {
  const hiredCampaigns = [
    { brand: "Reebok", payout: "Barter Worth ₹6,000", hired: 80 },
  ];

  return (
    <div className="campaigns2">
    <img src="/campaigns-bg.png" alt="" />
  <h2>No Campaigns Found</h2>
  <div>All your hired campaigns will be found here</div>
  <button>Appply</button>
</div>
  );
};

export default HiredCampaigns;
