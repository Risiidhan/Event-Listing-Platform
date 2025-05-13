"use client"

import HomeHeaderComponent from './HomeHeaderComponent';
import CategoryDropDownComponent from './CategoryDropDownComponent';
import EventListComponent from './EventListComponent';
import { useEffect, useState } from 'react';
import { useEventContext } from '@/context/EventContext';

const API_URL = 'https://68148b33225ff1af16292eee.mockapi.io/api/v1/events';
const categories: string[] = ["Upcoming", "Ongoing", "Expired"];

const HomeSectionComponent = () => {
    const {
        selectedCategory,
        setLocationList,
        setEventNameList,
    } = useEventContext();
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(API_URL, {
                next: { revalidate: 60 }
            });
            const data = await res.json();
            setEvents(data);

            const locations = Array.from(new Set(data.map((e: any) => e.location)));
            const eventNames = Array.from(new Set(data.map((e: any) => e.title)));

            setLocationList(locations as string[]);
            setEventNameList(eventNames as string[]);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const now = new Date();

        const filtered = events.filter((event: any) => {
            const start = new Date(event?.starts_at);
            const end = new Date(event?.expires_at);

            if (selectedCategory === "Upcoming") return start > now;
            if (selectedCategory === "Ongoing") return start <= now && end > now;
            if (selectedCategory === "Expired") return end <= now;

            return true;
        });

        setFilteredEvents(filtered);
    }, [selectedCategory, events]);


    return (
        <div>
            <HomeHeaderComponent />
            <div className="content-section px-4 sm:px-12">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-[200px] sticky top-4 h-fit">
                        <CategoryDropDownComponent list={categories} />
                    </div>
                    <div className="flex-1">
                        <EventListComponent events={filteredEvents} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeSectionComponent;
