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
  const [cardsData, setCardsData] = useState([
    { name: 'Right Temperature', value: '0.0 °C' },
    { name: 'Right Sound', value: '0.0 dB' },
    { name: 'Right Speed', value: '0.0 rpm' },
    { name: 'Left Temperature', value: '0.0 °C' },
    { name: 'Left Sound', value: '0.0 dB' },
    { name: 'Left Speed', value: '0.0 rpm' },
    { name: 'Middle Sound', value: '0.0 dB' },
    { name: 'Middle Temperature', value: '0.0 °C' },
    // Add more cards as needed
  ]);

  useEffect(() => {
    const currentTime = new Date();
    setStartDateTime(currentTime);

    const threeHoursAgo = new Date(currentTime.getTime() - 3 * 60 * 60 * 1000);
    setEndDateTime(threeHoursAgo);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/real-time-data/');
      const data = await response.json();
      const plcData = data[0].payload.plc_data;

      setCardsData(prevCardsData =>
        prevCardsData.map(card => {
          switch (card.name) {
            case 'Right Temperature':
              return { ...card, value: `${plcData.R_tem} °C` };
            case 'Right Sound':
              return { ...card, value: `${plcData.R_sou} dB` };
            case 'Right Speed':
              return { ...card, value: `${plcData.R_spee} rpm` };
            case 'Left Temperature':
              return { ...card, value: `${plcData.L_tem} °C` };
            case 'Left Sound':
              return { ...card, value: `${plcData.L_sou} dB` };
            case 'Left Speed':
              return { ...card, value: `${plcData.L_spee} rpm` };
            case 'Middle Sound':
              return { ...card, value: `${plcData.M_sou} dB` };
            case 'Middle Temperature':
              return { ...card, value: `${plcData.M_tem} °C` };
            default:
              return card;
          }
        })
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  useEffect(() => {
    fetchData()
    
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
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

