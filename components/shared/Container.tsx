import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

interface Props {
    className?: string
}

export const Container = ({
    className,
    children
}: PropsWithChildren<Props>) => {
    return (
        <div className={cn("max-w-[1280px] mx-auto", className)}>{children}</div>
    )
}