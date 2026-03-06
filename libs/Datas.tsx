import { CardProps } from "@/app/components/cards/CardScrollable";
export interface CarServiceItem {
    _id: string;
    category?: string
    type: "taxi" | "rental" | "dailyrental";
    name: string;
    images: {
        url: string;
        public_id?: string
    };
    driverName?: string; // only taxi
    rating: number;
    price: string;
    available: boolean;
    contact?: string; // taxi only
    location: {
        area: string;
        city: string;
        lat: number;
        lng: number;
    }
}

export const areaServices = [
    {
        id: "taxi",
        icon: "🚕",
        title: "Auto & Taxi",
        subtitle: "Nearby rides",
        action: "autoservices",
        iconBg: "bg-slate-100",
    },
    {
        id: "food",
        icon: "🍔",
        title: "Food Delivery",
        subtitle: "Hotels nearby",
        action: "fooddelivery",
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
        id: "turfs",
        icon: "📰",
        title: "turf football cricket",
        subtitle: "playing in nearest turf",
        action: "turf",
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
        fixture: "2024-07-15T18:00:00"

    },
    {
        image: "https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e70ac1b55267f334b11355554fb84e045760a9369f37ef9c3ecfffb08076fd24aa7d32a86e585b930d44a63d72a957fa9",
        title: "turf open monday-sunday",
        location: "chentrappini, Kaipamangalam",

        category: "tournament",
        type: "turf",
        fixture: "2024-07-15T18:00:00"

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

export const mapPPath = [
    {
        _id: "rest_001",
        name: "Moonnupeedika Food Court",
        title: "Multi-cuisine snacks & meals",
        location: {
            lat: 10.3619,
            lng: 76.1152, // Moonnupeedika
        },
        images: {
            url: "https://images.unsplash.com/photo-1604908177522-432c67f3bdbf",
            public_id: "moonnupeedika_food_01",
        },
    },
    {
        _id: "rest_002",
        name: "Koprakalam Dine",
        title: "Traditional Kerala food",
        location: {
            lat: 10.3498,
            lng: 76.1215, // Koprakalam
        },
        images: [
            {
                url: "https://images.unsplash.com/photo-1550547660-d9450f859349",
                public_id: "koprakalam_dine_01",
            },
        ],
    },
    {
        _id: "rest_003",
        name: "Chentrappinni Cafe",
        title: "Tea, snacks & quick bites",
        location: {
            lat: 10.3376,
            lng: 76.1328, // Chentrappinni
        },
        images: [
            {
                url: "https://images.unsplash.com/photo-1548365328-5f02a04a27b8",
                public_id: "chentrappinni_cafe_01",
            },
        ],
    },
    {
        _id: "rest_004",
        name: "Koorikuzhi Grill House",
        title: "Grilled chicken & fast food",
        location: {
            lat: 10.3584,
            lng: 76.1096, // Koorikuzhi
        },
        images: [
            {
                url: "https://images.unsplash.com/photo-1606755962773-0d0f76a8eeb6",
                public_id: "koorikuzhi_grill_01",
            },
        ],
    },
];

export const restaurants = [
    {
        _id: "rest_kpm_001",
        name: "Spice Route Kitchen",
        rating: 4.6,
        deliveryTime: "20–30 mins",
        cuisine: ["Kerala", "Seafood"],
        offer: "ITEMS AT ₹99",

        location: {
            area: "Kaipamangalam",
            city: "Thrissur",
            lat: 10.3606,
            lng: 76.1422,
        },

        image: {
            url: "https://images.unsplash.com/photo-1604908177522-432c6b7c8f09",
            publicId: "kaipamangalam_spice_route",
        },
    },

    {
        _id: "rest_kpm_002",
        name: "Coastal Flames",
        rating: 4.4,
        deliveryTime: "25–35 mins",
        cuisine: ["Grill", "Arabian"],
        offer: "FLAT ₹120 OFF",

        location: {
            area: "Moonnupeedika",
            city: "Thrissur",
            lat: 10.3489,
            lng: 76.1195,
        },

        image: {
            url: "https://images.unsplash.com/photo-1544025162-d76694265947",
            publicId: "moonnupeedika_coastal_flames",
        },
    },

    {
        _id: "rest_kdl_001",
        name: "Kodungallur Pizza Hub",
        rating: 4.5,
        deliveryTime: "30–40 mins",
        cuisine: ["Pizzas", "Fast Food"],
        offer: "ITEMS AT ₹49",

        location: {
            area: "Kodungallur",
            city: "Thrissur",
            lat: 10.2203,
            lng: 76.1975,
        },

        image: {
            url: "https://images.unsplash.com/photo-1601924579446-1a2c1c1f1b4c",
            publicId: "kodungallur_pizza_hub",
        },
    },

    {
        _id: "rest_kdl_002",
        name: "Mallu Mandi House",
        rating: 4.7,
        deliveryTime: "35–45 mins",
        cuisine: ["Mandi", "Arabian"],
        offer: "FREE DELIVERY",

        location: {
            area: "Kodungallur",
            city: "Thrissur",
            lat: 10.2261,
            lng: 76.2023,
        },

        image: {
            url: "https://images.unsplash.com/photo-1627662056598-0d89b5a3e7c7",
            publicId: "kodungallur_mallu_mandi",
        },
    },
];

export const favouriteDishes = [
    {
        id: "dish_01",
        name: "Alfaham",
        image: "/food/aflu.webp",
        color: "bg-red-100",
    },
    {
        id: "dish_02",
        name: "Shawarma",
        image: "/food/f32b47ab-a2b4-4dff-8615-3c612f62e8ae.jpg",
        color: "bg-orange-100",
    },
    {
        id: "dish_03",
        name: "Kappa & Combos",
        image: "/food/kaappa.jpg",
        color: "bg-yellow-100",
    },
    {
        id: "dish_04",
        name: "Mandhi",
        image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640",
        color: "bg-amber-100",
    },
    {
        id: "dish_06",
        name: "masala dosha",
        image: "/food/masaladosha.webp",
        color: "bg-lime-100",
    },
    {
        id: "dish_05",
        name: "Fried Rice",
        image: "/food/friedrice.png",
        color: "bg-green-100",
    },

    {
        id: "dish_07",
        name: "Shakes",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
        color: "bg-pink-100",
    },
    {
        id: "dish_08",
        name: "Burger",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
        color: "bg-blue-100",
    },
];


// app/libs/Datas.ts

export const carServices: CarServiceItem[] = [
    {
        _id: "1",
        type: "taxi",
        name: "Suhail Taxi Service",
        images: {
            url: "https://images.unsplash.com/photo-1549924231-f129b911e442",
            public_id: ""
        },
        driverName: "Rahul",
        rating: 4.6,
        price: "₹15/km",
        available: true,
        contact: "9876543210",
        location: {
            area: "Kaipamangalam",
            city: "Thrissur",
            lat: 10.4517,
            lng: 76.1274
        }
    },
    {
        _id: "2",
        type: "rental",
        name: "Zoom Car Rentals",
        images: {
            url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",

        },
        rating: 4.3,
        price: "₹2,499/day",
        available: false,
        location: {
            area: "West Fort",
            city: "Thrissur",
            lat: 10.5232,
            lng: 76.2147
        }
    },
    {
        _id: "3",
        type: "dailyrental",
        name: "Daily Ride Rentals",
        images: {
            url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
        },
        rating: 4.1,
        price: "₹799/day",
        available: true,
        location: {
            area: "Kodungallur",
            city: "Thrissur",
            lat: 10.2204,
            lng: 76.1970
        }
    }
];


export const servicesAll = [
    {
        id: 1,
        category: "turf",
        title: "Elite Football Turf",
        image: "/turf.jpg",
        timing: "6AM - 10PM",
        status: "High Booking"
    },
    {
        id: 2,
        category: "turf",
        title: "Green Cricket Arena",
        image: "/turf2.jpg",
        timing: "7AM - 11PM",
        status: "Available"
    },
    {
        id: 3,
        category: "carautoservices",
        title: "Pro Car Wash",
        image: "/car.jpg",
        timing: "9AM - 8PM",
        status: "Few Slots"
    },
    {
        id: 4,
        category: "fooddelivery",
        title: "Spicy Kitchen",
        image: "/food.jpg",
        timing: "24/7 Delivery",
        status: "Open"
    },
    {
        id: 5,
        category: "fooddelivery",
        title: "Burger Hub",
        image: "/food2.jpg",
        timing: "10AM - 12AM",
        status: "Busy"
    },
]

export const services = [
    {
        id: "hotel",
        action: "/upload/serviceaspost/hotel",
        icon: "/icons/delivery-bike.png",

        title: "Hotels & Food Delivery",
        desc: "Deliver your signature dishes and manage online orders from customers nearby.",
    },
    {
        id: "auto",
        action: "/upload/serviceaspost/autoservice",
        icon: "/car.png",
        title: "Auto & Rental Services",
        desc: "Offer taxi rides, auto services, and vehicle rentals within Kaipamangalam.",
    },
    {
        id: "offers",
        icon: "/discount.png",
        action: "/upload/exclusivelist/offer",
        title: "Exclusive Offers",
        desc: "Showcase special discounts and promotional deals for local customers.",
    },
    {
        id: "promotion",
        icon: "/promotion.png",
        action: "/upload/exclusivelist/promotion",
        title: "Promote your business",
        desc: "Showcase your business,advertisement and promotional deals eclusively.",
    },
    {
        id: "turf",
        action: "/upload/serviceaspost/turf",
        icon: "/football.png",
        title: "Turf Booking",
        desc: "Allow customers to view availability and book your sports turf easily.",
    },
    {
        action: "/upload/serviceaspost/technician",
        id: "technician",
        icon: "/technician.png",
        title: "Technician Services",
        desc: "Provide electrician, plumbing, AC repair and other professional home services.",
    },
];




export interface TransportService {
    id: string;
    name: string;
    slug: string;
    image: string;
    comingSoon?: boolean;
}

export const transportServices: TransportService[] = [
    {
        id: "1",
        name: "Auto Taxi",
        slug: "autotaxi",
        image: "/carstype/auto.png"
    },
    {
        id: "2",
        name: "Car Taxi",
        slug: "car-taxi",
        image: "/carstype/toyota-innova-crysta-top-model-2393cc-automatic-transmission-turbo-engine-6-speed-gear-free-png.webp"
    },
    {
        id: "3",
        name: "Rental Cars",
        slug: "rental-cars",
        image: "/carstype/swwifttyp2.png"
    },
    {
        id: "4",
        name: "Daily Rental",
        slug: "daily-rental",
        image: "/carstype/bmw.png"
    },

];


// app/libs/Datas.ts

export interface TurfItem {
    _id: string;
    name: string;
    image: {
        url: string;
    };
    timing: string;
    sports: string[];
    rating: number;
    bookingStatus: "available" | "few" | "high";
    location: {
        area: string;
        city: string;
        lat: number;
        lng: number;
    };
}

export const turfs: TurfItem[] = [
    {
        _id: "turf_001",
        name: "Green Field Turf",
        image: {
            url: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
        },
        timing: "6:00 AM - 10:00 PM",
        sports: ["Football", "Cricket"],
        rating: 4.6,
        bookingStatus: "few",
        location: {
            area: "Kaipamangalam",
            city: "Thrissur",
            lat: 10.3619,
            lng: 76.1152
        }
    },
    {
        _id: "turf_002",
        name: "Arena Sports Hub",
        image: {
            url: "https://images.unsplash.com/photo-1517649763962-0c623066013b"
        },
        timing: "5:30 AM - 11:00 PM",
        sports: ["Football"],
        rating: 4.3,
        bookingStatus: "high",
        location: {
            area: "Kodungallur",
            city: "Thrissur",
            lat: 10.2204,
            lng: 76.197
        }
    }
];
