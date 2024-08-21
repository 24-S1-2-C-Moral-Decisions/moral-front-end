"use client";

import { useRouter } from "next/navigation";

type Topic={
    title:string,
    picUrl:string,
    url:string,
    postsNum:number
};

type Topics=Topic[];

export const PopularTopics = ({topics}:{topics:Topics}) => {

    const router=useRouter();

    return (
        <div className="w-full h-[490px] flex flex-col rounded-[30px] bg-[#F9FAFA] p-5 space-y-4">
            <h1 className="text-[#5C5C5C] text-sm">ALL TOPICS</h1>
            <div className=" h-full flex flex-col justify-between overflow-scroll">
                {topics.map((topic) => (
                    <button key={topic.title} className="flex space-x-3"
                    onClick={
                        ()=>router.push(topic.url)
                    }>
                        <div className="w-[41px] h-[41px] rounded-full bg-white flex items-center justify-center">
                            <img src={topic.picUrl} alt={topic.title} width="20px" height="20px"/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm text-[#525252] text-left">
                                {topic.title}
                            </h1>
                            <h1 className="text-xs text-[#9F9F9F] text-left">
                                {topic.postsNum + " posts"}
                            </h1>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
