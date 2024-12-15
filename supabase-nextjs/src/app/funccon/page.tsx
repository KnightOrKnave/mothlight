import { createClient } from '@supabase/supabase-js';

async function t() {
  const c = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  c.functions.invoke('func-test', { body: { name: 'test' } });
}

export default async function FUNCCON() {
  await t();
  return <div>test</div>;
}
