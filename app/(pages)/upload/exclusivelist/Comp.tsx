"use client";

import React, { useState } from "react";
import Redirect from "@/app/components/rusable/Redirect";
import { FaImage, FaTags } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LocationPicker from "../../manageservice/uicard/Mappicker";
import Loaderone from "@/app/components/ui/Loaderone";
import { useRouter } from "next/navigation";

const Page = ({ type }: { type: string }) => {

    const isOffer = type === "offer";
    const [preview, Setpreview] = useState(null)
    const [img, Setimg] = useState(null)
    const [pin, Setpinpoint] = useState({
        lat: "",
        lan: ""
    })
    const router = useRouter()
    const [adress, Setadress] = useState("")
    const [load, Setload] = useState(false)

    const address = {
        lat: pin.lat,
        lan: pin.lan,
        address: adress

    }

    const Functionpost = async (values) => {

        const formdata = new FormData()
        if (!img) {
            alert("uploadimg")
            return
        }
        Setload(true)
        formdata.append("title", values.title)
        formdata.append("description", values.description)
        formdata.append("type", type)
        formdata.append("image", img)
        formdata.append("address", JSON.stringify(address))

        try {
            let post = await fetch("/api/exclusive", { method: "POST", body: formdata })

            if (post.status == 201) {
                alert("added in to que, we will display it once current post finishes")
                Setload(false)
                router.push("/")
            }
        } catch (error) {
            Setload(false)
            console.log(error);


        }

    }


    const imageupload = (e: FormData) => {

        if (!e) return null
        const img = e.target?.files[0]
        Setimg(img)
        const url = URL.createObjectURL(img)
        Setpreview(url)
    }
    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description required"),

    });

    const inputStyle =
        "w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-lime-400 outline-none transition border-gray-200";
    if (load) return <Loaderone />
    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-baseline p-3">
                <Redirect path="/selectservice" />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-6">

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-lime-200 flex items-center justify-center text-xl text-gray-800">
                        <FaTags />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">
                            {isOffer
                                ? "Create Exclusive Offer"
                                : "Promote Your Business"}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {isOffer
                                ? "Promote discounts and deals"
                                : "Showcase your business for better growth"}
                        </p>
                    </div>
                </div>

                <Formik
                    initialValues={{
                        title: "",
                        description: "",


                    }}
                    validationSchema={validationSchema}
                    onSubmit={Functionpost}
                >
                    {({ setFieldValue }) => (
                        <Form className="space-y-5">


                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    {isOffer ? "Offer Title" : "Business Title"}
                                </label>

                                <Field
                                    name="title"
                                    placeholder="Give title"
                                    className={inputStyle}
                                />

                                <ErrorMessage
                                    name="title"
                                    component="p"
                                    className="text-xs text-red-500 mt-1"
                                />
                            </div>


                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Description
                                </label>

                                <Field
                                    as="textarea"
                                    name="description"
                                    rows={4}
                                    placeholder={`Tell about ${isOffer ? "offer" : "business"
                                        }`}
                                    className={inputStyle}
                                />

                                <ErrorMessage
                                    name="description"
                                    component="p"
                                    className="text-xs text-red-500 mt-1"
                                />
                            </div>




                            <div className=" h-40">
                                {
                                    preview && <div className="relative ">
                                        <div className="absolute inset-0 bg-black/40 z-50 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition rounded-2xl">

                                            <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                                                Change
                                            </span>

                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    Setimg(null)
                                                    Setpreview("")
                                                }}
                                                className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                                            >
                                                Remove
                                            </button>

                                        </div>
                                        <img src={preview} className="w-full h-40 object-cover rounded-2xl" />

                                    </div>
                                }
                                {
                                    !preview && <>
                                        <label className="text-sm font-medium text-gray-700 block mb-2">
                                            Upload Image
                                        </label>

                                        <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                            <FaImage className="text-3xl text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-600">
                                                Click to upload
                                            </p>

                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => imageupload(e)
                                                }
                                            />
                                        </label>
                                    </>
                                }
                            </div>
                            <LocationPicker Setadress={Setadress} Setpinpoint={Setpinpoint} />


                            <button
                                type="submit"
                                className="w-full rounded-xl bg-lime-400 py-3 font-semibold hover:bg-lime-500 transition"
                            >
                                {isOffer
                                    ? "Publish Offer"
                                    : "Publish Business"}
                            </button>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    );
};

export default Page;