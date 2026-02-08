import React, { useState } from 'react'
import Close from '../rusable/Close';
import { Filterdata } from '@/app/libs/Datas';
import { motion } from 'framer-motion';

const Filterbar = ({ Setfilter, filter }: { filter: boolean, Setfilter: React.Dispatch<React.SetStateAction<boolean>> }) => {




    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const locations = [
        "Koorikuzhi",
        "Kalamuri",
        "Chalingad",
        "Moonnupeedika",
        "Koprakalam",
        "Chentrappinni",
        "Chamakkala",
        "Vazhiyambalam",
        "Pallivalavu"
    ];

    const categories = Filterdata.filter(a => a.filter).map(a => a.activity);

    return (
        <motion.div initial={{ opacity: 0, y: 1000 }} transition={{ duration: 0.2 }}
            exit={{ opacity: 0.3 }} animate={{ opacity: 1, y: 0 }} className={` ${filter ? "translate-y-0" : "translate-y-full"} md:translate-0 transition-transform duration-300 inset-0 fixed bg-black/65 z-50  md:fixed md:inset-0 md:bg-black/35  md:min-h-screen md:flex md:flex-col md:justify-center md:items-center`}>
            <Close onClick={() => Setfilter(prev => !prev)} />
            <div className="absolute rounded-t-4xl bottom-0 left-0 right-0 z-50 md:static p-6 bg-gradient-to-b from-lime-200 to-lime-50 md:rounded-xl w-full md:w-md shadow-lg">
                <div className="md:hidden flex justify-center  py-2 ">
                    <h1 className='w-2/4 h-2 rounded-full bg-white'></h1>

                </div>
                <h2 className="text-black/45 text-4xl font-bold italic mb-5">Filter </h2>

                {/* Location Filter */}
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Location</label>
                    <div className="flex flex-wrap gap-3">
                        {locations.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => setSelectedLocation(loc)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm
                ${selectedLocation === loc
                                        ? "bg-white text-orange-600 shadow-md"
                                        : "bg-white/80 text-gray-700 hover:bg-white/95 hover:shadow-md"
                                    }`}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Category</label>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm
                ${selectedCategory === cat
                                        ? "bg-white text-orange-600 shadow-md"
                                        : "bg-white/80 text-gray-700 hover:bg-white/95 hover:shadow-md"
                                    }`}
                            >
                                {Filterdata.find(a => a.activity === cat)?.icon && (
                                    <img
                                        src={Filterdata.find(a => a.activity === cat)?.icon}
                                        alt={cat}
                                        className="w-4 h-4"
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Apply Button */}
                <button
                    className="w-full bg-lime-100 text-lime-800 font-semibold py-2 rounded-lg shadow hover:bg-lime-200 transition"
                    onClick={() => console.log({ location: selectedLocation, category: selectedCategory })}
                >
                    Apply Filters
                </button>
            </div>
        </motion.div>
    )
}

export default Filterbar
