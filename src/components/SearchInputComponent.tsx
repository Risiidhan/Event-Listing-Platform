"use client"

import React from 'react'

const SearchInputComponent = () => {
    return (
        <div className="flex items-center bg-white/40 backdrop-blur-md rounded-lg p-4 justify-between shadow-md w-full max-w-5xl mx-auto gap-6 flex-wrap">
            {/* Search Events */}
            <div className="flex items-center gap-2 text-gray-800 font-medium">
                <label htmlFor="eventSearch">
                    <i className="fas fa-search"></i>
                </label>
                <input
                    id="eventSearch"
                    type="text"
                    placeholder="Search events"
                    className="bg-transparent outline-none placeholder-gray-600"
                />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-800 font-medium">
                <label htmlFor="locationInput">
                    <i className="fas fa-map-marker-alt"></i>
                </label>
                <input
                    id="locationInput"
                    type="text"
                    placeholder="Enter location"
                    className="bg-transparent outline-none placeholder-gray-600"
                />
            </div>

            {/* Date Picker and Search Button */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-800 font-medium">
                    <label htmlFor="datePicker">
                        <i className="far fa-calendar-alt"></i>
                    </label>
                    <input
                        id="datePicker"
                        type="date"
                        className="bg-transparent outline-none text-gray-700"
                    />
                </div>
                <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchInputComponent