import { NavBar } from "@/components/home/nav-bar";
import { connectToDatabase } from "@/lib/connectDB";
import api from "../../../lib/utils";

type Topic = { 
    title: string; 
    picUrl: string; 
    url: string; 
};

export default async function MainLayout({ children }: { children: React.ReactNode }) {

    const { db } = await connectToDatabase()
    
    // fetch topics list
    const topicsList = (await api.get('/post/topics')).data;
    const topics = await Promise.all(topicsList.map(async (topic: { name: string; count: number}) => {
        const title = topic.name.charAt(0).toUpperCase() + topic.name.slice(1);
        const picUrl = `/imgs/tags/ic-${topic.name.toLowerCase()}.svg`;
        const url = `/home/search/${topic.name.toLowerCase()}`;

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
