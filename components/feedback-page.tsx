import { usePage } from "@/lib/usePage"
import { Button } from "./ui/button"
import { useState } from "react";
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
    return (
        <>
            <div className="w-full bg-[#fafafc]">
                <div className="flex w-full h-12 items-center justify-center">
                    {/*<h2>Feedback Results</h2>*/}
                </div>
                <DoughnutChartAndResult />
                <div className="flex w-full items-center justify-center">
                </div>
            </div>
            <RadarChartAndAnalysis />
            <div className="flex w-full items-center justify-center">
            </div>
            <Banner />
        </>
    )
}



function DoughnutChartAndResult() {
    const voteData = [result.assholeNumber, result.notAssholeNumber];
    const labels = ['Asshole', 'Not Asshole'];
    return (
        <>
            <div className="flex w-full mb-[4vw]">
                <div className="w-[50%] justify-center bg-[#FFFFFF] p-[2vw]">
                    <div className="relative w-[90%] mx-auto h-[18vw]"> {/* Set a height for proper overlapping */}
                        {/* left div */}
                        <div className="absolute flex items-center justify-center w-[30%] h-full opacity-0 absolute h-full animate-dot-bg-fade-in-fast"
                            style={{
                                backgroundImage: "url('/imgs/notAssholeLine.png')",
                                backgroundSize: '10vw auto',
                                backgroundPosition: 'right center',
                                backgroundRepeat: 'no-repeat',
                                left: '0%',  // Align to the left edge
                            }}>
                            <h3 className="text-[3vw] text-[#8CC2FF] relative" style={{ right: '30%', top: '15%' }}>
                                {result.notAssholeNumber}
                            </h3>
                        </div>
                        {/* right div */}
                        <div className="absolute flex items-center justify-center w-[30%] h-full opacity-0 absolute h-full animate-dot-bg-fade-in-fast"
                            style={{
                                backgroundImage: "url('/imgs/assholeLine.png')",
                                backgroundSize: '70% auto',
                                backgroundPosition: 'left center',
                                backgroundRepeat: 'no-repeat',
                                right: '0%',  // Align to the right edge
                            }}>
                            <h3 className="text-[3vw] text-[#FFB8B8] relative" style={{ right: '-20%', top: '-15%' }}>
                                {result.assholeNumber}
                            </h3>
                        </div>
                        {/* middle DoughnutChart div */}
                        <div className="absolute w-[50%] mx-auto h-[18vw]"
                            style={{
                                left: '25%',   // Start from 25%
                                top: '0',      // Align to the top of the parent container
                                bottom: '0',   // Align to the bottom of the parent container
                            }}>
                            <DoughnutChart labels={labels} voteData={voteData} />
                        </div>


                    </div>

                    <AssholePanel />

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
            <div className="w-full flex mx-auto mt-[2vw]">
                <SubAssholePanel backgroundImageUrl="/imgs/notAssholePanel.png" result={result} isAsshole={false} textColorClass="text-[#8CC2FF]" />
                <SubAssholePanel backgroundImageUrl="/imgs/assholePanel.png" result={result} isAsshole={true} textColorClass="text-[#FFB8B8]" />
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
                <div className={`text-[5.5vw] ${textColorClass} font-bold`}>
                    {isAsshole ? result.assholeNumber : result.notAssholeNumber}
                </div>
            </div>
            <div className="absolute bottom-[1.3vw] left-0 right-0 flex flex-col items-center text-center">
                <p className="text-[1.3vw] font-bold">You Are {!isAsshole && <span>Not</span>} The Asshole</p>
                <p className="text-[1vw] text-gray-500">
                    The number of people out of {result.totalNumber} <br /> who think you are {!isAsshole && <span>not</span>} the asshole
                </p>
            </div>
        </div>
    );
}

function Feedback() {
    return (
        <>
            <div className="w-full flex flex-col mx-auto p-[1vw]">
                <div className="mb-[0.5vw]">
                    <h3 className="text-[1.3vw] text-blue-600 font-bold">What Did You Choose</h3>
                </div>
                <div>
                    <h1 className="text-[2.2vw] font-bold mb-[0.5vw] text-2xl">Option A – Call Your Friend Fat</h1>
                    <br />
                    <p className="text-[1.3vw]">
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
            <div className="flex w-full h-[12vw] items-center justify-center bg-[#ffffff]">
                <h2 className="text-[2.5vw] font-bold">Your Result Analysis</h2>
            </div>
            <div className="flex w-full items-stretch">
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[70%] bg-[#FFFFFF] h-full rounded-lg p-[2vw]">
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
            <article className="text-[1.3vw]">
                <section>
                    <h3 className="text-[#65BEFF] common-bold-text">AUTHORITY</h3>
                    <p >{resultAnalysisTexts['AUTHORITY']}</p>
                    <br />
                </section>
                <section>
                    <h3 className="text-[#FBA9D5] common-bold-text">CARE</h3>
                    <p>{resultAnalysisTexts['CARE']}</p>
                    <br />
                </section>
                <section>
                    <h3 className="text-[#F5C569] common-bold-text">SANCTITY</h3>
                    <p>{resultAnalysisTexts['SANCTITY']}</p>
                    <br />
                </section>
                <section>
                    <h3 className="text-[#DAABFF] common-bold-text">FAIRNESS</h3>
                    <p>{resultAnalysisTexts['FAIRNESS']}</p>
                    <br />
                </section>
                <section>
                    <h3 className="text-[#8ED082] common-bold-text">LOYALTY</h3>
                    <p>{resultAnalysisTexts['LOYALTY']}</p>
                    <br />
                </section>
            </article>

        </>
    )
}

function Banner() {
    const { setPage } = usePage();
    const [close, setClose] = useState("false");
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div
                    className="w-[80%] h-[30vw] bg-[#ffffff] flex justify-center items-center"
                    style={{
                        backgroundImage: 'url("/imgs/survey-banner.png")',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="w-[60%] flex flex-col justify-start items-start">
                        <p className="text-[#FE5354] text-[1.2vw] font-bold mb-[0.5vw]">Unlock deeper insights and shape the future of AI ethics!</p>
                        <p className="text-white text-[2.6vw] font-bold">Share Your Voice in Our Survey.</p>
                    </div>
                    <div className="w-[20%] flex justify-end items-end">
                        <Button className="flex w-[12vw] h-[3vw] justify-center text-white text-[1.2vw] bg-[#FE5354] rounded-xl hover:bg-[#C62828] transition-colors duration-300"
                            onClick={() => {
                                setClose("true");
                                setTimeout(() => {
                                    setPage("game");{/* Change to survey page later */}
                                }, 500);
                            }}
                        >
                            <span>Take Survey!</span>
                            <img src="/imgs/buttonArrow.png" alt="arrow" className="w-[1.5vw] justify-center ml-auto" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}