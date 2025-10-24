# Copywriting E-courses - Платформа курсов копирайтинга

Этот проект представляет собой React-приложение для онлайн платформы курсов копирайтинга от Goldleaf Goods LLC.

## Информация о компании

- **Название**: Goldleaf Goods LLC
- **Владелец**: Renita Godbold
- **Адрес**: 1350 Tumbleweed Way, Sacramento, CA, USA, 95834
- **Телефон**: +1 (419) 515-4912
- **Сайт**: copywriting-ecourses.com
- **Email**: support@copywriting-ecourses.com

## Технологии

- React 19.1.1
- TypeScript
- Styled Components
- React Router DOM
- React Icons

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите приложение в режиме разработки:
```bash
npm start
```

Приложение откроется в браузере по адресу [http://localhost:3007](http://localhost:3007).

## Структура проекта

- `src/components/` - React компоненты
- `src/pages/` - Страницы приложения
- `src/styles/` - Стили для компонентов
- `src/hooks/` - Пользовательские хуки
- `src/contexts/` - React контексты
- `src/services/` - API сервисы
- `src/config/` - Конфигурационные файлы

## Переменные окружения

Основные переменные настроены в файле `.env`:
- API_BASE_URL: http://localhost:3007
- Контактная информация компании
- Информация о бренде

## Особенности

- Адаптивный дизайн
- Система корзины покупок
- Аутентификация пользователей
- Мультивалютность
- SEO оптимизация
- Progressive Web App (PWA)

## Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут в папке `build/`.