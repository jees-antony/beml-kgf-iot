// src/pages/Page1.js
import React, { useState, useEffect } from 'react';
import LineChart from '../components/LineChart';
import Cards from '../components/Cards';
import Button from '../components/Button'; // Import Button component
import DateTimePickerComponent from '../components/DateTimePickerComponent';
import './Page1.css';
// import DateTimeRangePickerComponent from '../components/DateTimeRangePickerComponent';

const Page1 = () => {
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date(Date.now() - 3 * 60 * 60 * 1000));

  useEffect(() => {
    const currentTime = new Date();
    setStartDateTime(currentTime);

    const threeHoursAgo = new Date(currentTime.getTime() - 3 * 60 * 60 * 1000);
    setEndDateTime(threeHoursAgo);
  }, []);

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
  { name: 'Right Temperature', value: '25.6 °C' },
  { name: 'Right Sound', value: '63 dB' },
  { name: 'Right Speed', value: '250 rpm' },
  { name: 'Left Temperature', value: '35.2 °C' },
  { name: 'Left Sound', value: '56 dB' },
  { name: 'Left Speed', value: '250 rpm' },
  { name: 'Middle Sound', value: '52 dB' },
  { name: 'Middle Temperature', value: '35.2 °C' },
  // Add more cards as needed
];
  const handleClick = () => {
    alert('Button Clicked');
  }

  return (
    <div className='dashboard'>
      <Cards cards={cardsData} />
      <div className="chart-container">
        <div className="controls-container">
          <DateTimePickerComponent label="Start DateTime:" defaultDateTime={startDateTime} onChange={setStartDateTime} />
          <DateTimePickerComponent label="End DateTime:" defaultDateTime={endDateTime} onChange={setEndDateTime} />
          <Button text="6 Hours" onClick={handleClick}/>
          <Button text="1 Hour" onClick={handleClick}/>
        </div>
        <LineChart data={data} events={events}/>
        </div>
      </div>
  );
};

export default Page1;

