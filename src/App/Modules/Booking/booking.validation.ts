import { z } from "zod";

const createBooking = z.object({
    body: z.object({
     
        flight: z.string()
    })
})

export const bookingValidation = {
    createBooking
}