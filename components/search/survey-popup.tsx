"use client";


export const SurveyPopup = () => {


    return (
        <div className="p-4 w-[288px] h-[435px] flex flex-col items-center rounded-[15px] bg-[#F9FAFa]">
            <img src="/imgs/am-i-the-asshole.jpg" alt="am-i-the-asshole" width="288px" />
            <div className="w-full my-4">
                <h1 className="font-semibold font-[Arial] text-sm left-0">
                    Am I The Asshole?
                </h1>
                <h1 className="font-semibold font-[Arial] text-sm left-0 mt-2">
                    You be the judge in moral dilemmas.
                </h1>
                <p className="font-[Arial] font-[400px] text-xs leading-6 mt-6">
                Face an ethical dilemma and decide: Is the person an asshole? After your initial judgment, compare your views with the &apos;Am I The Asshole?&apos; community. This quick 10-minute survey tests how your moral judgments align with others. Join now and see where you stand!
                </p>
            </div>
            <button className="w-[176px] h-[50px] rounded-[30px] flex items-center justify-between px-5 bg-[#68A8F3] mt-5">
                <p className="text-white text-sm font-lato-bold">
                    Participate Now!
                </p>
                <img src="/imgs/right-arrow.svg" alt="right-arrow" />
            </button>
        </div>
    )
}
