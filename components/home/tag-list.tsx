"use client";
import { useRouter } from "next/navigation"


const tags = [
    {
        title: "Communication",
        picUrl: "/imgs/tags/ic-communication.svg",
        url: "/home/search/communication"
    },
    {
        title: "Family",
        picUrl: "/imgs/tags/ic-family.svg",
        url: "/home/search/family"
    },
    {
        title: "Friends",
        picUrl: "/imgs/tags/ic-friends.svg",
        url: "/home/search/friends"
    },
    {
        title: "Manner",
        picUrl: "/imgs/tags/ic-manners.svg",
        url: "/home/search/manner"
    },
    {
        title: "Money",
        picUrl: "/imgs/tags/ic-money.svg",
        url: "/home/search/monkey"
    },
    {
        title: "Time",
        picUrl: "/imgs/tags/ic-time.svg",
        url: "/home/search/time"
    },
    {
        title: "Work",
        picUrl: "/imgs/tags/ic-work.svg",
        url: "/home/search/work"
    },
    {
        title: "Children",
        picUrl: "/imgs/tags/ic-children.svg",
        url: "/home/search/children"
    }
]


export const TagList = () => {

    const router=useRouter();

    return (
        <div className="w-full flex flex-wrap items-center md:justify-between px-5">
            {tags.map((tag) => (
                <button key={tag.title} className="mx-2 w-[77px] max-h-[79px] flex flex-col justify-between items-center"
                onClick={()=>router.push(tag.url)}>
                    <div className="w-[57px] h-[57px] rounded-full border-[0.5px] border-[#B2B2B2] flex justify-center items-center">
                        <img src={tag.picUrl} alt={tag.title} width="20px" height="20px" />
                    </div>

                    <p className=" text-[#7C7C7C] text-sm">
                        {tag.title}
                    </p>
                </button>
            ))}
        </div>
    )
}