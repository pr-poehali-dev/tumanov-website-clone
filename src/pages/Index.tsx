import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

const Snowflake = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
  <div
    className="absolute pointer-events-none animate-snowfall"
    style={{
      left,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      width: `${Math.random() * 30 + 30}px`,
      top: '-100px'
    }}
  >
    <img 
      src="https://cdn.poehali.dev/files/c12b2f69-b4ba-49c7-9c87-f69c5f46e986.png" 
      alt="Python logo" 
      className="w-full h-auto opacity-30 mix-blend-screen"
    />
  </div>
);

const Index = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; delay: number; duration: number; left: string }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
      left: `${Math.random() * 100}%`,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3a4f6f 0%, #4a5f7f 50%, #3a4f6f 100%)',
        backgroundImage: `
          linear-gradient(135deg, rgba(58, 79, 111, 0.9) 0%, rgba(74, 95, 127, 0.9) 50%, rgba(58, 79, 111, 0.9) 100%),
          url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {snowflakes.map((flake) => (
        <Snowflake key={flake.id} delay={flake.delay} duration={flake.duration} left={flake.left} />
      ))}

      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-2xl">
          <div 
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20 animate-fade-in"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
            <div className="flex flex-col items-center">
              <div className="mb-8 relative">
                <div className="absolute -top-2 -right-2 text-2xl animate-float">❄️</div>
                <div className="absolute -bottom-2 -left-2 text-xl animate-float" style={{ animationDelay: '1s' }}>💫</div>
                <img
                  src="https://cdn.poehali.dev/files/4e7ee91d-6ac8-4a4d-84f2-4f70adddd8d6.png"
                  alt="Avatar"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexandrPitonov";
                  }}
                />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight text-center">
                Александр Питонов
              </h1>
              
              <p className="text-xl text-white/70 mb-12">
                @zacbatah
              </p>

              <div className="w-full space-y-4">
                <a
                  href="https://t.me/YaSeksiBoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 text-white hover:bg-white/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-xl">📰</span>
                  <span className="text-lg font-medium">Био Александра Питонова</span>
                </a>

                <a
                  href="#price"
                  className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 text-white hover:bg-white/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-xl">💰</span>
                  <span className="text-lg font-medium">Прайс Александра Питонова</span>
                </a>

                <a
                  href="#blog"
                  className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 text-white hover:bg-white/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-xl">📝</span>
                  <span className="text-lg font-medium">Блог Александра Питонова</span>
                </a>

                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 text-white hover:bg-white/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-xl">🎵</span>
                  <span className="text-lg font-medium">TikTok</span>
                </a>

                <div className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                  <span className="text-xl">🎵</span>
                  <span className="text-lg font-medium">ailie - север</span>
                  <button className="ml-auto w-10 h-10 flex items-center justify-center bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                    <Icon name="Play" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;