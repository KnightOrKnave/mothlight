import { NextRequest, NextResponse, userAgent } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';

export async function middleware(request: NextRequest) {
  console.log(
    'middleware.ts: request.nextUrl.pathname',
    request.nextUrl.pathname
  );

  if (
    request.nextUrl.pathname.includes('page.js') ||
    request.nextUrl.pathname === '/'
  ) {
    console.debug(request.headers.get('host'));

    const c = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const uuid = randomUUID();
    await c
      .from('LOGGING_TABLE')
      .insert({ id: uuid, header: userAgent(request) });
    c.functions.invoke('func-test', { body: { id: uuid } });
  }

  return NextResponse.next();
}

export const config = {};
