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

        <div className="max-w-lg mx-auto">
          {/* Single Payment Method */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{t.combined.title}</h3>
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-4">
                {language === 'ar' 
                  ? 'يمكنك الدفع عبر Vodafone Cash أو Instapay على نفس الرقم' 
                  : 'You can pay via Vodafone Cash or Instapay using the same number'
                }
              </p>
              <div className="flex justify-center items-center gap-2 p-4 bg-gray-50 rounded-lg mb-3">
                <span className="font-semibold text-gray-700">
                  {language === 'ar' ? 'رقم المحفظة:' : 'Wallet Number:'}
                </span>
                <span className="text-blue-600 font-bold text-lg">{t.vodafone.number}</span>
                <CopyButton text={t.vodafone.number} title={language === 'ar' ? 'نسخ الرقم' : 'Copy Number'} />
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium">
                  {language === 'ar' 
                    ? 'ملاحظة: اسم المستلم في Vodafone Cash و Instapay هو "عمرو هيثم"' 
                    : 'Note: Make sure the recipient name in Vodafone Cash and Instapay is "Amr Haitham"'
                  }
                </p>
              </div>
            </div>
            <a href="https://wa.me/201013455957" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg hover:shadow-green-600/25 transition-all duration-300 text-center block">
              {t.combined.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
