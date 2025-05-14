"use client"

import React, { useEffect, useState } from 'react';
import { Autocomplete, Stack, TextField } from '@mui/material';

const AutoCompleteComponent = ({ list, value, setFormData, formData, label, keyName }: any) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (

        <Stack spacing={2} sx={{ width: "100%" }}>
            <Autocomplete
                className='bg-white rounded-lg'
                options={list || []}
                renderInput={(params) => <TextField {...params} label={value ? "" : label} />}
                value={value || ''}
                onChange={(e, newValue) =>
                    setFormData({ ...formData, [keyName]: newValue || '' })
                }
            />
        </Stack>
    );
};

export default AutoCompleteComponent