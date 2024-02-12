"use client"

import { Dispatch, SetStateAction, useContext, useState } from "react"
import { createContext } from "react"

interface SidebarContextProps {
    isSideBarOpen: boolean,
    setSideBar: Dispatch<SetStateAction<boolean>>
}

export const SideBarContext = createContext({} as SidebarContextProps)

export function SideBarContextProvider({ children }: { children: React.ReactNode }) {
    const [isSideBarOpen, setSideBar] = useState(false)

    const sideBarContext = {
        isSideBarOpen,
        setSideBar
    }

    return (
        <SideBarContext.Provider value={sideBarContext}>
            {children}
        </SideBarContext.Provider>
    )
}

export const useSideBarContext = () => useContext(SideBarContext)