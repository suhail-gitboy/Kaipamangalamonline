import { Categoryenum, PostType } from "@/app/types";
import { Schema, model, models, Types } from "mongoose";




const Pstschema = new Schema<PostType>({
    usermail: {
        required: true,
        type: String

    },
    title: {
        type: String,
        required: true
    },
    category: {
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
    location: {
        type: String,
        required: function (this: any) {
            return this.category !== Categoryenum.NEWS;
        }
    },
    address: {

        address: { type: String },
        lat: { type: String },
        lan: { type: String }

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
    likes: [
        {
            name: { type: String },
            img: { type: String }

        }

    ],
    views: [{
        name: { type: String },
        img: { type: String }

    }],

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





},
    {
        timestamps: true
    })


Pstschema.index({ category: 1, location: 1 })
Pstschema.index({ createdAt: -1 })

export const Post = models.posts || model<PostType>("posts", Pstschema)