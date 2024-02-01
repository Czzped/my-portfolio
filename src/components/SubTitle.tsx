import { HtmlHTMLAttributes, ReactNode } from "react";

interface ISubTitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

export function SubTitle({ children, ...props }: ISubTitleProps) {
    return (
        <h2 className="justify-center text-lg font-bold break-words text-thirdColor md:text-2xl"
            {...props}>
            {children}
        </h2>
    )
}