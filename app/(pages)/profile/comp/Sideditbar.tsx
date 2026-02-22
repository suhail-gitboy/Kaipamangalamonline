
"use client"
import { Pencil } from "lucide-react"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import { User, FileText, Save, X } from "lucide-react"

import { Card, CardContent } from "@/shadcn/ui/card"
import { Button } from "@/shadcn/ui/button"
import { Input } from "@/shadcn/ui/input"
import { Textarea } from "@/shadcn/ui/textarea"

import { ProfileSchema } from "@/libs/Validation"
import { FormEvent, useState } from "react"


type Prop = {
    editprofile: () => void
}
export default function EditProfilePage({ editprofile }: Prop) {


    return (
        <div className="inset-0 fixed bg-black/35 z-40 flex justify-center items-center">
            <div className="w-4/5 md:max-w-3xl mx-auto px-4 py-8">
                <Card className="rounded-3xl border-lime-200 shadow-md">
                    <CardContent className="p-6 md:p-8 space-y-6">

                        {/* HEADER */}
                        <div>
                            <h2 className="text-2xl font-semibold">Edit profile</h2>
                            <p className="text-sm text-muted-foreground">
                                Update your public information
                            </p>
                        </div>






                        {/* FORM */}
                        <Formik
                            initialValues={{
                                name: "Alex Johnson",
                                bio: "Travel · Lifestyle · Creator",
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
                                handleReset,
                                isSubmitting,
                            }) => (
                                <Form className="space-y-5">

                                    {/* NAME */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium">Name</label>

                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-lime-500" size={18} />

                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="pl-10"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        {touched.name && errors.name && (
                                            <p className="text-xs text-red-500">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* BIO */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium">Bio</label>

                                        <div className="relative">
                                            <FileText className="absolute left-3 top-3 text-lime-500" size={18} />

                                            <Textarea
                                                name="bio"
                                                rows={7}
                                                value={values.bio}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="pl-10 resize-none"
                                                placeholder="Tell something about yourself"
                                            />
                                        </div>

                                        <div className="flex justify-between text-xs text-muted-foreground">
                                            {touched.bio && errors.bio ? (
                                                <span className="text-red-500">{errors.bio}</span>
                                            ) : (
                                                <span />
                                            )}
                                            <span>{values.bio.length}/160</span>
                                        </div>
                                    </div>

                                    {/* ACTION BAR */}
                                    <div className="
                  flex gap-3 justify-end
                  pt-4 border-t
                ">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={editprofile}
                                            className="gap-2"
                                        >
                                            <X size={16} />
                                            Discard
                                        </Button>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="
                      gap-2
                      bg-lime-500 hover:bg-lime-600
                      text-black
                    "
                                        >
                                            <Save size={16} />
                                            Update profile
                                        </Button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}