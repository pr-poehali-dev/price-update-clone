import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-400 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold font-heading">Б</span>
          </div>
          <span className="text-xl font-heading font-semibold text-black">билайн</span>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight text-black pb-6 border-b border-gray-200">
            Открыто о причинах изменения цены
          </h1>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-black">Почему мы обновляем стоимость с <дата></h2>
            <div className="space-y-3 text-base text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-black">Коротко:</span> с 1 января 2026 года базовая ставка НДС в стране повышается с 20% до 22%. Это обязательный налог для всех игроков рынка, и его рост напрямую влияет на себестоимость связи и цифровых сервисов.
              </p>
              <p>
                Мы честно отражаем этот внешний фактор в цене — чтобы сохранить качество сети и сервисов на привычном уровне.
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-6 text-black">
              Что происходит в экономике
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                <div className="text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-black">Инфляция всё ещё выше целевого уровня.</span> Банк России ожидает по итогам 2025 года 6,5–7,0% и возвращение к цели позже, хотя динамика замедляется; ключевая ставка постепенно снижается с пиков 2024 года.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                <div className="text-base text-gray-700 leading-relaxed">
                  <span className="font-semibold text-black">Импорт и сложная техника.</span> Значительная часть телеком-оборудования и комплектующих — импортного происхождения; санкционные ограничения и усложнение логистики повышают стоимость и сроки поставок.
                </div>
              </li>
            </ul>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-black">
              Зачем это нужно сети и вам
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-5">
              Повышение НДС — это увеличение налоговой нагрузки на все процессы: от закупки импортных компонентов и логистики до эксплуатации базовых станций и дата-центров. Честно заложив этот фактор в цену сейчас, мы продолжаем инвестировать в:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                <span className="text-base text-gray-700">стабильность и скорость мобильного интернета,</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                <span className="text-base text-gray-700">расширение и модернизацию сети,</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                <span className="text-base text-gray-700">безопасность и развитие сервисов в приложении билайн.</span>
              </li>
            </ul>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-6 text-black">
              Что именно меняется
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                <div className="text-base text-gray-700 leading-relaxed">
                  Меняем условия <span className="font-semibold text-black">архивных тарифных планов</span>, приводя их стоимость в соответствие с экономической ситуацией.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                <div className="text-base text-gray-700 leading-relaxed">
                  Мы следим, чтобы даже после изменения <span className="font-semibold text-black">архив не стал дороже</span> сопоставимых актуальных предложений билайн.
                </div>
              </li>

            </ul>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-black">
              Это всё ещё выгодно?
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="font-semibold text-black">Да.</span> Мы регулярно сравниваемся с рынком и нашими актуальными линейками, чтобы сохранить конкурентность. Плюс вы получаете ценность не только в гигабайтах и минутах, но и в удобстве приложения, автоплатеже, защите от мошенничества и других сервисах.
            </p>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          <div className="bg-yellow-400 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-black">
              Честное обещание
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Мы не будем обещать, что цены в <span className="font-semibold text-black">2035</span> останутся как в <span className="font-semibold text-black">2025</span>. Но будем обещать другое: <span className="font-semibold text-black">каждый раз заранее и простыми словами объяснять причины изменений</span> — как сейчас, когда ключевой фактор понятен и объективен: повышение НДС до 22%.
            </p>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/>
                  <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold mb-2 text-black">Удобное приложение</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Всё под рукой: баланс, тарифы, управление услугами
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                  <path d="M12 1v6m0 6v6M1 12h6m6 0h6" strokeWidth="2"/>
                  <path d="M4.22 4.22l4.24 4.24m7.08 0l4.24-4.24m0 15.56l-4.24-4.24m-7.08 0l-4.24 4.24" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold mb-2 text-black">Честные настройки</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Без скрытых платежей и неожиданных списаний
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M12 11v6m0-6a2 2 0 100-4 2 2 0 000 4z" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold mb-2 text-black">Качественный интернет</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Стабильная связь там, где вам нужно
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;