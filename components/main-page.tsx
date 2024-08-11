import * as React from "react";
import { usePage } from "@/lib/usePage"
import { cn } from "@/lib/utils";
import { Button } from "./ui/button"

export const MainPage = ({ data }: { data: any }) => {
    const { setPage } = usePage();

    const [close, setClose] = React.useState("false");
    const [animation, setAnimation] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setAnimation(false);
        }, 2000)
    }, [])

    return (
        <div className={cn("relative flex flex-col h-full w-full overflow-hidden", { "animate-shrink": close === "true" })}>
            <div className="absolute z-[-2] bg-[#2B2B2B] w-full h-full clip-circle-3-30-35 animate-expand-circle" />
            <img src="imgs/bg-dot.png" alt="bg-dot" className="opacity-0 absolute h-full animate-dot-bg-fade-in" />
            <div className="w-full pt-10 pl-20">
                <img src={"imgs/Logo-3-2.svg"} alt="Logo" width="240px" height="61px" />
            </div>

            <div className="flex w-full flex-grow items-center ">
                <div className="pl-20 pb-20 flex flex-col w-[50%]">
                    <h1 className="relative flex flex-col font-semibold text-6xl whitespace-pre-wrap animate-text-fade-to-white">
                        <span className="leading-normal">
                            Judge a Tricky
                        </span>
                        <div>
                            <span className="flex">
                                Moral
                                <div className={`animate-typing-effect whitespace-nowrap overflow-hidden ${animation ? "border-r-2" : ""} text-[#4767E7] ml-5`}>
                                    Situation.
                                </div>
                            </span>
                        </div>
                    </h1>
                    <p className="mt-5 animate-text-fade-to-white">
                        {data["main-text"]}
                    </p>
                    <div className="flex items-center mt-5 space-x-10">
                        <Button className="opacity-0 w-[40%] h-[48px] bg-white text-black rounded-3xl animate-button-fade-in"
                            onClick={() => {
                                setClose("true");
                                setTimeout(() => {
                                    setPage("game");
                                }, 500);
                            }}
                        >
                            Start Game
                        </Button>
                        <Button className="opacity-0 w-[40%] h-[48px] bg-white text-black rounded-3xl animate-button-fade-in">Skip Game</Button>
                    </div>
                </div>

                <div className="relative flex w-[50%] justify-center items-center">
                    <div className="absolute w-[100px] h-[100px] p-5 bg-gray-200 rounded-full animate-expand-img-bg" />
                    <img className="animate-expand-img scale-75" src="/imgs/Analytics.png" alt="Analytics" />
                </div>

            </div>
        </div>
    )
}