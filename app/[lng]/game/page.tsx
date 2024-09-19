"use client";
import { GamePage } from "@/components/game-page";

export default function Page({ params: { lng } }: { params: { lng: string } }) {
    const data = require(`@/locales/${lng}.json`);

    return (
        <div className="h-full w-full">
            <GamePage data={data}/>
        </div>
    )
}
