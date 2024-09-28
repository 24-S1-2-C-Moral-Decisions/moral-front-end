import { NavBar } from "@/components/home/nav-bar";
import { fetchHotPosts, fetchTopicList } from "../../../lib/utils";


export default async function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full flex flex-col">
            <NavBar topics={await fetchTopicList()} hotPosts={await fetchHotPosts()} />
            {children}
        </div>
    )
}