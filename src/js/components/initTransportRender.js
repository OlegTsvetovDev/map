import { firstRender, clearCurrentInterval, setCurrentInterval } from './states/transportState.js'
import removeTransport from './render/removeTransport.js'


// инит модуля отрисовки транспорта
function initTransportRender(map) {
  // очистка интервала
  clearCurrentInterval()
  // очистка объектов транспорта на карте
  removeTransport(map)
  // первая отрисовка
  firstRender(map)
  // последующие отрисовки через интервал
  setCurrentInterval(map)
}


export default initTransportRender
