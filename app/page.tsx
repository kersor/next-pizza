import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
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
    </>
  )
}
