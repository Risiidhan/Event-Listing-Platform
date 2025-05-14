"use client"

import React, { useEffect, useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerComponent = ({ setFormData, formData }: any) => {
      const [isMounted, setIsMounted] = useState(false);
    
        useEffect(() => {
            setIsMounted(true);
        }, []);
    
        if (!isMounted) return null;
        
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer  sx={{ padding: 0, width: "100%", overflow: "hidden" }} components={['DatePicker']}>
                <DatePicker className='w-full'
                    value={formData.date || null}
                    onChange={(newValue) =>
                        setFormData({ ...formData, date: newValue })
                    }
                    label="Pick a date"
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
                        actionBar: {
                            actions: ['clear', 'accept'], // show "Clear" and "OK" buttons
                        },
                    }} />
            </DemoContainer>
        </LocalizationProvider>
    )
}

export default DatePickerComponent