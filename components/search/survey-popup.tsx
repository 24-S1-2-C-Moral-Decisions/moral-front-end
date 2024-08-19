
export const SurveyPopup = () => {
    return (
        <div className="p-4 w-[382px] h-[425px] flex flex-col items-center rounded-[15px] bg-[#F9FAFa]">
            <img src="/imgs/am-i-the-asshole.jpg" alt="am-i-the-asshole" width="342px" height="131px" />
            <div className="w-full my-4">
                <h1 className="font-semibold left-0">
                    Am I The Asshole?
                </h1>
                <h1 className="font-semibold left-0 mt-2">
                    You be the judge in moral dilemmas.
                </h1>
                <p className=" text-xs mt-6">
                Face an ethical dilemma and decide: Is the person an asshole? After your initial judgment, compare your views with the &apos;Am I The Asshole?&apos; community. This quick 10-minute survey tests how your moral judgments align with others. Join now and see where you stand!
                </p>
            </div>
            <button className="w-[176px] h-[35px] rounded-[30px] flex items-center justify-between px-3 bg-[#68A8F3] mt-5">
                <p className="text-white text-sm">
                    Participate Now!
                </p>
                <img src="/imgs/right-arrow.svg" alt="right-arrow" />
            </button>
        </div>
    )
}