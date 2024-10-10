import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg"  className="font-extrabold"/>
        <Categories />
      </Container>
    </>
  )
}
