"use client"

import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

export const NavBar = () => {

    const router = useRouter()

    const navList = [
        {
            title: "Home",
            url: "",
            onClick: () => {
                router.push("/home/search")
            }
        },
        {
            title: "Topic Pair Exploration",
            url: ""
        },
        {
            title: "Post Exploration",
            url: ""
        },
        {
            title: "Moral Foundations",
            url: ""
        },
        {
            title: "eMFD",
            url: ""
        },
        {
            title: "AITA Filtered",
            url: ""
        }
    ]

    return (
        <div className="w-full h-[100px] flex items-center justify-between px-[57px] border-b-2 ">
            <img src="/imgs/Logo-3.svg" alt="Logo" width="240px" height="61px" />
            <div className="flex space-x-10">
                {navList.map((item) => (
                    <div key={item.title} className={cn("text-sm", { "cursor-pointer": item.onClick ? true : false })} onClick={item.onClick ?? undefined}>
                        {item.title}
                    </div>
                ))}
            </div>
        </div >
    )
}