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
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-black">
              Зачем это нужно сейчас
            </h2>
            <div className="space-y-3 text-base text-gray-700 leading-relaxed">
              <p>
                Коротко: чтобы у вас не зависали фильмы и видеозвонки, связь держалась и в офисе, и в подвальном клубе, а интернет оставался быстрым и стабильным — даже при растущей нагрузке на сеть. По данным Минцифры, совокупный трафик фиксированных и мобильных сетей в РФ в 2024 году вырос примерно на 24% и продолжает расти в 2025-м.
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
              Почему мы обновляем стоимость сейчас
            </h2>
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
              Что именно меняется
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"></div>
                <div className="text-base text-gray-700 leading-relaxed">
                  Индексация затрагивает <span className="font-semibold text-black">архивные тарифы</span>
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
              Как мы делаем изменения честными
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <Badge className="text-base font-heading font-bold px-2.5 py-1 bg-black text-white rounded-md">1</Badge>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-black">Сначала эффективность.</h3>
                  <p className="text-gray-700 text-base">Сокращаем внутренние издержки, а не закрываем глаза на них.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Badge className="text-base font-heading font-bold px-2.5 py-1 bg-black text-white rounded-md">2</Badge>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-black">Точечно.</h3>
                  <p className="text-gray-700 text-base">Корректируем в первую очередь архивные планы.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Badge className="text-base font-heading font-bold px-2.5 py-1 bg-black text-white rounded-md">3</Badge>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-black">Прозрачно.</h3>
                  <p className="text-gray-700 text-base">
                    Пишем заранее, называем причину напрямую — <span className="font-semibold text-black">рост НДС до 22%</span> — и указываем дату первого списания в новом размере.
                  </p>
                </div>
              </div>
            </div>
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

          <div>
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 text-black">
              Честное обещание
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Мы не будем обещать, что цены в <span className="font-semibold text-black">2035</span> останутся как в <span className="font-semibold text-black">2025</span>. Но будем обещать другое: <span className="font-semibold text-black">каждый раз заранее и простыми словами объяснять причины изменений</span> — как сейчас, когда ключевой фактор понятен и объективен: повышение НДС до 22%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;