import { useEffect, useState } from 'react';
import Image from 'next/image';

const CarouselComponent = ({ events }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!events || events.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [events]);

  const event = events?.[currentIndex];

  return (
    <div className="w-full aspect-square sm:aspect-[3/2] lg:aspect-[3/1] bg-red-300 rounded-2xl overflow-hidden mt-[60px] h-auto relative">
      {event && (
        <>
          <Image
            className="object-cover aspect-square sm:aspect-[3/2] lg:aspect-[3/1] w-full"
            src={`/img/cover-pic-sample-${currentIndex+1}.jpeg`}
            alt={event.title || "banner"}
            height={1260}
            width={1887}
          />
          <div className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded">
            {event.title}
          </div>
        </>
      )}
    </div>
  );
};

export default CarouselComponent;
