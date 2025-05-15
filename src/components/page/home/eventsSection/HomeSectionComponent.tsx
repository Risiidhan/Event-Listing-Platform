"use client"

import HomeHeaderComponent from '../header/HomeHeaderComponent';
import CategoryDropDownComponent from './CategoryDropDownComponent';
import EventListComponent from './EventListComponent';
import { useEffect, useState } from 'react';
import { useEventContext } from '@/context/EventContext';
import NoEventComponent from './NoEventComponent';
import CategoryMobileComponent from './CategoryMobileComponent';
import NewEventListingComponent from './NewEventListingComponent';
import CarouselComponent from './CarouselComponent';
import EventTypesSlider from './EventTypesSlider';

const categories: string[] = ["All", "Upcoming", "Ongoing", "Expired"];

const HomeSectionComponent = ({ events }: { events: any[] }) => {
    const {
        setLocationList,
        setEventNameList,
        setEventTypes,
        formData,
    } = useEventContext();

    const [filteredEvents, setFilteredEvents] = useState<any[]>([]);
    const [categoriesList, setCategoriesList] = useState<any[]>([]);

    useEffect(() => {
        const locations = Array.from(new Set(events.map((e: any) => e.location)));
        const eventNames = Array.from(new Set(events.map((e: any) => e.title)));
        const eventTypes = Array.from(new Set(events.map((e: any) => e.type)))

        setLocationList(locations as string[]);
        setEventNameList(eventNames as string[]);
        setEventTypes(eventTypes as string[]);
    }, [events]);


    useEffect(() => {

        let filtered = events;

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

        const now = new Date();
        const upComing = filtered?.filter((event: any) => new Date(event.starts_at) > now);
        const onGoing = filtered?.filter((event: any) => {
            const start = new Date(event.starts_at);
            const end = new Date(event.expires_at);
            return start <= now && end > now;
        });
        const expired = filtered?.filter((event: any) => new Date(event.expires_at) <= now);

        setCategoriesList([
            { title: "Ongoing", list: onGoing },
            { title: "Upcoming", list: upComing },
            { title: "Expired", list: expired },
        ]);
    }, [formData])


    return (
        <div>
            <HomeHeaderComponent />
            <div className="content-section px-4 sm:px-12">
                <CarouselComponent events={events?.slice(0, 3)} />
                <EventTypesSlider />

                <div>
                    <NewEventListingComponent events={categoriesList} />
                </div>

            </div>
        </div>
    );
};

export default HomeSectionComponent;
