import React from 'react'
import Image from 'next/image'
import SearchInputComponent from './SearchInputComponent'

const HomeHeaderComponent = () => {
    return (
        <div className="relative w-full min-h-[40dvh] flex flex-col items-center">
            <div className="relative w-full">
                <Image
                    className="object-cover aspect-[3/4] sm:aspect-[3/2] lg:aspect-[3/1] w-full"
                    src="/img/event-img.jpeg"
                    alt="banner"
                    height={1260}
                    width={1887}
                />
                <div className="absolute inset-0 bg-[#0000006e] "></div>
            </div>
            <div className="font-bold text-white w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-4 flex flex-col items-center gap-2">
                <div className="text-4xl lg:text-6xl xl:text-7xl">Explore, Attend, Enjoy</div>
                <div className="text-2xl lg:text-4xl xl:text-5xl">Events Made Easy</div>
                <div className="w-[90%] lg:w-fit mt-4">
                    <SearchInputComponent />
                </div>
            </div>
        </div>
    )
}

export default HomeHeaderComponent