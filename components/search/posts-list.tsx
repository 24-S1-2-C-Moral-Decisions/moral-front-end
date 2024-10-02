"use client";

import { cn, fetchSearchPost } from "@/lib/utils";
import { useRef, useState } from "react";
import { PostDoughnutChart } from "./post-doughnut-chart";
import { PostAssholePanel } from "./post-asshole-panel";

type Post = {
    title: string,
    selftext: string,
    verdict: string,
    isExpand: boolean,
    assholeNumber: number,
    notAssholeNumber: number,
};

type Posts = Post[];



export const PostsList = ({ posts, topic }: { posts: Posts, topic?: string }) => {

    const [data, setData] = useState(posts);
    const [expandedPosts, setExpandedPosts] = useState<{ [key: string]: boolean }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(2)
    const postListRef = useRef<HTMLDivElement>(null);

    // expand the details of a post
    const toggleExpand = (title: string) => {
        setExpandedPosts((prevState) => {
            return {
                ...prevState,
                [title]: !prevState[title]
            }
        });
    };

    // fetch new data when scroll to the bottom
    const handleScroll = async () => {
        const scrollDiv = postListRef.current;
        if (scrollDiv && scrollDiv.scrollTop + scrollDiv.clientHeight >= scrollDiv.scrollHeight - 10 && !isLoading) {

            setIsLoading(true);

            // fetch new data
            setTimeout(async () => {
                fetchSearchPost({topic, page, pageSize: 5})
                .then((newPosts) => {
                    if (newPosts.length > 0) {
                        setData((oldData) => [...oldData, ...newPosts.map((item: any) => {
                            return {
                                id: item.id,
                                title: item.title,
                                selftext: item.selftext,
                                verdict: item.verdict,
                                isExpand: false,
                                assholeNumber: item.YTA,
                                notAssholeNumber: item.NTA
                            }
                        })]);
                        setPage(page + 1);
                    }
                });
                setIsLoading(false);
            }, 1000)
        }
    }

    return (
        <div className="space-y-4 h-full overflow-y-auto "
            ref={postListRef}
            onScroll={handleScroll}>
            {data.map((post) => (
                <div key={post.title} className="border-t-2 p-3 pl-5 space-y-2 ">
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
                        {/* <p>{JSON.stringify(post)}</p> */}
                        <p className="text-sm text-gray-600 py-2 whitespace-pre-wrap">
                            {post.selftext.replace(/\\n/g, '\n')}
                        </p>

                        <div className="flex flex-col md:flex-row md:justify-evenly">
                            <PostDoughnutChart result={{ "assholeNumber": post.assholeNumber, "notAssholeNumber": post.notAssholeNumber, "totalNumber": post.assholeNumber + post.notAssholeNumber }} />
                            <PostAssholePanel result={{ "assholeNumber": post.assholeNumber, "notAssholeNumber": post.notAssholeNumber, "totalNumber": post.assholeNumber + post.notAssholeNumber }} />
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
            ))}
        </div>
    )
}