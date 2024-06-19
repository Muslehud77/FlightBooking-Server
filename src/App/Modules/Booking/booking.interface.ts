import { Types } from "mongoose"

export type TBooking = {
    user : Types.ObjectId,
    flight : Types.ObjectId
}