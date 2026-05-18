import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * All known social media, search, and messaging crawlers.
 * These must bypass all routing logic unconditionally.
 * Without this, OG scraping returns 403 and previews break.
 */
const CRAWLER_AGENTS = [
  'facebookexternalhit',
  'facebot',
  'linkedinbot',
  'twitterbot',
  'slackbot',
  'whatsapp',
  'googlebot',
  'bingbot',
  'applebot',
  'telegrambot',
  'discordbot',
  'pinterestbot',
  'embedly',
  'redditbot',
  'rogerbot',
  'iframely',
  'outbrain',
  'taboola',
]

export function middleware(request: NextRequest) {
  const userAgent = (request.headers.get('user-agent') ?? '').toLowerCase()

  // Step 1 — Crawler bypass
  // Any known crawler gets an immediate pass-through.
  // This runs before any routing logic — non-negotiable.
  const isCrawler = CRAWLER_AGENTS.some((agent) => userAgent.includes(agent))
  if (isCrawler) {
    return NextResponse.next()
  }

  // Step 2 — Domain routing
  // Route pravah.agency root → /pravah page.
  // All other paths on pravah.agency pass through normally
  // so _next/static, images, fonts, and assets load correctly.
  const host = (request.headers.get('host') ?? '').toLowerCase()

  if (host === 'pravah.agency' || host === 'www.pravah.agency') {
    const { pathname } = request.nextUrl
    if (pathname === '/' || pathname === '') {
      return NextResponse.rewrite(new URL('/pravah', request.url))
    }
  }

  // Step 3 — Explicit fallthrough
  // All other requests continue normally.
  // Explicit return prevents implicit undefined behaviour.
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logos|images|fonts).*)',
  ],
}