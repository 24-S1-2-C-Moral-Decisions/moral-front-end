import { NavBar } from "@/components/home/nav-bar";
import { HotPosts } from "@/components/search/hot-posts";
import { PopularTopics } from "@/components/search/popular-topics";
import { SurveyPopup } from "@/components/search/survey-popup";

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



export default async function SearchPage() {

    const popularTopic = [

        {
            title: "appearance",
            picUrl: "/imgs/tags/ic-appearance.svg",
            url: "/home/search/appearance",
            postsNum: 20,
        },
        {
            title: "babies",
            picUrl: "/imgs/tags/ic-babies.svg",
            url: "/home/search/babies",
            postsNum: 20,
        },
        {
            title: "children",
            picUrl: "/imgs/tags/ic-children.svg",
            url: "/home/search/children",
            postsNum: 20,
        },
        {
            title: "death",
            picUrl: "/imgs/tags/ic-death.svg",
            url: "/home/search/death",
            postsNum: 20,
        },
        {
            title: "food",
            picUrl: "/imgs/tags/ic-food.svg",
            url: "/home/search/food",
            postsNum: 20,
        },
        {
            title: "jokes",
            picUrl: "/imgs/tags/ic-jokes.svg",
            url: "/home/search/jokes",
            postsNum: 20,
        },
        {
            title: "living",
            picUrl: "/imgs/tags/ic-living.svg",
            url: "/home/search/living",
            postsNum: 20,
        },
        {
            title: "music",
            picUrl: "/imgs/tags/ic-music.svg",
            url: "/home/search/music",
            postsNum: 20,
        },
        {
            title: "pets",
            picUrl: "/imgs/tags/ic-pets.svg",
            url: "/home/search/pets",
            postsNum: 20,
        },
        {
            title: "religion",
            picUrl: "/imgs/tags/ic-religion.svg",
            url: "/home/search/religion",
            postsNum: 20,
        },
        {
            title: "safety",
            picUrl: "/imgs/tags/ic-safety.svg",
            url: "/home/search/safety",
            postsNum: 20,
        },

    ]


    const hotPosts = [
        {
            id: "id 1",
            title: "hot post 1",
            selftext: "hot post text 1",
            url: ``,
        },
        {
            id: "id 2",
            title: "hot post 2",
            selftext: "hot post text 2",
            url: ``,
        },
        {
            id: "id 3",
            title: "hot post 3",
            selftext: "hot post text 3",
            url: ``,
        },
        {
            id: "id 4",
            title: "hot post 4",
            selftext: "hot post text 4",
            url: ``,
        },
        {
            id: "id 5",
            title: "hot post 5",
            selftext: "hot post text 5",
            url: ``,
        },
    ]


    return (
        <div className="w-full h-full flex flex-col relative">
            <NavBar />
            <div className="mt-5 w-full flex justify-center">
                <div className=" w-[798px] h-[758px] flex flex-col items-center space-y-5">
                    <div className="flex rounded-[25px] shadow-lg">
                        <input className="w-[700px] h-[80px] rounded-l-[25px]" />
                        <button className="w-[75px] h-[80px] rounded-r-[25px] bg-[#EBEEFC] flex justify-center items-center">
                            <img src="/imgs/search-icon.svg" alt="search" />
                        </button>
                    </div>
                    <div className="w-full flex items-center justify-between px-5">
                        {tags.map((tag) => (
                            <button key={tag.title} className="w-[77px] h-[79px] flex flex-col justify-between items-center">
                                <div className="w-[57px] h-[57px] rounded-full border-[0.5px] border-[#B2B2B2] flex justify-center items-center">
                                    <img src={tag.picUrl} alt={tag.title} width="20px" height="20px" />
                                </div>

                                <p className=" text-[#7C7C7C] text-sm">
                                    {tag.title}
                                </p>
                            </button>
                        ))}
                    </div>
                    <hr className="w-full" />
                    <div className="w-full flex justify-between relative">
                        <div className="w-[333px] h-[490px]">
                        <PopularTopics topics={popularTopic} />
                        </div>
                        <div className="w-[415px] h-[490px]">
                        <HotPosts posts={hotPosts} />
                        </div>
                    </div>
                    <div className=" right-0 top-[100px] fixed">
                        <SurveyPopup />
                    </div>
                </div>

            </div>
        </div>
    )
}