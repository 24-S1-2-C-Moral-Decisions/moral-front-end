import { PopularTopics } from "@/components/search/popular-topics";
import { api, fetchTopicList } from "../../../../../lib/utils";

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full flex">
            <div className="md:flex hidden w-[383px] h-full border-r-2 p-5">
                <PopularTopics topics={await fetchTopicList()} />
            </div>
            {children}
        </div>
    )
}