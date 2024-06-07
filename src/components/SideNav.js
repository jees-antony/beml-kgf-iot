import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

const SideNav = ({ isOpen, toggleNav }) => {
  return (
    <div className={`sidenav ${isOpen ? 'open' : ''}`}>
      <span className="closebtn" onClick={toggleNav}>&times;</span>
      <Link to="/page1">Dash</Link>
      <Link to="/page2">Table</Link>
      <Link to="/page3">Notif</Link>
      <Link to="/page4">Report</Link>
    </div>
  );
};

export default SideNav;
