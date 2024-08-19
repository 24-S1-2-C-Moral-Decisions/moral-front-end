import { NavBar } from "@/components/home/nav-bar";
import { HotPosts } from "@/components/search/hot-posts";
import { PopularTopics } from "@/components/search/popular-topics";
import { SurveyPopup } from "@/components/search/survey-popup";
import { connectToDatabase } from "@/lib/mongodb";

const tags = [
    {
        title: "Communication",
        picUrl: "/imgs/tags/communication.svg",
        url: ""
    },
    {
        title: "Family",
        picUrl: "/imgs/tags/family.svg",
        url: ""
    },
    {
        title: "Friend",
        picUrl: "/imgs/tags/friend.svg",
        url: ""
    },
    {
        title: "Manner",
        picUrl: "/imgs/tags/manner.svg",
        url: ""
    },
    {
        title: "Money",
        picUrl: "/imgs/tags/money.svg",
        url: ""
    },
    {
        title: "Time",
        picUrl: "/imgs/tags/time.svg",
        url: ""
    },
    {
        title: "Work",
        picUrl: "/imgs/tags/work.svg",
        url: ""
    },
    {
        title: "More",
        picUrl: "/imgs/tags/more.svg",
        url: ""
    }
]



export default async function SearchPage() {

    const { cachedDb } = await connectToDatabase();
    if (cachedDb === undefined) {
        return <div>Cannot connect to databse</div>
    }

    const collections = await cachedDb?.listCollections().toArray()??[];
    const all = await cachedDb?.collection("all");

    const popularTopic = await Promise.all(collections.map(async (collection) => {
        const title = collection.name.charAt(0).toUpperCase() + collection.name.slice(1);
        const picUrl = `/imgs/tags/${collection.name.toLowerCase()}.svg`;
        const url = `/home/search/${collection.name.toLowerCase()}`;
        const postsNum = await cachedDb?.collection(collection.name).countDocuments()??0;

        return {
            title: title,
            picUrl: picUrl,
            url: url,
            postsNum: postsNum,
        };
    }));

    const top5Posts = await all?.find({})
        .sort({ clickcount: -1 })
        .limit(5)
        .toArray()??[];

    const hotPosts = top5Posts.map((post) => ({
        id: post._id.toString(),
        title: post.title,
        selftext: post.selftext,
        url: `/posts/${post._id}`,
    }));


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
                        <PopularTopics topics={popularTopic} />
                        <HotPosts posts={hotPosts} />
                    </div>
                    <div className=" right-0 top-[100px] fixed">
                        <SurveyPopup />
                    </div>
                </div>

            </div>
        </div>
    )
}