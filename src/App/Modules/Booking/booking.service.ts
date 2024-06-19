import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingIntoDB = async (bookingData:TBooking)=>{
    const result = await Booking.create(bookingData)
    return result
}

const deleteBookingFromDB = async(id:string)=>{
    const result = await Booking.findByIdAndDelete({_id:id})
    return result
}

const getBookingsByIdFromDB = async(id:string)=>{
    const result = await Booking.find({user:id}).populate('flight')
    return result
}

export const bookingServices = {
    createBookingIntoDB,deleteBookingFromDB,getBookingsByIdFromDB
}