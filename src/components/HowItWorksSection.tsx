import { UserPlus, Link2, Coins, Gift, ArrowRight } from "./icons";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Регистрация",
      description: "Подключи свой SOL или TON кошелек к платформе",
      color: "purple"
    },
    {
      number: "02",
      icon: Link2,
      title: "Удерживай токены",
      description: "Держи поддерживаемые токены в кошельке",
      color: "pink"
    },
    {
      number: "03",
      icon: Coins,
      title: "Фарми валюту",
      description: "Автоматически зарабатывай игровую валюту и XP",
      color: "cyan"
    },
    {
      number: "04",
      icon: Gift,
      title: "Получай бонусы",
      description: "Обменивай валюту на реальные бонусы от партнеров",
      color: "purple"
    }
  ];

  const colorClasses = {
    purple: {
      bg: "from-purple-600 to-purple-800",
      text: "text-purple-400",
      border: "border-purple-500/50",
      glow: "shadow-purple-500/50"
    },
    pink: {
      bg: "from-pink-600 to-pink-800",
      text: "text-pink-400",
      border: "border-pink-500/50",
      glow: "shadow-pink-500/50"
    },
    cyan: {
      bg: "from-cyan-600 to-cyan-800",
      text: "text-cyan-400",
      border: "border-cyan-500/50",
      glow: "shadow-cyan-500/50"
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-black via-pink-950/10 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              4 простых шага к бонусам
            </h2>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:items-stretch">
              {steps.map((step, index) => (
                <div key={index} className="relative flex">
                  {/* Step Card */}
                  <div className="group relative w-full h-full bg-gradient-to-br from-gray-900/70 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
                    {/* Number Badge */}
                    <div className={`absolute -top-6 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses].bg} flex items-center justify-center shadow-lg ${colorClasses[step.color as keyof typeof colorClasses].glow} group-hover:shadow-xl transition-shadow`}>
                      <span className="text-white text-xl">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses].bg} bg-opacity-20 flex items-center justify-center mb-6 relative z-10`}>
                      <step.icon className={`w-8 h-8 ${colorClasses[step.color as keyof typeof colorClasses].text}`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-3 flex-grow flex flex-col">
                      <h3 className="text-xl text-white">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed flex-grow">{step.description}</p>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses].bg} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-24 -right-4 z-20 w-8 h-8 items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-purple-400/50" />
                    </div>
                  )}

                  {/* Arrow - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-purple-400/50 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-purple-950/40 to-cyan-950/40 backdrop-blur-md rounded-3xl px-12 py-8 border border-purple-500/20">
              <p className="text-xl text-gray-300">Готов начать зарабатывать?</p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl text-white transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70">
                Подключить кошелек сейчас
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
