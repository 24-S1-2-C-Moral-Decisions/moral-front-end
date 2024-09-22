"use client";
import { FeedbackPage } from "@/components/feedback-page";

export default function Page({ params: { lng } }: { params: { lng: string } }) {
    const data = require(`@/locales/${lng}.json`);

    return (
        <div className="h-full w-full">
            <FeedbackPage data={data}/>
        </div>
    )
}
