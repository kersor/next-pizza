import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface IHeader {
    className?: string
}

export const Header = ({
    className
}: IHeader) => {
    return (
        <header className={cn("border border-b", className)}>
            <Container className="flex items-center justify-between py-[32px]">
                {/* Левая часть */}
                <div className="flex items-center gap-[16px]">
                    <Image src={'/logo.png'} width={35} height={35} alt="Logo" />
                    <div>
                        <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                    </div>
                </div>

                {/* Правая часть */}
                <div className="flex items-center gap-[12px]">
                    <Button className="flex items-center gap-[12px]" variant={"outline"}>
                        <User size={16} />
                        Войти                        
                    </Button>
                    <div>
                        <Button className="group relative">
                            <b>520 Р</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3"/>
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                                <p>3</p>
                            </div>
                            <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}