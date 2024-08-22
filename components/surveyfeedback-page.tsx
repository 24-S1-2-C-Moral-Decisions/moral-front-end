import { usePage } from "@/lib/usePage"
import { Button } from "./ui/button"
import { useState } from "react";
import { RadarChart } from "./ui/chart";
import UrlCopyBox from "./ui/url-copy-box"
import { NavBar } from "@/components/home/nav-bar";


const radarResult = {
    Authority: 4,
    Care: 2,
    Sanctity: 2,
    Fairness: 1,
    Loyalty: 3
}

const radarPostData = {
    Authority: 3,
    Care: 1,
    Sanctity: 1,
    Fairness: 2,
    Loyalty: 4
}

const resultAnalysisTexts = {
    AUTHORITY: "You show a moderate inclination towards respecting authority and established norms, balancing the need for order and structure with a healthy skepticism towards unchecked authority.",
    CARE: "Your moral decision-making style emphasizes empathy, compassion, and concern for the well-being of others. You prioritize the consideration of the impact of your actions on individuals and communities.",
    SANCTITY: "You exhibit a moderate consideration for the sacred or transcendent aspects of life, valuing traditions and rituals that imbue certain actions or objects with moral significance.",
    FAIRNESS: "Your approach to morality reflects a commitment to principles of justice, equality, and fairness. You strive to ensure equitable treatment and opportunities for all individuals, advocating for fairness in social, political, and economic contexts.",
    LOYALTY: "You demonstrate a moderate inclination towards loyalty to groups, institutions, or individuals, valuing relationships and commitments while also recognizing the importance of individual autonomy and integrity."
};
const selectedChange = true;

const selectedChangeAnalysisTexts = {
    true: "You are open to new perspectives and possibly values social harmony or consensus. You hold strong to your principles and show strength in maintaining your stance under social pressure.",
    false: "You remain steadfast in your beliefs, showing confidence in your moral compass. You value consistency and resilience, remaining steadfast despite others' opinions.",
};


export const SurveyFeedbackPage = ({ data }: { data: any }) => {
    return (
        <><div className="flex flex-col relative w-full mb-10">
            {/*<h2>Feedback Results</h2>*/}
            <NavBar />
        </div>
            <div className="w-[80%] mx-auto bg-[#ffffff]">

                <RadarChartAndResult />
                <ImpactResult />
                <div className="flex mb-8">
                    <Share />
                </div>

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
            <div className="w-full text-center bg-[#FFFFFF]">
                <h2 className="text-2xl mb-8 font-optimab text-[#507186]">Here Are Your Result</h2>
            </div>
            <div className="flex w-full items-stretch justify-center mb-8 bg-[#FFFFFF]">
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[80%]  h-full">
                        <RadarChart labels={labels} dataPoints1={userDataPoints} dataPoints2={postDataPoints} />
                    </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center mb-8">
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
                <article className="text-sm space-y-2 font-inter">

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

function ImpactResult() {
    return (
        <>
            <div className="flex w-full items-center justify-center font-inter">
                <h2 className="text-2xl font-optimab mt-8 mb-8 text-[#507186]">The Impact of Others on Your Moral Decision</h2>
            </div>
            <div className="flex flex-col items-center">
                {/* human icon */}
                <div className={`flex mb-2 w-[45%] mx-auto ${selectedChange ? 'justify-start' : 'justify-end'}`}>
                    <img src="/imgs/icon-human.png" alt="Icon" width="32" />
                </div>
                <div className="w-[80%] mb-2 flex items-center justify-center font-optimab">
                    {/* left text */}
                    <div className="w-[15%] text-right text-base">
                        Change
                    </div>

                    {/* gradient rectangle */}
                    <div className="w-[70%] h-10 bg-gradient-to-r ml-4 mr-4 from-[#0957B4] to-[#F0EBFE] border-4 border-[#AECEF6]"></div>

                    {/* right text */}
                    <div className="w-[15%] text-base">
                        Stay Firm
                    </div>
                </div>

                {/* text */}
                <div className="text-center text-base mt-2 mb-16 space-y-2">
                    {selectedChange && (
                        <>
                            <p>You are open to new perspectives and possibly value social harmony or consensus.</p>
                            <p>You hold strong to your principles and show strength in maintaining your stance under social pressure.</p>
                        </>
                    )}
                    {!selectedChange && (
                        <>
                            <p>You remain steadfast in your beliefs, showing confidence in your moral compass. </p>
                            <p>You value consistency and resilience, remaining steadfast despite others&apos; opinions.</p>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

function Share() {
    const { setPage } = usePage();
    const [close, setClose] = useState("false");
    return (
        <>
            <div className="w-full bg-[#F5F5F5] items-center justify-center mb-16 p-8 font-inter">
                <div className="w-full flex flex-col text-left">
                    <h2 className="text-xl font-bold mb-2 text-[#507186]">Share Your Result!</h2>
                    <p className="text-base mb-4">Let someone else glimpse into your result by sharing your encrypted profile link.</p>
                    <UrlCopyBox />
                </div>
                <div className="w-full flex flex-col text-left mb-4">
                    <h2 className="text-xl font-bold mt-4 mb-2 text-[#507186]">Explore More!</h2>
                    <p className="text-base mb-4 ">Consider learn more about daily moral decisions through searching and navigating Am I the Asshole (AITA) posts:</p>
                    <Button className="flex w-64 h-10 justify-center items-center text-white text-base bg-[#69A8F3] rounded-xl hover:bg-[#619ADD] transition-colors duration-300"
                        onClick={() => {
                            setClose("true");
                            setTimeout(() => {
                                setPage("feedback"); {/* Change to home page later */ }
                            }, 500);
                        }}
                    >
                        <span>Home Page exploration</span>
                        <img src="/imgs/Arrow-Right.png" alt="arrow" className="w-4 justify-center ml-auto" />
                    </Button>
                </div>
            </div>
        </>

    )
}
