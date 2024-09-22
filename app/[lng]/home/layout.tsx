import { NavBar } from "@/components/home/nav-bar";

export default function HomeLayout({ children }: { children: React.ReactNode }){

    return(
        <div className="w-full h-full flex flex-col">
            <NavBar />
            {children}
        </div>
    )
}