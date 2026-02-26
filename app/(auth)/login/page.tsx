"use client"
import Link from "next/link"
import { useState } from "react"
import { FaGoogle, FaApple } from "react-icons/fa"
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"
import { Formik } from "formik"
import { LoginSchema } from "@/libs/Validation"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export interface Login {
    email: string,
    password: string,
    name?: string,
    confirmPassword?: string
}
export default function LoginPage() {



    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, Setloading] = useState(false)
    const Submitfunction = async (values: Login) => {
        Setloading(true)
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if (res?.ok) {
            Setloading(false)
            alert("Login Success");
            router.push("/");
        } else {
            Setloading(false)
            alert("Invalid email or password");
        }
    }

    const GoogleLogin = async () => {
        const Res = await signIn("google", {
            callbackUrl: "/",
        })
    }


    const Facebooklogin = async () => {
        const res = await signIn("facebook", {
            callbackUrl: "/"
        })
    }


    return (
        <div className="min-h-screen  flex items-center justify-center bg-gray-100">
            {/* Card */}
            <div className="mx-5 md:flex w-[1100px] h-auto bg-white rounded-2xl shadow-lg overflow-hidden">


                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">


                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 rounded-full bg-lime-400"></div>
                        <span className="font-semibold text-lg">KaipaOnline</span>
                    </div>

                    <h2 className="text-2xl font-semibold mb-2">
                        Login to Explore
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Fill the below form to login
                    </p>


                    <div className="flex flex-col sm:flex-row gap-3 mb-6">


                        <button
                            onClick={GoogleLogin}
                            className="
      flex items-center justify-center gap-3
      w-full
      bg-white
      border border-gray-300
      text-gray-700
      font-medium
      py-2.5
      rounded-xl
      text-sm
      shadow-sm
      hover:bg-gray-50
      active:scale-[0.98]
      transition
    "
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="w-5 h-5"
                                alt="google"
                            />
                            Continue with Google
                        </button>


                        <button
                            onClick={Facebooklogin}

                            className="
      flex items-center justify-center gap-3
      w-full
      bg-[#ffffff]
      text-black
      text-sm
      font-medium
      py-2.5
      rounded-xl
      shadow-sm
      hover:bg-[#166FE5]
      active:scale-[0.98]
      transition
    "
                        >
                            <img
                                src="/communication.png"
                                className="w-5 h-5"
                                alt="facebook"
                            />
                            Continue with Facebook
                        </button>

                    </div>


                    <div className="text-center text-gray-400 text-sm my-4">
                        OR
                    </div>


                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={Submitfunction}
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

                                <div className="mb-4">
                                    <label className="text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            ${errors.email && touched.email
                                                ? "border-red-500 focus:ring-red-400"
                                                : "focus:ring-lime-400"}`}
                                    />

                                    {errors.email && touched.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>


                                <div className="mb-2 relative">
                                    <label className="text-sm text-gray-600">Password</label>

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 pr-10
            ${errors.password && touched.password
                                                ? "border-red-500 focus:ring-red-400"
                                                : "focus:ring-lime-400"}`}
                                    />


                                    <span
                                        className="absolute right-3 top-9 cursor-pointer text-gray-500"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
                                    </span>

                                    {errors.password && touched.password && (
                                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                    )}
                                </div>

                                <div className="text-right text-sm text-lime-600 mb-6 cursor-pointer hover:underline">
                                    Forgot Password?
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-lime-400 to-lime-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
                                >
                                    {loading ? "loggin-in" : "login in"}
                                </button>
                            </form>
                        )}
                    </Formik>


                    {/* Not registered */}
                    <p className="text-sm text-center mt-6 text-gray-500">
                        Not registered?{" "}
                        <Link href="/register" className="text-lime-600 cursor-pointer font-medium hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
                {/* RIGHT SIDE – IMAGE / PREVIEW */}
                <div className="hidden md:flex w-1/2 bg-gray-50 p-6  items-center justify-center">
                    {/* Replace this with your image */}
                    <img src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/f5/8d/7c/caption.jpg?w=1200&h=-1&s=1"} className="w-full h-full rounded-xl bg-gray-200 flex items-center justify-center text-gray-500" />


                </div>

            </div>
        </div>
    );
}