import { PostsList } from "@/components/search/posts-list";
import { api } from "@/lib/utils";

export default async function TopicPage({ params }: { params: { topic: string } }) {

    const { topic } = params;

    const posts = await api.get(`/search`, {
        params: {
            topic: topic,
            pages: 0,
            pageSize: 10
        }
    })
    .then((response) => {
        console.log(topic);
        console.log(" app/[lng]/(main)/home/search/[topic]/page.tsx: response.data", response.data.length);
        return response.data.map((post: any) => ({
                title: post.title,
                selftext: post.selftext,
                verdict: post.verdict,
                isExpand: false,
                assholeNumber: post.YTA,
                notAssholeNumber: post.NTA,
            }));
    })
    .catch((error) => {
        console.error("Failed to search", error);
    });

    // const posts = initalPosts.map();

    return (
        <div className="p-5 w-full h-full flex flex-col">
            <div className="w-full flex flex-col">
                <div className="w-full md:h-[150px] h-[120px] bg-gradient-to-r from-blue-300 to-yellow-500 rounded-md">
                </div>
                <div className="w-full flex md:pl-32 pl-10">
                    <div className="w-[90px] h-[90px] rounded-full bg-white transform translate-y-[-45px] flex items-center justify-center">
                        <img src={`/imgs/tags/ic-${params.topic}.svg`} alt={params.topic} width="60px" height="60px" />
                    </div>
                    <h1 className=" font-bold text-3xl">{params.topic.replace(/%20/g, " ").toUpperCase()}</h1>
                </div>
            </div>

            <div className="h-full overflow-auto">
                <PostsList posts={posts??[]} topic={topic.replace(/%20/g, " ").toLowerCase()} />
            </div>
        </div>
    )
}