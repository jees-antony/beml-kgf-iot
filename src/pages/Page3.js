// src/pages/Page3.js
import React from 'react';
import AlertComponent from '../components/AlertComponent';

const Page3 = () => {
  const alerts = [
    { title: 'Info Alert', message: 'This is an info alert.', type: 'info' },
    { title: 'Warning Alert', message: 'This is a warning alert.', type: 'warning' },
    { title: 'Error Alert', message: 'This is an error alert.', type: 'error' },
    // Add more alerts as needed
  ];

  return (
    <div>
      <h1>Alerts</h1>
      <AlertComponent alerts={alerts} />
    </div>
  );
};

export default Page3;
