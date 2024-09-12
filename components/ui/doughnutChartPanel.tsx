import React from 'react';
import { DoughnutChart } from './chart'; // Ensure the path is correct

interface DoughnutPanelProps {
    result: {
        assholeNumber: number;
        notAssholeNumber: number;
        totalNumber: number;
    };
}

const DoughnutPanel: React.FC<DoughnutPanelProps> = ({ result }) => {
    const voteData = [result.assholeNumber, result.notAssholeNumber];
    const labels = ['Asshole', 'Not Asshole'];

    return (
        <div className="relative w-[90%] items-center mx-auto h-[18vw]">
            {/* Left div */}
            <div
                className="absolute flex items-center justify-center w-[30%] h-full opacity-0 animate-dot-bg-fade-in-fast"
                style={{
                    backgroundImage: "url('/imgs/notAssholeLine.png')",
                    backgroundSize: '10vw auto',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    left: '0%', // Align to the left edge
                }}
            >
                <h3 className="text-[3vw] text-[#8CC2FF] font-bold relative" style={{ right: '40%', top: '15%' }}>
                    {result.notAssholeNumber}
                </h3>
            </div>
            {/* Right div */}
            <div
                className="absolute flex items-center justify-center w-[30%] h-full opacity-0 animate-dot-bg-fade-in-fast"
                style={{
                    backgroundImage: "url('/imgs/assholeLine.png')",
                    backgroundSize: '10vw auto',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                    right: '0%', // Align to the right edge
                }}
            >
                <h3 className="text-[3vw] font-bold text-[#FFB8B8] relative" style={{ right: '-40%', top: '-15%' }}>
                    {result.assholeNumber}
                </h3>
            </div>
            {/* Middle DoughnutChart div */}
            <div
                className="absolute w-[50%] mx-auto h-[18vw]"
                style={{
                    left: '25%', // Start from 25%
                    top: '0', // Align to the top of the parent container
                    bottom: '0', // Align to the bottom of the parent container
                }}
            >
                <DoughnutChart labels={labels} voteData={voteData} />
            </div>
        </div>
    );
};

export default DoughnutPanel;