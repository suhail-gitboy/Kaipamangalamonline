import { postMessageToThread } from "worker_threads"
import { create } from "zustand"
import { Categoryenum } from "../types"
type State = {

    userdata: User | null,
    Setuser: (user: User) => void
    postData: PostForm,
    setPostField: (field: keyof PostForm, data: any) => void

}
type User = {
    name?: string | null
    email?: string | null
    avatar?: string | null,

}
type PostForm = {
    title: string
    description: string
    image: File | null
    category: Categoryenum
    mobilenumber: string
    location: string
    price: string
    fixture: string
}

const initialPost: PostForm = {
    title: "",
    description: "",
    image: null,
    category: "",
    mobilenumber: "",
    location: "",
    price: "",
    fixture: "",
}

export const useStore = create<State>((set) => ({
    userdata: null,

    Setuser: (user: User) => set({ userdata: user }),
    postData: initialPost,
    setPostField: (field, value) =>
        set((state) => ({
            postData: { ...state.postData, [field]: value },
        })),



}))