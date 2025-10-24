# JetSpace Landing

Лендинг для платформы JetSpace - монетизация неликвидных токенов.

## 🎯 Доступны две версии

### 1. Vanilla Version (рекомендуется для production)

**Расположение**: `vanilla/`

Чистый HTML/CSS/JavaScript без зависимостей. Быстрая, легкая, работает из коробки.

```bash
# Просто откройте файл в браузере
open vanilla/index.html

# Или запустите локальный сервер
cd vanilla
python3 -m http.server 8000
```

**Особенности:**
- ✅ Размер: ~20KB (gzip)
- ✅ Без зависимостей
- ✅ Мультиязычность (RU/EN)
- ✅ Адаптивный дизайн
- ✅ Smooth scroll & анимации

[Подробнее →](vanilla/README.md)

### 2. React Version (для расширения функционала)

**Расположение**: `src/`

React + Vite + TypeScript. Для будущих фич (Web3, личный кабинет, API).

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка
npm run build
```

**Используйте когда нужно:**
- Подключение Web3 кошельков
- Динамические данные с API
- Сложные интерактивные формы
- Роутинг между страницами

## 🚀 Быстрый старт

Для просмотра лендинга используйте **vanilla версию** - она готова к использованию.

## 📁 Структура проекта

```
JetSpace Landing/
├── vanilla/              # ⭐ Vanilla HTML/CSS/JS версия
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── assets/
│   └── README.md
├── src/                  # React версия
│   ├── components/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## 🌐 Деплой

### Vanilla версия
Загрузите содержимое папки `vanilla/` на любой статический хостинг:
- GitHub Pages
- Netlify
- Vercel
- Обычный хостинг (FTP)

### React версия
```bash
npm run build
# Загрузите папку build/ на хостинг
```

## 📝 Лицензия

© 2025 JetSpace / TokenTrash. Все права защищены.