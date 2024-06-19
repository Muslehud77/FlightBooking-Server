export type TFlights = {
  flight_number: string;
  departure_airport: string;
  arrival_airport: string;
  departure_time: Date;
  arrival_time: Date;
  total_seats: number;
  available_seats: number;
};