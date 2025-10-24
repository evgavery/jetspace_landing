import { Menu, X, Wallet } from "./icons";
import { useState } from "react";
import logoImage from "figma:asset/803965e4d576309ee559fb6522154a04a0e06539.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "О платформе", id: "about" },
    { label: "Аудитория", id: "audience" },
    { label: "Как работает", id: "how-it-works" },
    { label: "Преимущества", id: "benefits" },
    { label: "Инвесторам", id: "investors" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="JetSpace" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-purple-950/40 backdrop-blur-sm border border-purple-500/30 rounded-md p-1">
              <button className="px-3 py-1 rounded bg-gradient-to-r from-purple-600 to-cyan-600 text-sm transition-all">
                RU
              </button>
              <button className="px-3 py-1 rounded text-gray-400 hover:text-gray-200 text-sm transition-all">
                EN
              </button>
            </div>

            {/* CTA Buttons */}
            <button className="inline-flex items-center justify-center px-4 py-2 border border-purple-500/50 hover:border-cyan-500/50 rounded-md transition-all text-gray-200 hover:text-white">
              Войти
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-md transition-all">
              <Wallet className="w-4 h-4 mr-2" />
              Подключить кошелек
            </button>
          </div>

          {/* Mobile Language Switcher & Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-1 bg-purple-950/40 backdrop-blur-sm border border-purple-500/30 rounded-md p-1">
              <button className="px-2 py-1 rounded bg-gradient-to-r from-purple-600 to-cyan-600 text-xs transition-all">
                RU
              </button>
              <button className="px-2 py-1 rounded text-gray-400 hover:text-gray-200 text-xs transition-all">
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4">
              <button className="inline-flex items-center justify-center w-full px-4 py-2 border border-purple-500/50 hover:border-cyan-500/50 rounded-md transition-all text-gray-200 hover:text-white">
                Войти
              </button>
              <button className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-md transition-all">
                <Wallet className="w-4 h-4 mr-2" />
                Подключить кошелек
              </button>
              <div className="border-t border-purple-500/20 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-left block w-full py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
