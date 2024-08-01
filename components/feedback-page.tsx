import { usePage } from "@/lib/usePage"
import { Button } from "./ui/button"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DoughnutChart } from './ui/chart';
import { RadarChart } from "./ui/chart";

interface SubAssholePanelProps {
    backgroundImageUrl: string;
    result: {
        assholeNumber: number;
        notAssholeNumber: number;
        totalNumber: number;
    };
    isAsshole: boolean;
    textColorClass: string;
}

const result = {
    assholeNumber: 41,
    notAssholeNumber: 74,
    totalNumber: 115
};


const optionAnalysisTexts = {
    A: "Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...Calling someone fat can be seen as insensitive...",
    B: "Another option description here..."
};

const radarResult = {
    Authority: 0,
    Care: 1,
    Sanctity: 3,
    Fairness: 2,
    Loyalty: 5
}

const resultAnalysisTexts = {
    AUTHORITY: "sanity sanity sanity sanity sanity sanity sanity sanity sanity sanity sanity sanity sanity sanity sanity sanity.",
    CARE: "care care care care care care care care care care care care care care care care care care care care care care care care.",
    SANCTITY: "sanctity sanctity sanctity sanctity sanctity sanctity sanctity sanctity sanctity sanctity sanctity sanctity sanctity sanctity sanctity.",
    FAIRNESS: "fairness fairness fairness fairness fairness fairness fairness fairness fairness fairness fairness fairness",
    LOYALTY: "loyalty loyalty loyalty loyalty loyalty loyalty loyalty loyalty loyalty loyalty loyalty loyalty loyalty loyalty loyalty"
};

const userChoice = 'A';

export const FeedbackPage = ({ data }: { data: any }) => {

    const { setPage } = usePage();
    const [close, setClose] = useState("false");

    return (
        <>
            <div className="w-full bg-[#fafafc]">
                <div className="flex w-full h-12 items-center justify-center">
                    {/*<h2>Feedback Results</h2>*/}
                </div>
                <PieChartAndResult />
                <div className="flex w-full h-16 items-center justify-center">
                </div>
            </div>
            <RadarChartAndAnalysis />
            <div className="flex w-full h-8 items-center justify-center">
            </div>
            <Banner />
        </>
    )
}

function Banner() {
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div
                    className="w-[80%] mx-auto bg-[#ffffff]"
                    style={{
                        backgroundImage: 'url("/imgs/survey-banner.png")',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat', // 不重复
                        paddingBottom: '30%'
                    }}
                ></div>
            </div>
        </>
    )
}

function PieChartAndResult() {
    const voteData = [result.assholeNumber, result.notAssholeNumber]; // 两个数据点
    const labels = ['Asshole', 'Not Asshole'];
    return (
        <>
            <div className="flex w-full items-stretch">
                <div className="w-[50%] flex justify-center min-h-[200px]">
                    <div className="w-[90%] mx-auto bg-[#FFFFFF] h-full rounded-lg p-4">
                        <div className="w-[55%] mx-auto p-4">
                            <DoughnutChart labels={labels} voteData={voteData} />
                        </div>

                        <AssholePanel />

                    </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center">
                    <div className="w-[80%] mx-auto">
                        <Feedback />
                    </div>
                </div>
            </div>
        </>
    )

}

function AssholePanel() {
    return (
        <>
            <div className="w-full flex mx-auto p-8">
                <SubAssholePanel backgroundImageUrl="/imgs/assholePanel.png" result={result} isAsshole={true} textColorClass="text-[#FFB8B8]" />
                <SubAssholePanel backgroundImageUrl="/imgs/notAssholePanel.png" result={result} isAsshole={false} textColorClass="text-[#8CC2FF]" />
            </div >
        </>
    )
}

function SubAssholePanel({ backgroundImageUrl, result, isAsshole, textColorClass }: SubAssholePanelProps) {
    return (
        <div
            className="relative w-[45%] mx-auto"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: '100% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingBottom: '45%',
            }}
        >
            <div className="absolute inset-0 bottom-[2vw] flex flex-col items-center justify-center">
                <div className={`text-[5vw] ${textColorClass} font-bold`}>
                    {isAsshole ? result.assholeNumber : result.notAssholeNumber}
                </div>
            </div>
            <div className="absolute bottom-[1vw] left-0 right-0 flex flex-col items-center text-center">
                <div className="mt-2 text-[1vw] font-bold">You Are {!isAsshole && <span>Not</span>} The Asshole</div>
                <div className="mt-2 text-[0.8vw] text-gray-500">
                    The number of people out of {result.totalNumber} <br /> who think you are {!isAsshole && <span>not</span>} the asshole
                </div>
            </div>
        </div>
    );
}

function Feedback() {
    return (
        <>
            <div className="w-full flex flex-col mx-auto p-4">
                <div className="mb-4">
                    <h3 className="text-sm text-blue-600 font-bold">What Did You Choose</h3>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-2xl">Option A – Call Your Friend Fat</h1>
                    <br />
                    <p className="text-lg">
                        It could indicate that the user is confrontational or not afraid to engage in tit-for-tat banter.
                        This response may suggest a willingness to retaliate or use humor to deflect criticism, but it could
                        also be seen as insensitive or lacking empathy, especially in a sensitive context like body image.
                    </p>
                </div>
            </div>
        </>
    )
}

function RadarChartAndAnalysis() {
    const labels = Object.keys(radarResult);
    const dataPoints = Object.values(radarResult);
    return (
        <>
            <div className="flex w-full h-24 items-center justify-center bg-[#ffffff]">
                <h2>Your Result Analysis</h2>
            </div>
            <div className="flex w-full items-stretch">
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[60%] bg-[#FFFFFF] h-full rounded-lg p-4">
                        <RadarChart labels={labels} dataPoints={dataPoints} />
                    </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center">
                    <div className="w-[80%] mx-auto">
                        <ResultAnalysisTexts />
                    </div>
                </div>
            </div>

        </>
    )
}

function ResultAnalysisTexts() {
    return (
        <>
            <article>
                <h3>AUTHORITY</h3>
                <p>{resultAnalysisTexts['AUTHORITY']}</p>
                <br></br>
            </article>
            <article>
                <h3>CARE</h3>
                <p>{resultAnalysisTexts['CARE']}</p>
                <br></br>
            </article>
            <article>
                <h3>SANCTITY</h3>
                <p>{resultAnalysisTexts['SANCTITY']}</p>
                <br></br>
            </article>
            <article>
                <h3>FAIRNESS</h3>
                <p>{resultAnalysisTexts['FAIRNESS']}</p>
                <br></br>
            </article>
            <article>
                <h3>LOYALTY</h3>
                <p>{resultAnalysisTexts['LOYALTY']}</p>
                <br></br>
            </article>
        </>
    )
}