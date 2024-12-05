import { Categories } from "@/components/shared/Categories";
import { Container } from "@/components/shared/Container";
import { Sort } from "@/components/shared/Sort";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
    </div>
  );
}
