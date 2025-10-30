import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <header className="mb-32 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Привет, я <span className="font-semibold">Александр</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            Дизайнер интерфейсов и творческий разработчик
          </p>
        </header>

        <section className="mb-32 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <h2 className="text-4xl font-light mb-8 tracking-tight">Обо мне</h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              Я создаю цифровые продукты на стыке дизайна и технологий. 
              Мой подход основан на минимализме, функциональности и внимании к деталям.
            </p>
            <p>
              Работаю с интерфейсами, которые решают реальные задачи пользователей. 
              Верю, что хороший дизайн незаметен — он просто работает.
            </p>
            <p>
              В свободное время изучаю типографику, фотографирую городскую архитектуру 
              и экспериментирую с новыми технологиями.
            </p>
          </div>
        </section>

        <section className="mb-32 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          <h2 className="text-4xl font-light mb-8 tracking-tight">Навыки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Palette" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg mb-1">UI/UX Дизайн</h3>
                  <p className="text-muted-foreground">Figma, Adobe XD, Sketch</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Code" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg mb-1">Разработка</h3>
                  <p className="text-muted-foreground">React, TypeScript, CSS</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Lightbulb" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg mb-1">Креативность</h3>
                  <p className="text-muted-foreground">Концепции, брендинг, типографика</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Users" className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-lg mb-1">Коммуникация</h3>
                  <p className="text-muted-foreground">Работа с командой, презентации</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
          <h2 className="text-4xl font-light mb-8 tracking-tight">Контакты</h2>
          <div className="space-y-4">
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Icon name="Mail" size={24} className="group-hover:scale-110 transition-transform" />
              <span>hello@example.com</span>
            </a>
            <a 
              href="https://t.me/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Icon name="Send" size={24} className="group-hover:scale-110 transition-transform" />
              <span>Telegram</span>
            </a>
            <a 
              href="https://github.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Icon name="Github" size={24} className="group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Icon name="Linkedin" size={24} className="group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        <footer className="border-t border-border pt-8 text-center text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
          <p className="text-sm">© 2024 Александр. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
