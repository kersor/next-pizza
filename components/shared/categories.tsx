"use client"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { useState } from "react"

interface ICategories {
    className?: string
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']

export const Categories = ({
    className
}: ICategories) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    return (
        <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
            {
                cats.map((cat, index) => (
                    <a 
                        className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        activeIndex === index && "bg-white shadow-md shadow-gray-200 text-primary" )} 
                        key={index}>
                        <button onClick={() => setActiveIndex(index)}>{cat}</button>
                    </a>
                ))
            }
        </div>
    )
}