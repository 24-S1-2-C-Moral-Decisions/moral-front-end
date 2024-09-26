"use client";
import { Topics } from "@/types"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useState } from "react"


export const SearchBar = ({placeholder,topics}:{placeholder:string,topics:Topics}) => {

    const [selectedTopic,setSelectedTopic]=useState("All");

    return (
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

            <input className="ml-3 w-full h-[32px] bg-transparent" type="text" name="" id="" placeholder={`Search in ${selectedTopic}`}/>
        </div>
    )
}