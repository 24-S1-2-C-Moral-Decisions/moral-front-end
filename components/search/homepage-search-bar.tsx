"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export const HomepageSearchBar = () => {

    const router=useRouter();
    const [searchText,setSearchText]=useState("");

    return (
        <div className="w-full md:flex rounded-[25px] shadow-lg hidden">
            <input className="px-6 w-full h-[80px] rounded-l-[25px] text-xl" 
            placeholder="AITA For comparing my wife to a cow?" 
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}/>
            <button className="w-[75px] h-[80px] rounded-r-[25px] bg-[#EBEEFC] hover:bg-[#99ABF2] flex justify-center items-center transition duration-200"
            onClick={()=>router.push(`/home/search/result?keywords=${encodeURIComponent(searchText)}`)}>
                <img src="/imgs/search-icon.svg" alt="search" />
            </button>
        </div>
    )
}