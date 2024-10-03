"use client";

import { Posts } from "@/types";
import { fetchHotPosts } from "@/lib/utils";
import { useState, useEffect } from "react";
import router from "next/router";


export const HotPosts = () => {
    const [posts, setPosts] = useState<Posts>([]);

    useEffect(() => {
        fetchHotPosts().then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-between space-y-5">
            <div className="flex items-center space-x-2">
                <img src="/imgs/flame.svg" alt="flame" />
                <h1 className="text-md text-[#4F4F4F] font-semibold">
                    HOT POSTS
                </h1>
            </div>
            <div className="px-2 h-full flex flex-col md:justify-between">
                {posts.map((post, index) => (
                    <button key={post.title} className="md:h-[85px] h-[60px] flex space-x-5 group"
                    onClick={()=>router.push(`/home/search/result?keywords=${post.title}`)}>
                        <h1 className="md:w-[46px] w-[30px] md:text-4xl text-2xl text-[#D9D7D9] group-hover:text-[#ED6B2C] font-extrabold transition">{"0" + (index + 1)}</h1>
                        <p className="text-black text-left text-sm  font-bold group-hover:text-[#ED6B2C] transition">
                            {post.title}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    )
}