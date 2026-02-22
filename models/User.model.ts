import { timeStamp } from "console"
import { Schema, model, models } from "mongoose"



const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,

        default: "https://media.craiyon.com/2025-09-05/Mr77Bn2ESg6YtKO4DaH7Mg.webp"
    },

}, {
    timestamps: true
})


export const User = models.users || model("users", UserSchema)