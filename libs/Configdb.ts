
import mongoose from "mongoose";

const mongoURL = process.env.databaseurl || null
if (!mongoURL) {
    throw new Error("invalid url")
}
export const Connectdb = async () => {
    try {
        await mongoose.connect(mongoURL)
        console.log("db connected");


    } catch (error) {
        console.log("error connecting mongodb");


    }
}