import  { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';


const bookingSchema = new Schema<TBooking>({
  user: {type:Schema.Types.ObjectId,required:true,ref:"User"},
  flight: {type:Schema.Types.ObjectId,required:true,ref:"Flight"},
},{
    timestamps:true
});

export const Booking = model<TBooking>('Booking', bookingSchema);
