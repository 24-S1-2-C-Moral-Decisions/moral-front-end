import axios from "axios"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

if (!process.env.NEXT_PUBLIC_SURVEY_URL) {
  console.warn('NEXT_PUBLIC_SURVEY_URL is not set')
}
export function getSurveyURL(): string {
  return process.env.NEXT_PUBLIC_SURVEY_URL || 'https://24-s1-2-c-moral-decisions.github.io/moral-survey/'
}

if (!process.env.NEXT_PUBLIC_API_URL) {
  console.warn('NEXT_PUBLIC_API_URL is not set')
}
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchTopicList() {
  return await api.get(`/post/topics`).then((response) => {
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
});
}
