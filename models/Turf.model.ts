import { time } from "console";
import { Schema, model, models, Types } from "mongoose";




const Turfeschema = new Schema({
    usermail: {
        type: String,
        required: true

    },
    renewalmode: {
        type: Boolean,
        default: false

    },
    contact: {
        type: Number,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        url: { type: String },
        public_ID: { type: String }
    },
    address: {

        address: { type: String },
        lat: { type: String },
        lan: { type: String }

    },
    isActive: {
        type: Boolean,
        default: false
    },
    time: {
        from: { type: String },
        to: {
            type: String
        }
    },

    slots: [
        {
            time: { type: String, required: true },

            isActive: { type: Boolean, default: true }
        }
    ],
    games: [
        {
            price: { type: String },
            game: { type: String },


        }

    ]


}, {
    timestamps: true
})


export const Turf = models.turf || model("turf", Turfeschema)



