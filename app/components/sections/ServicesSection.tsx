import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";

export default function ServicesSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language].services;

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {t.items.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
              <p className={`text-gray-600 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  {language === 'ar' ? 'هيوصلك ايه' : 'What you get'}
                </h4>
                <ul className={`space-y-2 text-sm text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  {language === 'ar' ? 'مناسب ل' : 'Suitable for'}
                </h4>
                <p className={`text-sm text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{service.suitableFor}</p>
              </div>
              
              <a href="#payment" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 text-center block">
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
