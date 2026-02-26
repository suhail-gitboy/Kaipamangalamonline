import { postMessageToThread } from "worker_threads"
import { create } from "zustand"
import { Categoryenum } from "../types"
type State = {

    userdata: User | null,
    Setuser: (user: User) => void
    postData: PostForm,
    setPostField: (field: keyof PostForm, data: any) => void,
    setTYPEservice: (type: string) => void

    likes: string[]
    setLike: (i: any) => void
    category: string

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
    category: string
    mobilenumber: string
    location: string
    price: string
    fixture: string
}

const initialPost: PostForm = {
    title: "",
    description: "",
    image: null,
    category: "news",
    mobilenumber: "",
    location: "",
    price: "",
    fixture: "",

}

export enum categoryforselection {

    OFFERDISPLAY = "OFFERDISPLAY",
    ADDISPLAY = "AD",
    MAINSERVICE = "MAIN",



}

export const useStore = create<State>((set) => ({
    userdata: null,
    likes: [],
    category: "",
    setLike: (postId: string) =>
        set((state) => {
            const exists = state.likes.includes(postId)
            return { likes: exists ? state.likes.filter((id) => id !== postId) : [...state.likes, postId] }
        }),


    Setuser: (user: User) => set({ userdata: user }),
    postData: initialPost,
    setPostField: (field, value) =>
        set((state) => ({
            postData: { ...state.postData, [field]: value },
        })),
    setTYPEservice: (type: any) => set({
        category: type
    })



}))