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
        <div className="relative w-[90%] mx-auto h-[18vw] flex items-center justify-center">
    {/* Left div */}
    <div
        className="relative flex items-center justify-center w-[10vw] h-full opacity-0 animate-dot-bg-fade-in-fast"
        style={{
            backgroundImage: "url('/imgs/notAssholeLine.png')",
            backgroundSize: '90% auto',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <h3 className="text-[3vw] text-[#8CC2FF] font-bold absolute left-0 mt-[5vw]">
            {result.notAssholeNumber}
        </h3>
    </div>
    {/* Middle DoughnutChart div */}
    <div
        className="w-[18vw] h-[18vw] flex items-center justify-center"
    >
        <DoughnutChart labels={labels} voteData={voteData} />
    </div>
    {/* Right div */}
    <div
        className="relative flex items-center justify-center w-[10vw] h-full opacity-0 animate-dot-bg-fade-in-fast"
        style={{
            backgroundImage: "url('/imgs/assholeLine.png')",
            backgroundSize: '90% auto',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <h3 className="text-[3vw] font-bold text-[#FFB8B8] absolute right-0 mt-[-5vw]">
            {result.assholeNumber}
        </h3>
    </div>
</div>
    );
};

export default DoughnutPanel;