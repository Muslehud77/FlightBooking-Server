import { Router } from "express";
import { UserRouter } from "../Modules/User/user.route";
import { AuthRouts } from "../Modules/Auth/auth.route";
import {  FlightsRoute } from "../Modules/Flights/flights.route";
import { BookingsRoute } from "../Modules/Booking/booking.route";


const router = Router()

const moduleRoutes = [
    {
        path: "/users",
        route: UserRouter
    },
    
    {
        path: "/auth",
        route: AuthRouts
    },
    {
        path: "/flights",
        route: FlightsRoute
    },
    {
        path: "/bookings",
        route: BookingsRoute
    },
    
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router