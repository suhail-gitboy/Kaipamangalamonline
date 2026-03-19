"use client"

import { useEffect, useState } from "react"
import { Formik, Form } from "formik"

import { Badge } from "@/shadcn/ui/badge"
import { Card, CardContent } from "@/shadcn/ui/card"
import { Button } from "@/shadcn/ui/button"
import { Input } from "@/shadcn/ui/input"

import { User, FileText, Save, X, Pencil, ShieldCheck } from "lucide-react"
import { ProfileSchema } from "@/libs/Validation"
import { useStore } from "@/app/zustandstate/Store"
import { getSession, useSession } from "next-auth/react"

const UserCard = () => {
    const userdata = useStore((state) => state.userdata)
    console.log(userdata);
    const { status } = useSession()
    const [preview, setPreview] = useState("")

    const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        setPreview(URL.createObjectURL(file))
    }
    const { data: session } = useSession()

    if (status == "loading") return <>loading-session</>


    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Card className="rounded-3xl  md:shadow-lg border-none md:border bg-white">
                <CardContent className="p-6 sm:p-10">

                    {/* HEADER SECTION */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                        {/* PROFILE IMAGE */}
                        <div className="flex justify-center">
                            <label
                                htmlFor="img"
                                className="relative inline-block cursor-pointer group"
                            >
                                {/* Avatar wrapper */}
                                <div className="
    relative
    w-28 h-28 md:w-32 md:h-32
    rounded-full
    ring-2 ring-lime-400
    ring-offset-2 ring-offset-background
    overflow-hidden
  ">

                                    <img
                                        src={
                                            preview ? preview : session?.user?.image ? session?.user?.image : session?.user?.avatar

                                        }
                                        alt="profile"
                                        className="w-full h-full object-cover transition group-hover:scale-105"
                                    />


                                    {/* Soft hover overlay */}
                                    <div className="
      absolute inset-0
      bg-black/10
      opacity-0
      group-hover:opacity-100
      transition
    " />
                                </div>

                                {/* EDIT BUTTON */}
                                <div className="
    absolute -bottom-1 -right-1
    w-9 h-9
    bg-lime-500
    rounded-full
    flex items-center justify-center
    shadow-lg
    border-2 border-background
    group-hover:scale-105
    transition
  ">
                                    <Pencil size={16} className="text-white" />
                                </div>

                                {/* STATUS DOT */}
                                <span className="
    absolute top-1 right-1
    w-3.5 h-3.5
    bg-lime-400
    rounded-full
    border-2 border-background
  " />

                                {/* INPUT */}
                                <input
                                    type="file"
                                    hidden
                                    id="img"
                                    accept="image/*"
                                    className="p-4"
                                    onChange={handleImgUpload}
                                />
                            </label>

                        </div>

                        {/* USER INFO */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-semibold text-gray-900">
                                {session?.user?.name}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {"your profile"}
                            </p>

                            <div className="flex justify-center md:justify-start mt-3">
                                <Badge className="bg-lime-100 text-lime-700 flex items-center gap-1 px-3 py-1 rounded-full">
                                    <ShieldCheck size={14} />
                                    Verified
                                </Badge>
                            </div>
                        </div>
                    </div>


                    <div className="mt-8">
                        <Formik
                            initialValues={{
                                name: session?.user?.name,
                                email: session?.user?.email,
                            }}
                            validationSchema={ProfileSchema}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                isSubmitting,
                            }) => (
                                <Form className="space-y-6">

                                    {/* NAME */}
                                    <div>


                                        <div className="relative ">
                                            <User
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-lime-500"
                                                size={18}
                                            />

                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Your name"
                                                className="
          pl-10
        
          
          
          rounded-xl
          transition-all duration-200
        "
                                            />
                                        </div>

                                        {touched.name && errors.name && (
                                            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                                        )}
                                    </div>


                                    {/* EMAIL */}
                                    <div>


                                        <div className="relative">
                                            <FileText
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-lime-500"
                                                size={18}
                                            />

                                            <Input
                                                type="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Enter your email"
                                                className="
          pl-10
          border border-lime-200
          focus:border-lime-500
          focus:ring-1 focus:ring-lime-500
          rounded-xl
          transition-all duration-200
        "
                                            />
                                        </div>

                                        {touched.email && errors.email && (
                                            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                                        )}
                                    </div>


                                    {/* ACTIONS */}
                                    <div className="
  sticky bottom-0
  bg-white/80 backdrop-blur-md
  border-t border-lime-100
  pt-4 pb-2
  mt-8
">

                                        <div className="
    flex flex-col sm:flex-row
    gap-3
    sm:justify-end
  ">

                                            {/* Refresh Profile */}
                                            <Button
                                                type="button"
                                                variant={"ghost"}
                                                className="
        w-2/4 mx-auto sm:w-auto
        gap-2
        p-5
        bg-gray-300
        border-gray-200
        hover:bg-gray-200
        rounded-xl
        text-sm text-gray-700
        transition-all duration-200
      "
                                            >
                                                <X size={16} />
                                                Refresh Profile
                                            </Button>


                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className=" w-2/4 mx-auto sm:w-auto
                                            gap-2
                                            p-5
                                            bg-lime-300
                                            border-lime-200
                                            hover:bg-lime-200
                                            rounded-xl
                                            text-sm text-gray-700
                                            transition-all duration-200"
                                            >
                                                <Save size={16} />
                                                Save Changes
                                            </Button>

                                        </div>
                                    </div>


                                </Form>

                            )}
                        </Formik>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default UserCard
