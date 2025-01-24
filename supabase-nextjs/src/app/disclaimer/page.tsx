import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">免責事項</h1>
        </div>
      </header>

      {/* Disclaimer Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          免責事項
        </h2>
        <article className="bg-white shadow-lg rounded-lg p-6 text-gray-700">
          <p className="mb-4">
            当サイトの記事はすべて適当に生成されたものであり、その内容に関して一切の保証を行いません。記事の正確性、完全性、適用性について責任を負うものではありませんので、あらかじめご了承ください。
          </p>
          <p className="mb-4">
            また、内容に保証がないため、当サイトの記事の他サイトへの転載や投稿を固く禁止いたします。不適切な使用が発覚した場合、必要に応じて法的措置を取る可能性があります。
          </p>
          <p className="mb-4">
            本免責事項は予告なく変更される場合があります。最新の免責事項をご確認いただき、ご了承の上ご利用ください。
          </p>
          <p className="mb-4">
            当サイトは、記事コンテンツや情報の正確性・有用性・信頼性を確保するよう努めていますが、これらの内容が完全に正しいものであることを保証するものではありません。記事内容に基づく行動や判断は、利用者自身の責任で行っていただくようお願いいたします。
          </p>
          <p className="mb-4">
            当サイトは、掲載されている情報の利用や閲覧に起因して生じたトラブルや損害について、一切責任を負いません。また、当サイト内のリンク先（外部サイト）における内容やサービスに関しても同様に責任を負いません。
          </p>
          <p className="mb-4">
            当サイトに掲載されている記事や情報の著作権は、特段の記載がない限り、当サイトまたはその提供者に帰属します。無断での転載、複製、改変等を禁じます。
          </p>
          <p className="font-bold text-blue-600 mt-4">
            当サイトをご利用いただく場合、上記内容をすべてご了承いただいたものとみなします。
          </p>
        </article>

        {/* Back Button */}
        <div className="text-center mt-8 text-black">
          <Link href="/">ホームに戻る</Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 当サイト. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
