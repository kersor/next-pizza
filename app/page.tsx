import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg"  className="font-extrabold"/>
      </Container>
      
      <TopBar />
      
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          {/* ФИЛЬТРАЦИЯ */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* СПИСОК ТОВАРОВ */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">  
              Список товаров
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}
