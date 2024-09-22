import React from 'react';

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

// SubAssholePanel
const SubAssholePanel: React.FC<SubAssholePanelProps> = ({ backgroundImageUrl, result, isAsshole, textColorClass }) => {
    return (
        <div
            className="pt-10 flex flex-col items-center w-[150px] h-[150px] font-kanit"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: '100% auto', // Changed to cover to ensure the background image covers the entire div
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Centered number div */}
            <div className="flex items-center justify-center">
                <div className={`text-5xl ${textColorClass} font-bold`}>
                    {isAsshole ? result.assholeNumber : result.notAssholeNumber}
                </div>
            </div>
            {/* Centered text div */}
            <div className="mt-2 lex flex-col items-center text-center">
                <p className="text-[12px] font-bold">
                    {isAsshole?"You Are The Asshole":"Not The Asshole"}
                </p>
                <p className="text-[6px] text-gray-500 font-lato">
                    The number of people out of {result.totalNumber} <br />
                    who think you are {!isAsshole && <span>not</span>} the asshole
                </p>
            </div>
        </div>
    );
};

interface AssholeVotePanelProps {
    result: {
        assholeNumber: number;
        notAssholeNumber: number;
        totalNumber: number;
    };
}

// AssholeVotePanel component
export const PostAssholePanel: React.FC<AssholeVotePanelProps> = ({ result }) => {
    return (
        <div className="w-[300px] h-[180px] flex justify-center items-center">
            <SubAssholePanel
                backgroundImageUrl="/imgs/notAssholePanel.png"
                result={result}
                isAsshole={false}
                textColorClass="text-[#8CC2FF]"
            />
            <div className="w-[2vw]"></div>
            <SubAssholePanel
                backgroundImageUrl="/imgs/assholePanel.png"
                result={result}
                isAsshole={true}
                textColorClass="text-[#FFB8B8]"
            />
        </div>
    );
};
