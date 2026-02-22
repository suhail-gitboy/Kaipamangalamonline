"use client"

import { useState } from "react"
import { Button } from "@/shadcn/ui/button"
import { Input } from "@/shadcn/ui/input"
import { Card, CardContent } from "@/shadcn/ui/card"
import { Switch } from "@/shadcn/ui/switch"
import { Trash2, Plus } from "lucide-react"

type Dish = {
    name: string
    price: string
    veg: boolean
}

export default function AddDishesUI() {

    const [dishInput, setDishInput] = useState<Dish>({
        name: "",
        price: "",
        veg: true,
    })

    const [dishes, setDishes] = useState<Dish[]>([])

    const addDish = () => {
        if (!dishInput.name || !dishInput.price) return
        setDishes([...dishes, dishInput])
        setDishInput({ name: "", price: "", veg: true })
    }

    const removeDish = (index: number) => {
        setDishes(dishes.filter((_, i) => i !== index))
    }

    return (
        <div className="space-y-6">

            {/* ADD DISH FORM */}
            <Card className="rounded-2xl border-lime-100 shadow-sm">
                <CardContent className="p-5 space-y-4">

                    <h3 className="font-semibold text-lg">Add Dish</h3>

                    <Input
                        placeholder="Dish Name (Chicken Mandhi)"
                        value={dishInput.name}
                        onChange={(e) =>
                            setDishInput({ ...dishInput, name: e.target.value })
                        }
                        className="rounded-xl"
                    />

                    <Input
                        placeholder="Price ₹"
                        value={dishInput.price}
                        onChange={(e) =>
                            setDishInput({ ...dishInput, price: e.target.value })
                        }
                        className="rounded-xl"
                    />

                    {/* Veg Switch */}
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                        <span className="text-sm font-medium">
                            {dishInput.veg ? "Veg 🌱" : "Non-Veg 🍗"}
                        </span>
                        <Switch
                            checked={dishInput.veg}
                            onCheckedChange={(val) =>
                                setDishInput({ ...dishInput, veg: val })
                            }
                        />
                    </div>

                    <Button
                        onClick={addDish}
                        className="w-full bg-lime-600 hover:bg-lime-700 rounded-xl"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Dish
                    </Button>

                </CardContent>
            </Card>


            {/* DISH LIST */}
            {dishes.length > 0 && (
                <Card className="rounded-2xl shadow-sm">
                    <CardContent className="p-4 space-y-3">

                        <h3 className="font-semibold text-lg">Added Dishes</h3>

                        {dishes.map((dish, i) => (
                            <div
                                key={i}
                                className="
                  flex items-center justify-between
                  p-3 rounded-xl border hover:shadow-sm
                  bg-white
                "
                            >
                                <div>
                                    <p className="font-medium">{dish.name}</p>
                                    <p className="text-xs text-gray-500">
                                        ₹{dish.price} • {dish.veg ? "Veg" : "Non-Veg"}
                                    </p>
                                </div>

                                <Button
                                    size="icon"
                                    variant="destructive"
                                    onClick={() => removeDish(i)}
                                    className="rounded-xl"
                                >
                                    <Trash2 size={16} />
                                </Button>
                            </div>
                        ))}

                    </CardContent>
                </Card>
            )}

        </div>
    )
}
