import iconTransportTemplate from '../templates/iconTransportTemplate.js'
import chooseTransportImg from '../utils/chooseTransportImg.js'
import { renderTimeout } from '../settings/settings.js'
import fetchTransportDetailedData from '../getService/fetchTransportDetailedData.js'
import balloonTransportTemplate from '../templates/balloonTransportTemplate.js'
import createTransportRoute from '../render/createTransportRoute.js'
import removePlacemark from './removePlacemark.js'
import initPlacemarkAnimation from './initPlacemarkAnimation.js'
import { applyPlacemarkToState, checkIsAccessible } from '../states/transportState.js'


// отрисовка отдельной метки и скрытие через renderTimeout мс
function renderPlacemark(id, lat, lon, route, vt, map, lowFloor, voiceNotify, infoTable) {
  // if (route !== '47') return
  // if (id !== 'ad6f1133-f5ac-406a-a82f-910cc0360163') return
  // console.log('lowFloor', lowFloor)
  // console.log('voiceNotify', voiceNotify)
  // console.log('infoTable', infoTable)
  // проверка на доступность транспортного средства
  const isAccessible = checkIsAccessible(lowFloor, voiceNotify, infoTable)
  // console.log('isAccessible', isAccessible)
  // console.log('====================')
  if (!isAccessible) return

  // создание placemark
  const placemarkCoords = [lat, lon]
  const placemarkOptions = {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: chooseTransportImg(vt),
            // Размеры метки.
            iconImageSize: [36, 36],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -18],
            // скрывать метку при открытии балуна
            hideIconOnBalloonOpen: false,
            // Заставляем балун открываться даже если в нем нет содержимого.
            openEmptyBalloon: true
        }
  const placemarkContent = {
            hintContent: `Маршрут ${route}`,
            // balloonContent: balloonTransportTemplate(id, route, vt),
            iconContent: iconTransportTemplate(route)
        }
  const placemark = new ymaps.Placemark(placemarkCoords, placemarkContent, placemarkOptions)

  // добавляем текущую метку в состояние
  applyPlacemarkToState(placemark)

  // добавляем анимацию к метке
  setTimeout(() => initPlacemarkAnimation(id, vt, placemark, placemarkCoords), 0)

  let transportRoute
  // Обрабатываем событие открытия балуна и маршрута на геообъекте:
  // начинаем загрузку данных, затем обновляем его содержимое.
  placemark.events.add('balloonopen', async () => {
      placemark.properties.set('balloonContent', '')

      const detailedData = await fetchTransportDetailedData(id)
      const nextStops = detailedData.nextStops

      console.log(id)
      placemark.properties.set('balloonContent',
        balloonTransportTemplate(route, vt, nextStops))

      // отрисовка маршрута транспорта
      const referencePoints = detailedData.routeWays[0]
      transportRoute = createTransportRoute(referencePoints)
      map.geoObjects.add(transportRoute)
  })

  // при закрытии балуна удаляется маршрут
  placemark.events.add('balloonclose', () => {
    map.geoObjects.remove(transportRoute)
  })

  // добавляем точку на карту и убираем через время рендера
  map.geoObjects.add(placemark)
  setTimeout(() => removePlacemark(placemark, map), renderTimeout)
}


export default renderPlacemark
