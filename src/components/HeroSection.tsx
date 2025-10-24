import { Wallet, ChevronDown, Sparkles, Network, Users, DollarSign } from "./icons";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-950/50 via-black to-black pt-16">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent leading-tight relative"
            style={{
              fontFamily: "'Druk Wide', 'Impact', 'Arial Black', sans-serif",
              textShadow: '0 0 40px rgba(168, 85, 247, 0.4), 0 0 80px rgba(236, 72, 153, 0.3), 0 0 120px rgba(34, 211, 238, 0.2)',
            }}
          >
            Обменяй "мертвые" токены на реальные активы
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            На JetSpace ты можешь превратить забытые токены в реальные вознаграждения и бонусы во множестве партнерских проектах
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-lg px-8 py-6 rounded-md shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all">
              <Wallet className="w-5 h-5 mr-2" />
              Начать сейчас
            </button>
            <button className="inline-flex items-center justify-center border border-cyan-500/50 text-cyan-300 hover:bg-cyan-950/30 text-lg px-8 py-6 rounded-md transition-all">
              Узнать больше
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { value: "20+", label: "Токенов", icon: Sparkles, gradient: "from-purple-500 to-pink-500" },
              { value: "50+", label: "Партнеров", icon: Network, gradient: "from-pink-500 to-cyan-500" },
              { value: "10K+", label: "Пользователей", icon: Users, gradient: "from-cyan-500 to-purple-500" },
              { value: "$2M+", label: "Обработано", icon: DollarSign, gradient: "from-purple-500 to-cyan-500" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-xl bg-gradient-to-br from-purple-950/40 via-black/40 to-cyan-950/40 border border-purple-500/30 backdrop-blur-sm group hover:border-cyan-500/50 transition-all"
                  style={{
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.1), inset 0 0 20px rgba(168, 85, 247, 0.05)'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 30px rgba(34, 211, 238, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl md:text-4xl bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-300 mt-2">{stat.label}</div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
