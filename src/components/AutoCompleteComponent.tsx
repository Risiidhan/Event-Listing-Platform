"use client"

import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const AutoCompleteComponent = ({ list, value, setFormData, formData, label, keyName }: any) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Autocomplete
            options={list || []}
            className='w-full'
            value={value || ''}
            onChange={(e, newValue) =>
                setFormData({ ...formData, [keyName]: newValue || '' })
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    variant="standard"
                    InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        className: 'bg-transparent placeholder-gray-600',
                    }}
                />
            )}
        />
    );
};

export default AutoCompleteComponent