import { NavBar } from "@/components/home/nav-bar";
import { api, fetchTopicList } from "../../../lib/utils";


export default async function MainLayout({ children }: { children: React.ReactNode }) {
    // fetch hot posts list
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

    return (
        <div className="w-full h-full flex flex-col">
            <NavBar topics={await fetchTopicList()} hotPosts={hotPosts} />
            {children}
        </div>
    )
}