import { cn } from "@/lib/utils"
import { Sort } from "./Sort"
import { Categories } from "./Categories"
import { Title } from "./Title"
import { Container } from "./Container"

interface Props {
    className?: string
}

export const TopBar = ({
    className
}: Props) => {
    return (
        <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
            <Container className="flex items-center justify-between">
                <Categories />
                <Sort />
            </Container>
        </div>
    )
}