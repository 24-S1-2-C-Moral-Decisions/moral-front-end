import axios from "axios"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSurveyURL(): string {
  return process.env.NEXT_PUBLIC_SURVEY_URL || 'https://24-s1-2-c-moral-decisions.github.io/moral-survey/'
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://moralmomentapi.azurewebsites.net/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchTopicList() {
  return api.get(`/post/topics`).then((response) => {
    return response.data.map((topics: any) => {
        const title = topics.topic.charAt(0).toUpperCase() + topics.topic.slice(1);
        const picUrl = `/imgs/tags/ic-${topics.topic.toLowerCase()}.svg`;
        const url = `/home/search/${topics.topic.toLowerCase()}`;
        const postsNum = topics.count;

        return {
            title: title,
            picUrl: picUrl,
            url: url,
            postsNum: postsNum,
        };
    });
})
.catch((error) => {
    console.error("Failed to fetch topics", error);
    return [];
});
}

export async function fetchHotPosts() {
  return api.get(`/post/hotPosts`,
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
    return [];
});
}

export async function fetchSearchPost(param: {topic?: string, keywords?: string, page?: number, pageSize?: number}) {
  return api.get(`/search`, {
    params:param
})
.then((response) => {
    return response.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        selftext: item.selftext,
        verdict: item.verdict,
        isExpand: false,
        assholeNumber: item.YTA,
        notAssholeNumber: item.NTA
    }))
})
.catch((error) => {
    console.error("Failed to search", error);
    return [];
});
}
