import { NavBar } from "@/components/home/nav-bar";
import { connectToDatabase } from "@/lib/connectDB";


export default async function MainLayout({ children }: { children: React.ReactNode }) {

    const { db } = await connectToDatabase()
    const collections = await db?.listCollections().toArray() ?? [];
    collections.sort((a, b) => a.name.localeCompare(b.name));
    
    // fetch topics list
    const topics = await Promise.all(collections.map(async (collection) => {
        const title = collection.name.charAt(0).toUpperCase() + collection.name.slice(1);
        const picUrl = `/imgs/tags/ic-${collection.name.toLowerCase()}.svg`;
        const url = `/home/search/${collection.name.toLowerCase()}`;

        return {
            title: title,
            picUrl: picUrl,
            url: url,
        };
    }));

    // fetch hot posts list
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
        <div className="w-full h-full flex flex-col">
            <NavBar topics={topics} hotPosts={hotPosts} />
            {children}
        </div>
    )
}