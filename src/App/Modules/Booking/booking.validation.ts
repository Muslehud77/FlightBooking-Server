import { z } from "zod";

const createBooking = z.object({
    body: z.object({
        user : z.string(),
        flight: z.string()
    })
})

export const bookingValidation = {
    createBooking
}