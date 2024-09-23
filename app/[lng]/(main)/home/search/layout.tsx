import { PopularTopics } from "@/components/search/popular-topics";
import { connectToDatabase } from "@/lib/connectDB";
import api from "../../../../../lib/utils";

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
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
    
    return (
        <div className="w-full h-full flex">
            <div className="md:flex hidden w-[383px] h-full border-r-2 p-5">
                <PopularTopics topics={topics} />
            </div>
            {children}
        </div>
    )
}