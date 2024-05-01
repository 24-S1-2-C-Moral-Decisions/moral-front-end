import { usePage } from "@/lib/usePage"
import { cn } from "@/lib/utils"

export const GamePage=({data}:{data:any})=>{
    const {page,setPage}=usePage();

    return(
        <div className={cn("flex flex-col h-full w-full transition-opacity opacity-0",{"animate-fade-in":page==="game"})}>
            <div className="w-full pt-10 pl-20  ">
                <img src="../imgs/Logo-3.svg" alt="Logo" width="240px" height="61px" />
            </div>

            <div className="flex justify-between mt-10">
                <div className="w-[25%] h-full flex items-center justify-center">
                    <button>
                        <img src="../imgs/watch-btn.png" alt="watch" />
                        <p className="mt-2 font-semibold">APPLE WATCH</p>
                    </button>
                </div>

                <div className="w-[50%] h-full">
                    <p className="text-sm font-semibold mb-2">You&apos;ve been saving and finally have enough money to buy a long-desired Apple Watch. However, your partner is facing financial challenges due to the unexpected medical bills and believes you should contribute more to the bills. How do you respond?</p>

                    <img src="../imgs/scene.png" alt="scene" />
                </div>

                <div className="w-[25%] h-full flex items-center justify-center">
                    <button>
                        <img src="../imgs/bill-btn.png" alt="bill" />
                        <p className="mt-2 font-semibold">MEDICAL BILL</p>
                    </button>
                </div>
            </div>
        </div>
    )
}