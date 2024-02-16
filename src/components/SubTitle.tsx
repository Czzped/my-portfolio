import { HtmlHTMLAttributes, ReactNode } from "react";

interface ISubTitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

export function SubTitle({ children, ...props }: ISubTitleProps) {
    return (
        <h2 className="justify-center text-2xl font-bold break-words text-thirdColor md:text-3xl"
            {...props}>
            {children}
        </h2>
    )
}