# Необходимое ПО
1. Node 14
2. NPM 7.15.1
3. Yarn 1.22.10
4. Git LFS (для загрузки видео на гит, также требуется на сервере)

# Первичная настройка
1. `yarn` или `yarn install` для установки зависимостей

# Разработка
1. `yarn start`

# Сборка для деплоя
1. `yarn build` - всё появится в папке build
2. Сконфигурировать .env.local (общий), .env.development.local (для development) или .env.production.local (для production)
  - `REACT_APP_GTM_SCRIPT` - GTM скрипт
  - `REACT_APP_GTM_NOSCRIPT` - GTM noscript
  - `REACT_APP_BASE` - Api путь без роута (например `https://learnup.pro`)

