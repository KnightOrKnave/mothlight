import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(
    'middleware.ts: request.nextUrl.pathname',
    request.nextUrl.pathname
  );

  if (request.nextUrl.pathname.includes('page.js')) {
    console.debug(request.headers);
    console.debug(userAgent(request));
  }

  return NextResponse.next();
}

export const config = {};
