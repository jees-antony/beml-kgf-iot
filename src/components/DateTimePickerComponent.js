import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';  // Add this import
import './DateTimePickerComponent.css';

const DateTimePickerComponent = ({ label, defaultDateTime, onChange }) => {
  const [value, setValue] = React.useState(dayjs(defaultDateTime));

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} className="custom-date-time-picker"/>}  // Make sure TextField is imported
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
