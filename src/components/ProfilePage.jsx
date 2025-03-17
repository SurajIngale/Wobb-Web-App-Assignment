import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faMobile,
  faSquarePollVertical,
  faWallet,
  faStar,
  faIndianRupeeSign,
  faGift,
  faUsers,
  faCog,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBullhorn,
  faEllipsis,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/ProfilePage.css";
import { useNavigate } from "react-router-dom";

const profileLinks = [
  { icon: faUser, text: "About You" },
  { icon: faAddressCard, text: "Address" },
  { icon: faMobile, text: "Social Channels" },
  { icon: faSquarePollVertical, text: "Your Score" },
  { icon: faWallet, text: "Wallet" },
  { icon: faGift, text: "Rewards" },
  { icon: faIndianRupeeSign, text: "Commercial" },
  { icon: faUsers, text: "Referral Earning" },
  { icon: faCog, text: "Settings" },
];

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <div className="header">
      <div className="header-top ">
        <div className="inbox">
          <h3>User Acount</h3>
        </div>
        <div className="header-icons">
          <div className="header-icons">
            <FontAwesomeIcon
              onClick={() => navigate("/")}
              icon={faBullhorn}
              className="nav-icon"
            />
          </div>
          <div className="header-icons">
            <FontAwesomeIcon
              onClick={() => navigate("/messages")}
              icon={faEllipsis}
              className="nav-icon message"
            />
          </div>
          <div className="header-icons">
            <FontAwesomeIcon
              onClick={() => navigate("/profile")}
              icon={faUser}
              className="nav-icon"
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faBell} className="icon" />
          </div>
        </div>
      </div>
      </div>
      <div className="profile-grid">
        {profileLinks.map((item, index) => (
          <div key={index} className="profile-card">
            <FontAwesomeIcon icon={item.icon} className="profile-icon" />
            <span className="profile-text">{item.text}</span>
            <span className="arrow-icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
