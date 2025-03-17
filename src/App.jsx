import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MessagesPage from "./components/Messages";
import BottomNav from "./components/BottomNav";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <BottomNav activeTab="Campaigns" setActiveTab={() => {}} />
    </Router>
  );
};

export default App;
