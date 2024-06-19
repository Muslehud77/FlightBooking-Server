import express from 'express';
import { flightControllers } from './flights.controller';
import { validateRequest } from './../../Middlewares/validateRequest';
import { createFlightValidation } from './flights.validation';


const router = express.Router();

router.post("/",validateRequest(createFlightValidation),flightControllers.createFlights)
router.get("/",flightControllers.getAllFlights)
router.get("/:id",flightControllers.getASingleFLight)


export const FlightsRoute = router;
