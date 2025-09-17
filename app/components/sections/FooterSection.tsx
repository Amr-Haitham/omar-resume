import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";
import SocialIcons from "../SocialIcons";

export default function FooterSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t.title}</h3>
            <p className={`text-gray-300 text-base mb-4 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">📧</span>
                <span className="text-gray-300 text-base">omarahmed7703@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📱</span>
                <span className="text-gray-300 text-base">01013455957</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{t.follow}</h3>
            <SocialIcons />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-base">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
