import React from 'react'

const EventComponent = ({ event }: { event: any }) => {
    return (
        <div
            key={event?.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
        >
            <img
                src={event?.image_url}
                alt={event?.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
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
                <p className="text-gray-700 mt-2">{event?.description}</p>
                <p className="text-sm mt-2 text-blue-600 font-medium">
                    Type: {event?.type}
                </p>
            </div>
        </div>
    )
}

export default EventComponent