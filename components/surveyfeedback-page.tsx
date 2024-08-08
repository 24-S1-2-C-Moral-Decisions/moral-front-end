import { usePage } from "@/lib/usePage"
import { Button } from "./ui/button"
import { useState } from "react";
import { RadarChart } from "./ui/chart";


const radarResult = {
    Authority: 0,
    Care: 1,
    Sanctity: 3,
    Fairness: 2,
    Loyalty: 5
}

const radarPostData = {
    Authority: 1,
    Care: 3,
    Sanctity: 2,
    Fairness: 4,
    Loyalty: 3
}

const resultAnalysisTexts = {
    AUTHORITY: "You show a moderate inclination towards respecting authority and established norms, balancing the need for order and structure with a healthy skepticism towards unchecked authority.",
    CARE: "Your moral decision-making style emphasizes empathy, compassion, and concern for the well-being of others. You prioritize the consideration of the impact of your actions on individuals and communities.",
    SANCTITY: "You exhibit a moderate consideration for the sacred or transcendent aspects of life, valuing traditions and rituals that imbue certain actions or objects with moral significance.",
    FAIRNESS: "Your approach to morality reflects a commitment to principles of justice, equality, and fairness. You strive to ensure equitable treatment and opportunities for all individuals, advocating for fairness in social, political, and economic contexts.",
    LOYALTY: "You demonstrate a moderate inclination towards loyalty to groups, institutions, or individuals, valuing relationships and commitments while also recognizing the importance of individual autonomy and integrity."
};

export const SurveyFeedbackPage = ({ data }: { data: any }) => {
    return (
        <>
            <div className="w-[80%] mx-auto bg-[#ffffff]">
                <div className="flex w-full mb-6 bg-gray-500 h-16 justify-center">banner</div>
                <RadarChartAndResult />
                <ImpactResult />
                <div className="flex mb-8"> {/* 添加外边距 */}
                    <Share />
                </div>
                
            </div>
        </>
    )
}
function ImpactResult() {
    return (
        <>
            <div className="flex w-full items-center justify-center">
                <h2 className="text-2xl font-bold mb-8 text-[#507186]">The Impact of Others on Your Moral Decision</h2>
            </div>
            <div className="flex w-full h-56 items-center justify-center">
            </div>
        </>
    )
}

function Share() {
    return (
        <>
        <div className="flex w-full h-56 bg-[#F5F5F5] items-center justify-center mb-16">
    <p>Share Component</p>
</div>
        </>
        
    )
}

function RadarChartAndResult() {
    const labels = Object.keys(radarResult);
    const userDataPoints = Object.values(radarResult);
    const postDataPoints = Object.values(radarPostData);
    return (
        <>
            <div className="w-full text-center">
                <h2 className="text-2xl font-bold mb-8 text-[#507186]">Here Are Your Result</h2>
            </div>
            <div className="flex w-full items-stretch justify-center mb-8">
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[80%] bg-[#FFFFFF] h-full rounded-lg p-[2vw]">
                        <RadarChart labels={labels} dataPoints1={userDataPoints} dataPoints2={postDataPoints} />
                    </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center">
                    <ResultAnalysisTexts />
                </div>
            </div>

        </>
    )
}

function ResultAnalysisTexts() {
    return (
        <>
            <div className="w-full">
                <article className="text-sm space-y-2">

                    <p>Your moral decision-making style appears to lean towards Care and Sanctity.</p>

                    <p>In comparison to the average population, based on our sample statistics, you tend to emphasize the care dimensionality.</p>

                    <p ><span className="font-bold">Authority: </span>{resultAnalysisTexts['AUTHORITY']}</p>

                    <p><span className="font-bold">Care: </span>{resultAnalysisTexts['CARE']}</p>

                    <p><span className="font-bold">Sanctity: </span>{resultAnalysisTexts['SANCTITY']}</p>

                    <p><span className="font-bold">Fairness: </span>{resultAnalysisTexts['FAIRNESS']}</p>

                    <p><span className="font-bold">Loyalty: </span>{resultAnalysisTexts['LOYALTY']}</p>
                </article>
            </div>
        </>
    )
}
