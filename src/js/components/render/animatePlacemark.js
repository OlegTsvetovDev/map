import { steps } from '../settings/settings.js'
import startAnimation from './startAnimation.js'


// общий алгоритм анимации передвижения по точкам, полученным из запроса
// step - шаг из полученного массива координат с энд-поинта
const animatePlacemark = (placemark, nextWays, step) => {
  // номер шага для пошаговой анимации между 2 точек
  let stepBetween = 0

  let currCoords = nextWays[step]
  // если следующих координат нет, то стоим на месте
  let nextCoords = nextWays[step + 1] || nextWays[step]

  const switchNextCoords = () => {
    // переключаем координаты на следующие
    step++
    currCoords = nextWays[step]
    nextCoords = nextWays[step + 1] || nextWays[step]

    // перезапускаем анимацию
    startAnimation(placemark, currCoords, nextCoords, stepBetween, switchNextCoords)
  }

  // console.log('starting animation')
  startAnimation(placemark, currCoords, nextCoords, stepBetween, switchNextCoords)

}


export default animatePlacemark
