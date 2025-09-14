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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <div className={`bg-gray-100 rounded-lg border-2 border-gray-200 ${isMobile ? 'p-3' : 'p-4'}`}>
        <h4 className={`font-bold text-gray-700 mb-3 text-center ${isMobile ? 'text-base' : 'text-sm'}`}>{title}</h4>
        
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
              {/* Universal iframe approach - works on both mobile and desktop */}
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                className="w-full h-full border-0"
                title={`معاينة ${title}`}
                onError={() => {
                  // If direct PDF fails, try with different parameters
                  const iframe = document.querySelector('iframe[title*="معاينة"]') as HTMLIFrameElement;
                  if (iframe) {
                    iframe.src = `${pdfUrl}#view=FitH&toolbar=0`;
                  }
                }}
                onLoad={() => {
                  // Check if iframe actually loaded content
                  const iframe = document.querySelector('iframe[title*="معاينة"]') as HTMLIFrameElement;
                  if (iframe) {
                    try {
                      // Try to access iframe content to see if PDF loaded
                      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                      if (!iframeDoc || iframeDoc.body.innerHTML.includes('This content cannot be displayed')) {
                        // PDF didn't load properly, show fallback
                        setError('معاينة PDF غير متاحة - اضغط تحميل PDF للعرض');
                      }
                    } catch {
                      // Cross-origin error is expected, means PDF is loading
                    }
                  }
                }}
              />
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-96 text-gray-600">
              <div className="text-center">
                <div className="text-4xl mb-3">❌</div>
                <p className="text-sm mb-2">{error}</p>
                <p className="text-xs text-gray-500">اضغط على &quot;تحميل PDF&quot; لرؤية الملف</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-3 text-center">
          <a
            href={pdfUrl}
            download={`${title}.pdf`}
            className={`inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm shadow-lg hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 ${
              isMobile ? 'py-3 px-6 text-base' : ''
            }`}
          >
            {isMobile ? 'تحميل PDF' : 'تحميل PDF'}
          </a>
          {isMobile && (
            <p className="text-xs text-gray-500 mt-2">
              إذا لم تظهر المعاينة، اضغط للتحميل
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
