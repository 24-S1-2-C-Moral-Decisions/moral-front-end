import { NextRequest, NextResponse } from 'next/server'

const acceptLanguage=["en","ch"]

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|imgs).*)']
}

export function middleware(req:NextRequest) {

  // Redirect if lng in path is not supported
  if (
    !acceptLanguage.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`))
  ) {
    return NextResponse.redirect(new URL(`/en${req.nextUrl.pathname}`, req.url))
  }
  
  return NextResponse.next()
}