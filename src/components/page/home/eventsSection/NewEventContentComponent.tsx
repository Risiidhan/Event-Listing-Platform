import FallBackImgComponent from '@/components/common/FallBackImgComponent'
import TimerComponent from '@/components/common/TimerComponent'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const NewEventContentComponent = ({ event }: { event: any }) => {
    return (
        <div className=" flex flex-col relative rounded-xl  overflow-hidden transition ">
            <FallBackImgComponent
                width={800}
                height={800}
                src={event?.image_url}
                alt={event?.title}
                className="w-full rounded-2xl h-48 object-cover"
            />
            <div className="p-[12px] flex flex-col gap-[6px] flex-1">
                <h2 className="text-[18px] font-semibold text-gray-600">{event?.title}</h2>
                <p className="text-[14px] flex gap-1 items-center text-gray-600">
                    <FaLocationDot />
                    {event?.location} | {new Date(event?.starts_at).toLocaleDateString()} -{" "}
                    {new Date(event?.expires_at).toLocaleDateString()}
                </p>
                
                <p className="text-gray-700 text-[14px] flex-1">{event?.description}</p>
                <div className="text-gray-700"><TimerComponent event={event} /></div>
                <div className="text-sm absolute top-[12px] left-[12px] bg-white text-gray-700 border-1 rounded-full w-fit px-2 py-[2px] font-medium">
                    {event?.type}
                </div>
            </div>
        </div>
    )
}

export default NewEventContentComponent