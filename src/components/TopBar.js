// src/components/TopBar.js
import React from 'react';
import { FaSearch, FaCog, FaBell } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <FaSearch className="search-icon" />
      </div>
      <div className="icons-container">
        <FaBell className="icon" />
        <FaCog className="icon" />
      </div>
    </div>
  );
};

export default TopBar;
