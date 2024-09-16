"use client";
import { AlignJustify, ListCollapse } from "lucide-react"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HotPosts } from "../search/hot-posts";

const hotPosts = [
    {
        id: "id 1",
        title: "hot post 1",
        selftext: "hot post text 1",
        url: ``,
    },
    {
        id: "id 2",
        title: "hot post 2",
        selftext: "hot post text 2",
        url: ``,
    },
    {
        id: "id 3",
        title: "hot post 3",
        selftext: "hot post text 3",
        url: ``,
    },
    {
        id: "id 4",
        title: "hot post 4",
        selftext: "hot post text 4",
        url: ``,
    },
    {
        id: "id 5",
        title: "hot post 5",
        selftext: "hot post text 5",
        url: ``,
    },
]

const topics = [

    {
        title: "appearance",
        picUrl: "/imgs/tags/ic-appearance.svg",
        url: "/home/search/appearance",
        postsNum: 20,
    },
    {
        title: "babies",
        picUrl: "/imgs/tags/ic-babies.svg",
        url: "/home/search/babies",
        postsNum: 20,
    },
    {
        title: "children",
        picUrl: "/imgs/tags/ic-children.svg",
        url: "/home/search/children",
        postsNum: 20,
    },
    {
        title: "death",
        picUrl: "/imgs/tags/ic-death.svg",
        url: "/home/search/death",
        postsNum: 20,
    },
    {
        title: "food",
        picUrl: "/imgs/tags/ic-food.svg",
        url: "/home/search/food",
        postsNum: 20,
    },
    {
        title: "jokes",
        picUrl: "/imgs/tags/ic-jokes.svg",
        url: "/home/search/jokes",
        postsNum: 20,
    },
    {
        title: "living",
        picUrl: "/imgs/tags/ic-living.svg",
        url: "/home/search/living",
        postsNum: 20,
    },
    {
        title: "music",
        picUrl: "/imgs/tags/ic-music.svg",
        url: "/home/search/music",
        postsNum: 20,
    },
    {
        title: "pets",
        picUrl: "/imgs/tags/ic-pets.svg",
        url: "/home/search/pets",
        postsNum: 20,
    },
    {
        title: "religion",
        picUrl: "/imgs/tags/ic-religion.svg",
        url: "/home/search/religion",
        postsNum: 20,
    },
    {
        title: "safety",
        picUrl: "/imgs/tags/ic-safety.svg",
        url: "/home/search/safety",
        postsNum: 20,
    },

]

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
    const router = useRouter();

    const [selectedTopic, setSelectedTopic] = useState("All");

    return (
        <div className="w-full md:h-[120px] h-[50px] flex items-center justify-between px-5 border-b-2 ">
            <img className="md:block hidden" src="/imgs/Logo-3.svg" alt="Logo" height="65px" />

            <div className="md:hidden flex space-x-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button>
                            <AlignJustify className="h-[25px]" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[300px] max-h-[600px] overflow-scroll">
                        <DropdownMenuLabel>Topics</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {topics.map((topic) => (
                            <DropdownMenuCheckboxItem key={topic.title}
                                onSelect={() => router.push(topic.url)}
                            >
                                {topic.title}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <img src="/imgs/logo-sm.svg" alt="Logo" height="30" />
            </div>

            <div className="h-full pr-10 md:flex items-center space-x-5 hidden">
                {/* {navList.map((item) => (
                    <button key={item.title} className=" px-2 text-sm font-semibold h-full text-gray-500 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-500 ">
                        {item.title}
                    </button>
                ))} */}
                <button className="w-[158px] h-[65px] flex items-center justify-center space-x-2 rounded-[30px] bg-[#D9D9D9]">
                    <img src="/imgs/home-icon.svg" alt="home" width="36px"/>
                    <nav className=" text-2xl">
                        Home
                    </nav>
                </button>

                <button className="w-[120px] h-[65px] flex items-center justify-center bg-[#EBEEFC] rounded-[30px] text-2xl">
                    Survey
                </button>

            </div>


            {/* <div className="h-[35px] w-[225px] md:hidden flex items-center px-2 bg-[#EBEDEF] rounded-[30px]">
                <img src="/imgs/search-icon-black.svg" width="20px" alt="search-icon" />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="ml-2 px-2 w-[100px] h-[30px] flex items-center rounded-[30px] bg-[#D9D9D9]">
                            <div className="w-[19px] h-[19px] bg-white rounded-full" />
                            <p className="ml-2 max-w-[50px] overflow-scroll">{selectedTopic}</p>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px] max-h-[400px] overflow-scroll">
                        <DropdownMenuLabel>Topics</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {topics.map((topic) => (
                            <DropdownMenuCheckboxItem key={topic.title}
                                onSelect={() => { setSelectedTopic(topic.title) }}
                            >
                                {topic.title}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <input className="ml-3 w-[250px] h-[32px] bg-transparent" type="text" name="" id="" />
            </div> */}

            <div className="h-full flex items-center justify-center space-x-2 md:hidden">

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <img src="/imgs/search-icon-black.svg" height="25px" alt="search-icon" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-screen h-screen overflow-scroll">
                        <DropdownMenuLabel className="px-5">
                            <div className="h-[35px] w-full flex items-center px-2 bg-[#EBEDEF] rounded-[30px]">
                                <img src="/imgs/search-icon-black.svg" width="20px" alt="search-icon" />
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="ml-2 px-2 w-[100px] h-[25px] flex items-center rounded-[30px] bg-[#D9D9D9]">
                                            <div className="w-[15px] h-[15px] bg-white rounded-full" />
                                            <p className="ml-2 max-w-[50px] overflow-scroll">{selectedTopic}</p>
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-[200px] max-h-[400px] overflow-scroll">
                                        <DropdownMenuLabel>Topics</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        {topics.map((topic) => (
                                            <DropdownMenuCheckboxItem key={topic.title}
                                                onSelect={() => { setSelectedTopic(topic.title) }}
                                            >
                                                {topic.title}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <input className="ml-3 w-[250px] h-[32px] bg-transparent" type="text" name="" id="" />
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="">
                            <HotPosts posts={hotPosts} />
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Drawer direction="right">
                    <DrawerTrigger asChild>
                        <button>
                            <ListCollapse className="h-[25px]" />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className=" mt-[75px] top-0">
                        <div className="flex flex-col w-full">
                            {navList.map((item) => (
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