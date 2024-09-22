import { DoughnutChart } from "../ui/chart";

type result={
    assholeNumber:number,
    notAssholeNumber:number,
    totalNumber: number;
}

export const PostDoughnutChart=({result}:{result:result})=>{

    const voteData = [result.assholeNumber, result.notAssholeNumber];
    const labels = ['Asshole', 'Not Asshole'];

    return(
        <div className="relative w-[300px] h-[180px] flex items-center justify-center">
            {/* Left div */}
            <div
                className="relative flex items-center justify-center w-[75px] h-full opacity-0 animate-dot-bg-fade-in-fast"
                style={{
                    backgroundImage: "url('/imgs/notAssholeLine.png')",
                    backgroundSize: '90% auto',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <h3 className="text-3xl text-[#8CC2FF] left-0 font-bold absolute  mt-10">
                    {result.notAssholeNumber}
                </h3>
            </div>
            {/* Middle DoughnutChart div */}
            <div
                className="w-[125px] h-[150px] flex items-center justify-center"
            >
                <DoughnutChart labels={labels} voteData={voteData}  />
            </div>
            {/* Right div */}
            <div
                className="relative flex items-center justify-center w-[75px] h-full opacity-0 animate-dot-bg-fade-in-fast"
                style={{
                    backgroundImage: "url('/imgs/assholeLine.png')",
                    backgroundSize: '90% auto',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <h3 className="text-3xl font-bold text-[#FFB8B8] absolute right-0 pb-10">
                    {result.assholeNumber}
                </h3>
            </div>
        </div>
    )
}