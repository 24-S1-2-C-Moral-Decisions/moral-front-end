
import { TagList } from "@/components/home/tag-list";
import { HomepageSearchBar } from "@/components/search/homepage-search-bar";
import { HotPosts } from "@/components/search/hot-posts";
import { PopularTopics } from "@/components/search/popular-topics";
import { SurveyPopup } from "@/components/search/survey-popup";
import { connectToDatabase } from "@/lib/connectDB";




export default async function SearchPage() {

    console.time("Topics Query Time")
    const { db } = await connectToDatabase()

    // fetch topics list
    const collections = await db?.listCollections().toArray() ?? [];
    collections.sort((a, b) => a.name.localeCompare(b.name));
    const topics = await Promise.all(collections.map(async (collection) => {
        const title = collection.name.charAt(0).toUpperCase() + collection.name.slice(1);
        const picUrl = `/imgs/tags/ic-${collection.name.toLowerCase()}.svg`;
        const url = `/home/search/${collection.name.toLowerCase()}`;
        const postsNum = await db?.collection(collection.name).estimatedDocumentCount() ?? 0;

        return {
            title: title,
            picUrl: picUrl,
            url: url,
            postsNum: postsNum,
        };
    }));

    // select the top 8 topics for tag list
    const topTopics = topics
        .sort((a, b) => b.postsNum - a.postsNum)
        .slice(1, 9);
    
    console.timeEnd("Topics Query Time")

    console.time("Hot Posts Query Time")
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
    console.timeEnd("Hot Posts Query Time")

    return (
        <div className="md:mt-5 w-full flex justify-center">

            <div className="w-[288px] xl:block hidden" />

            <div className="px-2 md:w-[798px] w-full md:px-0 h-[758px] flex flex-col items-center space-y-5">

                {/* home page search bar */}
                <HomepageSearchBar/>

                {/* tag list */}
                <div className="w-full overflow-x-auto">
                    <TagList topics={topTopics}/>
                </div>

                {/* popular topics and posts */}
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