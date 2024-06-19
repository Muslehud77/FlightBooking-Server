import { Schema, model } from "mongoose";
import { TFlights } from "./flights.interface";

const flightsSchema = new Schema<TFlights>({
  flight_number: { type: String, required: true },
  departure_airport: { type: String, required: true },
  arrival_airport: { type: String, required: true },
  departure_time: { type: Date, required: true },
  arrival_time: { type: Date, required: true },
  total_seats: { type: Number, required: true },
  available_seats: { type: Number, required: true },
  
});

export const Flight = model<TFlights>('Flight', flightsSchema);
