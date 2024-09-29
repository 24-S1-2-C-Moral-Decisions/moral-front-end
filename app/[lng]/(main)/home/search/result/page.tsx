"use client";
import { ResultList } from "@/components/search/result-list";
import { SimilarPosts } from "@/components/search/similar-posts";
import { Posts} from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/lib/utils";


export default function ResultPage() {

    const [result, setResult] = useState<Posts>([]);
    const [similarPosts, setSimilarPosts] = useState<Posts>([]);
    const searchParams = useSearchParams();
    const searchTopic=searchParams.get("topic");
    const searchString=searchParams.get("keywords");

    useEffect(() => {
        const getSearchResult = async () => {
            api.get(`/search`, {
                params:{
                    topic:searchTopic,
                    keywords:searchString,
                    pages:0,
                    pageSize: 5
                }
            })
            .then((response) => {
                setResult(response.data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    selftext: item.selftext,
                    verdict: item.verdict,
                    isExpand: false,
                    assholeNumber: item.YTA,
                    notAssholeNumber: item.NTA
                })));

                api.get(`/search`, {
                    params: {
                        topic:"all",
                        keywords:response.data[0].title||"",
                        pages:0,
                        pageSize: 4
                    }
                }).then((similarPostsResponse) => {
                    setSimilarPosts((similarPostsResponse.data as Array<object>).slice(1).map((item: any) => ({
                        id: item.id,
                        title: item.title,
                        selftext: item.selftext,
                        verdict: item.verdict,
                        isExpand: false,
                        assholeNumber: item.YTA,
                        notAssholeNumber: item.NTA
                    })));
                })
                .catch((error) => {
                    setSimilarPosts([]);
                    console.error("Failed to search", error);
                });
            })
            .catch((error) => {
                setResult([]);
                console.error("Failed to search", error);
            });
        }

        getSearchResult();
    }, [])

    return (
        <div className="md:p-5 p-3 w-full h-full flex flex-col space-y-5 overflow-scroll">
            <ResultList posts={result??[]} />
            <SimilarPosts posts={similarPosts??[]} />
        </div>
    )
}