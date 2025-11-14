import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Footprints',
    title: 'Прокат лыжного снаряжения',
    description: 'Современное оборудование для всех уровней подготовки',
  },
  {
    icon: 'Mountain',
    title: 'Лыжные трассы',
    description: 'Ухоженные трассы различной сложности для комфортного катания',
  },
  {
    icon: 'Waves',
    title: 'Плавательный бассейн',
    description: 'Крытый бассейн с подогревом воды круглый год',
  },
  {
    icon: 'Dumbbell',
    title: 'Тренажерный зал',
    description: 'Профессиональное оборудование для тренировок',
  },
  {
    icon: 'Sun',
    title: 'Летние тренажеры',
    description: 'Открытые площадки для занятий на свежем воздухе',
  },
  {
    icon: 'Hotel',
    title: 'Гостиница',
    description: 'Комфортабельные номера для отдыха после активного дня',
  },
  {
    icon: 'Flame',
    title: 'Баня',
    description: 'Традиционная русская баня для полноценного отдыха',
  },
  {
    icon: 'Calendar',
    title: 'Проведение мероприятий',
    description: 'Организация корпоративных и спортивных событий',
  },
  {
    icon: 'Coffee',
    title: 'Кафе',
    description: 'Уютное кафе с вкусной кухней и панорамным видом',
  },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" size={28} className="text-primary" />
              <span className="text-xl font-semibold">МАУ "Лыжная база"</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/c67faafb-eafb-4bfe-90cd-33183b2ff9dd/files/46f4756e-b1d0-4396-a88d-1f56611eef53.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            МАУ "Лыжная база"
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light drop-shadow-lg">
            Спортивно-оздоровительный комплекс для активного отдыха круглый год
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('services')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-2xl"
          >
            Наши услуги
            <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/80" />
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О комплексе</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              МАУ "Лыжная база" — это современный спортивно-оздоровительный комплекс, 
              предлагающий широкий спектр услуг для активного отдыха и занятий спортом. 
              Мы объединили лучшие условия для зимних и летних видов спорта, 
              комфортное размещение и качественный сервис.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">10000+</div>
                <div className="text-muted-foreground">Довольных гостей</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">9</div>
                <div className="text-muted-foreground">Видов услуг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг для комфортного отдыха и занятий спортом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl font-bold">Бассейн и СПА</h3>
              <p className="text-muted-foreground leading-relaxed">
                Наш крытый бассейн работает круглый год. Современная система очистки воды, 
                комфортная температура и панорамные окна создают идеальные условия для плавания.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>25м × 12м</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Подогрев воды</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/c67faafb-eafb-4bfe-90cd-33183b2ff9dd/files/dfa5535c-1a98-4d83-b4b2-798bd6f00c86.jpg"
                alt="Бассейн"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-scale-in order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/c67faafb-eafb-4bfe-90cd-33183b2ff9dd/files/caf2321a-f313-4405-8b48-b7960c3361b7.jpg"
                alt="Баня"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in order-1 md:order-2">
              <h3 className="text-3xl font-bold">Русская баня</h3>
              <p className="text-muted-foreground leading-relaxed">
                Традиционная русская баня на дровах с вениками и купелью. 
                Идеальное место для восстановления сил после активного дня на склонах.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Вместимость до 10 человек</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span>Купель</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <Card className="animate-scale-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите, какая услуга вас интересует..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    <span>г. Москва, ул. Лыжная, д. 1</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <span>info@ski-base.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <span>Ежедневно с 8:00 до 22:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Mountain" size={24} />
              <span className="font-semibold">МАУ "Лыжная база"</span>
            </div>
            <div className="text-center md:text-right text-sm">
              <p>© 2024 МАУ "Лыжная база". Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
