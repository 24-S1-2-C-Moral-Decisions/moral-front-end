import { usePage } from "@/lib/usePage"
import { Button } from "./ui/button"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DoughnutChart } from './ui/chart';
import { RadarChart } from "./ui/chart";

const result = {
    assholePercentage: 41,
    notAssholePercentage: 74
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
                <div className="flex w-full h-24 items-center justify-center">
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
    const voteData = [result.assholePercentage, result.notAssholePercentage]; // 两个数据点
    const labels = ['Asshole', 'Not Asshole'];
    return (
        <>
            <div className="flex w-full items-stretch">
                <div className="w-[50%] flex justify-center min-h-[200px]">
                    <div className="w-[90%] mx-auto bg-[#FFFFFF] h-full rounded-lg p-4">
                        <div className="w-[55%] mx-auto p-4">
                            <DoughnutChart labels={labels} voteData={voteData} />
                        </div>
                        <div className="w-[90%] flex mx-auto p-4">
                            <AssholePanel />
                        </div>
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
            <div className="w-full flex mx-auto p-4">
                <div className="w-[45%] mr-auto" style={{
                    backgroundImage: 'url("/imgs/assholePanel.png")',
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: '45%'
                }}>

                </div>
                <div className="w-[45%] ml-auto" style={{
                    backgroundImage: 'url("/imgs/notAssholePanel.png")',
                    backgroundSize: '100%',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                    paddingBottom: '45%'
                }}>
                </div>

            </div>
        </>
    )
}

function Feedback() {
    return (
        <>
            <h3>What Did You Choose</h3>
            <h4>Option A - Call Your Friend Fat</h4>
            <p>{optionAnalysisTexts[userChoice]}</p>
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