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
            type: "",
            category: "Ongoing"
        });
    }
    return (
        <div className='flex flex-col lg:flex-row items-center md:h-[60px] gap-4 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-[4px]  rounded-lg shadow-md w-full mx-auto'>
                <div className="flex items-center w-full bg-white py-[6px] px-[6px] rounded-lg md:rounded-l-lg lg:rounded-r-none text-gray-800 font-medium">
                    <AutoCompleteComponent label={"Search Event"} keyName={"eventName"} list={eventNameList} value={formData?.eventName} formData={formData} setFormData={setFormData} />
                </div>
                <div className="flex items-center w-full bg-white rounded-lg md:rounded-r-lg lg:rounded-none py-[8px] px-[6px] text-gray-800 font-medium">
                    <AutoCompleteComponent label={"Search Location"} keyName={"location"} list={[...new Set(locationList as string[])]} value={formData?.location} formData={formData} setFormData={setFormData} />
                </div>
                <div className="flex items-center w-full bg-white rounded-lg md:rounded-l-lg lg:rounded-none py-[8px] px-[6px] text-gray-800 font-medium">
                    <AutoCompleteComponent label={"Search Event Type"} keyName={"type"} list={[...new Set(eventTypes as string[])]} value={formData?.type} formData={formData} setFormData={setFormData} />
                </div>
                <div className="flex items-center w-full bg-white pt-[2px] px-[6px] rounded-lg md:rounded-r-lg lg:rounded-l-none text-gray-800 font-medium">
                    <DatePickerComponent label={"Search Location"} keyName={"date"} value={formData?.date} formData={formData} setFormData={setFormData} />
                </div>

            </div>
            <button
                onClick={handleClear}
                className="bg-blue-600 w-full lg:w-fit h-[50px] sm:h-full px-4 py-1 cursor-pointer active:scale-95 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
                Clear
            </button>
        </div>
    )
}

export default SearchInputComponent