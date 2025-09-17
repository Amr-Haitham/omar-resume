import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";

export default function HeroSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language].hero;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} order-2 lg:order-1 flex flex-col justify-center`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mt-2">
                {t.title}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 font-medium">
              {t.description}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'justify-center lg:justify-start' : 'justify-center lg:justify-start'}`}>
              <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 text-center">
                {t.cta1}
              </a>
              <a href="https://wa.me/201013455957" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-8 rounded-xl text-lg border-2 border-blue-600 shadow-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center">
                {t.cta2}
              </a>
            </div>
          </div>
          
          {/* Omar's Image */}
          <div className={`flex justify-center ${isRTL ? 'lg:justify-end lg:-mr-8' : 'lg:justify-center lg:ml-0'} order-1 lg:order-2`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                <Image
                  src="/omar.jpeg"
                  alt={language === 'ar' ? "عمر أحمد - خبير مراجعة السيرة الذاتية" : "Omar Ahmed - Resume Review Expert"}
                  width={448}
                  height={448}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-xl sm:text-2xl">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
