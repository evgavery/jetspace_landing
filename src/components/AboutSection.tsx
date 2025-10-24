import { Wallet, Coins, Zap, ArrowRight } from "./icons";

export function AboutSection() {
  const steps = [
    {
      number: "1",
      icon: Wallet,
      title: "Подключи SOL / TON кошелёк",
      description: "Авторизуйся через свой кошелёк и подтяни токены, которые ты держишь",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "2",
      icon: Coins,
      title: "Удерживай неликвиды",
      description: "Заморозь бесполезные активы и превращай их в источник дохода.",
      gradient: "from-pink-500 to-cyan-500"
    },
    {
      number: "3",
      icon: Zap,
      title: "Зарабатывай XP и игровую валюту",
      description: "Получай вознаграждения, обменивай их на реальные бонусы — фриспины, NFT, лутбоксы.",
      gradient: "from-cyan-500 to-purple-500"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              JetSpace - экосистема, где мёртвые токены приносят тебе прибыль
            </h2>
            <p className="text-2xl text-cyan-400">Все просто как 1-2-3</p>
          </div>

          {/* Steps Flow */}
          <div className="relative mb-16">
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative md:items-stretch">
              {steps.map((step, index) => (
                <div key={index} className="relative flex">
                  {/* Step Card */}
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-950/40 via-black/40 to-cyan-950/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 flex flex-col"
                    style={{
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.15), inset 0 0 30px rgba(168, 85, 247, 0.05)'
                    }}
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center border-4 border-black shadow-lg shadow-purple-500/50">
                      <span className="text-xl">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl text-purple-200">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">{step.description}</p>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                  </div>

                  {/* Connecting Arrow (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="relative">
                        {/* Glowing line */}
                        <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50" 
                          style={{
                            boxShadow: '0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)'
                          }}
                        ></div>
                        {/* Arrow */}
                        <ArrowRight className="w-6 h-6 text-cyan-400 absolute -right-3 -top-3" 
                          style={{
                            filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Text */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-purple-950/60 to-cyan-950/60 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <p className="text-xl text-gray-200 leading-relaxed">
                Ка��дый токен, который пылился в твоём кошельке, теперь <span className="text-cyan-400">работает на тебя</span> — обменивай его на <span className="text-pink-400">реальные бонусы!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
