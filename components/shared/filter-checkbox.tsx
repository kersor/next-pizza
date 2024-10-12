import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

interface IFilterCheckbox {
    text: string,
    value: string,
    endAdornment?: React.ReactNode,
    onCheckedChange?: (checked: boolean) => void,
    checked?: boolean,
    className?: string
}

export function FilterCheckbox ({
    className,
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked
}: IFilterCheckbox) {
    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[8px] w-6 h-6"
                id={`checkbox-${String(value)}`}
            />
            <label htmlFor={`checkbox-${String(value)}`} className="leading-none cursor-pointer flex-1">
                {text}
            </label>
            {endAdornment}
        </div>
    )
}