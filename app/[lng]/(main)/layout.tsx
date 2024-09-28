import { NavBar } from "@/components/home/nav-bar";
import { fetchHotPosts, fetchTopicList } from "../../../lib/utils";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
    onst envList = [
        {
          name: 'NEXT_PUBLIC_SURVEY_URL',
          required: true,
          default: 'https://24-s1-2-c-moral-decisions.github.io/moral-survey/',
        },
        {
          name: 'NEXT_PUBLIC_API_URL',
          required: true,
          default: 'https://moralmomentapi.azurewebsites.net/',
        },
      ]
    return (
        <div className="w-full h-full flex flex-col">
            <NavBar topics={await fetchTopicList()} hotPosts={await fetchHotPosts()} />
            {children}
        </div>
    )
}