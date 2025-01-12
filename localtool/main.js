import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const main = async () => {
  const { error } = await supabase.from('ARTICLES_TABLE').insert({
    content: 'test',
    excerpt: 'test',
    link: 'default',
    priority: 0,
    title: 'test',
    views: 0,
  });
};

main();
