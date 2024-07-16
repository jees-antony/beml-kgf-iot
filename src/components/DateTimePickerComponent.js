import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './DateTimePickerComponent.css'; // Add this line to import your custom CSS

const DateTimePickerComponent = ({ defaultValue, label, onChange }) => {
  const [value, setValue] = React.useState(dayjs(defaultValue));

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className="datetime-picker-box"> {/* Apply your custom class here */}
        <DateTimePicker
          label={label}
          slotProps={{ textField: { size: 'small' } }}
          value={value}
          onChange={handleChange}
          renderInput={(props) => <TextField {...props}/>}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
