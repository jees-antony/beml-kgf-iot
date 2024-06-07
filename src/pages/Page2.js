// src/pages/Page2.js
import React from 'react';
import TableComponent from '../components/TableComponent';

const Page2 = () => {
  const data = [
    { name: 'Temperature', parameter: '25.6 °C', description: 'Room Temperature' },
    { name: 'Humidity', parameter: '60%', description: 'Room Humidity' },
    { name: 'Pressure', parameter: '1013 hPa', description: 'Atmospheric Pressure' },
    // Add more rows as needed
  ];

  return (
    <div>
      <h1>Data Table</h1>
      <TableComponent data={data} />
    </div>
  );
};

export default Page2;
