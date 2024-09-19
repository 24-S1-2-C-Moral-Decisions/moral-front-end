import * as React from "react";
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils"

/**
 * The information of the talk dialog.
 */
type TalkDialog = {

    /**
     * The gender information.
     */
    gender: string;

    /**
     * The image source.
     */
    src: string;
}

/**
 * The game page.
 * @param data The data used for the game page.
 * @returns The game page.
 */
export const GamePage = ({ data }: { data: any }) => {
    const talkDialog: TalkDialog[] = [
        { gender: "", src: "" },
        { gender: "male", src: "../imgs/eat-dialog.png" },
        { gender: "female", src: "../imgs/not-hungry-dialog.png" },
        { gender: "male", src: "../imgs/twig-dialog.png" },
    ]

    const router = useRouter();

    const [currentDialogInfoIndex, setCurrentDialogInfoIndex] = React.useState<number>(0);
    const [animationType, setAnimationType] = React.useState<string>("fade-in");
    const [answer, setAnswer] = React.useState<boolean>(false);
    const [isAnswerDialogVisible, setIsAnswerDialogVisible] = React.useState<boolean>(false);
    const [isInteractiveDialogVisible, setIsInteractiveDialogVisible] = React.useState<boolean>(false);
    const [isYesButtonHover, setIsYesButtonHover] = React.useState<boolean>(false);
    const [isNoButtonHover, setIsNoButtonHover] = React.useState<boolean>(false);

    /**
     * The function used to update animation status.
     * @returns Clear interval.
     */
    const updateAnimation = () => {
        setAnimationType('fade-in');
        const interval = setInterval(() => {
            if (currentDialogInfoIndex != talkDialog.length - 1) {
                setAnimationType('fade-out');
            }
            setTimeout(() => {
                setCurrentDialogInfoIndex((prevIndex) => {
                    const nextIndex = prevIndex + 1;
                    if (nextIndex >= talkDialog.length) {
                        clearInterval(interval);
                        setIsInteractiveDialogVisible(true);
                        setAnimationType('fade-in');
                        return prevIndex;
                    } else {
                        setAnimationType('fade-in');
                        return nextIndex;
                    }
                });
            }, 1500);
        }, 2000);
        return () => clearInterval(interval);
    }

    /**
     * The function when user answer the yes and no.
     * @param answer The user click yes or no.
     */
    const buttonClick = (answer: boolean) => {
        answer ? setAnswer(true) : setAnswer(false);
        setIsInteractiveDialogVisible(false);
        setIsAnswerDialogVisible(true);
        setTimeout(() => {
           router.push("/feedback");
        }, 3000)
    };

    React.useEffect(() => updateAnimation(), [currentDialogInfoIndex]);
    
    return (
        <div className={cn("flex flex-col h-full w-full transition-opacity opacity-0", { "animate-fade-in": true })} >
            <div className="w-full pt-10 pl-20  ">
                <img src="../imgs/Logo-3.svg" alt="Logo" width="240px" height="61px" />
            </div>
            <div className="flex justify-center mt-10">
                <div className="relative w-[50%] h-full min-w-[1305px]">
                    <p className="text-black text-center font-kanit text-xl font-semibold leading-normal ">
                        {data["game-text"]}
                    </p>
                    <div className="absolute top-[-20px] right-[-128px] flex justify-end">
                        <img src="../imgs/close-btn.svg" alt="close-btn" width="16px" height="16px" />
                    </div>
                    <div className="absolute bottom-[111px] left-[-58px] w-[25px] h-[25px] bg-[#DE5E8C] rounded-full" />
                    <div className="absolute top-[157px] right-[-128px] w-[12px] h-[12px] bg-[#DE5E8C] rounded-full" />
                    <div className="absolute bottom-[87px] right-[-187px] w-[12px] h-[12px] bg-[#326BFF] rounded-full" />
                    <div className="relative w-full h-full mt-4">
                        <img className="w-full h-full" src="../imgs/game-bg1.png" alt="scene" />
                        {talkDialog[currentDialogInfoIndex].gender === "male" && (
                            <div className="absolute top-[81px] right-[186px]  w-[20%]">
                                <img
                                    className={`animate-${animationType}`}
                                    src={talkDialog[currentDialogInfoIndex].src}
                                    alt="maleDialog"
                                />
                            </div>
                        )}
                        {talkDialog[currentDialogInfoIndex].gender === "female" && (
                            <div className="absolute top-[94px] left-[164px]  w-[20%]">
                                <img
                                    className={`animate-${animationType}`}
                                    src={talkDialog[currentDialogInfoIndex].src}
                                    alt="femaleDialog"
                                />
                            </div>
                        )}
                        {(currentDialogInfoIndex === 3 && isAnswerDialogVisible) ?
                            answer === true ?
                                (
                                    <div className="w-[20%] absolute top-[94px] left-[164px] flex items-center justify-center animate-fade-in">
                                        <img className="animate-fade-in" src="../imgs/answer-yes-dialog.png" alt="answerYes" />
                                    </div>
                                ) :
                                (
                                    <div className="w-[20%] absolute top-[94px] left-[164px] flex items-center justify-center animate-fade-in w-[20%]">
                                        <img className="animate-fade-in" src="../imgs/answer-no-dialog.png" alt="answerNo" />
                                    </div>
                                )
                            : null
                        }
                        {isInteractiveDialogVisible && (
                            <div className={`opacity: ${isInteractiveDialogVisible ? 1 : 0} absolute h-full w-full top-0 left-0 flex items-center justify-center animate-${isInteractiveDialogVisible ? "fade-in" : "fade-out"}`}>
                                <img className="h-full w-full" src="../imgs/interactive-dialog.png" alt="interactive" />
                                <div className="w-full flex justify-center items-center absolute bottom-[152px]" >
                                    <button
                                        className="mr-[28px]"
                                        onClick={() => buttonClick(true)}
                                        onMouseEnter={() => setIsYesButtonHover(true)}
                                        onMouseLeave={() => setIsYesButtonHover(false)}
                                    >
                                        <img src={isYesButtonHover ? "../imgs/yes-button-hover.png" : "../imgs/yes-button.png"} alt="yesButton" width="123px" height="59px" />
                                    </button>
                                    <button
                                        className="ml-[28px]"
                                        onClick={() => buttonClick(false)}
                                        onMouseEnter={() => setIsNoButtonHover(true)}
                                        onMouseLeave={() => setIsNoButtonHover(false)}
                                    >
                                        <img src={isNoButtonHover ? "../imgs/no-button-hover.png" : "../imgs/no-button.png"} alt="noButton" width="123px" height="59px" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
