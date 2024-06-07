// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import TopBar from './components/TopBar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import './App.css'; // Create and import this CSS file to handle the main content margin

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div>
        <Navbar toggleNav={toggleNav} />
        <SideNav isOpen={isOpen} toggleNav={toggleNav} />
        <TopBar/>
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
