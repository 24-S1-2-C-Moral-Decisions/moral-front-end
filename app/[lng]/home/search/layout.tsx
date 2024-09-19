import { NavBar } from "@/components/home/nav-bar";
import { PopularTopics } from "@/components/search/popular-topics";

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


export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />
            <div className="w-full h-full flex">
                <div className="md:flex hidden w-[383px] h-full border-r-2 p-5">
                    <PopularTopics topics={popularTopic} />
                </div>
                {children}
            </div>
        </div>
    )
}