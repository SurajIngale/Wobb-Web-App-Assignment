import React from "react";
import "../../styles/Campaigns.css";

const ClosedCampaigns = () => {
  return (
    <div className="campaigns2">
        <img src="/campaigns-bg.png" alt="" />
      <h2>No Campaigns Found</h2>
      <div>All your closed campaigns will be found here</div>
      <button>Appply</button>
    </div>
  );
};

export default ClosedCampaigns;
