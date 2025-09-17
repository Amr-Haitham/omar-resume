import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";

export default function TestimonialsSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language].testimonials;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-6xl mx-auto">
          {t.items.map((testimonial: { text: string; author: string }, index: number) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className={`text-gray-700 mb-4 text-base leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="font-bold text-lg text-gray-900">{testimonial.author}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 inline-block">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
