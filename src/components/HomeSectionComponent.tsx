import HomeHeaderComponent from './HomeHeaderComponent';
import CategoryDropDownComponent from './CategoryDropDownComponent';
import EventListComponent from './EventListComponent';

const API_URL = 'https://68148b33225ff1af16292eee.mockapi.io/api/v1/events?page=1&limit=50';

const HomeSectionComponent = async () => {
    const res = await fetch(API_URL, {
        next: { revalidate: 60 } 
    });
    
    const events = await res.json();
    console.log(events, "logged events");

    return (
        <div>
            <HomeHeaderComponent />
            <div className="content-section px-4 sm:px-12">
                <div className="flex flex-col md:flex-row gap-6">
                    <CategoryDropDownComponent />
                    <EventListComponent events={events} />
                </div>
            </div>
        </div>
    );
};

export default HomeSectionComponent;
