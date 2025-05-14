"use client"

import HomeHeaderComponent from './header/HomeHeaderComponent';
import CategoryDropDownComponent from './CategoryDropDownComponent';
import EventListComponent from './EventListComponent';
import { useEffect, useState } from 'react';
import { useEventContext } from '@/context/EventContext';
import NoEventComponent from './NoEventComponent';
import CategoryMobileComponent from './CategoryMobileComponent';

const categories: string[] = ["All", "Upcoming", "Ongoing", "Expired"];

const HomeSectionComponent = ({ events }: { events: any[] }) => {
    const {
        setLocationList,
        setEventNameList,
        setEventTypes,
        formData,
    } = useEventContext();

    const [filteredEvents, setFilteredEvents] = useState<any[]>([]);

    useEffect(() => {
        const locations = Array.from(new Set(events.map((e: any) => e.location)));
        const eventNames = Array.from(new Set(events.map((e: any) => e.title)));
        const eventTypes = Array.from(new Set(events.map((e: any) => e.type)))

        setLocationList(locations as string[]);
        setEventNameList(eventNames as string[]);
        setEventTypes(eventTypes as string[]);
    }, [events]);


    useEffect(() => {
        const now = new Date();

        let filtered = events.filter((event: any) => {
            if (formData?.category === "All") return events;

            const start = new Date(event?.starts_at);
            const end = new Date(event?.expires_at);

            if (formData?.category === "Upcoming") return start > now;
            if (formData?.category === "Ongoing") return start <= now && end > now;
            if (formData?.category === "Expired") return end <= now;

            return true;
        });


        const { eventName, location, date, type } = formData;
        if (eventName && eventName.length > 1) {
            filtered = filtered.filter((e: any) =>
                e.title.toLowerCase().includes(eventName.toLowerCase())
            );
        }
        if (location && location.length > 1) {
            filtered = filtered.filter((e: any) =>
                e.location.toLowerCase().includes(location.toLowerCase())
            );
        }

        if (type && type.length > 1) {
            filtered = filtered.filter((e: any) =>
                e.type.toLowerCase().includes(type.toLowerCase())
            );
        }

        if (date) {
            const selectedDate = new Date(date).toDateString();
            filtered = filtered.filter((e: any) => {
                const startDate = new Date(e.starts_at).toDateString();
                return startDate === selectedDate;
            });
        }
        setFilteredEvents(filtered);
    }, [formData])


    return (
        <div>
            <HomeHeaderComponent />
            <div className="content-section px-4 sm:px-12">
                <div className='flex justify-end mt-4 sticky top-0 pt-2 bg-white lg:hidden'>
                    <CategoryMobileComponent list={categories} />
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-[40px]">
                    <div className="hidden lg:flex w-full md:w-[200px] sticky top-4 h-fit">
                        <CategoryDropDownComponent list={categories} />
                    </div>
                    <div className="flex-1">
                        {filteredEvents.length > 0 ? (
                            <EventListComponent events={filteredEvents} />
                        ) : <NoEventComponent />}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeSectionComponent;
