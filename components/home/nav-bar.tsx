"use client";
import { AlignJustify} from "lucide-react"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HotPosts } from "@/components/search/hot-posts";
import { cn, fetchTopicList } from "@/lib/utils";
import { SearchBar } from "@/components/search/search-bar";
import { Topics } from "@/types";
import * as uuid from "uuid";



export const NavBar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const [expandMap, setExpandMap] = useState(false);
    const [expandTopics, setExpandTopics] = useState(false);
    const [openSearchDrawer, setOpenSearchDrawer] = useState(false);

    const [topics, setTopics] = useState<Topics>([]);

    useEffect(() => {
        fetchTopicList().then((data) => {
            setTopics(data);
        });
    }, []);

    const jumpToSurvey = (): void =>{
        const profiledId = uuid.v4();
        const surveyUrl = process.env.NEXT_PUBLIC_SURVEY_URL || "http://localhost:8081/";
        window.location.href = `${surveyUrl}?prolificId=${profiledId}`;
    }
    return (
        <div className="w-full md:h-[100px] h-[50px] xl:px-[144px] px-[15px] flex items-center justify-between border-b-2 bg-white">

            {/* logo for large screen */}
            <button className="md:block hidden" onClick={() => router.push("/home")}>
                <img src="/imgs/Logo-3.svg" alt="Logo" width="300px"/>
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

            {/* search bar for desktop */}
            <div className={cn({"md:flex":pathname.startsWith("/en/home/search")},"w-[500px] hidden")}>
                <SearchBar placeholder="default" topics={topics} />
            </div>

            {/* navigation bar for desktop */}
            <div className="h-full md:flex items-center space-x-5 hidden">
                {/* home button */}
                <button className="w-[120px] h-[40px] flex items-center justify-center space-x-2 rounded-[30px] bg-[#D9D9D9]"
                    onClick={() => {
                        router.push("/home")
                    }}>
                    <img src="/imgs/home-icon.svg" alt="home" width="20px" />
                    <nav className=" text-lg">
                        Home
                    </nav>
                </button>

                {/* survey button */}
                <button className="w-[100px] h-[40px] flex items-center 
                justify-center bg-[#EBEEFC] rounded-[30px] text-lg" onClick={() => jumpToSurvey()}>
                    Survey
                </button>
            </div>


            {/* search bar for mobile */}
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
                                onClick={() => { setOpenSearchDrawer(false) }}>
                                <img src="/imgs/icon-back.svg" height="11px" />
                            </button>
                            <SearchBar placeholder="default" topics={topics} />
                        </div>
                        <DropdownMenuSeparator className="my-4" />
                        <div className="px-3">
                            <HotPosts />
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
                            <HotPosts />
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu> */}
            </div>


        </div>
    )
}