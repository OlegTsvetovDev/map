import { imgRoute } from '../settings/settings.js'


// функция возврата маршрута до иконки транспорта
const chooseTransportImg = (vt) => {
  if (vt === 'tb') return `${imgRoute}images/trolleybus.svg`
  if (vt === 'tr') return `${imgRoute}images/tram.svg`
  return `${imgRoute}images/bus.svg`
}


export default chooseTransportImg
