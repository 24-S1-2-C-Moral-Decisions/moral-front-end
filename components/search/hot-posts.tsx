"use client";

import { Posts } from "@/types";
import { fetchHotPosts } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const HotPosts = () => {
  const [posts, setPosts] = useState<Posts>([]);
  const router = useRouter();

  useEffect(() => {
    fetchHotPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  // 处理帖子点击，使用postId直接获取帖子详情
  const handlePostClick = (post: any) => {
    if (post.id) {
      // 使用postId参数，这样搜索结果页面可以直接获取并置顶显示目标帖子
      router.push(`/home/search/result?postId=${post.id}`);
    } else {
      // 如果没有ID，回退到关键词搜索
      router.push(
        `/home/search/result?topic=all&keywords=${encodeURIComponent(
          post.title
        )}`
      );
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between space-y-5">
      <div className="flex items-center space-x-2">
        <img src="/imgs/flame.svg" alt="flame" />
        <h1 className="text-[#4F4F4F] font-semibold font-kanit text-[16px] tracking-[0.8px]">
          HOT POSTS
        </h1>
      </div>
      <div className="px-2 h-full flex flex-col md:justify-between">
        {posts.map((post, index) => (
          <button
            key={post.title}
            className="md:h-[85px] h-[60px] flex space-x-5 group hover:bg-[#EBEDEF] rounded-lg transition-colors p-2"
            onClick={() => handlePostClick(post)}
          >
            <h1 className="md:w-[50px] w-[30px] md:text-[50px] font-impact font-normal text-2xl text-[#D9D7D9] group-hover:text-[#ED6B2C] transition">
              {"0" + (index + 1)}
            </h1>
            <p className="text-black text-left text-sm font-bold group-hover:text-[#ED6B2C] transition">
              {post.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
