import { imgRoute } from '../settings/settings.js'


// функция возврата маршрута до иконки транспорта с картинкой
const chooseTransportImgWithIcon = (vt) => {
  if (vt === 'tb') return `${imgRoute}images/trolleybus_icon.svg`
  if (vt === 'tr') return `${imgRoute}images/tram_icon.svg`
  return `${imgRoute}images/bus_icon.svg`
}


export default chooseTransportImgWithIcon
