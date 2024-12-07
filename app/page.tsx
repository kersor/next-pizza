import { Categories } from "@/components/shared/Categories";
import { Container } from "@/components/shared/Container";
import { Filters } from "@/components/shared/Filters";
import { ProductCard } from "@/components/shared/ProductCard";
import { ProductsGroupList } from "@/components/shared/ProductsGroupList";
import { Sort } from "@/components/shared/Sort";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const items1 = [
  {
    id: 1,
    name: "Ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
    price: "409",
    items: [
      {
        price: "409",
      },
      {
        price: "609",
      },
      {
        price: "809",
      }
    ]
  },
  {
    id: 2,
    name: "Ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
    price: "409",
    items: [
      {
        price: "409",
      },
      {
        price: "609",
      },
      {
        price: "809",
      }
    ]
  },
  {
    id: 3,
    name: "Ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
    price: "409",
    items: [
      {
        price: "409",
      },
      {
        price: "609",
      },
      {
        price: "809",
      }
    ]
  },
  {
    id: 4,
    name: "Ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
    price: "409",
    items: [
      {
        price: "409",
      },
      {
        price: "609",
      },
      {
        price: "809",
      }
    ]
  }
]

const items2 = [
  {
    id: 1,
    name: "Дэнвич ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
    price: "259",
    items: [
      {
        price: "259",
      },
      {
        price: "459",
      },
      {
        price: "659",
      }
    ]
  },
  {
    id: 2,
    name: "Дэнвич ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
    price: "259",
    items: [
      {
        price: "259",
      },
      {
        price: "459",
      },
      {
        price: "659",
      }
    ]
  },
  {
    id: 3,
    name: "Дэнвич ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif",
    price: "259",
    items: [
      {
        price: "259",
      },
      {
        price: "459",
      },
      {
        price: "659",
      }
    ]
  },

]

export default function Home() {
  return (
    <div>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* SideBar */}
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">

              <ProductsGroupList 
                title="Пиццы"
                items={items1}
                categoryId={1}
              />
              <ProductsGroupList 
                title="Закуски"
                items={items2}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
