import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { TBooking } from './booking.interface';
import { bookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const {flight} = req.body;
  const user = req.user.id;

  const bookingData = { user, flight };
    
  const result = (await bookingServices.createBookingIntoDB(
    bookingData,
  )) as unknown as TBooking;

  const data = {
    success: true,
    statusCode: 201,
    message: 'Created booking successfully',
    data: result,
  };
  sendResponse<TBooking>(res, data);
});

const getBookingsById = catchAsync(async (req, res) => {
  const { id } = req.user;

  const result = (await bookingServices.getBookingsByIdFromDB(
    id,
  )) as unknown as TBooking[];

  const data = {
    success: true,
    statusCode: 200,
    message: 'Retrieved user bookings successfully',
    data: result,
  };
  sendResponse<TBooking[]>(res, data);
});

const deleteBooking = catchAsync(async (req, res) => {
  const id = req.params.id;

  const result = (await bookingServices.deleteBookingFromDB(
    id,
  )) as unknown as TBooking;

  const data = {
    success: true,
    statusCode: 200,
    message: 'Booking deleted successfully',
    data: result,
  };
  sendResponse<TBooking>(res, data);
});

export const bookingControllers = {
  getBookingsById,
  createBooking,
  deleteBooking,
};
