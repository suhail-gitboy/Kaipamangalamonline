import { CardProps } from "../components/cards/CardScrollable";

export const areaServices = [
    {
        id: "taxi",
        icon: "🚕",
        title: "Auto & Taxi",
        subtitle: "Nearby rides",
        action: "Book",
        iconBg: "bg-slate-100",
    },
    {
        id: "food",
        icon: "🍔",
        title: "Food Delivery",
        subtitle: "Hotels nearby",
        action: "Order",
        iconBg: "bg-orange-100",
    },
    {
        id: "property",
        icon: "🏨",
        title: "property",
        subtitle: "sales & rental",
        action: "View",
        iconBg: "bg-sky-100",
    },
    {
        id: "technicians",
        icon: "🔥",
        title: "Technicians",
        subtitle: "all category",
        action: "Explore",
        iconBg: "bg-red-100",
    },
    {
        id: "events",
        icon: "🎉",
        title: "Events",
        subtitle: "Programs & fests",
        action: "See",
        iconBg: "bg-lime-100",
    },
    {
        id: "news",
        icon: "📰",
        title: "Local News",
        subtitle: "Updates in your area",
        action: "Read",
        iconBg: "bg-indigo-100",
    },
]

export const items = [
    {
        title: "Luxury apartments near IT Park",
        subtitle: "Rent starts from ₹18K",
        tag: "Exclusive",
        meta: "28 people active",
        image: "/promo3.avif",
    },
    {
        title: "Weekend hotel stay deals",
        subtitle: "Up to 30% off",
        tag: "Trending",
        meta: "12 discussions",
        image: "/promo4.avif",
    },
    {
        title: "New cafés & shops opening",
        subtitle: "Local businesses",
        tag: "New",
        meta: "6 updates today",
        image: "/ajooba.png",
    },
    {
        title: "Best family areas to live",
        subtitle: "Community opinions",
        tag: "Popular",
        meta: "41 replies",
        image: "/promo.webp",
    },
    {
        title: "Affordable rental zones",
        subtitle: "Budget friendly homes",
        tag: "Hot",
        meta: "19 people viewing",
        image: "/promo3.avif",
    },
]

export interface Activity {
    activity: string;
    icon: string;
    filter?: string;
    action?: string;
}

export const Filterdata: Activity[] = [
    { activity: "chai spot", icon: "/icons/tea.png", filter: "chai" },
    { activity: "food delivery", icon: "/icons/delivery-bike.png", action: "fooddelivery" },
    { activity: "auto service", icon: "/icons/taxi.png", action: "autoservice" },
    { activity: "news", icon: "/icons/news-report.png", filter: "news" },
    { activity: "Fashion", icon: "/icons/clothes-hanger.png", filter: "fashion" },
    { activity: "tournaments", icon: "/icons/cricket.png", filter: "tournament" },
    { activity: "real estate", icon: "/icons/search.png", filter: "sale" },
    { activity: "Fest", icon: "/icons/celebration.png", filter: "fest" },
    { activity: "catering", icon: "/icons/catering.png", filter: "catering" },
];

export const Scrollabledatas: CardProps[] = [
    {
        category: "news",
        type: "public",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg",
        title: "Beautiful Sea View House in Moonnupeedika",
        location: "Moonnupeedika, Kaipamangalam",


    },
    {
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg",
        title: "Beautiful Sea View House in Moonnupeedika",
        location: "Moonnupeedika, Kaipamangalam",
        category: "chaispot",
        type: "cafe",

    },
    {
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg",
        title: "Beautiful Sea View House in Moonnupeedika",
        location: "Moonnupeedika, Kaipamangalam",
        category: "grocery",
        type: "all"


    },
    {
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg",
        title: "Beautiful Sea View House in Moonnupeedika",
        location: "Moonnupeedika, Kaipamangalam",

        category: "tournament",
        type: "cricket",

        date: new Date("2024-07-15T18:00:00"),

    },
    {
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg",
        title: "Beautiful Sea View House in Moonnupeedika",
        location: "Moonnupeedika, Kaipamangalam",
        type: "shop",
        category: "fashion",



    },
    {

        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg",
        title: "Beautiful Sea View House in Moonnupeedika",
        location: "Moonnupeedika, Kaipamangalam",
        type: "sale",
        category: "sale",
        price: "25lakhs"


    },
    {
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg",
        title: "Beautiful Sea View House in Moonnupeedika",
        location: "Moonnupeedika, Kaipamangalam",
        type: "football",
        category: "tournament",



    },
    {
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg",
        title: "Beautiful Sea View House in Moonnupeedika",
        location: "Moonnupeedika, Kaipamangalam",
        type: "cricket",
        category: "tournament",



    },
]