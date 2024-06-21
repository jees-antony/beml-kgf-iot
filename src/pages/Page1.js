// src/pages/Page1.js
import React, { useState, useEffect } from 'react';
import LineChart from '../components/LineChart';
import Cards from '../components/Cards';
import Button from '../components/Button'; // Import Button component
import DateTimePickerComponent from '../components/DateTimePickerComponent';

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
  { name: 'Right Sound', value: '60%' },
  { name: 'Right Speed', value: '101.3 kPa' },
  { name: 'Left Temperature', value: '15 km/h' },
  { name: 'Left Sound', value: '10 km' },
  { name: 'Left Speed', value: '40%' },
  { name: 'Middle Sound', value: '12 °C' },
  { name: 'Middle Temperature', value: '5' },
  // Add more cards as needed
];
  const handleClick = () => {
    alert('Button Clicked');
  }

  return (
    <div>
      <Cards cards={cardsData} />
      <h5>Line Chart with Events</h5>
      <DateTimePickerComponent label="Start DateTime:" defaultDateTime={startDateTime} onChange={setStartDateTime} />
      <DateTimePickerComponent label="End DateTime:" defaultDateTime={endDateTime} onChange={setEndDateTime} />
      <Button text="6 Hours" onClick={handleClick}/>
      <Button text="1 Hour" onClick={handleClick}/>
      <LineChart data={data} events={events}/>
    </div>
  );
};

export default Page1;

