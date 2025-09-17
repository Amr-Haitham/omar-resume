import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";
import SimplePDFPreview from "../SimplePDFPreview";

export default function DifferenceSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language].difference;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold w-fit mb-4">
                {t.before}
              </div>
              <SimplePDFPreview 
                pdfUrl="/before.pdf" 
                title={t.beforeTitle}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold w-fit mb-4">
                {t.after}
              </div>
              <SimplePDFPreview 
                pdfUrl="/after.pdf" 
                title={t.afterTitle}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            {t.description}
          </p>
          <div className="max-w-2xl mx-auto">
            <ul className={`text-base text-gray-600 space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-center">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
