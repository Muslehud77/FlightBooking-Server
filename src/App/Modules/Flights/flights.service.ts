import { QueryBuilder } from '../../Builder/QueryBuilder';
import { TFlights } from './flights.interface';
import { Flight } from './flights.model';

const createFlightsIntoDB = async (flightData: TFlights) => {
  const result = await Flight.create(flightData);
  return result;
};

const getAllFlightsFromDB = async (query: Record<string, unknown>) => {
  const flightsQuery = new QueryBuilder(Flight.find(), query)
    .search([
      'flight_number',
      'departure_airport',
      'arrival_airport',
      'departure_time',
      'arrival_time',
    ])
    .filter()
    .sort()
    .paginate()
    .fieldQuery();

  const result = await flightsQuery.modelQuery;



  return result;
};

const getASingleFlightFromDB = async (id: string) => {
  const result = await Flight.findById({ _id: id });
  return result;
};

export const flightServices = {
  createFlightsIntoDB,
  getAllFlightsFromDB,
  getASingleFlightFromDB,
};
