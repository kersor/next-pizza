import { createElement } from "react";
import clsx from 'clsx'

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ITitle {
    text: string,
    size?: TitleSize,
    className?: string
}

export const Title = ({
    text,
    size = 'sm',
    className
}: ITitle) => {
    const mapTagBySize = {
        xs: 'h5',
        sm: 'h4',
        md: 'h3',
        lg: 'h2',
        xl: 'h1',
        '2xl': 'h1',
    };

    const mapClassNameBySize = {
        xs: 'text-[16px]',
        sm: 'text-[22px]',
        md: 'text-[26px]',
        lg: 'text-[32px]',
        xl: 'text-[40px]',
        '2xl': 'text-[48px]',
    }

    return createElement(
        mapTagBySize[size],
        { className: clsx(mapClassNameBySize[size], className) },
        text
    )
}