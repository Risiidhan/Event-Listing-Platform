import { useEventContext } from '@/context/EventContext';
import React from 'react'
import NewEventContentComponent from './NewEventContentComponent';
import NoEventComponent from './NoEventComponent';

const NewEventListingComponent = ({ events }: any) => {
  const { formData } = useEventContext();


  return (
    <div className='content-section'>
      {events.map((item: any) => (
        <div className='pt-[20px]' key={item.title}>
          <h2 className="text-[24px] text-[#58585B] font-semibold mb-2">{item.title} Events
            {item?.list.length == 0 ? " (No events listed in this category)" : ""}
          </h2>
          <div className="flex-1 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {item?.list?.length === 0 ? <NoEventComponent /> : (  
              <>
                {item.list.map((e: any) => (
                  <NewEventContentComponent key={e.id} event={e} />
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewEventListingComponent