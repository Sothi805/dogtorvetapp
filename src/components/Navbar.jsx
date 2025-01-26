import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.less";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("1"); // Fixed typo here

  const handleActive = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <ul>
      <img onClick={() => navigate("/home")} src="vite.svg" alt="logo" />
      <li
        onClick={() => {
          navigate("/home");
          handleActive("1");
        }}
        className={activeTab === "1" ? "active" : ""}
      >
        Dashboard
      </li>
      <li
        onClick={() => {
          navigate("/home/pet-register");
          handleActive("2");
        }}
        className={activeTab === "2" ? "active" : ""}
      >
        Pet Register
      </li>
    </ul>
  );
};

export default Navbar;
