"use client"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { useState } from "react"
import { useCategoryStore } from "@/store/category.zustand"

interface Props {
    className?: string
}

const categories = [
    { id: 1, name: 'Пиццы'},
    { id: 2, name: 'Закуски'},
    { id: 3, name: 'Коктейли'},
    { id: 4, name: 'Кофе'},
    { id: 5, name: 'Напитки'},
    { id: 6, name: 'Десерты'},
]

export const Categories = ({
    className
}: Props) => {
    const activeCategoryId = useCategoryStore(state => state.activeId)
    const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

    return (
        <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
            {
                categories.map((item, index) => (
                    <a 
                    href={`/#${item.name}`}
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        activeCategoryId === item.id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} key={index}
                    >
                        <button onClick={() => setActiveCategoryId(index)}>
                            {item.name}
                        </button>
                    </a>
                ))
            }
        </div>
    )
}