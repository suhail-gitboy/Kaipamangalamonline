import * as Yup from "yup"

export const RegisterSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Full name is required"),

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)/,
            "Password must contain at least one letter and one number"
        )
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
})



export const LoginSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

    password: Yup.string()
        .required("Password is required"),
})

export const ProfileSchema = Yup.object({
    name: Yup.string()
        .min(2, "Too short")
        .required("Name is required"),
    email: Yup.string().email(),
})