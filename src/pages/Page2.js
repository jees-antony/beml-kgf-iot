// src/pages/Page2.js
import React from 'react';
import TableComponent from '../components/TableComponent';

const Page2 = () => {
  const data = [
    { datetime: '2024-06-01T08:00', rightTemperature: 22.5, rightSound: 55, rightSpeed: 1500, middleTemperature: 23.0, middleSound: 50, leftTemperature: 22.5, leftSound: 55, leftSpeed: 1500 },
    { datetime: '2024-06-01T09:00', rightTemperature: 23.0, rightSound: 56, rightSpeed: 1550, middleTemperature: 23.5, middleSound: 51, leftTemperature: 23.0, leftSound: 56, leftSpeed: 1550 },
    { datetime: '2024-06-01T10:00', rightTemperature: 23.5, rightSound: 57, rightSpeed: 1600, middleTemperature: 24.0, middleSound: 52, leftTemperature: 23.5, leftSound: 57, leftSpeed: 1600 },
    { datetime: '2024-06-01T11:00', rightTemperature: 24.0, rightSound: 58, rightSpeed: 1650, middleTemperature: 24.5, middleSound: 53, leftTemperature: 24.0, leftSound: 58, leftSpeed: 1650 },
    { datetime: '2024-06-01T12:00', rightTemperature: 24.5, rightSound: 59, rightSpeed: 1700, middleTemperature: 25.0, middleSound: 54, leftTemperature: 24.5, leftSound: 59, leftSpeed: 1700 },
    { datetime: '2024-06-01T13:00', rightTemperature: 25.0, rightSound: 60, rightSpeed: 1750, middleTemperature: 25.5, middleSound: 55, leftTemperature: 25.0, leftSound: 60, leftSpeed: 1750 },
    { datetime: '2024-06-01T14:00', rightTemperature: 25.5, rightSound: 61, rightSpeed: 1800, middleTemperature: 26.0, middleSound: 56, leftTemperature: 25.5, leftSound: 61, leftSpeed: 1800 },
    { datetime: '2024-06-01T15:00', rightTemperature: 26.0, rightSound: 62, rightSpeed: 1850, middleTemperature: 26.5, middleSound: 57, leftTemperature: 26.0, leftSound: 62, leftSpeed: 1850 },
    { datetime: '2024-06-01T16:00', rightTemperature: 26.5, rightSound: 63, rightSpeed: 1900, middleTemperature: 27.0, middleSound: 58, leftTemperature: 26.5, leftSound: 63, leftSpeed: 1900 },
    { datetime: '2024-06-01T17:00', rightTemperature: 27.0, rightSound: 64, rightSpeed: 1950, middleTemperature: 27.5, middleSound: 59, leftTemperature: 27.0, leftSound: 64, leftSpeed: 1950 },
    { datetime: '2024-06-01T18:00', rightTemperature: 27.5, rightSound: 65, rightSpeed: 2000, middleTemperature: 28.0, middleSound: 60, leftTemperature: 27.5, leftSound: 65, leftSpeed: 2000 },
    { datetime: '2024-06-01T19:00', rightTemperature: 28.0, rightSound: 66, rightSpeed: 2050, middleTemperature: 28.5, middleSound: 61, leftTemperature: 28.0, leftSound: 66, leftSpeed: 2050 },
    { datetime: '2024-06-01T20:00', rightTemperature: 28.5, rightSound: 67, rightSpeed: 2100, middleTemperature: 29.0, middleSound: 62, leftTemperature: 28.5, leftSound: 67, leftSpeed: 2100 },
    { datetime: '2024-06-01T21:00', rightTemperature: 29.0, rightSound: 68, rightSpeed: 2150, middleTemperature: 29.5, middleSound: 63, leftTemperature: 29.0, leftSound: 68, leftSpeed: 2150 },
    { datetime: '2024-06-01T22:00', rightTemperature: 29.5, rightSound: 69, rightSpeed: 2200, middleTemperature: 30.0, middleSound: 64, leftTemperature: 29.5, leftSound: 69, leftSpeed: 2200 },
    { datetime: '2024-06-01T23:00', rightTemperature: 30.0, rightSound: 70, rightSpeed: 2250, middleTemperature: 30.5, middleSound: 65, leftTemperature: 30.0, leftSound: 70, leftSpeed: 2250 },
    { datetime: '2024-06-02T00:00', rightTemperature: 30.5, rightSound: 71, rightSpeed: 2300, middleTemperature: 31.0, middleSound: 66, leftTemperature: 30.5, leftSound: 71, leftSpeed: 2300 },
    { datetime: '2024-06-02T01:00', rightTemperature: 31.0, rightSound: 72, rightSpeed: 2350, middleTemperature: 31.5, middleSound: 67, leftTemperature: 31.0, leftSound: 72, leftSpeed: 2350 },
    { datetime: '2024-06-02T02:00', rightTemperature: 31.5, rightSound: 73, rightSpeed: 2400, middleTemperature: 32.0, middleSound: 68, leftTemperature: 31.5, leftSound: 73, leftSpeed: 2400 },
    { datetime: '2024-06-02T03:00', rightTemperature: 32.0, rightSound: 74, rightSpeed: 2450, middleTemperature: 32.5, middleSound: 69, leftTemperature: 32.0, leftSound: 74, leftSpeed: 2450 }
  ];


  return (
    <div>
      <h1>Data Table</h1>
      <TableComponent data={data} />
    </div>
  );
};

export default Page2;
