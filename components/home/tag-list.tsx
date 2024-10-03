"use client";
import { Topics } from "@/types";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import { fetchTopicList } from "@/lib/utils";


export const TagList = () => {

    const router=useRouter();

    const [topics, setTopics] = useState<Topics>([]);

    useEffect(() => {
        fetchTopicList().then((data) => {
            const topTopics = data.sort((a:any, b:any) => b.postsNum - a.postsNum).slice(1,9);
            setTopics(topTopics);
        });
    }, []);

    return (
        <div className="w-full flex items-center justify-between px-5">
            {topics.map((tag) => (
                <button key={tag.title} className="mx-4 w-[77px] max-h-[79px] flex flex-col justify-between items-center group"
                onClick={()=>router.push(tag.url)}>
                    <div className="w-[57px] h-[57px] rounded-full border-[0.5px] border-[#B2B2B2] flex justify-center items-center group-hover:bg-blue-100 transition duration-300">
                        <img src={tag.picUrl} alt={tag.title} width="20px" height="20px"  />
                    </div>

                    <p className=" text-[#7C7C7C] text-sm">
                        {tag.title}
                    </p>
                </button>
            ))}
        </div>
    )
}