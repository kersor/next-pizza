import { cn } from "@/lib/utils"
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox"
import { Input } from "../ui/input"
import { useState } from "react"

type Item = FilterChecboxProps

interface Props {
    title: string
    items: Item[]
    defaultItems: Item[]
    limit?: number
    searchInputPlaceholder?: string
    onChange: (values: string[]) => void
    defaultValue?: string[]
    className?: string
}

export const CheckboxFiltersGroup = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    onChange,
    defaultValue,
    className
}: Props) => {
    const [showAll, setShowAll] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const list = showAll 
    ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) 
    : defaultItems.slice(0, limit)

    const funcOnChangeSearchInput = (value: string) => {
        setSearchValue(value)
    }

    return (
        <div className={cn("", className)}>
            <p className="font-bold mb-3">{title}</p>

            {
                showAll && 
                <div className="mb-5">
                    <Input 
                        onChange={(e) => funcOnChangeSearchInput(e.target.value)} 
                        placeholder={searchInputPlaceholder} 
                        className="bg-gray-50 border-none" 
                    />
                </div>
            }

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox 
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        onCheckedChange={(ids) => console.log(ids)}
                        checked={false}
                    />
                ))}
            </div>

            {
                items.length > limit &&
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            }

        </div>
    )
}