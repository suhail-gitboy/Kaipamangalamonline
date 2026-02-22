"use client"

import { motion } from "framer-motion"
import { Button } from "@/shadcn/ui/button"

interface ServiceCardProps {
    service: any
}

const ServiceCard = ({ service }: ServiceCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="
        bg-white
        rounded-2xl
        shadow-sm
        hover:shadow-md
        transition-all
        border border-gray-100
        overflow-hidden
      "
        >
            {/* IMAGE */}
            <div className="relative h-40 w-full">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />

                <span className="
          absolute top-3 left-3
          bg-lime-500 text-black
          text-xs px-3 py-1
          rounded-full
          shadow
        ">
                    {service.status}
                </span>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-2">
                <h3 className="font-semibold text-gray-900 text-lg">
                    {service.title}
                </h3>

                <p className="text-sm text-gray-500">
                    ⏰ {service.timing}
                </p>

                {/* ACTIONS */}
                <div className="flex flex-col gap-3 pt-3">
                    <Button
                        variant="outline"
                        className="
              w-full
              border-lime-200
              hover:bg-lime-50
              rounded-xl
              transition
            "
                    >
                        View
                    </Button>

                    <Button
                        className="
              w-full
              bg-lime-500
              hover:bg-lime-600
              text-black
              rounded-xl
              transition
            "
                    >
                        Manage
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

export default ServiceCard
