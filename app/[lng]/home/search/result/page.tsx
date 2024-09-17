import { PostsList } from "@/components/search/posts-list";
import { cn } from "@/lib/utils";

const posts = [
    {
        title: "test title 1",
        selftext: "test text 1",
        verdict: "NTA",
        isExpand: false
    },
    {
        title: "test title 2",
        selftext: "test text 2",
        verdict: "YTA",
        isExpand: false
    },
    {
        title: "test title 3",
        selftext: "test text 3",
        verdict: "NAH",
        isExpand: false
    },
    {
        title: "test title 4",
        selftext: "test text 4",
        verdict: "INFO",
        isExpand: false
    },
]

const similarPosts = [
    {
        title: "AITA - test title 1",
        verdict:"NAH"
    },
    {
        title: "AITA - test title 2",
        verdict:"YTA"
    },
    {
        title: "AITA - test title 3",
        verdict:"YTA"
    },
    {
        title: "AITA - test title 4",
        verdict:"NTA"
    },
]

export default function ResultPage(){
    return(
        <div className="md:p-5 p-3 w-full h-full flex flex-col overflow-scroll">
            <div className="w-full flex flex-col">
                <h1 className="mb-2 font-semibold font-kanit md:text-5xl text-2xl text-[#222222] tracking-wider">RESULT</h1>
                <PostsList posts={posts}/>
            </div>
            <div className="mt-8 w-full">
                <h1 className="md:text-3xl text-xl font-kanit text-[#515151] tracking-wider">SIMILAR POSTS</h1>
                <div className="mt-5 flex flex-col w-full overflow-scroll space-y-5">
                    {similarPosts.map((post)=>(
                        <div key={post.title} className="pt-4 w-full flex items-center border-t border-[#CCCCCC]">
                            <div className={cn("ml-5 w-[60px] h-[30px] bg-gray-500 rounded-[30px] flex items-center justify-center text-white text-sm font-bold",{"bg-[#5E7BFE]":post.verdict==="NTA","bg-[#A80018]":post.verdict==="YTA"})}>
                                {post.verdict}
                            </div>
                            <p className="ml-3 font-semibold">
                                {post.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}