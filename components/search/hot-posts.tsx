"use client";

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
            <div className="px-2 h-full flex flex-col md:justify-between">
                {posts.map((post, index) => (
                    <button key={post.title} className="md:h-[85px] h-[60px] flex space-x-5">
                        <h1 className="md:w-[46px] w-[30px] md:text-4xl text-2xl text-[#D9D7D9] font-extrabold">{"0" + (index + 1)}</h1>
                        <p className="text-black text-left text-sm font-bold">
                            {post.title}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    )
}