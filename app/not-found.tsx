import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white font-cairo flex items-center justify-center" style={{ fontFamily: 'var(--font-cairo), Cairo, Arial, sans-serif' }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">الصفحة غير موجودة</h2>
        <p className="text-gray-600 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
        <Link 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 inline-block"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
