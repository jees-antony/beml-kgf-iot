// src/pages/Page1.js
import React from 'react';
import LineChart from '../components/LineChart';
import Cards from '../components/Cards';

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

const cardsData = [
  { name: 'Temperature', value: '25.6 °C' },
  { name: 'Humidity', value: '60%' },
  { name: 'Pressure', value: '101.3 kPa' },
  { name: 'Wind Speed', value: '15 km/h' },
  { name: 'Visibility', value: '10 km' },
  { name: 'Cloud Cover', value: '40%' },
  { name: 'Dew Point', value: '12 °C' },
  { name: 'UV Index', value: '5' },
  { name: 'Air Quality', value: 'Good' },
  // Add more cards as needed
];

  return (
    <div>
      <Cards cards={cardsData} />
      <h5>Line Chart with Events</h5>
      <LineChart data={data} events={events}/>
    </div>
  );
};

export default Page1;

