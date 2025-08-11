"use client";
import { ResultList } from "@/components/search/result-list";
import { SimilarPosts } from "@/components/search/similar-posts";
import { Posts } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/lib/utils";

export default function ResultPage() {
  const [result, setResult] = useState<Posts>([]);
  const [similarPosts, setSimilarPosts] = useState<Posts>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [targetPost, setTargetPost] = useState<any>(null);
  const searchParams = useSearchParams();
  const searchTopic = searchParams.get("topic");
  const searchString = searchParams.get("keywords");
  const postId = searchParams.get("postId");

  useEffect(() => {
    const getSearchResult = async () => {
      setIsLoading(true);

      try {
        if (postId) {
          // 如果有postId，优先通过ID获取目标帖子
          await getPostById(postId);
        } else if (searchString) {
          // 如果没有postId但有搜索关键词，执行关键词搜索
          await searchByKeywords(searchTopic, searchString);
        } else {
          setResult([]);
          setSimilarPosts([]);
        }
      } catch (error) {
        console.error("Search failed:", error);
        setResult([]);
        setSimilarPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchResult();
  }, [postId, searchTopic, searchString]);

  // 通过ID获取帖子详情
  const getPostById = async (id: string) => {
    try {
      console.log("Fetching post by ID:", id);

      // 调用后端API获取帖子详情
      const response = await api.get(`/post/${id}`);

      if (response.data) {
        const post = {
          id: response.data.id,
          title: response.data.title,
          selftext: response.data.selftext,
          verdict: response.data.verdict,
          isExpand: true, // 默认展开目标帖子
          assholeNumber: response.data.YTA || 0,
          notAssholeNumber: response.data.NTA || 0,
        };

        setTargetPost(post);
        setResult([post]); // 将目标帖子放在结果列表的第一位

        // 获取相似帖子
        await getSimilarPosts(post.title);

        console.log("Target post loaded:", post.title);
      }
    } catch (error) {
      console.error("Failed to fetch post by ID:", error);
      // 如果通过ID获取失败，回退到关键词搜索
      if (targetPost?.title) {
        await searchByKeywords("all", targetPost.title);
      }
    }
  };

  // 通过关键词搜索
  const searchByKeywords = async (topic: string | null, keywords: string) => {
    try {
      const searchParams = {
        topic: topic || "all",
        keywords: keywords,
        page: 0,
        pageSize: 5,
      };

      console.log("Searching with params:", searchParams);

      const response = await api.get(`/search`, { params: searchParams });

      if (response.data && response.data.length > 0) {
        const posts = response.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          selftext: item.selftext,
          verdict: item.verdict,
          isExpand: false,
          assholeNumber: item.YTA,
          notAssholeNumber: item.NTA,
        }));

        setResult(posts);
        console.log("Found posts:", posts.length);

        // 获取相似帖子
        await getSimilarPosts(response.data[0].title);
      } else {
        setResult([]);
        setSimilarPosts([]);
        console.log("No posts found for search");
      }
    } catch (error) {
      console.error("Failed to search by keywords:", error);
      setResult([]);
      setSimilarPosts([]);
    }
  };

  // 获取相似帖子
  const getSimilarPosts = async (title: string) => {
    try {
      const similarPostsResponse = await api.get(`/search`, {
        params: {
          topic: "all",
          keywords: title,
          page: 0,
          pageSize: 4,
        },
      });

      if (similarPostsResponse.data && similarPostsResponse.data.length > 1) {
        const similar = (similarPostsResponse.data as Array<object>)
          .slice(1)
          .map((item: any) => ({
            id: item.id,
            title: item.title,
            selftext: item.selftext,
            verdict: item.verdict,
            isExpand: false,
            assholeNumber: item.YTA,
            notAssholeNumber: item.NTA,
          }));

        setSimilarPosts(similar);
        console.log("Found similar posts:", similar.length);
      } else {
        setSimilarPosts([]);
      }
    } catch (error) {
      console.error("Failed to fetch similar posts:", error);
      setSimilarPosts([]);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-xl">加载中...</div>
      </div>
    );
  }

  return (
    <div className="md:p-5 p-3 w-full h-full flex flex-col space-y-5 overflow-scroll">
      {result.length > 0 ? (
        <>
          {/* 如果有目标帖子，显示特殊标识 */}
          {targetPost && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">Hot post:</p>
                </div>
              </div>
            </div>
          )}

          <ResultList posts={result} />
          <SimilarPosts posts={similarPosts} />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              未找到相关帖子
            </h2>
            {postId && <p className="text-gray-500">帖子ID: {postId}</p>}
            {searchString && (
              <p className="text-gray-500">搜索关键词: "{searchString}"</p>
            )}
            {searchTopic && (
              <p className="text-gray-500">搜索话题: {searchTopic}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
