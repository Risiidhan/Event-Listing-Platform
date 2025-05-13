"use client"

import React from 'react'
import AutoCompleteComponent from './AutoCompleteComponent';
import DatePickerComponent from './DatePickerComponent';
import { useEventContext } from '@/context/EventContext';

interface Props {
    formData: any;
    setFormData: (val: any) => void;
    locationList: string[];
    eventNameList: string[];
}
const SearchInputComponent = () => {
    const {
        eventNameList,
        locationList,
        formData,
        setFormData
    } = useEventContext();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white/40 backdrop-blur-md gap-2  rounded-lg p-4 shadow-md w-full mx-auto'>
            <div className="flex items-center w-full text-gray-800 font-medium">
                <AutoCompleteComponent label={"Search Event"} keyName={"eventName"} list={eventNameList} value={formData?.eventName} formData={formData} setFormData={setFormData} />
            </div>
            <div className="flex items-center w-full text-gray-800 font-medium">
                <AutoCompleteComponent label={"Search Location"} keyName={"location"} list={[...new Set(locationList as string[])]} value={formData?.location} formData={formData} setFormData={setFormData} />
            </div>
            <div className="flex items-end w-full gap-2">
                <div className="flex items-center  text-gray-800 font-medium">
                    <DatePickerComponent label={"Search Location"} keyName={"date"} value={formData?.date} formData={formData} setFormData={setFormData} />
                </div>
                <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchInputComponent