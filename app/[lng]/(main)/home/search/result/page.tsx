"use client";
import { ResultList } from "@/components/search/result-list";
import { SimilarPosts } from "@/components/search/similar-posts";
import { Posts} from "@/types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function ResultPage() {

    const [result, setResult] = useState<Posts>([]);
    const [similarPosts, setSimilarPosts] = useState<Posts>([]);
    const searchParams = useSearchParams();
    const searchTopic=searchParams.get("topic");
    const searchString=searchParams.get("keywords");
    const backenURL=process.env.BACKEND_URL;

    useEffect(() => {

        const getSearchResult = async () => {
            try {
                console.log(`${process.env.BACKEND_URL}/search`)
                const response = await axios.get(`/api/search`, {
                    params:{
                        topic:searchTopic,
                        keywords:searchString,
                    }
                });
                setResult(response.data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    selftext: item.selftext,
                    verdict: item.verdict,
                    isExpand: false,
                    assholeNumber: item.YTA,
                    notAssholeNumber: item.NTA
                })));

                const similarPostsResponse = await axios.get("/api/search", {
                    params:{
                        topic:"all",
                        keywords:response.data[0].title||"",
                    }
                });
                setSimilarPosts(similarPostsResponse.data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    selftext: item.selftext,
                    verdict: item.verdict,
                    isExpand: false,
                    assholeNumber: item.YTA,
                    notAssholeNumber: item.NTA
                })));

            } catch (error) {
                setResult([]);
                setSimilarPosts([]);
                console.error("Failed to search", error);
            }
        }

        getSearchResult();
    }, [])

    return (
        <div className="md:p-5 p-3 w-full h-full flex flex-col space-y-5 overflow-scroll">
            <ResultList posts={result} />
            <SimilarPosts posts={similarPosts} />
        </div>
    )
}