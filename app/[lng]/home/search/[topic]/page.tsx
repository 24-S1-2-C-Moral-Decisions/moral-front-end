import { NavBar } from "@/components/home/nav-bar";
import { PopularTopics } from "@/components/search/popular-topics";
import { PostsList } from "@/components/search/posts-list";

export default async function TopicPage({ params }: { params: { topic: string } }) {

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


    return (
        <div className="p-5 w-full h-full flex flex-col">
            <div className="w-full flex flex-col">
                <div className="w-full md:h-[150px] h-[120px] bg-gradient-to-r from-blue-300 to-yellow-500 rounded-md">
                </div>
                <div className="w-full flex md:pl-32 pl-10">
                    <div className="w-[90px] h-[90px] rounded-full bg-white transform translate-y-[-45px] flex items-center justify-center">
                        <img src={`/imgs/tags/ic-${params.topic}.svg`} alt={params.topic} width="60px" height="60px" />
                    </div>
                    <h1 className=" font-bold text-3xl">{params.topic.toUpperCase()}</h1>
                </div>
            </div>

            <div className="h-full overflow-auto">
                <PostsList posts={posts} />
            </div>
        </div>
    )
}