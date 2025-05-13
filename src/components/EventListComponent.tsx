import EventComponent from "./EventComponent";

const EventListComponent = ({ events }: { events: any[] }) => {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventComponent event={event} />
      ))}
    </div>
  );
};

export default EventListComponent;
