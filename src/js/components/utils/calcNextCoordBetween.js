import { steps } from '../settings/settings.js'


// раcсчет следующей координаты между 2 заданными
const calcNextCoordBetween = (currCoords, nextCoords, stepBetween, time) => {
  // если координаты совпадают, то возвращаем их
  if (currCoords === nextCoords) return currCoords

  const t = stepBetween / time
  const x1 = currCoords[0]
  const y1 = currCoords[1]
  const x2 = nextCoords[0]
  const y2 = nextCoords[1]

  const nextStepX = x2 * t + x1 * (1 - t)
  const nextStepY = y2 * t + y1 * (1 - t)

  return [nextStepX, nextStepY]
}



export default calcNextCoordBetween
