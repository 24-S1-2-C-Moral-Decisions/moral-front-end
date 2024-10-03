"use client";
import { Posts } from "@/types";
import { useState } from "react";
import { PostDoughnutChart } from "./post-doughnut-chart";
import { PostAssholePanel } from "./post-asshole-panel";
import { cn } from "@/lib/utils";


export const ResultList = ({ posts }: { posts: Posts }) => {

    const [expandedPosts, setExpandedPosts] = useState<{ [key: string]: boolean }>({});

    // expand the details of a post
    const toggleExpand = (title: string) => {
        setExpandedPosts((prevState) => ({
            ...prevState,
            [title]: !prevState[title],
        }));
    };


    return (
        <div className="w-full flex flex-col">
            <h1 className="mb-2 font-semibold font-kanit md:text-5xl text-2xl text-[#222222] tracking-wider">RESULT</h1>
            <div className="md:space-y-5 space-y-1 md:max-h-[500px] max-h-[400px] overflow-y-auto ">
                {posts.length === 0 ? (
                    <div className="h-[300px] flex items-center justify-center">
                        <p className="text-2xl text-gray-500">Oops, no posts found!</p>
                    </div>
                ) : posts.map((post) => (
                    <div className="flex flex-col" key={post.title}>
                        <div className="border-t-2" />
                        <div className="mt-5 p-3 pl-5 space-y-2 hover:bg-[#EBEDEF] rounded-lg transition">
                            {/* post title */}
                            <h1 className="text-lg font-semibold">
                                {post.title}
                            </h1>

                            {/* post details */}
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-700 ease-in-out",
                                    { "max-h-0": !expandedPosts[post.title], "max-h-[3000px]": expandedPosts[post.title] }
                                )}
                            >
                                <p className="text-sm text-gray-600 py-2 whitespace-pre-wrap">
                                    {post.selftext?.replace(/\\n/g, '\n')}
                                </p>

                                <div className="flex flex-col md:flex-row md:justify-evenly">
                                    <PostDoughnutChart result={{ "assholeNumber": post.assholeNumber || 0, "notAssholeNumber": post.notAssholeNumber || 0, "totalNumber": (post.assholeNumber || 0) + (post.notAssholeNumber || 0) }} />
                                    <PostAssholePanel result={{ "assholeNumber": post.assholeNumber || 0, "notAssholeNumber": post.notAssholeNumber || 0, "totalNumber": (post.assholeNumber || 0) + (post.notAssholeNumber || 0) }} />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="w-[40px] h-[25px] bg-gray-200 rounded-2xl flex justify-center items-center"
                                    onClick={() => toggleExpand(post.title)}>
                                    <img src="/imgs/expand-arrow.svg" alt="expand-arrow" width="18px" height="18px" />
                                </button>
                                <div className={cn("ml-3 w-[120px] h-[25px] bg-gray-500 rounded-[30px] flex items-center justify-center text-white text-sm font-bold", { "bg-[#5E7BFE]": post.verdict === "NTA", "bg-[#A80018]": post.verdict === "YTA" })}>
                                    {post.verdict}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}