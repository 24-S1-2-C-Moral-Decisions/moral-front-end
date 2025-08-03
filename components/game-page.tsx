import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

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
};

/**
 * The game page.
 * @param data The data used for the game page.
 * @returns The game page.
 */
export const GamePage = ({ data }: { data: any }) => {
  const router = useRouter();

  const talkDialog: TalkDialog[] = [
    { gender: "", src: "" },
    { gender: "male", src: "../imgs/eat-dialog.png" },
    { gender: "female", src: "../imgs/not-hungry-dialog.png" },
    { gender: "male", src: "../imgs/twig-dialog.png" },
  ];

  const [currentDialogInfoIndex, setCurrentDialogInfoIndex] =
    React.useState<number>(0);
  const [animationType, setAnimationType] = React.useState<string>("fade-in");
  const [answer, setAnswer] = React.useState<boolean>(false);
  const [isAnswerDialogVisible, setIsAnswerDialogVisible] =
    React.useState<boolean>(false);
  const [isInteractiveDialogVisible, setIsInteractiveDialogVisible] =
    React.useState<boolean>(false);
  const [isYesButtonHover, setIsYesButtonHover] =
    React.useState<boolean>(false);
  const [isNoButtonHover, setIsNoButtonHover] = React.useState<boolean>(false);

  /**
   * The function used to update animation status.
   * @returns Clear interval.
   */
  const updateAnimation = React.useCallback(() => {
    setAnimationType("fade-in");
    const interval = setInterval(() => {
      if (currentDialogInfoIndex != talkDialog.length - 1) {
        setAnimationType("fade-out");
      }
      setTimeout(() => {
        setCurrentDialogInfoIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= talkDialog.length) {
            clearInterval(interval);
            setIsInteractiveDialogVisible(true);
            setAnimationType("fade-in");
            return prevIndex;
          } else {
            setAnimationType("fade-in");
            return nextIndex;
          }
        });
      }, 900);
    }, 1400);
    return () => clearInterval(interval);
  }, [currentDialogInfoIndex, talkDialog.length]);

  /**
   * The function when user answer the yes and no.
   * @param answer The user click yes or no.
   */
  const buttonClick = (answer: boolean) => {
    localStorage.setItem("userAnswer", answer ? "yes" : "no");
    answer ? setAnswer(true) : setAnswer(false);
    setIsInteractiveDialogVisible(false);
    setIsAnswerDialogVisible(true);
    setTimeout(() => {
      router.replace("/feedback");
    }, 3000);
    const storedAnswer = localStorage.getItem("userAnswer");
    console.log("User Answer:", storedAnswer);
  };

  React.useEffect(() => updateAnimation(), [updateAnimation]);

  return (
    <div
      className={cn(
        "flex flex-col h-full w-full transition-opacity opacity-0",
        "animate-fade-in"
      )}
    >
      <div className="flex">
        <div className="w-full pt-10 pl-20">
          <img
            src="../imgs/Logo-3.svg"
            alt="Logo"
            width="240px"
            height="61px"
          />
        </div>

        <div className="pt-20 pr-20 flex justify-center">
          <img
            className="cursor-pointer"
            src="../imgs/close-btn.svg "
            alt="close-btn"
            width="16px"
            height="16px"
            onClick={() => router.replace("/home")}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-2 ">
        <div className="w-[75%] flex flex-col justify-center items-center gap-y-5">
          <p className="text-center text-black text-center font-kanit text-xl font-semibold leading-normal max-w-[1305px]">
            {data["game-text"]}
          </p>
          <div className="relative flex items-center justify-center">
            <img
              className="min-w-[756px] h-[482px] "
              src="../imgs/game-bg1.png"
              alt="scene"
            />
            {talkDialog[currentDialogInfoIndex].gender === "male" && (
              <div className="absolute top-[48px] right-[148px]  w-[20%]">
                <img
                  className={`animate-${animationType}`}
                  src={talkDialog[currentDialogInfoIndex].src}
                  alt="maleDialog"
                />
              </div>
            )}
            {talkDialog[currentDialogInfoIndex].gender === "female" && (
              <div className="absolute top-[36px] left-[120px]  w-[20%]">
                <img
                  className={`animate-${animationType}`}
                  src={talkDialog[currentDialogInfoIndex].src}
                  alt="femaleDialog"
                />
              </div>
            )}
            {currentDialogInfoIndex === 3 && isAnswerDialogVisible ? (
              answer === true ? (
                <div className="w-[20%] absolute top-[36px] left-[120px] flex items-center justify-center animate-fade-in">
                  <img
                    className="animate-fade-in"
                    src="../imgs/answer-yes-dialog.png"
                    alt="answerYes"
                  />
                </div>
              ) : (
                <div className="w-[20%] absolute top-[36px] left-[120px] flex items-center justify-center animate-fade-in w-[20%]">
                  <img
                    className="animate-fade-in"
                    src="../imgs/answer-no-dialog.png"
                    alt="answerNo"
                  />
                </div>
              )
            ) : null}
            {isInteractiveDialogVisible && (
              <div
                className={`opacity: ${
                  isInteractiveDialogVisible ? 1 : 0
                } absolute h-full w-full top-0 left-0 flex items-center justify-center animate-${
                  isInteractiveDialogVisible ? "fade-in" : "fade-out"
                }`}
              >
                <div className="flex w-full h-full items-center justify-center flex-col">
                  <img
                    className="h-full w-full"
                    src="../imgs/interactive-dialog.png"
                    alt="interactive"
                  />
                  <div className="flex justify-center items-center absolute bottom-[14%]">
                    <button
                      className="mr-[20px]"
                      onClick={() => buttonClick(true)}
                      onMouseEnter={() => setIsYesButtonHover(true)}
                      onMouseLeave={() => setIsYesButtonHover(false)}
                    >
                      <img
                        src={
                          isYesButtonHover
                            ? "../imgs/yes-button-hover.png"
                            : "../imgs/yes-button.png"
                        }
                        alt="yesButton"
                        width="100px"
                        height="60px"
                      />
                    </button>
                    <button
                      className="ml-[20px]"
                      onClick={() => buttonClick(false)}
                      onMouseEnter={() => setIsNoButtonHover(true)}
                      onMouseLeave={() => setIsNoButtonHover(false)}
                    >
                      <img
                        src={
                          isNoButtonHover
                            ? "../imgs/no-button-hover.png"
                            : "../imgs/no-button.png"
                        }
                        alt="noButton"
                        width="100px"
                        height="60px"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
