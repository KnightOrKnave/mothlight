const articles = [
  {
    title: '未来を変える！AIとロボティクスの進化',
    excerpt:
      'AIとロボティクスの進化が私たちの日常を劇的に変えています。自動運転や家庭用ロボットなど、最新事例をご紹介。',
    link: '#',
  },
  {
    title: '健康的な生活のための5つの簡単な習慣',
    excerpt:
      '日常に取り入れやすい健康習慣を紹介。運動、睡眠、水分補給、バランスの取れた食事で元気な毎日を。',
    link: '#',
  },
  {
    title: '日本の隠れた名所：秘境の温泉ベスト3',
    excerpt:
      '静かな自然に囲まれた温泉地を厳選。地獄谷、奥入瀬温泉、川湯温泉の魅力を解説します。',
    link: '#',
  },
  {
    title: '毎日の作業を効率化！試してみたいライフハック10選',
    excerpt:
      '作業効率を劇的に改善するためのライフハックをご紹介。タスクリストの管理や集中力アップの方法など。',
    link: '#',
  },
  {
    title: '誰でもできる！効率的な勉強法のススメ',
    excerpt:
      '学習効率を高めるための実践的な方法を紹介。目標設定、スケジュール作成、復習のコツなど。',
    link: '#',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-indigo-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">記事一覧</h1>
        </div>
      </header>

      {/* Articles List */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">最新記事</h2>
        <ul className="space-y-6">
          {articles.map((article, index) => (
            <li
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 hover:underline">
                <a href={article.link}>{article.title}</a>
              </h3>
              <p className="text-gray-700 mt-2">{article.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 記事一覧ページ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
