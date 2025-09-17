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
          <p className="text-xl text-gray-800 mb-8 font-medium leading-relaxed">
            {t.description}
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {t.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 font-medium text-base leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
