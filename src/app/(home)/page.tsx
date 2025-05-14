import HomeSectionComponent from "@/components/page/home/HomeSectionComponent";
import { EventProvider } from "@/context/EventContext";

export const revalidate = 60; // Rebuild the page every 60 seconds

async function getEvents() {
    const res = await fetch('https://68148b33225ff1af16292eee.mockapi.io/api/v1/events', {
        next: { revalidate: 60 }
    });
    const data = await res.json();
    return data;
}
export default async function HomePage() {

  const events = await getEvents();
  return <EventProvider><HomeSectionComponent events={events}/></EventProvider>
}