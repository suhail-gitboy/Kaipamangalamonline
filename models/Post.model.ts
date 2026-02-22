import { Categoryenum, PostType } from "@/app/types";
import { Schema, model, models, Types } from "mongoose";




const Pstschema = new Schema<PostType>({
    userid: {
        type: Schema.Types.ObjectId,
        ref: "users",

    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        url: { type: String },
        public_ID: { type: String }
    },
    location: {
        type: String,
        required: function (this: any) {
            return this.category !== Categoryenum.NEWS;
        }
    },



    price: {
        type: String,
        required: function () {
            return this.category == Categoryenum.REALESTATE
        }
    },
    mobilenumber: {
        type: Number
    },
    fixture: {
        type: {
            from: {
                type: Date
            },
            to: {
                type: Date
            },
        },
        required: function () {
            return this.category == Categoryenum.TOURNAMENTS || this.category == Categoryenum.EVENTS
        }
    },
    likes: {
        type: Schema.Types.ObjectId,
        ref: "users",

    },
    views: {
        type: Schema.Types.ObjectId,
        ref: "users",


    }





})



export const Post = models.posts || model<PostType>("posts", Pstschema)