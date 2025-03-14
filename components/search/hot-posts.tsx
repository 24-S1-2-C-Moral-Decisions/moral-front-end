"use client";

import { Posts } from "@/types";
import { fetchHotPosts } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'


export const HotPosts = () => {
    const [posts, setPosts] = useState<Posts>([]);
    const router = useRouter();

    useEffect(() => {
        fetchHotPosts().then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-between space-y-5">
            <div className="flex items-center space-x-2">
                <img src="/imgs/flame.svg" alt="flame" />
                <h1 className="text-[#4F4F4F] font-semibold font-kanit text-[16px] tracking-[0.8px]">
                    HOT POSTS
                </h1>
            </div>
            <div className="px-2 h-full flex flex-col md:justify-between">
                {posts.map((post, index) => (
                    <button key={post.title} className="md:h-[85px] h-[60px] flex space-x-5 group"
                    onClick={()=>router.push(`/home/search/result?keywords=${post.title}`)}>
                        <h1 className="md:w-[50px] w-[30px] md:text-[50px] font-impact font-normal text-2xl text-[#D9D7D9] group-hover:text-[#ED6B2C] transition">{"0" + (index + 1)}</h1>
                        <p className="text-black text-left text-sm  font-bold group-hover:text-[#ED6B2C] transition">
                            {post.title}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    )
}