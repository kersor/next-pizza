"use client"

import { cn } from "@/lib/utils"
import { Title } from "./Title"
import { FilterCheckbox } from "./FilterCheckbox"
import { Input } from "../ui/input"
import { RangeSlider } from "./RangeSlider"
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup"

interface Props {
    className?: string
}

export const Filters = ({
    className
}: Props) => {
    return (
        <div className={cn("", className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
                    <Input type="number" min={100} max={1000} placeholder="1000"/>
                </div>
                
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup 
                title="Ингредиенты"
                items={[
                    {
                        text: 'Сырный соус', 
                        value: '1'
                    },
                    {
                        text: 'Моццарелла', 
                        value: '2'
                    },
                    {
                        text: 'Чеснок', 
                        value: '3'
                    },
                    {
                        text: 'Солёные огурчики', 
                        value: '4'
                    },
                    {
                        text: 'Красный лук', 
                        value: '5'
                    },
                    {
                        text: 'Томаты', 
                        value: '6'
                    },
                    {
                        text: 'Сырный соус', 
                        value: '1'
                    },
                    {
                        text: 'Моццарелла', 
                        value: '2'
                    },
                    {
                        text: 'Чеснок', 
                        value: '3'
                    },
                    {
                        text: 'Солёные огурчики', 
                        value: '4'
                    },
                    {
                        text: 'Красный лук', 
                        value: '5'
                    },
                    {
                        text: 'Томаты', 
                        value: '6'
                    },
                ]}
                defaultItems={[
                    {
                        text: 'Сырный соус', 
                        value: '1'
                    },
                    {
                        text: 'Моццарелла', 
                        value: '2'
                    },
                    {
                        text: 'Чеснок', 
                        value: '3'
                    },
                    {
                        text: 'Солёные огурчики', 
                        value: '4'
                    },
                    {
                        text: 'Красный лук', 
                        value: '5'
                    },
                    {
                        text: 'Томаты', 
                        value: '6'
                    },
                ]}
                limit={6}
                searchInputPlaceholder = 'Поиск...'
                onChange={() => console.log()}
                // defaultValue=
                className="mt-5"
            />
        </div>
    )
} 