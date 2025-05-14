import EventComponent from "./EventComponent";

const EventListComponent = ({ events }: { events: any[] }) => {
  return (
    <>
      <div className="flex-1 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventComponent key={event.id} event={event} />
        ))}
      </div>
    </>
  );
};

export default EventListComponent;
