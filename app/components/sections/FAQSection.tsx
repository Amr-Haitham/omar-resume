import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";

export default function FAQSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language].faq;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.description}
          </p>
        </div>
        
        <div className="space-y-6">
          {t.items.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className={`text-lg font-bold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                {faq.question}
              </h3>
              <p className={`text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">{t.noAnswer}</p>
          <a 
            href="https://wa.me/201013455957" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg hover:shadow-green-600/25 transition-all duration-300 inline-block"
          >
            {t.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
