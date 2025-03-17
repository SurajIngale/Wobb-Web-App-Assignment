import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faEllipsis, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell, faFilter } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import "../styles/HeaderMediaQuery.css";
import { useNavigate } from "react-router-dom";

const Header = ({ onFilterClick, onTabChange, currentTab }) => {
  const navigate = useNavigate();
  const tabs = ["All", "Applied", "Hired", "Closed"];

  return (
    <header className="header">
      {/* Top Section: Greeting & Notification Icon */}
      <div className="header-top">
        <h2 className="greeting">Hi, Woober</h2>
        <div className="head-icon">
        <div className="header-icons">
         <div className="header-icons" onClick={() => navigate("/")}>
                <FontAwesomeIcon icon={faBullhorn} className="nav-icon" />
              </div>
              <div className="header-icons" >
                <FontAwesomeIcon onClick={() => navigate("/messages")} icon={faEllipsis} className="nav-icon message" />
              </div>
              <div className="header-icons" >
                <FontAwesomeIcon onClick={() => navigate("/profile")} icon={faUser} className="nav-icon" />
              </div>
        
         </div>
         <div>
         <FontAwesomeIcon icon={faBell} className="icon" />
         </div>
        </div>
      </div>

      {/* Bottom Section: Filter Icon & Tabs */}
      <div className="header-bottom">
        <FontAwesomeIcon icon={faFilter} className="filter-icon" onClick={onFilterClick} />
        <div className="tabs">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={`tab ${currentTab === tab ? "active-tab" : ""}`}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
