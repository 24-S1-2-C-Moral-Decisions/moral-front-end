import { usePage } from "@/lib/usePage"
import { Button } from "./ui/button"
import { useState } from "react";
import { DoughnutChart } from './ui/chart';
import { RadarChart } from './ui/chart';
import { NavBar } from './home/nav-bar';
import AssholeVotePanel from './ui/assholePanel';
import DoughnutChartPanel from './ui/doughnutChartPanel';

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


const radarResult = {
    Authority: 0,
    Care: 1,
    Sanctity: 3,
    Fairness: 2,
    Loyalty: 5
}


const userChoice = 'A';



export const FeedbackPage = ({ data }: { data: any }) => {
    return (
        <>
            <div className="w-full bg-[#fafafc]">
                <div className="flex flex-col relative w-full h-full mb-10">
                    {/*<h2>Feedback Results</h2>*/}
                    <NavBar />
                    {/*<DoughnutChartPanel result={result} />*/}
                </div>
                <DoughnutChartAndResult />
                <div className="flex w-full items-center justify-center">
                </div>
            </div>
            {/* <RadarChartAndAnalysis /> */}
            <ScrollToSection id="bottom-banner" />
        </>
    )
}



function DoughnutChartAndResult() {
    return (
        <>
            <div className="flex flex-col w-full pl-[4vw] font-kanit">
                <div className="flex w-full">
                    <div className="w-[50%] bg-[#FFFFFF] rounded-3xl mx-auto p-[2vw]">
                        <div className="w-[90%] mx-auto flex-col">
                            <></>
                            <DoughnutChartPanel result={result} />
                            <AssholeVotePanel result={result} />
                            {/* 
                            <DoughnutPanel />
                            <AssholePanel />
                            */}
                        </div>

                    </div>
                    <div className="w-[50%] flex flex-col justify-center">
                        <div className="w-[80%] mx-auto">
                            <Feedback />
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center">
                    <button
                        className="flex flex-col items-center text-white mt-[1vw] mb-[1vw]"
                        onClick={() => {
                            // Replace 'bottom-banner' with the actual ID of the target div
                            const targetDiv = document.getElementById('bottom-banner');
                            if (targetDiv) {
                                targetDiv.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <img
                            src="/imgs/feedback-page-flow.gif"
                            alt="Scroll Down"
                            className="w-[8vw] h-[6vw] opacity-70"
                        />
                    </button>
                </div>
            </div>
        </>
    )

}

function DoughnutPanel() {
    const voteData = [result.assholeNumber, result.notAssholeNumber];
    const labels = ['Asshole', 'Not Asshole'];
    return (
        <>
            <div className="relative w-[90%] mx-auto h-[18vw] flex items-center justify-center">
                {/* Left div */}
                <div
                    className="relative flex items-center justify-center w-[10vw] h-full opacity-0 animate-dot-bg-fade-in-fast"
                    style={{
                        backgroundImage: "url('/imgs/notAssholeLine.png')",
                        backgroundSize: '90% auto',
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h3 className="text-[3vw] text-[#8CC2FF] font-bold absolute left-0 mt-[5vw]">
                        {result.notAssholeNumber}
                    </h3>
                </div>
                {/* Middle DoughnutChart div */}
                <div
                    className="w-[18vw] h-[18vw] flex items-center justify-center"
                >
                    <DoughnutChart labels={labels} voteData={voteData} />
                </div>
                {/* Right div */}
                <div
                    className="relative flex items-center justify-center w-[10vw] h-full opacity-0 animate-dot-bg-fade-in-fast"
                    style={{
                        backgroundImage: "url('/imgs/assholeLine.png')",
                        backgroundSize: '90% auto',
                        backgroundPosition: 'left center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h3 className="text-[3vw] font-bold text-[#FFB8B8] absolute right-0 mt-[-5vw]">
                        {result.assholeNumber}
                    </h3>
                </div>
            </div>
        </>
    )
}

function AssholePanel() {
    return (
        <>

            <div className="w-full flex justify-center items-center mx-auto mt-[2vw]">
                <SubAssholePanel backgroundImageUrl="/imgs/notAssholePanel.png" result={result} isAsshole={false} textColorClass="text-[#8CC2FF]" />
                <div className="w-[2vw]"></div>
                <SubAssholePanel backgroundImageUrl="/imgs/assholePanel.png" result={result} isAsshole={true} textColorClass="text-[#FFB8B8]" />
            </div >

        </>
    )
}

function SubAssholePanel({ backgroundImageUrl, result, isAsshole, textColorClass }: SubAssholePanelProps) {
    return (
        <div
            className="relative w-[18vw] h-[18vw] font-kanit"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: '100% auto', // Changed to cover to ensure the background image covers the entire div
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Centered number div */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-[5vw] ${textColorClass} font-bold`}>
                    {isAsshole ? result.assholeNumber : result.notAssholeNumber}
                </div>
            </div>
            {/* Centered text div */}
            <div className="absolute bottom-[1vw] left-0 right-0 flex flex-col items-center text-center">
                <p className="text-[1.3vw] font-bold">
                    You Are {!isAsshole && <span>Not</span>} The Asshole
                </p>
                <p className="text-[1vw] text-gray-500 font-lato mt-2">
                    The number of people out of {result.totalNumber} <br />
                    who think you are {!isAsshole && <span>not</span>} the asshole
                </p>
            </div>
        </div>
    );
}

function Feedback() {
    const optionAnalysisTexts = {
        A : "Choosing to call your friend fat could indicate that the user is confrontational or not afraid to engage in tit-for-tat banter. This response may suggest a willingness to retaliate or use humor to deflect criticism, but it could also be seen as insensitive or lacking empathy, especially in a sensitive context like body image",
        B: "Choosing not to call your friend fat shows a considerate and empathetic approach. This response suggests you value maintaining a positive relationship and avoid potentially hurtful comments. By refraining from insensitive remarks about body image, you demonstrate respect for your friend’s feelings and promote constructive communication, aiming to preserve harmony and avoid conflict."
    };

    const headings = {
        A: "Option A – Call Your Friend Fat",
        B: "Option B – Not To Call Your Friend Fat"
    };

    const userChoice = 'B';  // or 'B'

    const heading = headings[userChoice];
    const analysisText = optionAnalysisTexts[userChoice];
    
    return (
        <>
            <div className="w-full flex flex-col mx-auto p-[1vw] font-kanit">
                <div className="mb-[0.5vw]">
                    <h3 className="text-[1.4vw] text-blue-600 font-bold">What You Chose</h3>
                    {/* rem: text-base */}
                </div>
                <div>
                    <h1 className="text-[2.3vw] font-bold mb-[0.5vw]">{heading}</h1>
                    {/* rem: text-2xl */}
                    <br />
                    <p className="text-[1.4vw] font-lato">
                        {analysisText}
                    </p>
                </div>
            </div>
        </>
    )
}


interface ScrollToProps {
    id?: string; // id is optional
}

function ScrollToSection({ id }: ScrollToProps) {
    const { setPage } = usePage();
    const [close, setClose] = useState("false");
    return (
        <>
            <div id={id} className="w-full flex items-center justify-center">
                <div
                    className="w-[80%] h-[30vw] bg-[#ffffff] flex justify-center items-center"
                    style={{
                        backgroundImage: 'url("/imgs/survey-banner.png")',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="w-[60%] flex flex-col justify-start items-start font-lato">
                        <p className="text-[#FE5354] text-[1.2vw] font-bold mb-[0.5vw]">Unlock deeper insights and shape the future of AI ethics!</p>
                        <p className="text-white text-[2.6vw] font-bold">Share Your Voice in Our Survey.</p>
                    </div>
                    <div className="w-[20%] flex justify-end items-end">
                        <Button className="flex w-[12vw] h-[3vw] justify-center text-white text-[1.2vw] bg-[#FE5354] rounded-xl hover:bg-[#C62828] transition-colors duration-300"
                            onClick={() => {
                                setClose("true");
                                setTimeout(() => {
                                    setPage("surveyFeedback"); {/* Change to survey page later */ }
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