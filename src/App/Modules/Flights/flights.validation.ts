import { z } from "zod";

export const createFlightValidation = z.object({
  body: z.object({
    flight_number: z.string().nonempty('Flight number is required'),
    departure_airport: z
      .string()
      .length(3, 'Departure airport code must be 3 characters'),
    arrival_airport: z
      .string()
      .length(3, 'Arrival airport code must be 3 characters'),
    departure_time: z.date(),
    arrival_time: z.date(),
    total_seats: z.number().min(1, 'Total seats must be at least 1'),
    available_seats: z.number().min(0, 'Available seats must be at least 0'),
  }),
});