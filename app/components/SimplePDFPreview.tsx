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

  // Reset states when pdfUrl changes
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // Auto-show preview after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  return (
    <div className={`relative ${className}`}>
      <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-200">
        <h4 className="text-sm font-bold text-gray-700 mb-3 text-center">{title}</h4>
        
        <div className="relative bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">
          {isLoading && (
            <div className="flex items-center justify-center h-96 text-gray-600">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-sm text-gray-500">جاري تحميل المعاينة...</p>
              </div>
            </div>
          )}

          {!isLoading && !error && (
            <div className="h-96 relative">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className="w-full h-full border-0"
                title={`معاينة ${title}`}
                onError={() => {
                  setError('فشل في تحميل معاينة PDF');
                }}
              />
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-96 text-gray-600">
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
