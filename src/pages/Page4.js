// src/pages/Page4.js
import React from 'react';
import ReportTable from '../components/ReportTable';
import logo from '../assets/logo.png'; // Ensure you have a logo image in the specified path

const Page4 = () => {
  return (
    <div>
      <h1>Advanced Table with Logo</h1>
      <ReportTable logo={logo} />
    </div>
  );
};

export default Page4;
