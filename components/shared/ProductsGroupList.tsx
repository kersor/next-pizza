"use client"

import { cn } from "@/lib/utils"
import { Title } from "./Title"
import { ProductCard } from "./ProductCard"

import { useIntersection } from 'react-use'
import React from "react"
import { useCategoryStore } from "@/store/category.zustand"

interface Props {
    className?: string
    title: string
    items: any[]
    categoryId: number
    listClassName?: string
}

export const ProductsGroupList = ({
    className,
    title,
    items,
    categoryId,
    listClassName
}: Props) => {
    const setCategoryActiveId = useCategoryStore(state => state.setActiveId)
    const intersectionRef = React.useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    })

    // Когда пользователь прокручивает страницу и видит определённую категорию товаров, и автоматически помечает её как активную
    React.useEffect(() => {
        if(intersection?.isIntersecting) {
            setCategoryActiveId(categoryId)
        }
    }, [intersection?.isIntersecting])

    return (
        <div className={cn("", className)} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            
            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {
                    items.map((product, i) => (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.items[0].price}
                            imageUrl={product.imageUrl}               
                        />
                    ))
                }
            </div>
        </div>
    )
}