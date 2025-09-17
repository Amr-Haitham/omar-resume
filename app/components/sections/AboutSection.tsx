import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";

export default function AboutSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language].about;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className={`text-lg text-gray-700 mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className={`text-lg text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
