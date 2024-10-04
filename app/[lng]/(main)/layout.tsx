import { NavBar } from "@/components/home/nav-bar";

export default async function MainLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="w-full h-full flex flex-col">
            <div className="fixed top-0 w-full">
                <NavBar />
            </div>
            <div className="w-full h-full md:mt-[100px] mt-[50px]">
                {children}
            </div>
        </div>
    )
}