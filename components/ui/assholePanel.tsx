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
            className="relative w-[45%] mx-auto font-kanit"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: '100% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingBottom: '45%',
            }}
        >
            <div className="absolute inset-0 bottom-[2vw] flex flex-col items-center justify-center">
                <div className={`text-[5.5vw] ${textColorClass} font-bold`}>
                    {isAsshole ? result.assholeNumber : result.notAssholeNumber}
                </div>
            </div>
            <div className="absolute bottom-[1.3vw] left-0 right-0 flex flex-col items-center text-center">
                <p className="text-[1.3vw] font-bold">
                    You Are {!isAsshole && <span>Not</span>} The Asshole
                </p>
                <p className="text-[1vw] text-gray-500 font-lato">
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
        <div className="w-full flex mx-auto mt-[2vw]">
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