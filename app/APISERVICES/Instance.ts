import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

export const SERVERurl = "http://localhost:3000";

export async function MainapiCall<T = any>(
    method: Method,
    url: string,
    data?: unknown,
    headers: Record<string, string> = {}
): Promise<T> {

    const isFormData = data instanceof FormData;

    const api = axios.create({
        baseURL: SERVERurl,
        withCredentials: true,
    });

    try {
        const config: AxiosRequestConfig = {
            method,
            url,
            data,
            headers: {
                ...(isFormData ? {} : { "Content-Type": "application/json" }),
                ...headers,
            },
        };

        const response: AxiosResponse<T> = await api(config);
        return response.data;

    } catch (error: any) {
        console.error("API Error:", error?.response?.data || error.message);
        throw error?.response?.data || error.message;
    }
}