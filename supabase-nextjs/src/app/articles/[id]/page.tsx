import { notFound } from 'next/navigation';

const articles = [
  {
    id: '1',
    title: '未来を変える！AIとロボティクスの進化',
    content:
      'AIとロボティクスの進化が私たちの日常を劇的に変えつつあります。最近では、自動運転技術の進歩や、人間の手助けをする家庭用ロボットが注目を集めています。これらの技術は、仕事の効率を上げるだけでなく、生活の質を向上させる可能性を秘めています。',
  },
  {
    id: '2',
    title: '健康的な生活のための5つの簡単な習慣',
    content:
      '健康を保つためには、日々の習慣が重要です。毎日10分間の軽い運動、十分な水分補給、バランスの取れた食事、規則正しい睡眠、ストレス管理を取り入れましょう。',
  },
  // 他の記事も追加可能
];

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((article) => article.id === params.id);

  if (!article) {
    notFound(); // ページが見つからない場合
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">{article.title}</h1>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6 text-gray-700">
          <p>{article.content}</p>
        </article>
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
