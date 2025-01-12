'use client';
import { useEffect, useState } from 'react';
import { sbClient } from '@/spabaseClient';

const LATEST_ARTICLE_COUNT = 5;

type Article = {
  id: string;
  title: string;
  excerpt: string;
  link: string;
};

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await sbClient
          .from('ARTICLES_TABLE')
          .select('id,title,excerpt,link')
          .order('created_at', { ascending: false })
          .limit(LATEST_ARTICLE_COUNT);
        if (error) {
          console.error(error);
          setArticles([]);
        }
        setArticles(data as Article[]);
      } catch (error) {
        console.error(error);
        setArticles([]);
      }
    })();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8">最新記事</h2>
      <ul className="space-y-6">
        {articles.map((article, index) => (
          <li
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 hover:underline">
              <a
                href={
                  article.link === 'default'
                    ? `/articles/${article.id}`
                    : article.link
                }
              >
                {article.title}
              </a>
            </h3>
            <p className="text-gray-700 mt-2">{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
