import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faEllipsis, faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/BottomNav.css";

const BottomNav = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleNavClick = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <div className="bottom-nav">
      <div 
        className={`nav-item ${activeTab === "Campaigns" ? "active" : ""}`} 
        onClick={() => handleNavClick("Campaigns", "/")}
      >
        <FontAwesomeIcon icon={faBullhorn} />
        <span>Campaigns</span>
      </div>
      <div 
        className={`nav-item ${activeTab === "Messages" ? "active" : ""}`} 
        onClick={() => handleNavClick("Messages", "/messages")}
      >
        <FontAwesomeIcon className="message" icon={faEllipsis} />
        <span>Messages</span>
      </div>
      <div 
        className={`nav-item ${activeTab === "Profile" ? "active" : ""}`} 
        onClick={() => handleNavClick("Profile", "/profile")}
      >
        <FontAwesomeIcon  className="profile" icon={faUser} />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default BottomNav;
