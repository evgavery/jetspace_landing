import { Wallet2, Gamepad2, TrendingUp, Star, Trophy, Users2 } from "./icons";

export function AudienceSection() {
  const audiences = [
    {
      icon: Wallet2,
      title: "Web3 пользователей",
      description: "Холдеры «мертвых» токенов",
      benefits: [
        "Монетизация неликвидных активов",
        "Пассивный доход от удержания",
        "Доступ к эксклюзивным NFT"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Gamepad2,
      title: "Геймеров",
      description: "Любители онлайн-игр и казино",
      benefits: [
        "Бесплатные бонусы и фриспины",
        "Эксклюзивные лутбоксы",
        "Промокоды на игры"
      ],
      gradient: "from-pink-600 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Арбитражников",
      description: "Профессиональные трейдеры",
      benefits: [
        "Реферальная программа до 30%",
        "Партнерские инструменты",
        "Приоритетная поддержка"
      ],
      gradient: "from-cyan-600 to-purple-600"
    }
  ];

  return (
    <section id="audience" className="relative py-24 bg-gradient-to-b from-black via-cyan-950/10 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Jetspace - это уникальное пространство для:
            </h2>
          </div>

          {/* Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 relative z-10`}>
                  <audience.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="text-2xl text-white">{audience.title}</h3>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {audience.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Star className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${audience.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-purple-950/40 to-cyan-950/40 backdrop-blur-md rounded-full px-8 py-4 border border-purple-500/20">
              <div className="flex items-center space-x-2">
                <Users2 className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">10,000+ активных пользователей</span>
              </div>
              <div className="w-px h-6 bg-purple-500/30"></div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">$2M+ в бонусах выдано</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
