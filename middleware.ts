import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')

  if (
    host === 'pravah.agency' ||
    host === 'www.pravah.agency'
  ) {
    const { pathname } = request.nextUrl

    // Only rewrite the root path
    // Let all other paths pass through normally
    // This allows images, _next/static,
    // and other assets to load correctly
    if (pathname === '/' || pathname === '') {
      return NextResponse.rewrite(
        new URL('/pravah', request.url)
      )
    }
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logos|images|fonts).*)',
  ],
}
