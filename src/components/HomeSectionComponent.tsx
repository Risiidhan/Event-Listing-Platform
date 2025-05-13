import React from 'react'
import HomeHeaderComponent from './HomeHeaderComponent'
import CategoryDropDownComponent from './CategoryDropDownComponent'
import EventListComponent from './EventListComponent'

const HomeSectionComponent = () => {
    return (
        <div className=''>
            <HomeHeaderComponent />
            <div className='content-section px-4 sm:px-12'>
                <div className='flex'>
                    <CategoryDropDownComponent />
                    <EventListComponent />
                </div>
            </div>
        </div>
    )
}

export default HomeSectionComponent