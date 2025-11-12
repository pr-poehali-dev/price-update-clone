import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-400">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold font-heading">Б</span>
            </div>
            <span className="text-xl font-heading font-semibold text-black">билайн</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 leading-tight text-black">
            Открыто о причинах изменения цены
          </h1>
        </div>

        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-black">
            Почему мы обновляем стоимость сейчас
          </h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-900">
              <span className="font-semibold">Коротко:</span> с 1 января 2026 года базовая ставка НДС в стране повышается с 20% до 22%. 
              Это обязательный налог для всех игроков рынка, и его рост напрямую влияет на себестоимость связи и цифровых сервисов.
            </p>
            <p className="text-lg leading-relaxed text-gray-900">
              Мы честно отражаем этот внешний фактор в цене — чтобы сохранить качество сети и сервисов на привычном уровне.
            </p>
          </div>
        </div>

        <div className="h-px bg-gray-500 my-10"></div>

        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-black">
            Что именно меняется
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Icon name="Circle" size={8} className="mt-2 fill-black text-black flex-shrink-0" />
              <span className="text-lg leading-relaxed text-gray-900">
                Индексация затрагивает <span className="font-semibold">архивные тарифы</span>, которые долго не пересматривались.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <Icon name="Circle" size={8} className="mt-2 fill-black text-black flex-shrink-0" />
              <span className="text-lg leading-relaxed text-gray-900">
                Мы следим, чтобы даже после изменения <span className="font-semibold">архив не стал дороже</span> сопоставимых актуальных предложений билайн.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <Icon name="Circle" size={8} className="mt-2 fill-black text-black flex-shrink-0" />
              <span className="text-lg leading-relaxed text-gray-900">
                Ваши пакеты минут, SMS и гигабайтов, а также подключённые опции <span className="font-semibold">сохраняются без изменений</span>.
              </span>
            </li>
          </ul>
        </div>

        <div className="h-px bg-gray-500 my-10"></div>

        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-black">
            Зачем это нужно сети и вам
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-900">
            Повышение НДС — это увеличение налоговой нагрузки на все процессы: от закупки импортных компонентов и логистики 
            до эксплуатации базовых станций и дата-центров. Честно заложив этот фактор в цену сейчас, мы продолжаем инвестировать в:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <Icon name="Check" size={20} className="mt-1 text-black flex-shrink-0" />
              <span className="text-lg text-gray-900">стабильность и скорость мобильного интернета,</span>
            </li>
            <li className="flex gap-3 items-start">
              <Icon name="Check" size={20} className="mt-1 text-black flex-shrink-0" />
              <span className="text-lg text-gray-900">расширение и модернизацию сети,</span>
            </li>
            <li className="flex gap-3 items-start">
              <Icon name="Check" size={20} className="mt-1 text-black flex-shrink-0" />
              <span className="text-lg text-gray-900">безопасность и развитие сервисов в приложении билайн.</span>
            </li>
          </ul>
        </div>

        <div className="h-px bg-gray-500 my-10"></div>

        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-black">
            Как мы делаем изменения честными
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <Badge className="text-lg font-heading font-bold px-3 py-1 bg-black text-white">1</Badge>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-black">Сначала эффективность.</h3>
                <p className="text-gray-700">Сокращаем внутренние издержки, а не закрываем глаза на них.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Badge className="text-lg font-heading font-bold px-3 py-1 bg-black text-white">2</Badge>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-black">Точечно.</h3>
                <p className="text-gray-700">Корректируем в первую очередь архивные планы.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Badge className="text-lg font-heading font-bold px-3 py-1 bg-black text-white">3</Badge>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-black">Прозрачно.</h3>
                <p className="text-gray-700">
                  Пишем заранее, называем причину напрямую — <span className="font-semibold text-black">рост НДС до 22%</span> — 
                  и указываем дату первого списания в новом размере.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-500 my-10"></div>

        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-black">
            Это всё ещё выгодно?
          </h2>
          <p className="text-lg leading-relaxed text-gray-900">
            <span className="font-semibold text-xl">Да.</span> Мы регулярно сравниваемся с рынком и нашими актуальными линейками, 
            чтобы сохранить конкурентность. Плюс вы получаете ценность не только в гигабайтах и минутах, но и в удобстве приложения, 
            автоплатеже, защите от мошенничества и других сервисах.
          </p>
        </div>

        <div className="h-px bg-gray-500 my-10"></div>

        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-black">
            Честное обещание
          </h2>
          <p className="text-lg leading-relaxed text-gray-900">
            Мы не будем обещать, что цены в <span className="font-semibold">2035</span> останутся как в <span className="font-semibold">2025</span>. 
            Но будем обещать другое: <span className="font-semibold">каждый раз заранее и простыми словами объяснять причины изменений</span> — 
            как сейчас, когда ключевой фактор понятен и объективен: повышение НДС до 22%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
