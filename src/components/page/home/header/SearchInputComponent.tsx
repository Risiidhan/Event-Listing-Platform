"use client"

import React from 'react'
import AutoCompleteComponent from '../../../common/AutoCompleteComponent';
import DatePickerComponent from '../../../common/DatePickerComponent';
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
        eventTypes,
        formData,
        setFormData
    } = useEventContext();

    const handleClear = () => {
        setFormData({
            eventName: "",
            location: "",
            date: null,
            type: ""
        });
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bg-white/40 backdrop-blur-md gap-2  rounded-lg p-4 shadow-md w-full mx-auto'>
            <div className="flex items-center w-full text-gray-800 font-medium">
                <AutoCompleteComponent label={"Search Event"} keyName={"eventName"} list={eventNameList} value={formData?.eventName} formData={formData} setFormData={setFormData} />
            </div>
            <div className="flex items-center w-full text-gray-800 font-medium">
                <AutoCompleteComponent label={"Search Location"} keyName={"location"} list={[...new Set(locationList as string[])]} value={formData?.location} formData={formData} setFormData={setFormData} />
            </div>
            <div className="flex items-center w-full text-gray-800 font-medium">
                <AutoCompleteComponent label={"Search Type"} keyName={"type"} list={[...new Set(eventTypes as string[])]} value={formData?.type} formData={formData} setFormData={setFormData} />
            </div>
            <div className="flex items-center  text-gray-800 font-medium">
                <DatePickerComponent label={"Search Location"} keyName={"date"} value={formData?.date} formData={formData} setFormData={setFormData} />
            </div>
            <button onClick={handleClear} className="bg-blue-600 cursor-pointer active:scale-95 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                Clear All
            </button>
        </div>
    )
}

export default SearchInputComponent