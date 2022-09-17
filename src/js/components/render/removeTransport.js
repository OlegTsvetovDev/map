import removePlacemark from './removePlacemark.js'
import { getCurrentTransportArray } from '../states/transportState.js'


function removeTransport (map) {
  // console.log(map.geoObjects)
  const transport = getCurrentTransportArray()
  transport.forEach(placemark => removePlacemark(placemark, map))
  // console.log('transport removed')
}


export default removeTransport
