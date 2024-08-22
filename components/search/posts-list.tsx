"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type Post = {
    title: string,
    selftext: string,
    isExpand: boolean
};

type Posts = Post[];


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
                            { "max-h-0": !expandedPosts[post.title], "max-h-96": expandedPosts[post.title] }
                        )}
                    >
                        <p className="text-sm text-gray-600 py-2">{post.selftext}</p>
                    </div>
                    <div className="flex items-center">
                        <button className="w-[40px] h-[25px] bg-gray-200 rounded-2xl flex justify-center items-center"
                            onClick={() => toggleExpand(post.title)}>
                            <img src="/imgs/expand-arrow.svg" alt="expand-arrow" width="18px" height="18px" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}