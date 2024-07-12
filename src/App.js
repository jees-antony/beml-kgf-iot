// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import TopBar from './components/TopBar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import './App.css'; // Create and import this CSS file to handle the main content margin
import bemllogo from './assets/beml-logo.png';

const App = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div>
      <TopBar toggleNav={toggleNav} logoSrc={bemllogo} />
        <SideNav isOpen={isOpen} toggleNav={toggleNav} />
        <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route exact path="/" element={<Page1 />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
