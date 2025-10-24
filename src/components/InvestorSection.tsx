import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Link2, 
  CheckCircle2, 
  Target,
  Rocket,
  BarChart3
} from "./icons";

export function InvestorSection() {
  const metrics = [
    {
      icon: Users,
      value: "10,000+",
      label: "Активных пользователей",
      trend: "+250%"
    },
    {
      icon: DollarSign,
      value: "$2M+",
      label: "Объем обработанных токенов",
      trend: "+180%"
    },
    {
      icon: Link2,
      value: "50+",
      label: "Партнерских интеграций",
      trend: "+120%"
    },
    {
      icon: TrendingUp,
      value: "35%",
      label: "Месячный рост",
      trend: "Стабильно"
    }
  ];

  const advantages = [
    {
      icon: Target,
      title: "Уникальная модель",
      description: "Решаем реальную проблему перенасыщения рынка невалидными токенами"
    },
    {
      icon: Rocket,
      title: "Масштабируемость",
      description: "Мультичейн-подход с поддержкой SOL, TON и планами расширения"
    },
    {
      icon: BarChart3,
      title: "Растущий рынок",
      description: "Объем iGaming + GameFi превышает $200B и продолжает расти"
    }
  ];

  const roadmap = [
    {
      quarter: "Q3 2025",
      status: "completed",
      items: ["Запуск MVP", "Интеграция SOL и TON", "Первые партнеры", "Запуск фарминга"]
    },
    {
      quarter: "Q4 2025",
      status: "current",
      items: ["Telegram Mini app", "50+ токенов", "Запуск Presale", "Первый сезонный Jetchip"]
    },
    {
      quarter: "Q1 2026",
      status: "upcoming",
      items: ["Jetchips 2.0", "NFT Rewards", "100+ партнеров", "Запуск цифрового магазина"]
    },
    {
      quarter: "Q2 2026",
      status: "upcoming",
      items: ["Запуск Wingman AI", "Еще больше сезонных Jetchips", "Глобальная экспансия"]
    }
  ];

  return (
    <section id="investors" className="relative py-24 bg-gradient-to-b from-black via-cyan-950/10 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Roadmap */}
          <div>
            <h3 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">Дорожная карта</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmap.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                    phase.status === 'completed' 
                      ? 'from-green-950/40 to-green-900/30 border-green-500/30' 
                      : phase.status === 'current'
                      ? 'from-purple-950/40 to-purple-900/30 border-purple-500/50 ring-2 ring-purple-500/20'
                      : 'from-gray-900/40 to-gray-900/30 border-gray-700/30'
                  }`}
                >
                  {/* Status Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs mb-4 ${
                    phase.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : phase.status === 'current'
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {phase.status === 'completed' ? 'Выполнено' : phase.status === 'current' ? 'В процессе' : 'Планируется'}
                  </div>

                  {/* Quarter */}
                  <h4 className="text-xl mb-4 text-white">{phase.quarter}</h4>

                  {/* Items */}
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          phase.status === 'completed' ? 'text-green-400' : 'text-gray-500'
                        }`} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-purple-950/60 to-cyan-950/60 backdrop-blur-lg rounded-3xl px-12 py-8 border border-purple-500/30">
              <h3 className="text-2xl text-white">Заинтересованы в партнерстве?</h3>
              <p className="text-gray-400 max-w-md">Свяжитесь с нами для получения подробной информации и презентации</p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl text-white transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70">
                Связаться с командой
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
