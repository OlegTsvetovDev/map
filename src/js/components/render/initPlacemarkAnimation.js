import fetchTransportDetailedData from '../getService/fetchTransportDetailedData.js'
import animatePlacemark from './animatePlacemark.js'


const initPlacemarkAnimation = async (id, vt, placemark, placemarkCoords) => {

  const detailedData = await fetchTransportDetailedData(id)
  const nextStops = detailedData.nextStops

  // добавить время в массив?
  const nextWays = nextStops.map(stop => {
    return {
      location: stop.zones[0].location,
      time: stop.time
    }
    // console.log(stop.time)
    // return stop.zones[0].location
  })

  // вставляем в полученный маршрут текущие координаты из nextWays
  // nextWays.unshift(placemarkCoords)

  const initialCoords = {
    location: placemarkCoords,
    time: new Date()
  }

  nextWays.unshift(initialCoords)

  // console.log('got data')

  // начинаем анимацию у placemark по маршруту с внутреннего шага (step) = 0
  animatePlacemark(placemark, nextWays, 0)

}


export default initPlacemarkAnimation
