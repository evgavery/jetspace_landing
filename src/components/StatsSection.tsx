import { Users, DollarSign, Link2, Coins } from "./icons";
import { useEffect, useState } from "react";

export function StatsSection() {
  const [activeUsers, setActiveUsers] = useState(9743);
  const [totalValue, setTotalValue] = useState(1987654);

  // Animated counters
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
      setTotalValue(prev => prev + Math.floor(Math.random() * 1000));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Users,
      value: activeUsers.toLocaleString(),
      label: "Активных пользователей",
      color: "purple"
    },
    {
      icon: DollarSign,
      value: `$${(totalValue / 1000).toFixed(0)}K`,
      label: "Обработано токенов",
      color: "cyan"
    },
    {
      icon: Link2,
      value: "52",
      label: "Партнерских интеграций",
      color: "pink"
    },
    {
      icon: Coins,
      value: "23",
      label: "Поддерживаемых токенов",
      color: "purple"
    }
  ];

  return (
    <section id="stats" className="relative py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Присоединяйся к тысячам пользователей
            </h2>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-purple-950/40 to-cyan-950/40 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 text-center overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300"></div>
                
                {/* Icon */}
                <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-3 relative z-10" />
                
                {/* Value */}
                <div className="text-2xl md:text-3xl mb-2 text-white relative z-10 tabular-nums">
                  {stat.value}
                </div>
                
                {/* Label */}
                <p className="text-sm text-gray-400 relative z-10">{stat.label}</p>

                {/* Live Indicator */}
                {index < 2 && (
                  <div className="absolute top-3 right-3 flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
