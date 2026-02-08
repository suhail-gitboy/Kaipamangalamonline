"use client"
import { RegisterSchema } from "@/app/libs/Validation"
import { Formik } from "formik"

import Link from "next/link"
import { useState } from "react"
import { FaGoogle, FaApple } from "react-icons/fa"
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* Card */}
            <div className="mx-5 md:flex w-[1100px]  h-auto bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* LEFT SIDE – REGISTER FORM */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">

                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-lime-400"></div>
                        <span className="font-semibold text-lg">KaipaOnline</span>
                    </div>

                    <h2 className="text-2xl font-semibold mb-1">
                        Create your account
                    </h2>
                    <p className="text-gray-500 mb-4">
                        Fill the below form to register
                    </p>

                    {/* Social signup */}
                    <div className="flex gap-3 mb-3">
                        <button className="flex-1 border rounded-lg py-1.5 text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
                            <FaGoogle className="text-red-500" />
                            Sign up with Google
                        </button>

                        <button className="flex-1 border rounded-lg py-1.5 text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
                            <FaApple className="text-black" />
                            Sign up with Apple
                        </button>
                    </div>

                    <div className="text-center text-gray-400 text-sm my-3">
                        OR
                    </div>

                    {/* Name */}
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }}
                        validationSchema={RegisterSchema}
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
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>

                                {/* Full Name */}
                                <div className="mb-3">
                                    <label className="text-sm text-gray-600">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full mt-1 px-4 py-1.5 border rounded-lg focus:outline-none focus:ring-2
            ${errors.name && touched.name
                                                ? "border-red-500 focus:ring-red-400"
                                                : "focus:ring-lime-400"}`}
                                    />
                                    {errors.name && touched.name && (
                                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full mt-1 px-4 py-1.5 border rounded-lg focus:outline-none focus:ring-2
            ${errors.email && touched.email
                                                ? "border-red-500 focus:ring-red-400"
                                                : "focus:ring-lime-400"}`}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="mb-3  relative">
                                    <label className="text-sm text-gray-600">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Create password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full mt-1 px-4 py-1.5 border rounded-lg focus:outline-none focus:ring-2 pr-10
            ${errors.password && touched.password
                                                ? "border-red-500 focus:ring-red-400"
                                                : "focus:ring-lime-400"}`}
                                    />

                                    <span
                                        className="absolute right-3 top-9 cursor-pointer text-gray-500"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
                                    </span>

                                    {errors.password && touched.password && (
                                        <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div className="mb-4 relative">
                                    <label className="text-sm text-gray-600">Confirm Password</label>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full mt-1 px-4 py-1.5 border rounded-lg focus:outline-none focus:ring-2 pr-10
            ${errors.confirmPassword && touched.confirmPassword
                                                ? "border-red-500 focus:ring-red-400"
                                                : "focus:ring-lime-400"}`}
                                    />

                                    <span
                                        className="absolute right-3 top-9 cursor-pointer text-gray-500"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <HiOutlineEyeOff size={18} /> : <HiOutlineEye size={18} />}
                                    </span>

                                    {errors.confirmPassword && touched.confirmPassword && (
                                        <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
                                    )}
                                </div>

                                {/* Register button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-lime-400 to-lime-600 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
                                >
                                    Create Account
                                </button>

                                {/* Already registered */}
                                <p className="text-sm text-center mt-4 text-gray-500">
                                    Already have an account?{" "}
                                    <Link href="/login" className="text-lime-600 font-medium hover:underline">
                                        Login
                                    </Link>
                                </p>
                            </form>
                        )}
                    </Formik>
                </div>


                {/* RIGHT SIDE – IMAGE / PREVIEW */}
                <div className="hidden md:flex w-1/2 bg-gray-50 p-6 items-center justify-center">
                    <div className="w-full h-full rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">
                        Registration Preview Image
                    </div>
                </div>

            </div>
        </div>
    )
}
