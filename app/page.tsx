import Image from "next/image";
import CopyButton from "./components/CopyButton";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-cairo" style={{ fontFamily: 'var(--font-cairo), Cairo, Arial, sans-serif' }}>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/201013455957"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="text-sm font-bold">واتساب</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
            <div className="text-center lg:text-right order-2 lg:order-1 flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                عمر أحمد
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mt-2">
                  احصل على سيرة ذاتية مميزة
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 font-medium">
                تمت مراجعتها من قبل متدرب في Google
              </p>
              <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                احصل على المزيد من المقابلات مع تعليقات خبيرة على سيرتك الذاتية وتحسينات حقيقية تجعلك ملاحظاً من قبل أفضل الموظفين.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-blue-600/25 transition-all duration-300 transform hover:scale-105 text-center">
                  راجع سيرتي الذاتية الآن
                </a>
                <a href="https://wa.me/201013455957" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-8 rounded-xl text-lg border-2 border-blue-600 shadow-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center">
                  تواصل معنا
                </a>
              </div>
            </div>
            
            {/* Omar's Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-2">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/omar.jpeg"
                    alt="عمر أحمد - خبير مراجعة السيرة الذاتية"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-2xl">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              من أنا ولماذا يجب أن تثق بنصائحي
            </h2>
            <div className="max-w-4xl mx-auto text-right">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                مرحباً — أنا عمر. أكملت تدريبين في هندسة البرمجيات في Google (حصلت على الأول بدون توصيات)، وحصلت على عرض عودة لصيف 2025. وصلت إلى هنا من خلال الكثير من التجربة والخطأ، والممارسة المتعمدة على مواد التقديم، و— توفيق من ربنا. كما استضفت ورش عمل متعددة حول السيرة الذاتية (واحدة منها على YouTube مع أكثر من 1.5k مشاهدة وتقييمات إيجابية باستمرار) وقمت بالعديد من مراجعات السيرة الذاتية الفردية — المشاركون يبلغون عن تحسينات واضحة وقابلة للقياس بعد العمل معي.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ملاحظة سريعة: كل ما أنصح به يأتي من تجربتي الشخصية والبحث، وليس من العمل كموظف توظيف أو متخصص في الموارد البشرية. أهدف إلى تقديم نصائح عملية وصديقة للموظفين وقابلة للتنفيذ بناءً على ما ساعدني فعلاً والأشخاص الذين دربتهم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ماذا يقول عملاؤنا
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                &ldquo;بجد كنت محظوظ إني قابلت عمر وحضرت واحدة من الـ resume workshops بتاعته. مشيت على كل اللي قاله بالحرف، وبعدها وريته الـ resume الجديد اللي ظبطته. إداني شوية ملاحظات بسيطة، وبعد ما عدلتها استخدمت نفس الـ resume وقدّمت بيه على تدريب في Google. فجأة لقيت نفسي واخد دعوة للمقابلة أسرع بكتير من اللي كنت متوقعه. وبمساعدته المستمرة ونصايحه في إزاي أذاكر للمقابلة، الحمد لله عدّيت الـ technical rounds واتقبلت.&rdquo;
              </p>
              <div className="font-bold text-lg text-gray-900">محمد رسلان</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                &ldquo;بفضل الله ثم بمساعدة عمر رتبنا ال resume بشكل لائق وخلي المحتوى directed اكتر علي الposition اللي انا عاوزه و اضفنا محتوي مكنتش متوقع انه هيفرق و شيلنا محتوى كنت اظنه مهم. الsession فرقت جدا معايا. حد محترم جدا ومتعاون ربنا يجازيك خير و يرزقك&rdquo;
              </p>
              <div className="font-bold text-lg text-gray-900">عمرو هيثم</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                &ldquo;ساعدتني في الحصول على مقابلات أكثر من أي وقت مضى. أنصح بها بشدة!&rdquo;
              </p>
              <div className="font-bold text-lg text-gray-900">فاطمة علي</div>
            </div>
          </div>

           <div className="text-center">
             <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 inline-block">
               أريد أن أكون التالي في قائمة العملاء
             </a>
           </div>
        </div>
      </section>


      {/* Why Trust Our Expertise Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Video Preview Section */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">شاهد جلسة مراجعة مباشرة</h3>
              <p className="text-gray-600">تعلم كيف نحسن سيرتك الذاتية خطوة بخطوة</p>
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
                شاهد الجلسة
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* See the Difference Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              شاهد الفرق الذي نحدثه
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold w-fit mb-4">
                  قبل
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="text-center text-gray-500">
                    <div className="text-3xl mb-2">📄</div>
                    <p className="text-sm mb-4">سيرة ذاتية غير منظمة</p>
                    <a
                      href="/before.pdf"
                      download="before-resume.pdf"
                      className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm shadow-lg hover:shadow-red-600/25 transition-all duration-300 transform hover:scale-105"
                    >
                      تحميل PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold w-fit mb-4">
                  بعد
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <div className="text-center text-gray-700">
                    <div className="text-3xl mb-2">✨</div>
                    <p className="text-sm font-medium mb-4">سيرة ذاتية احترافية ومنظمة</p>
                    <a
                      href="/after.pdf"
                      download="after-resume.pdf"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-sm shadow-lg hover:shadow-green-600/25 transition-all duration-300 transform hover:scale-105"
                    >
                      تحميل PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              انظر كيف تحدث التعليقات الاحترافية فرقاً حقيقياً
            </p>
            <ul className="text-base text-gray-600 space-y-1">
              <li>• أقسام واضحة ومنظمة</li>
              <li>• تصميم احترافي وجذاب</li>
              <li>• محتوى قوي ومؤثر</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              خدماتنا
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1: Deep Review + Personalized Video */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1 — مراجعة عميقة + فيديو Recorded</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">300 جنية</div>
              <p className="text-gray-600 mb-6">مثالي إذا كنت تريد نقداً مدروساً ومخصصاً دون جدولة مكالمة.</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">ما ستحصل عليه</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• ترفع سيرتك الذاتية؛ أقضي بضع ساعات في مراجعتها بالتفصيل</li>
                  <li>• فيديو مسجل مخصص بالكامل (≈15–30 دقيقة) يمر على سيرتك الذاتية سطراً بسطر</li>
                  <li>• اقتراحات إعادة كتابة ملموسة وأمثلة سأستخدمها بدلاً من النصائح الغامضة</li>
                  <li>• خطوات واضحة لتحسين اهتمام المقابلات وقراءة ATS</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">مدة التسليم</h4>
                <p className="text-sm text-gray-700">يتم التسليم خلال 3–4 أيام عمل من الرفع</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">مثالي لـ</h4>
                <p className="text-sm text-gray-700">الأشخاص المشغولين الذين يريدون مراجعة عميقة ومخصصة مع أمثلة يمكنهم تنفيذها في وقتهم الخاص</p>
              </div>
              
              <a href="#payment" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 text-center block">
                ابدأ الآن
              </a>
            </div>
            
            {/* Service 2: 45-minute 1:1 Resume Deep-Dive */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2 — جلسة مباشرة 45 دقيقة</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">500 جنية</div>
              <p className="text-gray-600 mb-6">الأفضل للأشخاص الذين يريدون تحسينات تفاعلية عالية التأثير وتعديلات مباشرة.</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">ما ستحصل عليه</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• مكالمة فيديو 45 دقيقة (مشاركة الشاشة) نمر على سيرتك الذاتية معاً</li>
                  <li>• أسأل أسئلة مستهدفة لفهم دورك وتأثيرك وأهدافك</li>
                  <li>• تعديلات مباشرة وإعادة صياغة أثناء المكالمة</li>
                  <li>• ملخص ما بعد المكالمة مع أهم الإجراءات و3–5 أمثلة إعادة كتابة</li>
              </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">مثالي لـ</h4>
                <p className="text-sm text-gray-700">الأشخاص الذين يريدون نتائج أسرع وأعلى جودة ويفضلون التوجيه التفاعلي على التعليقات غير المتزامنة</p>
              </div>
              
              <a href="#payment" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 text-center block">
                ابدأ الآن
              </a>
            </div>
            
            {/* Service 3: 30-minute Mentorship / Career Q&A */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3 — جلسة إرشاد 30 دقيقة</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">400 جنية</div>
              <p className="text-gray-600 mb-6">للإرشاد المهني الأوسع، تحضير المقابلات، والإرشاد.</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">ما ستحصل عليه</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• مكالمة مركزة 30 دقيقة يمكنك فيها سؤال أي شيء</li>
                  <li>• خيارات المسار المهني، كيفية التحضير للمقابلات</li>
                  <li>• استراتيجيات التواصل، نصائح التدريب/عرض العودة</li>
                  <li>• نصائح عملية قائمة على الخبرة وخطوات واقعية</li>
                  <li>• ملاحظة متابعة قصيرة تلخص التوصيات الرئيسية</li>
              </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">مثالي لـ</h4>
                <p className="text-sm text-gray-700">الطلاب والمهندسين في بداية حياتهم المهنية الذين يريدون إرشاداً، استراتيجية مقابلات، أو مساعدة في اتخاذ الخطوات التالية</p>
              </div>
              
              <a href="#payment" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg hover:shadow-blue-600/25 transition-all duration-300 text-center block">
                ابدأ الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to Pay Section */}
      <section id="payment" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              كيفية الدفع
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-base mb-2 text-gray-900">اختر الخدمة</h3>
              <p className="text-gray-600 text-sm">اختر الخطة المناسبة لك</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-base mb-2 text-gray-900">أرسل الدفع والسيرة الذاتية</h3>
              <p className="text-gray-600 text-sm">ارسل المبلغ عبر Instapay أو المحفظة الإلكترونية + أرسل الresume إذا كانت خدمة مراجعة</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-base mb-2 text-gray-900">تأكيد الدفع</h3>
              <p className="text-gray-600 text-sm">أرسل إيصال الدفع</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="font-bold text-base mb-2 text-gray-900">احصل على الخدمة</h3>
              <p className="text-gray-600 text-sm">ابدأ جلسة المراجعة أو انتظر الفيديو المسجل</p>
            </div>
          </div>

          {/* Payment Details */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Vodafone Cash */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Vodafone Cash</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">رقم المحفظة:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">01064542684</span>
                    <CopyButton text="01064542684" title="نسخ الرقم" />
                  </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-semibold text-gray-700">اسم المستلم:</span>
                <span className="text-blue-600 font-bold">عمر أحمد</span>
              </div>
            </div>
            <a href="https://wa.me/201064542684" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg hover:shadow-green-600/25 transition-all duration-300 mt-4 text-center block">
              تأكيد الدفع
            </a>
            </div>

            {/* Instapay */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Instapay</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">اسم المستخدم:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">omarahmed7723</span>
                    <CopyButton text="omarahmed7723" title="نسخ اسم المستخدم" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">اسم المستلم:</span>
                  <span className="text-blue-600 font-bold">عمر أحمد</span>
                </div>
              </div>
              <a href="https://wa.me/201064542684" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg hover:shadow-blue-600/25 transition-all duration-300 mt-4 text-center block">
                تأكيد الدفع
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">خدمات مراجعة السيرة الذاتية</h3>
              <p className="text-gray-300 text-base mb-4 leading-relaxed">
                خدمات مراجعة السيرة الذاتية الاحترافية من متدرب في جوجل، نساعد المرشحين في الحصول على وظائف تقنية رائدة.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
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
              <h3 className="text-xl font-bold mb-4">تابعنا</h3>
              <SocialIcons />
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-base">
              © 2024 خدمات مراجعة السيرة الذاتية. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}