import express from 'express';
import { validateRequest } from '../../Middlewares/validateRequest';
import { bookingValidation } from './booking.validation';
import { bookingControllers } from './booking.controller';
import { Auth } from '../../Middlewares/auth';


const router = express.Router();

router.post('/',Auth('user'),validateRequest(bookingValidation.createBooking),bookingControllers.createBooking)
router.get('/my-bookings',Auth('user'),bookingControllers.getBookingsById)
router.delete('/:id',Auth('user'),bookingControllers.deleteBooking)

export const BookingsRoute = router;
