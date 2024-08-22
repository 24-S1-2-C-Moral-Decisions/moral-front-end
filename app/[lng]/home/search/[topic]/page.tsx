import { NavBar } from "@/components/home/nav-bar";
import { PopularTopics } from "@/components/search/popular-topics";
import { PostsList } from "@/components/search/posts-list";
import { connectToDatabase } from "@/lib/mongodb";

export default async function TopicPage({ params }: { params: { topic: string } }) {
    const { db } = await connectToDatabase();
    if (db === undefined) {
        return <div>Cannot connect to databse</div>
    }

    const collections = await db?.listCollections().toArray() ?? [];
    const popularTopic = await Promise.all(collections.map(async (collection) => {
        const title = collection.name.charAt(0).toUpperCase() + collection.name.slice(1);
        const picUrl = `/imgs/tags/ic-${collection.name.toLowerCase()}.svg`;
        const url = `/home/search/${collection.name.toLowerCase()}`;
        const postsNum = await db?.collection(collection.name).countDocuments() ?? 0;

        return {
            title: title,
            picUrl: picUrl,
            url: url,
            postsNum: postsNum,
        };
    }));

    const collection = db.collection(params.topic.toLocaleLowerCase()); 
    const data = await collection.find({}, { projection: { title: 1, selftext: 1, _id: 0 } }).toArray();
    const posts = await Promise.all(data.map(async (post) => {
        const title = post.title;
        const selftext= post.selftext;

        return {
            title: title,
            selftext: selftext,
            isExpand: false
        };
    }));


    return (
        <div className="w-full h-full flex flex-col">
            <NavBar />
            <div className="w-full h-full flex">
                <div className="w-[30%] h-full border-r-2 p-5">
                    <PopularTopics topics={popularTopic} />
                </div>
                <div className="w-full h-full flex flex-col p-5">
                    <div className="w-full flex flex-col">
                        <div className="w-full h-[150px] bg-gradient-to-r from-blue-300 to-yellow-500 rounded-md">
                        </div>
                        <div className="w-full flex pl-32">
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
            </div>
        </div>
    )
}