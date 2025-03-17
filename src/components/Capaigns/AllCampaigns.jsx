import React from "react";
import "../../styles/Campaigns.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const AllCampaigns = () => {
  const campaigns = [
    {
      brand: "Oziva",
      tagline: "Manage Weight Naturally",
      img: "/oziva.jpg",
      logo: "/oziva-logo.jpg",
      hired: 40,
    },
    {
      brand: "Himalaya",
      tagline: "Himalaya BabyCare",
      img: "/himalaya.jpg",
      logo: "/himalaya-logo.png",
      hired: 60,
    },
    {
      brand: "Oziva",
      tagline: "Manage Weight Naturally",
      img: "/oziva.jpg",
      logo: "/oziva-logo.jpg",
      hired: 40,
    },
    {
      brand: "Himalaya",
      tagline: "Himalaya BabyCare",
      img: "/himalaya.jpg",
      logo: "/himalaya-logo.png",
      hired: 60,
    },
  ];

  return (
    <div>
      {campaigns.map((campaign, index) => (
        <div key={index} className="campaign-card">
          <img src={campaign.img} alt="" />
          <div className="inner-card">
            <img className="compny-logo" src={campaign.logo} alt="" />
            <div className="card-info1">
              <p>{campaign.tagline}</p>
              <button>Profile Pending</button>
            </div>
            <div className="card-info2">
              <div>
                <span className="cash">Cash</span> <br /> INR 500
              </div>
              <div className="card-info3">
                <FontAwesomeIcon icon={faInstagram}  className="insta-icon" />
                <div>
                  <span>Barter Worth</span> <br /> INR 449
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${campaign.hired}%` }}
                ></div>
              </div>
              <div className="progress-text">{campaign.hired}/100 hired</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCampaigns;
