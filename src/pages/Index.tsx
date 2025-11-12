import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-foreground rounded-full flex items-center justify-center">
              <span className="text-background text-2xl font-bold font-heading">Б</span>
            </div>
            <span className="text-xl font-heading font-semibold">билайн</span>
          </div>
        </div>

        <Card className="p-8 md:p-12 mb-8 animate-scale-in shadow-lg">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight">
            Открыто о причинах изменения цены
          </h1>
        </Card>

        <Card className="p-8 md:p-10 mb-6 animate-fade-in shadow-md">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Почему мы обновляем стоимость сейчас
          </h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Коротко:</span> с 1 января 2026 года базовая ставка НДС в стране повышается с 20% до 22%. 
              Это обязательный налог для всех игроков рынка, и его рост напрямую влияет на себестоимость связи и цифровых сервисов.
            </p>
            <p className="text-lg leading-relaxed">
              Мы честно отражаем этот внешний фактор в цене — чтобы сохранить качество сети и сервисов на привычном уровне.
            </p>
          </div>
        </Card>

        <div className="h-px bg-border my-8"></div>

        <Card className="p-8 md:p-10 mb-6 animate-fade-in shadow-md">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Что именно меняется
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Icon name="Circle" size={8} className="mt-2 fill-primary text-primary flex-shrink-0" />
              <span className="text-lg leading-relaxed">
                Индексация затрагивает <span className="font-semibold">архивные тарифы</span>, которые долго не пересматривались.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <Icon name="Circle" size={8} className="mt-2 fill-primary text-primary flex-shrink-0" />
              <span className="text-lg leading-relaxed">
                Мы следим, чтобы даже после изменения <span className="font-semibold">архив не стал дороже</span> сопоставимых актуальных предложений билайн.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <Icon name="Circle" size={8} className="mt-2 fill-primary text-primary flex-shrink-0" />
              <span className="text-lg leading-relaxed">
                Ваши пакеты минут, SMS и гигабайтов, а также подключённые опции <span className="font-semibold">сохраняются без изменений</span>.
              </span>
            </li>
          </ul>
        </Card>

        <div className="h-px bg-border my-8"></div>

        <Card className="p-8 md:p-10 mb-6 animate-fade-in shadow-md">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Зачем это нужно сети и вам
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Повышение НДС — это увеличение налоговой нагрузки на все процессы: от закупки импортных компонентов и логистики 
            до эксплуатации базовых станций и дата-центров. Честно заложив этот фактор в цену сейчас, мы продолжаем инвестировать в:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <Icon name="Check" size={20} className="mt-1 text-primary flex-shrink-0" />
              <span className="text-lg">стабильность и скорость мобильного интернета,</span>
            </li>
            <li className="flex gap-3 items-start">
              <Icon name="Check" size={20} className="mt-1 text-primary flex-shrink-0" />
              <span className="text-lg">расширение и модернизацию сети,</span>
            </li>
            <li className="flex gap-3 items-start">
              <Icon name="Check" size={20} className="mt-1 text-primary flex-shrink-0" />
              <span className="text-lg">безопасность и развитие сервисов в приложении билайн.</span>
            </li>
          </ul>
        </Card>

        <div className="h-px bg-border my-8"></div>

        <Card className="p-8 md:p-10 mb-6 animate-fade-in shadow-md">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Как мы делаем изменения честными
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <Badge className="text-lg font-heading font-bold px-3 py-1 bg-primary">1</Badge>
              <div>
                <h3 className="font-semibold text-lg mb-1">Сначала эффективность.</h3>
                <p className="text-muted-foreground">Сокращаем внутренние издержки, а не закрываем глаза на них.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Badge className="text-lg font-heading font-bold px-3 py-1 bg-primary">2</Badge>
              <div>
                <h3 className="font-semibold text-lg mb-1">Точечно.</h3>
                <p className="text-muted-foreground">Корректируем в первую очередь архивные планы.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Badge className="text-lg font-heading font-bold px-3 py-1 bg-primary">3</Badge>
              <div>
                <h3 className="font-semibold text-lg mb-1">Прозрачно.</h3>
                <p className="text-muted-foreground">
                  Пишем заранее, называем причину напрямую — <span className="font-semibold text-foreground">рост НДС до 22%</span> — 
                  и указываем дату первого списания в новом размере.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="h-px bg-border my-8"></div>

        <Card className="p-8 md:p-10 mb-6 animate-fade-in shadow-md">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Это всё ещё выгодно?
          </h2>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-xl">Да.</span> Мы регулярно сравниваемся с рынком и нашими актуальными линейками, 
            чтобы сохранить конкурентность. Плюс вы получаете ценность не только в гигабайтах и минутах, но и в удобстве приложения, 
            автоплатеже, защите от мошенничества и других сервисах.
          </p>
        </Card>

        <div className="h-px bg-border my-8"></div>

        <Card className="p-8 md:p-10 mb-12 animate-fade-in shadow-md bg-accent/10 border-accent/20">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Честное обещание
          </h2>
          <p className="text-lg leading-relaxed">
            Мы не будем обещать, что цены в <span className="font-semibold">2035</span> останутся как в <span className="font-semibold">2025</span>. 
            Но будем обещать другое: <span className="font-semibold">каждый раз заранее и простыми словами объяснять причины изменений</span> — 
            как сейчас, когда ключевой фактор понятен и объективен: повышение НДС до 22%.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
