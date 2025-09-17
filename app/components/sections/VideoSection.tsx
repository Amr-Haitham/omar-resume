import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";

export default function VideoSection() {
  const { language } = useLanguage();
  const t = content[language].video;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3>
            <p className="text-gray-600">{t.description}</p>
          </div>
          
          <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl max-w-3xl mx-auto">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/XqQkI2gJV-0"
                title="Live CV Review Session - YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl text-base shadow-lg hover:shadow-blue-600/25 transition-all duration-300">
              {t.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
