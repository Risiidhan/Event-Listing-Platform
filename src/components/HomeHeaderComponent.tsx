import React from 'react'
import Image from 'next/image'
import SearchInputComponent from './SearchInputComponent'

const HomeHeaderComponent = ({formData, setFormData} : any) => {
    return (
        <div className="relative w-full flex flex-col items-center">
            <Image
                className="object-cover aspect-[3/1] w-full"
                src="/img/event-img.jpeg"
                alt="banner"
                height={1260}
                width={1887}
            />
            <div className="font-bold text-white w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-4 flex flex-col items-center gap-6">
                <div className="text-7xl">Explore, Attend, Enjoy</div>
                <div className="text-5xl">Events Made Easy</div>
                <div className="w-[70%]">
                    <SearchInputComponent formData={formData} setFormData={setFormData}/>
                </div>
            </div>
        </div>
    )
}

export default HomeHeaderComponent