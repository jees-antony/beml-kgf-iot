import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
// import './DateTimePickerComponent.css';

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
        renderInput={(params) => <TextField {...params} sx={{
          margin: '20px',
          padding: '10px',
          '& .MuiOutlinedInput-root': {
            margin: '10px',
            padding: '10px',
          },
          '& .MuiInputBase-root': {
            margin: '10px',
            padding: '10px',
          },
          '& .MuiInputBase-input': {
            fontSize: '14px',
            padding: '10px',
          },
        }} />}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
