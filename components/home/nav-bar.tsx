"use client";
import { ListCollapse } from "lucide-react"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"


const navList = [
    {
        title: "Home",
        url: ""
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


export const NavBar = () => {
    return (
        <div className="w-full h-[75px] flex items-center justify-between px-3 border-b-2 ">
            <img src="/imgs/Logo-3.svg" alt="Logo" width="240px" height="61px" />
            <div className="h-full py-2 md:flex space-x-10 hidden">
                {navList.map((item) => (
                    <button key={item.title} className="px-2 text-sm font-semibold h-full text-gray-500 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-500 ">
                        {item.title}
                    </button>
                ))}
            </div>
            <div className="h-full flex items-center justify-center md:hidden">
                <Drawer direction="right">
                    <DrawerTrigger asChild>
                        <button>
                            <ListCollapse className="w-[40px] h-[40px]"/>
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className=" mt-[75px] top-0">
                        <div className="flex flex-col w-full">
                            {navList.map((item)=>(
                                <button key={item.title} className="py-4 w-full text-gray-500 text-left text-lg p-2 pl-5 rounded-md hover:bg-gray-700 hover:text-white transition-all duration-500">
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>


        </div>
    )
}