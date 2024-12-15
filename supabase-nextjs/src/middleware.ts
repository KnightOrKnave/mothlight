import { NextRequest, NextResponse, userAgent } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function middleware(request: NextRequest) {
  console.log(
    'middleware.ts: request.nextUrl.pathname',
    request.nextUrl.pathname
  );

  if (request.nextUrl.pathname.includes('page.js')) {
    console.debug(request.headers.get('host'));

    const c = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    await c.from('LOGGING_TABLE').insert({ header: userAgent(request) });
  }

  return NextResponse.next();
}

export const config = {};
