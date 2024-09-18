"use client";

import { HandlePostClick } from "@/lib/handle-post-click";
import { useRouter } from "next/navigation";

type Post = {
    id: string,
    title: string,
    selftext: string,
    url: string
}

type Posts = Post[];

export const HotPosts = ({ posts }: { posts: Posts }) => {

    const router=useRouter();

    return (
        <div className="w-full h-full flex flex-col justify-between space-y-5">
            <div className="flex items-center space-x-2">
                <img src="/imgs/flame.svg" alt="flame" />
                <h1 className="text-md text-[#4F4F4F] font-semibold">
                    HOT POSTS
                </h1>
            </div>
            <div className="h-full flex flex-col justify-between">
                {posts.map((post, index) => (
                    <button key={post.title} className="h-[85px] flex space-x-5"
                    onClick={()=>{
                        HandlePostClick(post.id);
                        router.push(post.url);
                        }}>
                        <h1 className="w-[46px] text-4xl text-[#D9D7D9] font-extrabold">{"0" + (index + 1)}</h1>
                        <p className="text-black text-left text-sm font-bold">
                            {post.title}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    )
}