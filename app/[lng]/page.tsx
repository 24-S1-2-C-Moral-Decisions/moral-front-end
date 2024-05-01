"use client";
import { GamePage } from "@/components/game-page";
import { MainPage } from "@/components/main-page";
import { usePage } from "@/lib/usePage";




export default function Page({ params: { lng } }: { params: { lng: string } }) {
    const data=require(`@/locales/${lng}.json`);
    const {page,setPage}= usePage();

    return (
        <div className="h-full w-full">
            {page==="main"&&(<MainPage data={data}/>)}
            {page==="game"&&(<GamePage data={data}/>)}
        </div>
    )
}
