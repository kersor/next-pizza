"use client"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { useState } from "react"

interface Props {
    className?: string
}

const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']

export const Categories = ({
    className
}: Props) => {
    const [activeCats, setActiveCats] = useState(0)

    return (
        <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
            {
                categories.map((item, index) => (
                    <a className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        activeCats === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} key={index}>
                        <button onClick={() => setActiveCats(index)}>
                            {item}
                        </button>
                    </a>
                ))
            }
        </div>
    )
}