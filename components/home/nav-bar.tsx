"use client";
import { AlignJustify, ListCollapse } from "lucide-react"
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HotPosts } from "../search/hot-posts";
import { cn } from "@/lib/utils";

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
    const [expandMap, setExpandMap] = useState(false);
    const [expandTopics, setExpandTopics] = useState(false);
    const [openSearchDrawer,setOpenSearchDrawer]=useState(false);

    return (
        <div className="w-full md:h-[120px] h-[50px] flex items-center justify-between px-5 border-b-2 ">
            <button onClick={()=>router.push("/home")}>
            <img className="md:block hidden" src="/imgs/Logo-3.svg" alt="Logo" height="65px" />
            </button>

            {/* topic select menu for mobile */}
            <div className="md:hidden flex space-x-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button>
                            <AlignJustify className="h-[25px]" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[300px] max-h-[600px] overflow-scroll">

                        <DropdownMenuLabel className="flex justify-between text-lg tracking-widest">
                            MAP
                            <button onClick={() => { setExpandMap(!expandMap) }}>
                                <img src={"/imgs/nav-expand-arrow-" + (expandMap === true ? "up" : "down") + ".svg"} alt="expand" width="15px" />
                            </button>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <div className={cn({ "max-h-[300px]": expandMap, "max-h-0": !expandMap }, "overflow-scroll")}>
                            <DropdownMenuCheckboxItem onSelect={() => router.push("")}
                            >
                                <nav className="">Survey</nav>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem onSelect={() => router.push("/home")}
                            >
                                <nav>Home</nav>
                            </DropdownMenuCheckboxItem>
                        </div>

                        <DropdownMenuLabel className="flex justify-between text-lg tracking-widest">Topics
                            <button onClick={() => { setExpandTopics(!expandTopics) }}>
                                <img src={"/imgs/nav-expand-arrow-" + (expandTopics === true ? "up" : "down") + ".svg"} alt="expand" width="15px" />
                            </button>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className={cn({ "max-h-[300px]": expandTopics, "max-h-0": !expandTopics }, "overflow-scroll")}>
                            {topics.map((topic) => (
                                <DropdownMenuCheckboxItem key={topic.title}
                                    onSelect={() => router.push(topic.url)}
                                >
                                    <img src={topic.picUrl} alt="topic-icon" width="15px" />
                                    <nav className="ml-2">
                                        {topic.title}
                                    </nav>
                                </DropdownMenuCheckboxItem>
                            ))}
                        </div>

                    </DropdownMenuContent>
                </DropdownMenu>

                <img src="/imgs/logo-sm.svg" alt="Logo" height="30" />
            </div>

            {/* navigation bar for desktop */}
            <div className="h-full pr-10 md:flex items-center space-x-5 hidden">
                {/* {navList.map((item) => (
                    <button key={item.title} className=" px-2 text-sm font-semibold h-full text-gray-500 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-500 ">
                        {item.title}
                    </button>
                ))} */}
                <button className="w-[158px] h-[65px] flex items-center justify-center space-x-2 rounded-[30px] bg-[#D9D9D9]"
                    onClick={() => {
                        router.push("/home")
                    }}>
                    <img src="/imgs/home-icon.svg" alt="home" width="36px" />
                    <nav className=" text-2xl">
                        Home
                    </nav>
                </button>

                <button className="w-[120px] h-[65px] flex items-center justify-center bg-[#EBEEFC] rounded-[30px] text-2xl">
                    Survey
                </button>

            </div>


            {/* search icon for mobile */}
            <div className="h-full flex items-center justify-center space-x-2 md:hidden">

                <Drawer direction="right" open={openSearchDrawer} onOpenChange={setOpenSearchDrawer}>
                    <DrawerTrigger asChild>
                        <button>
                            <img src="/imgs/search-icon-black.svg" height="25px" alt="search-icon" />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className="w-full h-full">
                        <div className="flex px-5 mt-3 space-x-5">
                            <button className="w-[17px]"
                            onClick={()=>{setOpenSearchDrawer(false)}}>
                                <img src="/imgs/icon-back.svg" height="11px" />
                            </button>
                            <div className="h-[35px] w-full flex items-center px-2 bg-[#EBEDEF] rounded-[30px]">
                                <img src="/imgs/search-icon-black.svg" width="20px" alt="search-icon" />
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="ml-2 px-2 w-[100px] h-[25px] flex items-center rounded-[30px] bg-[#D9D9D9]">
                                            <div className="w-[15px] h-[15px] bg-white rounded-full" />
                                            <p className="ml-2 w-[50px] overflow-scroll">{selectedTopic}</p>
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

                                <input className="ml-3 w-full h-[32px] bg-transparent" type="text" name="" id="" />
                            </div>
                        </div>
                        <DropdownMenuSeparator className="my-4" />
                        <div className="px-3">
                            <HotPosts posts={hotPosts} />
                        </div>
                    </DrawerContent>
                </Drawer>

                {/* <DropdownMenu>
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
                </DropdownMenu> */}
            </div>


        </div>
    )
}