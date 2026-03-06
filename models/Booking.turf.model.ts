import { Schema, model, models, Types } from "mongoose";




const BookingSchema = new Schema({
    turfId: { type: Types.ObjectId, ref: "turf" },
    userId: { type: Types.ObjectId, ref: "user" },

    date: Date,
    time: String,

    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "cancelled"],
        default: "pending"
    }

}, { timestamps: true });

export const Bookturf = models.bookturf || model("bookturf", BookingSchema)



