"use client";

import { cn } from "@/lib/utils";
import { Posts } from "@/types";
import { useRouter } from "next/navigation";

export const SimilarPosts = ({ posts }: { posts: Posts }) => {

    const router=useRouter();

    return (
        <div className="w-full">
            <h1 className="md:text-3xl text-xl font-kanit text-[#515151] tracking-wider">SIMILAR POSTS</h1>
            <div className="mt-5 flex flex-col w-full h-[300px] overflow-scroll md:space-y-3 space-y-1">
                {posts.length === 0 ? (
                    <div className="h-[300px] flex items-center justify-center">
                        <p className="text-2xl text-gray-500">Oops, no posts found!</p>
                    </div>
                ) : posts.map((post) => (
                    <button className="flex flex-col w-full" key={post.title}
                    onClick={()=>router.push(`/home/search/result?keywords=${post.title}`)}>
                        <div className="border-t border-[#CCCCCC] w-full" />
                        <div className="md:mt-3 mt-1 py-4 w-full flex items-center hover:bg-[#EBEDEF] rounded-lg transition">
                            <div className={cn("md:ml-5 ml-3 min-w-[60px] h-[30px] bg-gray-500 rounded-[30px] flex items-center justify-center text-white text-sm font-bold", { "bg-[#5E7BFE]": post.verdict === "NTA", "bg-[#A80018]": post.verdict === "YTA" })}>
                                {post.verdict}
                            </div>
                            <p className="ml-3 font-semibold">
                                {post.title}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}