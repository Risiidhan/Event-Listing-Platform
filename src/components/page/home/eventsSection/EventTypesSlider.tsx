import { useEventContext } from '@/context/EventContext';
import React from 'react';

const EventTypesSlider = () => {
    const { eventTypes, setFormData, formData } = useEventContext();

    return (
        <div className="overflow-x-auto mt-[20px] w-full hide-scrollbar">
            <div className="flex gap-2 w-max px-2 py-2">
                {eventTypes.map((item: string, index: number) => (
                    <div
                        onClick={()=> setFormData({ ...formData, type: item || '' })}
                        key={index}
                        className={`border p-2 min-w-[100px] text-center rounded-lg ${formData.type == item ? "bg-black text-white" : "bg-white"}  whitespace-nowrap shadow-sm  cursor-pointer transition`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventTypesSlider;
