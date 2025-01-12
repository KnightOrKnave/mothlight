import { createClient } from 'jsr:@supabase/supabase-js@2';

Deno.serve(async (req: Request) => {
  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  );

  const { title, excerpt, content } = await req.json();

  if (!title || !excerpt || !content) {
    return new Response(
      JSON.stringify({ ok: false, reason: 'invalid input' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }

  const { error } = await supabaseClient.from('ARTICLES_TABLE').insert({
    content: content,
    excerpt: excerpt,
    link: 'default',
    priority: 0,
    title: title,
    views: 0,
  });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/put-content' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"title":"環境に優しい未来へ：再生可能エネルギーの可能性","excerpt":"環境に優しい未来へ：再生可能エネルギーの可能性","content":"test"}'
    

*/
