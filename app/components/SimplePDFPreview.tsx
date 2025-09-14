'use client';

import { useState, useEffect } from 'react';

interface SimplePDFPreviewProps {
  pdfUrl: string;
  title: string;
  className?: string;
}

export default function SimplePDFPreview({ pdfUrl, title, className = '' }: SimplePDFPreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreviewClick = () => {
    setShowPreview(true);
    setIsLoading(false);
  };

  // Reset states when pdfUrl changes
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setShowPreview(false);
  }, [pdfUrl]);

  return (
    <div className={`relative ${className}`}>
      <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-200">
        <h4 className="text-sm font-bold text-gray-700 mb-3 text-center">{title}</h4>
        
        <div className="relative bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">
          {!showPreview && (
            <div className="flex items-center justify-center h-72 text-gray-600">
              <div className="text-center">
                <div className="text-6xl mb-4">📄</div>
                <p className="text-lg font-semibold mb-2">{title}</p>
                <p className="text-sm text-gray-500 mb-4">اضغط على "معاينة PDF" لرؤية الملف</p>
                <button
                  onClick={handlePreviewClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-sm shadow-lg hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105"
                >
                  معاينة PDF
                </button>
              </div>
            </div>
          )}

          {showPreview && (
            <div className="h-72 relative">
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-2 right-2 z-10 bg-gray-800 hover:bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg"
              >
                إخفاء المعاينة
              </button>
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className="w-full h-full border-0"
                title={`معاينة ${title}`}
                onError={() => {
                  setError('فشل في تحميل معاينة PDF');
                  setShowPreview(false);
                }}
              />
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-72 text-gray-600">
              <div className="text-center">
                <div className="text-4xl mb-3">❌</div>
                <p className="text-sm mb-2">{error}</p>
                <p className="text-xs text-gray-500">اضغط على "تحميل PDF" لرؤية الملف</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-3 text-center">
          <a
            href={pdfUrl}
            download={`${title}.pdf`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm shadow-lg hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105"
          >
            تحميل PDF
          </a>
        </div>
      </div>
    </div>
  );
}
