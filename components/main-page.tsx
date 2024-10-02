'use client'
import * as React from "react";
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils";

import { Button } from "./ui/button"

export const MainPage = ({ data }: { data: any }) => {

    const situationStr = "Situation";

    const router = useRouter()

    const [close, setClose] = React.useState("false");
    const [dispalyInfo, setDisplayInfo] = React.useState<String>("");
    const [blink, setBlink] = React.useState<boolean>(true);
    const [logo, setLogo] = React.useState("imgs/logo_black_web.png");

    /**
     * The function used to update situation.
     */
    const typingEffect = () => {
        let index = 1;
        const interval = setInterval(() => {
            setDisplayInfo(() => {
                if (index <= situationStr.length) {
                    const temp = situationStr.substring(0, index);
                    setBlink(prev => !prev);
                    return temp;
                } else {
                    clearInterval(interval)
                    setTimeout(() => setBlink(false), 1000)
                    return "Situation.";
                }
            })
            index++;
        }, 200);
        return () => clearInterval(interval);
    };

    React.useEffect(() => typingEffect(), []);
    React.useEffect(() => {
        setTimeout(() => {
            setLogo("imgs/logo_white_web.png");
        }, 2050)
    }, [])

    return (
        <div className={cn("relative flex flex-col h-full w-full overflow-hidden", { "animate-shrink": close === "true" })}>
            <div className="absolute z-[-2] bg-[#2B2B2B] w-full h-full clip-circle-3-26-40 animate-expand-circle pointer-events-none" />
            <img src="imgs/bg-dot.png" alt="bg-dot" className="opacity-0 absolute h-full animate-dot-bg-fade-in" />
            <div className="w-full pt-10 pl-20 z-10">
                <img className="cursor-pointer" src={logo} alt="Logo" width="240px" height="61px" onClick={() => router.replace("/home")} />
            </div>
            <div className="flex w-full flex-grow items-center ">
                <div className="pl-20 pb-20 flex flex-col w-[50%]">
                    <h1 className="relative flex flex-col whitespace-pre-wrap animate-text-fade-to-white font-kanit text-[90px] font-semibold not-italic leading-none">
                        <span className="leading-normal ">
                            Judge a Tricky
                        </span>
                        <div>
                            <span className="flex font-kanit font-semibold">
                                Moral
                                <div className={`animate-typing-effect whitespace-nowrap overflow-hidden ${blink ? "border-r-2" : ""} text-[#4767E7] ml-5`}>
                                    {dispalyInfo}
                                </div>
                            </span>
                        </div>
                    </h1>
                    <p className="mt-5 animate-text-fade-to-white text-black font-lato text-[18px] not-italic font-normal leading-[210%] w-[705px]">
                        {data["main-text"]}
                    </p>
                    <div className="flex items-center mt-8 space-x-10">
                        <Button className="opacity-0  h-[48px] bg-white text-black rounded-3xl animate-button-fade-in hover:text-white px-[90px] py-[5px]"
                            onClick={() => {
                                setClose("true");
                                setTimeout(() => {
                                    router.replace("/game")
                                }, 500);
                            }}
                        >
                            Start Game
                        </Button>
                        <Button className="opacity-0  h-[48px] bg-white text-black rounded-3xl animate-button-fade-in hover:text-white px-[90px] py-[5px]"
                            onClick={() => {
                                setClose("true");
                                setTimeout(() => {
                                    router.replace("/home")
                                }, 500);
                            }}
                        >Skip Game</Button>
                    </div>
                </div>
                <div className="relative flex w-[50%] justify-center items-center flex-col space-y-16">
                    <div className="flex flex-col items-center space-y-16  ">
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-move1"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-move2"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-move3"></div>
                    </div>

                    <div className="z-[3]">
                        <div className="absolute w-[100px] h-[100px] p-5 bg-gray-200 rounded-full animate-expand-img-bg" />
                        <img className="animate-expand-img scale-75" src="/imgs/Analytics.svg" alt="Analytics" />
                    </div>

                    <div className="flex flex-col items-center space-y-16  ">
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-move4"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-move5"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-move6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
