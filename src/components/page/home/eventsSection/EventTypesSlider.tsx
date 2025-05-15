import { useEventContext } from '@/context/EventContext';
import React from 'react';

const EventTypesSlider = () => {
    const { eventTypes, setFormData, formData } = useEventContext();

    return (
        <div className="overflow-x-auto mt-[20px] w-full hide-scrollbar">
            <div className="flex gap-2 w-max py-2">
                {eventTypes.map((item: string, index: number) => (
                    <div
                        onClick={()=> setFormData({ ...formData, type: item || '' })}
                        key={index}
                        className={`border text-[14px] p-2 min-w-[100px] text-center rounded-lg ${formData.type == item ? "bg-[#58585B] text-white" : "bg-white text-[#58585B] border-[#58585B]"} hover:scale-105 whitespace-nowrap cursor-pointer transition`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventTypesSlider;
