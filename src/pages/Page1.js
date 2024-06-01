// src/pages/Page1.js
import React from 'react';
import LineChart from '../components/LineChart';

const Page1 = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    param1: [65, 59, 80, 81, 56, 55],
    param2: [28, 48, 40, 19, 86, 27],
    param3: [35, 29, 50, 71, 46, 35],
  };
const events = [
  { x: 'Mar', y: 30, label: 'Event 1', color: 'red', size: 12, symbol: 'star' },
  { x: 'Apr', y: 45, label: 'Event 2', color: 'blue', size: 10, symbol: 'triangle-up' },
];
  return (
    <div>
      <h1>Line Chart with Events</h1>
      <LineChart data={data} events={events}/>
    </div>
  );
};

export default Page1;

