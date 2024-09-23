import { NavBar } from "@/components/home/nav-bar";
import { TagList } from "@/components/home/tag-list";
import { HotPosts } from "@/components/search/hot-posts";
import { PopularTopics } from "@/components/search/popular-topics";
import { SurveyPopup } from "@/components/search/survey-popup";
import { connectToDatabase } from "@/lib/connectDB";
import api from "../../../../lib/utils";

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

type Topic = {
    title: string,
    picUrl: string,
    url: string,
    postsNum: number
};

type Topics = Topic[];



export default async function SearchPage() {

    const { db } = await connectToDatabase()

    // fetch topics list
    const topicsList = (await api.get('/post/topics')).data;
    const topics = await Promise.all(topicsList.map((topic: { name: string; count:number }) => {
        const title = topic.name.charAt(0).toUpperCase() + topic.name.slice(1);
        const picUrl = `/imgs/tags/ic-${topic.name.toLowerCase()}.svg`;
        const url = `/home/search/${topic.name.toLowerCase()}`;
        const postsNum = topic.count;

        return {
            title: title,
            picUrl: picUrl,
            url: url,
            postsNum: postsNum,
        };
    }));

    // fetch hot posts
    const topPosts = await db.collection('all')
        .find({})
        .sort({ num_comments: -1 })
        .limit(5)
        .toArray();
    const hotPosts = topPosts.map((post) => ({
        id: post._id.toString(),
        title: post.title,
        selftext: post.selftext,
    }));

    return (
        <div className="md:mt-5 w-full flex justify-center">

            <div className="w-[288px] xl:block hidden" />

            <div className="px-2 md:w-[798px] w-full md:px-0 h-[758px] flex flex-col items-center space-y-5">

                <div className="w-full md:flex rounded-[25px] shadow-lg hidden">
                    <input className="w-full h-[80px] rounded-l-[25px]" />
                    <button className="w-[75px] h-[80px] rounded-r-[25px] bg-[#EBEEFC] flex justify-center items-center">
                        <img src="/imgs/search-icon.svg" alt="search" />
                    </button>
                </div>

                <div>
                    <TagList />
                </div>

                <hr className="w-full" />
                <div className="w-full flex justify-between">
                    <div className="w-[333px] h-[490px] md:flex hidden">
                        <PopularTopics topics={topics} />
                    </div>
                    <div className="md:px-0 px-3 w-[415px] h-[490px]">
                        <HotPosts posts={hotPosts} />
                    </div>
                </div>
            </div>

            <div className="lg:block hidden">
                <SurveyPopup />
            </div>

        </div>
    )



}