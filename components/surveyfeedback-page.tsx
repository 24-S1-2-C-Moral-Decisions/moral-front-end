import { useState } from "react";
import { useRouter } from 'next/navigation'

import { Button } from "./ui/button"
import { RadarChart } from "./ui/chart";
import UrlCopyBox from "./ui/url-copy-box";
import { NavBar } from './home/nav-bar';
import { decisionStyles } from './survey/decisionMakingResult';
import { personalityBigFive } from './survey/personalityResult';

const selectedChange = true;

const selectedChangeAnalysisTexts = {
    true: "You are open to new perspectives and possibly values social harmony or consensus. You hold strong to your principles and show strength in maintaining your stance under social pressure.",
    false: "You remain steadfast in your beliefs, showing confidence in your moral compass. You value consistency and resilience, remaining steadfast despite others' opinions.",
};

export const SurveyFeedbackPage = ({ data }: { data: any }) => {
    return (
        <>
        <div className="flex flex-col relative w-full mb-10">
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
    {/*
        const labels = Object.keys(radarResult);
        const userDataPoints = Object.values(radarResult);
            const postDataPoints = Object.values(radarPostData);

        */}
    // Extract labels and data points
    const personalityLabels = Object.keys(personalityBigFive);
    const decisionMakingLabels = Object.keys(decisionStyles);

    // Values should be numbers, including decimal points
    const personalityDataPoints = Object.values(personalityBigFive);
    const decisionMakingDataPoints = Object.values(decisionStyles);
    return (
        <>
            <div className="w-full text-center bg-[#FFFFFF]">
                <h2 className="text-2xl mb-8 font-optimab text-[#507186]">Here Are Your Result</h2>
            </div>
            <div className="flex w-full items-stretch justify-center mb-8 bg-[#FFFFFF]">
                <div className="w-[50%] flex items-center justify-center">
                <div className="w-[80%] h-full flex items-center justify-center">
                {/* <RadarChart labels={labels} dataPoints1={userDataPoints} dataPoints2={postDataPoints} />*/}
                        <RadarChart labels={personalityLabels} dataPoints1={personalityDataPoints} />
                    </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center mb-8">
                    <PersonalityAnalysis />
                </div>
            </div>
            <div className="flex w-full items-stretch justify-center mb-8 bg-[#FFFFFF]">
                <div className="w-[50%] flex items-center justify-center">
                    <div className="w-[80%] h-full flex items-center justify-center">
                        <RadarChart labels={decisionMakingLabels} dataPoints1={decisionMakingDataPoints} />
                    </div>
                </div>
                <div className="w-[50%] flex flex-col justify-center mb-8">
                    <DecisionMakingAnalysis />
                </div>
            </div>

        </>
    )
}
const colorful = true;
function PersonalityAnalysis() {
    
    const personalityAnalysisTexts = {
        Openness: "This trait features characteristics like imagination, creativity, and curiosity. People high in openness tend to be more adventurous and open to new experiences, ideas, and unconventional values.",
        Conscientiousness: "This trait is associated with being disciplined, organized, and goal-oriented. Individuals who score high in conscientiousness are often reliable, responsible, and tend to plan ahead.",
        Extraversion: "This trait includes qualities such as sociability, assertiveness, and high levels of emotional expressiveness. Extraverted people tend to be outgoing, energetic, and enjoy social interactions.",
        Agreeableness: "This trait reflects attributes such as trust, altruism, kindness, and affection. Highly agreeable people are often cooperative, compassionate, and get along well with others.",
        Neuroticism: "This trait involves emotional instability and the tendency to experience negative emotions such as anxiety, anger, or depression. Individuals high in neuroticism are more prone to stress and mood swings."

    };
    const filteredPersonalityBigFive = Object.entries(personalityBigFive)
        .filter(([_, score]) => score >= 5)
        .reduce((acc, [trait, score]) => {
            acc[trait] = score;
            return acc;
        }, {} as { [key: string]: number });

    const pOrientation = Object.keys(filteredPersonalityBigFive);

    return (
        <>
            <div className="w-full">
                <article className="text-sm space-y-2 font-inter">

                    <p >Your <b className="font-bold ">Personality</b> appears to lean towards: <b className="">{pOrientation.length > 0 ? pOrientation.join(', ') : 'None'}</b>.</p>
                    <p><span className={`font-bold ${colorful ? 'text-[#65BEFF]' : 'text-black'}`}>Conscientiousness </span><br/>{personalityAnalysisTexts['Conscientiousness']}</p>

                    <p><span className={`font-bold ${colorful ? 'text-[#FBA9D5]' : 'text-black'}`}>Openness </span><br/>{personalityAnalysisTexts['Openness']}</p>

                    <p><span className={`font-bold ${colorful ? 'text-[#F5C569]' : 'text-black'}`}>Extraversion </span><br/>{personalityAnalysisTexts['Extraversion']}</p>

                    <p><span className={`font-bold ${colorful ? 'text-[#DAABFF]' : 'text-black'}`}>Agreeableness </span><br/>{personalityAnalysisTexts['Agreeableness']}</p>

                    <p><span className={`font-bold ${colorful ? 'text-[#8ED082]' : 'text-black'}`}>Neuroticism </span><br/>{personalityAnalysisTexts['Neuroticism']}</p>
                </article>
            </div>
        </>
    )
}

function DecisionMakingAnalysis() {
    const decisionMakingAnalysisTexts = {
        Rational: " Rational decision-makers rely on logic and data. They thoroughly analyze options and carefully weigh the pros and cons before making a decision. This style is ideal for complex decisions that require detailed consideration.",
        Intuitive: "Intuitive decision-makers rely on instincts and past experiences rather than detailed analysis. They make quick decisions based on what feels right, which works well in fast-paced or uncertain situations.",
        Dependent: "Dependent decision-makers seek advice and reassurance from others before deciding. They prefer guidance and input from others, making this style useful when facing uncertainty or when decisions impact others.",
        Avoidant: "Avoidant decision-makers tend to delay or avoid making decisions, especially when the choices are difficult or stressful. This style can lead to procrastination or missed opportunities.",
        Spontaneous: "Spontaneous decision-makers prefer to make quick, impulsive decisions with little planning. They thrive in dynamic situations where immediate action is needed but may overlook long-term consequences."

    };
    const filteredDecisionStyles = Object.entries(decisionStyles)
        .filter(([_, score]) => score >= 3.5)
        .reduce((acc, [trait, score]) => {
            acc[trait] = score;
            return acc;
        }, {} as { [key: string]: number });

    const dOrientation = Object.keys(filteredDecisionStyles);
    return (
        <>
            <div className="w-full">
                <article className="text-sm space-y-2 font-inter">

                    <p>Your <b className="font-bold">Decision Making</b> appears to lean towards: <b>{dOrientation.length > 0 ? dOrientation.join(', ') : 'None'}</b>.</p>
                   
                    <p><span className={`font-bold ${colorful ? 'text-[#65BEFF]' : 'text-black'}`}>Intuitive </span><br/>{decisionMakingAnalysisTexts['Intuitive']}</p>

                    <p><span className={`font-bold ${colorful ? 'text-[#FBA9D5]' : 'text-black'}`}>Dependent </span><br/>{decisionMakingAnalysisTexts['Dependent']}</p>

                    <p ><span className={`font-bold ${colorful ? 'text-[#F5C569]' : 'text-black'}`}>Rational </span><br/>{decisionMakingAnalysisTexts['Rational']}</p>

                    
                    <p><span className={`font-bold ${colorful ? 'text-[#DAABFF]' : 'text-black'}`}>Avoidant </span><br/>{decisionMakingAnalysisTexts['Avoidant']}</p>
                    
                    <p><span className={`font-bold ${colorful ? 'text-[#8ED082]' : 'text-black'}`}>Spontaneous </span><br/>{decisionMakingAnalysisTexts['Spontaneous']}</p>
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
    const [close, setClose] = useState("false");
    const router = useRouter();

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
                                router.push("/home/search");
                                // setPage("main"); {/* Change to home page later */ }
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
