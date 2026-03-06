import { Schema, model, models, Types } from "mongoose";




const Exclusiveschema = new Schema({
    usermail: {
        type: String,
        required: true

    },
    type: {
        type: String,
        required: true

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
    }, address: {

        address: { type: String },
        lat: { type: String },
        lan: { type: String }

    },
    isActive: {
        type: Boolean,
        default: false
    }


}, {
    timestamps: true
})


export const Exclusive = models.exclusive || model("exclusive", Exclusiveschema)



