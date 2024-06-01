import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

const SideNav = ({ isOpen, toggleNav }) => {
  return (
    <div className={`sidenav ${isOpen ? 'open' : ''}`}>
      <a href="javascript:void(0)" className="closebtn" onClick={toggleNav}>&times;</a>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
    </div>
  );
};

export default SideNav;
