// src/components/TimePickerComponent.js
import React, { useState, useEffect } from 'react';
import TimePicker from 'react-time-picker';
import './TimePickerComponent.css'; // Create and import this CSS file for styling

const TimePickerComponent = ({ label, defaultTime, onChange }) => {
  const [time, setTime] = useState(defaultTime);

  useEffect(() => {
    setTime(defaultTime);
  }, [defaultTime]);

  const handleChange = (newTime) => {
    setTime(newTime);
    onChange(newTime);
  };

  return (
    <div className="time-picker-container">
      <label>{label}</label>
      <TimePicker
        onChange={handleChange}
        value={time}
        disableClock={true}
        clearIcon={null}
        clockIcon={null}
      />
    </div>
  );
};

export default TimePickerComponent;
