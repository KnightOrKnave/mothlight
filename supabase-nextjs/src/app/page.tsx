import { Articles } from './articles';
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
      <main className="container mx-auto px-4 py-8"></main>
      {/*最新記事 */}
      <Articles></Articles>
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 記事一覧ページ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
