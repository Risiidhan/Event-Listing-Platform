import HomeSectionComponent from "@/components/HomeSectionComponent";

export const revalidate = 60; // Rebuild the page every 60 seconds

export default function HomePage() {
  return <HomeSectionComponent />;
}