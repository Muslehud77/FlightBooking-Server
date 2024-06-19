import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { TFlights } from "./flights.interface";
import { flightServices } from "./flights.service";

const createFlights = catchAsync(async (req, res) => {
  const flightData = req.body;

  const result = (await flightServices.createFlightsIntoDB(
    flightData,
  )) as unknown as TFlights;

  const data = {
    success: true,
    statusCode: 201,
    message: 'Flight Created successfully',
    data: result,
  };
  sendResponse<TFlights>(res, data);
});


const getAllFlights = catchAsync(async (req, res) => {
  const query = req.query;

  const result = (await flightServices.getAllFlightsFromDB(
    query,
  )) as unknown as TFlights[];

  const data = {
    success: true,
    statusCode: 200,
    message: 'Flights retrieved successfully',
    data: result,
  };
  sendResponse<TFlights[]>(res, data);
});


const getASingleFLight = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = (await flightServices.getASingleFlightFromDB(
    id,
  )) as unknown as TFlights;

  const data = {
    success: true,
    statusCode: 200,
    message: 'Flight retrieved successfully',
    data: result,
  };
  sendResponse<TFlights>(res, data);
});

export const flightControllers = {
  createFlights,
  getAllFlights,
  getASingleFLight,
};