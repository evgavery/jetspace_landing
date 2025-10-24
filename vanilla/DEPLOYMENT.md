# 🚀 Инструкция по деплою Vanilla версии

## ✅ Что готово

Vanilla версия полностью готова к использованию! Все файлы находятся в папке `vanilla/`.

### Созданные файлы:

```
vanilla/
├── index.html (51KB)          # Основной HTML
├── styles.css (34KB)          # CSS для разработки
├── styles.min.css (29KB)      # Минифицированный CSS
├── script.js (23KB)           # JavaScript для разработки
├── script.min.js (18KB)       # Минифицированный JS
├── assets/
│   └── logo.png               # Логотип
├── README.md                  # Документация
└── DEPLOYMENT.md              # Этот файл
```

**Общий размер (production)**: ~98KB (без сжатия), ~25KB (с gzip)

## 🎯 Быстрая проверка локально

### Вариант 1: Прямое открытие
```bash
open vanilla/index.html
```

### Вариант 2: Локальный сервер
```bash
cd vanilla
python3 -m http.server 8000
# Откройте http://localhost:8000
```

### Вариант 3: VS Code Live Server
Установите расширение "Live Server" и откройте `index.html`

## 📦 Деплой на хостинг

### GitHub Pages

1. **Создайте репозиторий на GitHub**
```bash
git init
git add vanilla/
git commit -m "Add vanilla landing"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Настройте GitHub Pages**
- Перейдите в Settings → Pages
- Source: Deploy from a branch
- Branch: main, Folder: /vanilla
- Сохраните

Сайт будет доступен по адресу: `https://username.github.io/repo-name/`

### Netlify

1. **Через веб-интерфейс**:
   - Перейдите на https://app.netlify.com
   - Drag & Drop папку `vanilla/`
   - Готово!

2. **Через CLI**:
```bash
npm install -g netlify-cli
cd vanilla
netlify deploy --prod
```

### Vercel

```bash
npm install -g vercel
cd vanilla
vercel --prod
```

### Традиционный хостинг (FTP/cPanel)

1. Подключитесь к хостингу через FTP (FileZilla, Cyberduck)
2. Загрузите все файлы из папки `vanilla/` в корень сайта или подпапку
3. Убедитесь, что `index.html` доступен в корне
4. Готово!

## ⚙️ Настройка перед деплоем

### 1. Проверьте ссылки CTA

В `script.js` найдите и измените URL:

```javascript
// Строка ~488
window.location.href = 'https://google.com'; // Замените на ваш URL
```

### 2. Обновите мета-теги

В `index.html`:

```html
<meta name="description" content="Ваше описание">
<title>Ваш заголовок</title>
```

### 3. Добавьте аналитику (опционально)

Перед закрывающим `</body>` в `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 4. Оптимизация изображений

Если нужно еще больше ускорить загрузку:

```bash
# Сожмите logo.png
pngquant vanilla/assets/logo.png --output vanilla/assets/logo.png --force
```

## 🔍 SEO оптимизация

### Добавьте в `<head>`:

```html
<!-- Open Graph -->
<meta property="og:title" content="JetSpace - Монетизация неликвидных токенов">
<meta property="og:description" content="Превращай мертвые токены в реальную ценность">
<meta property="og:image" content="https://your-domain.com/assets/logo.png">
<meta property="og:url" content="https://your-domain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="JetSpace">
<meta name="twitter:description" content="Монетизация неликвидных токенов">
<meta name="twitter:image" content="https://your-domain.com/assets/logo.png">

<!-- Favicon -->
<link rel="icon" type="image/png" href="assets/logo.png">
```

### Создайте sitemap.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2025-10-24</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Создайте robots.txt:

```
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

## 🌐 Настройка домена

После деплоя на хостинг:

1. **DNS настройки**
   - A record: `@` → IP вашего сервера
   - CNAME: `www` → `your-domain.com`

2. **SSL сертификат**
   - Netlify/Vercel: автоматически
   - GitHub Pages: автоматически
   - Традиционный хостинг: Let's Encrypt через cPanel

## 📊 Проверка после деплоя

### Чеклист:

- [ ] Сайт открывается по URL
- [ ] Переключение языков RU/EN работает
- [ ] Мобильное меню открывается
- [ ] Smooth scroll между секциями
- [ ] Live счетчики обновляются
- [ ] Все изображения загружаются
- [ ] Кнопки CTA работают
- [ ] Форма подписки реагирует

### Инструменты для проверки:

```bash
# Проверка скорости
https://pagespeed.web.dev/

# Проверка мобильной версии
https://search.google.com/test/mobile-friendly

# Проверка SEO
https://www.seobility.net/en/seocheck/
```

## 🔧 Обновление сайта

1. Внесите изменения в файлы
2. Если меняли CSS/JS - пересоздайте минифицированные версии:

```bash
# CSS
cat styles.css | sed 's/\/\*.*\*\///g' | tr -s ' ' | tr -d '\n' > styles.min.css

# JS
cat script.js | sed 's/\/\/.*$//g' | tr -s ' ' | tr -d '\n' > script.min.js
```

3. Загрузите обновленные файлы на хостинг
4. Очистите кэш браузера (Ctrl+Shift+R / Cmd+Shift+R)

## 🎨 Дополнительные улучшения

### Добавить PWA (Progressive Web App):

Создайте `manifest.json`:

```json
{
  "name": "JetSpace",
  "short_name": "JetSpace",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#a855f7",
  "icons": [
    {
      "src": "assets/logo.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

Добавьте в `<head>`:
```html
<link rel="manifest" href="manifest.json">
```

### Добавить Service Worker для оффлайн работы:

Создайте `sw.js`:

```javascript
const CACHE_NAME = 'jetspace-v1';
const urlsToCache = [
  '/',
  '/styles.min.css',
  '/script.min.js',
  '/assets/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

Зарегистрируйте в `script.js`:

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## 📞 Поддержка

При возникновении проблем проверьте:

1. Консоль браузера (F12) на ошибки
2. Правильность путей к файлам
3. CORS настройки (если используете внешние ресурсы)
4. SSL сертификат активен

---

**Готово к деплою! 🚀**

Vanilla версия оптимизирована и готова к production использованию.

