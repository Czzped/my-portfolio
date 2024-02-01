import { HtmlHTMLAttributes, ReactNode } from "react";

interface ITitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

export function Title({ children, ...props }: ITitleProps) {
    return (
        <h1 className="justify-center text-4xl font-bold break-words text-primaryColor"
            {...props}>
            {children}
        </h1>
    )
}