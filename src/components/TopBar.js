// src/components/TopBar.js
import React from 'react';
import { FaCog, FaBell, FaBars } from 'react-icons/fa';
import './TopBar.css';

const TopBar = ({ toggleNav }) => {
  return (
    <div className="top-bar">
      <FaBars className="hamburger-menu" onClick={toggleNav} />
      <div className="icons-container">
        <FaBell className="icon" />
        {/* <FaCog className="icon" /> */}
      </div>
    </div>
  );
};

export default TopBar;
