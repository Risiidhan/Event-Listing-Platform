import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerComponent = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{padding:0}} components={['DatePicker']}>
                <DatePicker label="Pick a date"
                    slotProps={{
                        
                        textField: {
                            variant: 'standard',
                            InputProps: {
                                disableUnderline: true,
                                sx: {
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    paddingX: 0,
                                    overflow: "hidden"
                                },
                            },
                           
                        },
                    }} />
            </DemoContainer>
        </LocalizationProvider>
    )
}

export default DatePickerComponent