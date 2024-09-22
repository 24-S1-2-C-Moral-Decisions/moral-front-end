"use client";
import { SurveyFeedbackPage } from "@/components/surveyfeedback-page";

export default function Page({ params: { lng } }: { params: { lng: string } }) {
    const data = require(`@/locales/${lng}.json`);

    return (
        <div className="h-full w-full">
            <SurveyFeedbackPage data={data}/>
        </div>
    )
}
