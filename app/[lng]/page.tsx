"use client";
import { MainPage } from "@/components/main-page";

export default function Page({ params: { lng } }: { params: { lng: string } }) {
    const data = require(`@/locales/${lng}.json`);

    return (
        <div className="h-full w-full">
            <MainPage data={data}/>
        </div>
    )
}
