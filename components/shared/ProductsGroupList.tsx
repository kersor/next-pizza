import { cn } from "@/lib/utils"
import { Title } from "./Title"
import { ProductCard } from "./ProductCard"

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
    return (
        <div className={cn("", className)}>
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