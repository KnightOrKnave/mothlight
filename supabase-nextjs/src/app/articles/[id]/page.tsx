'use client';
import { use } from 'react';
import { notFound, useParams } from 'next/navigation';
import { sbClient } from '@/spabaseClient';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Content = {
  title: string;
  content: string;
};

const teststr = `# page not found`;

async function getData(id: string): Promise<Content> {
  const { data, error } = await sbClient
    .from('ARTICLES_TABLE')
    .select('title,content')
    .eq('id', id)
    .limit(1);
  if (error || !data || data.length !== 1) {
    console.error(error);
    return { title: 'test', content: teststr };
  }
  return data[0];
}

export default function ArticlePage() {
  const params: { id: string } = useParams();
  const content = use<Content>(getData(params.id));
  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">{content.title}</h1>
        </div>
      </header>

      {/* Article Content */}
      <main className="container text-black mx-auto px-4 py-8">
        <MDXRemote source={content.content} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 記事一覧ページ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
