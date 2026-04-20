import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  if (host === 'pravah.agency' || host === 'www.pravah.agency') {
    return NextResponse.rewrite(new URL('/pravah', request.url))
  }
}

export const config = {
  matcher: '/:path*'
}
