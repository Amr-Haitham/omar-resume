import { useLanguage } from "../../contexts/LanguageContext";
import { content } from "../../data/content";
import CopyButton from "../CopyButton";

export default function PaymentSection() {
  const { language } = useLanguage();
  const t = content[language].payment;

  return (
    <section id="payment" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {t.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="font-bold text-base mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Vodafone Cash */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t.vodafone.title}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold text-gray-700">
                  {language === 'ar' ? 'رقم المحفظة:' : 'Wallet Number:'}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">{t.vodafone.number}</span>
                  <CopyButton text={t.vodafone.number} title={language === 'ar' ? 'نسخ الرقم' : 'Copy Number'} />
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold text-gray-700">
                  {language === 'ar' ? 'اسم المستلم:' : 'Recipient Name:'}
                </span>
                <span className="text-blue-600 font-bold">{t.vodafone.name}</span>
              </div>
            </div>
            <a href="https://wa.me/201064542684" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg hover:shadow-green-600/25 transition-all duration-300 mt-4 text-center block">
              {t.vodafone.cta}
            </a>
          </div>

          {/* Instapay */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t.instapay.title}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold text-gray-700">
                  {language === 'ar' ? 'اسم المستخدم:' : 'Username:'}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">{t.instapay.username}</span>
                  <CopyButton text={t.instapay.username} title={language === 'ar' ? 'نسخ اسم المستخدم' : 'Copy Username'} />
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold text-gray-700">
                  {language === 'ar' ? 'اسم المستلم:' : 'Recipient Name:'}
                </span>
                <span className="text-blue-600 font-bold">{t.instapay.name}</span>
              </div>
            </div>
            <a href="https://wa.me/201064542684" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg hover:shadow-blue-600/25 transition-all duration-300 mt-4 text-center block">
              {t.instapay.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
