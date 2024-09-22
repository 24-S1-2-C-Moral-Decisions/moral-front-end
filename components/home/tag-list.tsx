

const tags = [
    {
        title: "Communication",
        picUrl: "/imgs/tags/ic-communication.svg",
        url: ""
    },
    {
        title: "Family",
        picUrl: "/imgs/tags/ic-family.svg",
        url: ""
    },
    {
        title: "Friend",
        picUrl: "/imgs/tags/ic-friends.svg",
        url: ""
    },
    {
        title: "Manner",
        picUrl: "/imgs/tags/ic-manners.svg",
        url: ""
    },
    {
        title: "Money",
        picUrl: "/imgs/tags/ic-money.svg",
        url: ""
    },
    {
        title: "Time",
        picUrl: "/imgs/tags/ic-time.svg",
        url: ""
    },
    {
        title: "Work",
        picUrl: "/imgs/tags/ic-work.svg",
        url: ""
    },
    {
        title: "More",
        picUrl: "/imgs/tags/ic-more.svg",
        url: ""
    }
]


export const TagList = () => {
    return (
        <div className="w-full flex flex-wrap items-center md:justify-between px-5">
            {tags.map((tag) => (
                <button key={tag.title} className="mx-2 w-[77px] max-h-[79px] flex flex-col justify-between items-center">
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