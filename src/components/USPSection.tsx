import { 
  Recycle, 
  Zap, 
  Clock, 
  Trophy, 
  Network, 
  MessageSquare, 
  Sparkles, 
  Users, 
  Shield,
  Repeat,
  Telegram
} from "./icons";

export function USPSection() {
  const benefits = [
    {
      icon: Recycle,
      title: "Монетизация неликвида",
      description: "Превращай «мертвые» токены в реальную ценность"
    },
    {
      icon: Clock,
      title: "Пассивный доход",
      description: "Получай валюту автоматически просто удерживая токены"
    },
    {
      icon: Trophy,
      title: "Эксклюзивные бонусы",
      description: "Доступ к уникальным предложениям от топовых партнеров"
    },
    {
      icon: Users,
      title: "Реферальная программа",
      description: "Зарабатывай до 30% с доходов рефералов"
    },
    {
      icon: Sparkles,
      title: "Геймификация",
      description: "Система уровней, достижений и редких наград"
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Все для твоего профита на JetSpace
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-purple-950/30 to-cyan-950/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(168, 85, 247, 0.1)'
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:to-cyan-600/20 rounded-2xl transition-all duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-purple-200 group-hover:text-white transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Connecting Line (desktop only) */}
                {index < benefits.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 -translate-y-1/2 z-0"
                    style={{
                      boxShadow: '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(34, 211, 238, 0.3)'
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-purple-950/60 to-cyan-950/60 backdrop-blur-lg rounded-3xl px-10 py-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <div className="text-left">
                <h3 className="text-2xl mb-2 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Начни зарабатывать уже сегодня
                </h3>
                <p className="text-gray-400">Подключи кошелек и получи приветственный бонус</p>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl text-white whitespace-nowrap transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70">
                Начать сейчас
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
