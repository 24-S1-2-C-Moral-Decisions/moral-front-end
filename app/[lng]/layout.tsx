import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Moral Moment",
  description: "",
};


export default function RootLayout({
  children,
  params: {
    lng
  }
}:{
    children:React.ReactNode,
    params:{
        lng:string
    }
}) {
  return (
    <html lang={lng} className='h-full w-full'>
      <head />
      <body className='h-full w-full'>
        {children}
      </body>
    </html>
  )
}
