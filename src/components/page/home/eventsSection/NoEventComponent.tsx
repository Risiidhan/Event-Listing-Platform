import { useEventContext } from '@/context/EventContext';
import React from 'react'
import Image from 'next/image';

const NoEventComponent = () => {
    const {
        formData,
    } = useEventContext();

    const values = [];
    if (formData.eventName) values.push(`Event Name: "${formData.eventName}"`);
    if (formData.type) values.push(`Type: "${formData.type}"`);
    if (formData.location) values.push(`Location: "${formData.location}"`);
    if (formData.date) {
        const formattedDate = new Date(formData.date).toLocaleDateString();
        values.push(`Date: "${formattedDate}"`);
    }

    return (
        <div className="text-center flex flex-col w-full justify-center shadow-md rounded-lg p-4 text-gray-600 mt-8">
            <div className='w-full flex justify-center'>
                <Image
                    className="object-cover  w-[40%]"
                    src="/img/no-event.jpg"
                    alt="banner"
                    height={8000}
                    width={8000}
                />
            </div>
            <p className="text-lg font-semibold">No events found for this category &nbsp;</p>
            {/* <p className="text-lg font-semibold">No events found for the selected &nbsp;
                {values.length > 0 && (
                    values.join(', ')
                )}
            </p> */}
        </div>
    );
}

export default NoEventComponent