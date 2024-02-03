import React from "react";

export default function Icon({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <a className="flex p-1 bg-thirdColor rounded-3xl group" href={href} target="_blank">
            {children}
        </a>
    )
}