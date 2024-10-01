"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchTopicList } from "@/lib/utils";

type Topic = {
    title: string,
    picUrl: string,
    url: string,
    postsNum: number
};

type Topics = Topic[];


export const PopularTopics = () => {

    const router = useRouter();

    const [topics, setTopics] = useState<Topics>([]);

    useEffect(() => {
        fetchTopicList().then((data) => {
            setTopics(data);
        });
    }, []);

    return (
        <div className="w-full h-[490px] flex flex-col rounded-[30px] bg-[#F9FAFA] p-5 space-y-4">
            <h1 className="text-[#5C5C5C] text-sm">ALL TOPICS</h1>
            <div className=" h-full flex flex-col justify-between space-y-5 overflow-scroll">
                {topics.map((topic) => (
                    <button key={topic.title} className="flex flex-col"
                        onClick={
                            () => router.push(topic.url)
                        }>
                        <h1 className="text-sm text-[#525252] text-left">
                            {topic.title}
                        </h1>
                        <h1 className="text-xs text-[#9F9F9F] text-left">
                            {topic.postsNum + " posts"}
                        </h1>
                    </button>
                ))}
            </div>
        </div>
    )
}
