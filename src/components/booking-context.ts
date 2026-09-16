import { createContext, useContext } from "react";

export type BookingContextValue = {
  open: (service?: string) => void;
};

export const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }

  return context;
}