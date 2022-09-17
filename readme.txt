npm i - для установки
npm run dev - для запуска в режиме разработки
npm run build --build - для продакшн сборки

Компонент устанавливается в файл mapController.js после инита ymaps.
Для продакшн сборки необходимо:
- в /src/js/components/settings/settings.js
  - установить const isDev в значение false
  - запустить продакшн сборку (npm run build --build)
  - залить mapTransport.js из /dist/js/ в mapController.js
Для запуска в режиме разработки необходимо:
- в src/js/mapTransport.js
  - установить const isDev в значение true
  - запустить в режиме разработки (npm run dev)
