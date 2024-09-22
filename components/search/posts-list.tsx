"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { PostDoughnutChart } from "./post-doughnut-chart";
import { PostAssholePanel } from "./post-asshole-panel";

type Post = {
    title: string,
    selftext: string,
    verdict: string,
    isExpand: boolean
};

type Posts = Post[];

const mockReuslt={
    assholeNumber:66,
    notAssholeNumber:99,
    totalNumber:165
}


export const PostsList = ({ posts }: { posts: Posts }) => {

    const [expandedPosts, setExpandedPosts] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (title: string) => {
        setExpandedPosts((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    };

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <div key={post.title} className="border-t-2 p-3 pl-5 space-y-2 ">
                    <h1 className="text-lg font-semibold">
                        {post.title}
                    </h1>
                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-700 ease-in-out",
                            { "max-h-0": !expandedPosts[post.title], "max-h-[1000px]": expandedPosts[post.title] }
                        )}
                    >
                        <p className="text-sm text-gray-600 py-2">{post.selftext}</p>
                        <div className="flex flex-col md:flex-row">
                            <PostDoughnutChart result={mockReuslt}/>
                            <PostAssholePanel result={mockReuslt}/>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="w-[40px] h-[25px] bg-gray-200 rounded-2xl flex justify-center items-center"
                            onClick={() => toggleExpand(post.title)}>
                            <img src="/imgs/expand-arrow.svg" alt="expand-arrow" width="18px" height="18px" />
                        </button>
                        <div className={cn("ml-3 w-[120px] h-[25px] bg-gray-500 rounded-[30px] flex items-center justify-center text-white text-sm font-bold",{"bg-[#5E7BFE]":post.verdict==="NTA","bg-[#A80018]":post.verdict==="YTA"})}>
                            {post.verdict}
                        </div>
                    </div>
                </div>
            ))}
        </div> 
    )
}