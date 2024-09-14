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
};

interface AssholeVotePanelProps {
    result: {
        assholeNumber: number;
        notAssholeNumber: number;
        totalNumber: number;
    };
}

// AssholeVotePanel component
const AssholeVotePanel: React.FC<AssholeVotePanelProps> = ({ result }) => {
    return (
        <div className="w-full flex justify-center items-center mx-auto mt-[2vw]">
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


export default AssholeVotePanel;