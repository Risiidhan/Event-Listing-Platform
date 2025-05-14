
import React from 'react'
import TimerComponent from '../../common/TimerComponent'
import FallBackImgComponent from '../../common/FallBackImgComponent'
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6'

const EventComponent = ({ event }: { event: any }) => {
    return (
        <div className="bg-white flex flex-col rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
            <FallBackImgComponent
                width={800}
                height={800}
                src={event?.image_url}
                alt={event?.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-[6px] flex-1">
                <h2 className="text-xl font-bold">{event?.title}</h2>
                <p className="text-sm flex gap-1 items-center text-gray-600">
                   <FaLocationDot/>
                    {event?.location}
                </p>
                <p className="text-sm flex gap-1 items-center text-gray-600">
                    <FaCalendarDays />
                    {new Date(event?.starts_at).toLocaleDateString()} -{" "}
                    {new Date(event?.expires_at).toLocaleDateString()}
                </p>

                <p className="text-gray-700 flex-1">{event?.description}</p>
                <div className="text-gray-700"><TimerComponent event={event} /></div>
                <p className="text-sm text-gray-700 border-1 rounded-full w-fit px-2 py-[2px] font-medium">
                    {event?.type}
                </p>
            </div>
        </div>
    )
}

export default EventComponent