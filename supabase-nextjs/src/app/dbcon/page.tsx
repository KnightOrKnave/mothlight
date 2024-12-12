import { createClient } from '@supabase/supabase-js';

async function t() {
  const c = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const r = await c.from('TEST_TABLE').select('*').order('created_at');
  console.log(JSON.stringify(r));
}

export default async function DBCON() {
  await t();
  return <div>test</div>;
}
