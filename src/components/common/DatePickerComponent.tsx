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
        // <LocalizationProvider dateAdapter={AdapterDayjs}>
        //     <DemoContainer components={['DatePicker']} sx={{ padding: "4px", width: "100%", overflow: "hidden" }}>
        //         <DatePicker className='bg-white rounded-lg' label={"Basic date picker"}
        //             onChange={(newValue) =>
        //                 setFormData({ ...formData, date: newValue })
        //             }
        //             slotProps={{
        //                 actionBar: {
        //                     actions: ['clear', 'accept'], // show "Clear" and "OK" buttons
        //                 },
        //             }}
        //         />
        //     </DemoContainer>
        // </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{ padding: "4px", width: "100%", overflow: "hidden" }} components={['DatePicker']}>
                <DatePicker className='w-full'
                    sx={{
                        "& .css-lqwr9g-MuiPickersOutlinedInput-notchedOutline": {
                            border: "none"
                        },
                        "& .css-vycme6-MuiPickersInputBase-root-MuiPickersOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiPickersOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "& .css-113d811-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                            padding: "2px 0px",
                        },
                        "& .css-113d811-MuiFormLabel-root-MuiInputLabel-root": {
                            padding: "2px 0px",
                        }
                    }
                    }
                    value={formData.date || null}
                    onChange={(newValue) =>
                        setFormData({ ...formData, date: newValue })
                    }
                    label={formData.date ? "": "Pick a date"  }
                    slotProps={{
                        actionBar: {
                            actions: ['clear', 'accept'], // show "Clear" and "OK" buttons
                        },

                    }} />

            </DemoContainer>
        </LocalizationProvider>
    )
}

export default DatePickerComponent