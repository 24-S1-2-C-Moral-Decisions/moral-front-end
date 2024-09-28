"use client";

import { cn } from "@/lib/utils";
import { Posts } from "@/types";

export const SimilarPosts = ({posts}:{posts:Posts}) => {
    return (
        <div className="w-full">
            <h1 className="md:text-3xl text-xl font-kanit text-[#515151] tracking-wider">SIMILAR POSTS</h1>
            <div className="mt-5 flex flex-col w-full h-[300px] overflow-scroll md:space-y-5 space-y-3">
                {posts.length === 0 ? (
                    <div className="h-[300px] flex items-center justify-center">
                        <p className="text-2xl text-gray-500">Oops, no posts found!</p>
                    </div>
                ) :posts.map((post) => (
                    <div key={post.title} className="pt-4 w-full flex items-center border-t border-[#CCCCCC]">
                        <div className={cn("ml-5 w-[60px] h-[30px] bg-gray-500 rounded-[30px] flex items-center justify-center text-white text-sm font-bold", { "bg-[#5E7BFE]": post.verdict === "NTA", "bg-[#A80018]": post.verdict === "YTA" })}>
                            {post.verdict}
                        </div>
                        <p className="ml-3 font-semibold">
                            {post.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}