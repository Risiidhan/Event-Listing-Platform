"use client";
import { createContext, useContext, useState } from "react";

interface IFormData {
  eventName: string;
  location: string;
  date: any;
};

type EventContextType = {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  locationList: string[];
  setLocationList: React.Dispatch<React.SetStateAction<string[]>>;
  eventNameList: string[];
  setEventNameList: React.Dispatch<React.SetStateAction<string[]>>;
};

const EventContext = createContext<EventContextType | null>(null);


export const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<IFormData>({
    eventName: "",
    location: "",
    date: null,
  });

  const [selectedCategory, setSelectedCategory] = useState("Ongoing");
  const [locationList, setLocationList] = useState<string[]>([]);
  const [eventNameList, setEventNameList] = useState<string[]>([]);

  return (
    <EventContext.Provider
      value={{
        formData,
        setFormData,
        selectedCategory,
        setSelectedCategory,
        locationList,
        setLocationList,
        eventNameList,
        setEventNameList,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
};
