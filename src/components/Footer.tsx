import { Github, Twitter, MessageCircle, Mail } from "./icons";

export function Footer() {
  const footerLinks = {
    product: [
      { label: "О платформе", href: "#about" },
      { label: "Как работает", href: "#how-it-works" },
      { label: "Партнеры", href: "#partners" },
      { label: "Токены", href: "#tokens" },
    ],
    resources: [
      { label: "Документация", href: "#docs" },
      { label: "API", href: "#api" },
      { label: "Блог", href: "#blog" },
      { label: "FAQ", href: "#faq" },
    ],
    company: [
      { label: "О нас", href: "#about-us" },
      { label: "Карьера", href: "#careers" },
      { label: "Контакты", href: "#contact" },
      { label: "Пресс-кит", href: "#press" },
    ],
    legal: [
      { label: "Условия использования", href: "#terms" },
      {
        label: "Политика конфиденциальности",
        href: "#privacy",
      },
      { label: "Cookies", href: "#cookies" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Telegram" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-purple-950/20 to-black border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🗑️</span>
                </div>
                <span className="text-xl bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  TokenTrash
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Превращаем неликвидные токены в реальную ценность через партнерскую сеть IGaming и GameFi проектов
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white mb-4">Продукт</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Ресурсы</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Компания</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">
                Правовая информация
              </h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-purple-950/40 to-cyan-950/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl mb-2 text-white">
                  Будь в курсе новостей
                </h3>
                <p className="text-gray-400">
                  Подпишись на рассылку и получай эксклюзивные
                  бонусы
                </p>
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-auto gap-2">
                <input
                  type="email"
                  placeholder="Твой email"
                  className="flex-1 md:w-64 px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-lg text-white whitespace-nowrap transition-all duration-300">
                  Подписаться
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <p>© 2025 TokenTrash. Все права защищены.</p>
              <div className="flex items-center space-x-6">
                <a
                  href="#terms"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Условия
                </a>
                <a
                  href="#privacy"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Конфиденциальность
                </a>
                <a
                  href="#cookies"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}