
import { TagList } from "@/components/home/tag-list";
import { HomepageSearchBar } from "@/components/search/homepage-search-bar";
import { HotPosts } from "@/components/search/hot-posts";
import { PopularTopics } from "@/components/search/popular-topics";
import { SurveyPopup } from "@/components/search/survey-popup";
import { api, fetchHotPosts, fetchTopicList } from "../../../../lib/utils";




export default async function SearchPage() {

    console.time("Topics Query Time")

    // select the top 8 topics for tag list
    const topTopics = fetchTopicList()
    
    console.timeEnd("Topics Query Time")

    console.time("Hot Posts Query Time")
    // fetch hot posts
    const hotPosts = await api.get(`/post/hotPosts`,
        {
            params: {
                pageSize: 5,
            }
        }
    )
    .then((response) => {
        return response.data.map((post: any) => {
            return {
                id: post.id.toString(),
                title: post.title,
                selftext: post.selftext,
            }
        });
    })
    .catch((error) => {
        console.error("Failed to fetch hot posts", error);
    });
    console.timeEnd("Hot Posts Query Time")

    return (
        <div className="md:mt-5 w-full flex justify-center">

            <div className="w-[288px] xl:block hidden" />

            <div className="px-2 md:w-[798px] w-full md:px-0 h-[758px] flex flex-col items-center space-y-5">

                {/* home page search bar */}
                <HomepageSearchBar/>

                {/* tag list */}
                <div className="w-full overflow-x-auto">
                    <TagList topics={await fetchTopicList()}/>
                </div>

                {/* popular topics and posts */}
                <hr className="w-full" />
                <div className="w-full flex justify-between">
                    <div className="w-[333px] h-[490px] md:flex hidden">
                        <PopularTopics topics={await fetchHotPosts()} />
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