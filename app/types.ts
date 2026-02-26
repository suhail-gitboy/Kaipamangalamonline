export enum ServiceType {
    AUTOSERVICES = "autoservices",
    FOODDELIVERY = "fooddelivery",
    TURF = "turf"
}

export type Category =
    | "news"
    | "realestate"
    | "tournaments"
    | "events"
    | "catering" | "chaispot" | "grocery" | "shop" | "cloths" | "offers"
export enum Categoryenum {
    NEWS = "news",
    REALESTATE = "realestate",
    TOURNAMENTS = "tournaments",
    EVENTS = "events",
    CATERING = "catering",
    CHAISOPT = "chaispot",
    GROCERY = "grocery",
    SHOP = "shop",
    CLOTHS = "cloths",
    OFFERS = "offers",
}

export interface ImageType {
    url?: string
    public_ID?: string
}
export interface Offerprice {
    from: Number,
    to: Number

}

export interface LocationType {
    location?: string
    lat?: number
    lan?: number
}

export interface FixtureType {
    from?: Date | null
    to?: Date | null
}

export interface Likes {
    username: string,
    picture: string
}

export interface PostType {
    _id?: string

    title: string
    category: Category

    image?: ImageType

    location?: LocationType   // required only if not news
    price?: Number           // required only realestate
    mobilenumber?: number

    fixture?: FixtureType
    offerPrice?: Offerprice,
    likes?: Likes,
    views?: Likes,
    usermail?: String
    description: string,
    createdAt: Date,
    address: {
        address: string,
        lat: string,
        lan: string
    }
}
