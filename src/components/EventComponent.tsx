import React from 'react'
import TimerComponent from './TimerComponent'

const EventComponent = ({ event }: { event: any }) => {
    return (
        <div className="bg-white flex flex-col rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
            <img
                src={event?.image_url}
                alt={event?.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-2">{event?.title}</h2>
                <p className="text-sm text-gray-600 mb-1">
                    <i className="fas fa-map-marker-alt mr-1" />
                    {event?.location}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                    <i className="far fa-calendar-alt mr-1" />
                    {new Date(event?.starts_at).toLocaleDateString()} -{" "}
                    {new Date(event?.expires_at).toLocaleDateString()}
                </p>

                {/* Stretch to take up all remaining space */}
                <p className="text-gray-700 mt-2 flex-1">{event?.description}</p>
                <p className="text-gray-700 mt-2"><TimerComponent event={event} /></p>
                <p className="text-sm text-gray-700 mt-2 border-1 rounded-full w-fit px-2 py-[2px] font-medium">
                    {event?.type}
                </p>
            </div>
        </div>
    )
}

export default EventComponent