import React, { useState } from "react";
import "../styles/Messages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faEllipsis,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MessagesPage = () => {

  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("All");


  return (
    <div>
      <div className="messages-container header">
        <div className="header-top msg-top">
          <div className="inbox">
            <h2>Inbox</h2>
          </div>
          <div className="header-icons">
            <div
              className="header-icons"
              
            >
              <FontAwesomeIcon onClick={() => navigate("/")} icon={faBullhorn} className="nav-icon" />
            </div>
            <div className="header-icons" >
              <FontAwesomeIcon onClick={() => navigate("/messages")} icon={faEllipsis} className="nav-icon message" />
            </div>
            <div className="header-icons" >
              <FontAwesomeIcon onClick={() => navigate("/profile")} icon={faUser} className="nav-icon" />
            </div>
            <div>
              <FontAwesomeIcon icon={faBell} className="icon" />
            </div>
          </div>
        </div>

        <div className="messages-tabs">
          <span
            className={`message-tab ${
              currentTab === "All" ? "active-msg-tab" : ""
            }`}
            onClick={() => setCurrentTab("All")}
          >
            All
          </span>
          <span
            className={`message-tab ${
              currentTab === "Unread" ? "active-msg-tab" : ""
            }`}
            onClick={() => setCurrentTab("Unread")}
          >
            Unread
          </span>
        </div>
      </div>
      <div className="message-bg">
        <img src="/msg-bg.png" alt="" />
        <h3>No messages yet</h3>
        <div>All your hired campaigns group chats will be shown here</div>
      </div>
    </div>
  );
};

export default MessagesPage;
