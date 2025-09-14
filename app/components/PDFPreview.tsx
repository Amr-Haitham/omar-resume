'use client';

import { useState, useRef, useEffect } from 'react';

interface PDFPreviewProps {
  pdfUrl: string;
  title: string;
  className?: string;
}

export default function PDFPreview({ pdfUrl, title, className = '' }: PDFPreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check if PDF.js is available
        if (typeof window === 'undefined') {
          setError('معاينة PDF غير متاحة على الخادم');
          setIsLoading(false);
          return;
        }

        // Try to load PDF.js
        let pdfjsLib;
        try {
          pdfjsLib = await import('pdfjs-dist');
        } catch (importError) {
          console.error('Failed to import PDF.js:', importError);
          setUseFallback(true);
          setIsLoading(false);
          return;
        }
        
        // Set worker source
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@5.4.149/build/pdf.worker.min.js`;

        // Load the PDF
        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          disableWorker: false,
          disableAutoFetch: false,
          disableStream: false,
        });
        
        const pdf = await loadingTask.promise;
        
        // Get the first page
        const page = await pdf.getPage(1);
        
        // Set up canvas
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        // Calculate scale to fit in container
        const containerWidth = 300; // Fixed width for preview
        const viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        // Set canvas dimensions
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        // Render the page
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };

        await page.render(renderContext).promise;
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setUseFallback(true);
        setIsLoading(false);
      }
    };

    loadPDF();
  }, [pdfUrl]);

  return (
    <div className={`relative ${className}`}>
      <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-200">
        <h4 className="text-sm font-bold text-gray-700 mb-3 text-center">{title}</h4>
        
        <div className="relative bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">
          {isLoading && !useFallback && (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}
          
          {error && !useFallback && (
            <div className="flex items-center justify-center h-64 text-gray-600">
              <div className="text-center">
                <div className="text-4xl mb-3">📄</div>
                <p className="text-sm mb-2">{error}</p>
                <p className="text-xs text-gray-500">اضغط على &quot;تحميل PDF&quot; لرؤية الملف</p>
              </div>
            </div>
          )}
          
          {!isLoading && !error && !useFallback && (
            <div className="flex justify-center p-2">
              <canvas
                ref={canvasRef}
                className="max-w-full h-auto shadow-sm"
                style={{ maxHeight: '300px' }}
              />
            </div>
          )}

          {useFallback && (
            <div className="h-64 flex items-center justify-center">
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
