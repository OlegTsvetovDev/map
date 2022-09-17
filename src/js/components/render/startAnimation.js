import { steps } from '../settings/settings.js'
import calcNextCoordBetween from '../utils/calcNextCoordBetween.js'
import delay from '../utils/delay.js'
import calcTimeBetween from '../utils/calcTimeBetween.js'


// функция пошаговой анимации по координатам между 2 точек, с учетом ориентировочной скорости транспорта
const startAnimation = (placemark, currCoords, nextCoords, stepBetween, switchNextCoords) => {
  // если координаты не заданы, то нечего анимировать
  if (!currCoords?.location || !nextCoords?.location) return


  const time = calcTimeBetween(currCoords.time, nextCoords.time)
  const newCoordBetween = calcNextCoordBetween(currCoords.location, nextCoords.location, stepBetween, time)

  // проверка координат на необходимость переключения на следующие
  const checkNextCoordsSwitch = () => {
    const distanceX = Math.abs(nextCoords.location[0] - newCoordBetween[0])
    const distanceY = Math.abs(nextCoords.location[1] - newCoordBetween[1])

    if (distanceX < steps.minCoordBetween ||
        distanceY < steps.minCoordBetween) return true
    return false
  }

  if (checkNextCoordsSwitch()) {
    switchNextCoords()
    return
  }

  // начало анимации через задержку
  delay(steps.animationTime)
    .then(() => {
      // console.log('animation started')
      // console.log(newCoordBetween)
      setTimeout(() => {
        // console.log(newCoordBetween)
        placemark.geometry.setCoordinates(newCoordBetween)
      }, 0)
      // console.log(placemark.geometry.getCoordinates())
      stepBetween++
      // console.log(stepBetween)
      // console.log('===============')
    })
    .then(() => {
      startAnimation(placemark, currCoords, nextCoords, stepBetween, switchNextCoords)
    })
}


export default startAnimation
