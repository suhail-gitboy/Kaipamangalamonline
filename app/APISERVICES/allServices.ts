import { useMutation } from "@tanstack/react-query"
import { MainapiCall } from "./Instance"

type RegisterData = {
    name: string
    email: string
    password: string
}

export const useRegisterUser = () => {
    return useMutation({
        mutationFn: async (data: RegisterData) => {
            return await MainapiCall("POST", "/api/auth/register", data)
        },
    })
}
export const usePostdata = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await MainapiCall("POST", "/api/regularpost", data)
            if (res.status == 500) throw new Error("posting failed")
            return res

        },
        onError: (error) => {
            console.log("post failed", error);

        }
    })
}