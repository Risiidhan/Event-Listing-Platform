import { useEventContext } from '@/context/EventContext';
import React, { useEffect, useState } from 'react'
import EventComponent from './EventComponent';
import NewEventContentComponent from './NewEventContentComponent';

const NewEventListingComponent = ({ events }: any) => {
  const { formData } = useEventContext();
  const [categoriesList, setCategoriesList] = useState<any[]>([]);

  useEffect(() => {
    const now = new Date();

    const upComing = events?.filter((event: any) => new Date(event.starts_at) > now);
    const onGoing = events?.filter((event: any) => {
      const start = new Date(event.starts_at);
      const end = new Date(event.expires_at);
      return start <= now && end > now;
    });
    const expired = events?.filter((event: any) => new Date(event.expires_at) <= now);

    setCategoriesList([
      { title: "Ongoing", list: onGoing },
      { title: "Upcoming", list: upComing },
      { title: "Expired", list: expired },
    ]);

  }, [formData])

  return (
    <div className='content-section'>
      {categoriesList.map((item: any) => (
        <div className='pt-[20px]' key={item.title}>
          <h2 className="text-[24px] font-semibold mb-2">{item.title} Events</h2>
          <div className="flex-1 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {item?.list?.map((e: any) => (
              <NewEventContentComponent key={e.id} event={e} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewEventListingComponent