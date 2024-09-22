import { PopularTopics } from "@/components/search/popular-topics";
import { connectToDatabase } from "@/lib/connectDB";

export default async function SearchLayout({ children }: { children: React.ReactNode }) {

    const { db } = await connectToDatabase();

    // fetch initial topics list
    const collections = await db?.listCollections().toArray() ?? [];
    collections.sort((a, b) => a.name.localeCompare(b.name));
    const topics = await Promise.all(collections.map(async (collection) => {
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
    
    return (
        <div className="w-full h-full flex">
            <div className="md:flex hidden w-[383px] h-full border-r-2 p-5">
                <PopularTopics topics={topics} />
            </div>
            {children}
        </div>
    )
}