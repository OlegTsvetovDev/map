import { steps } from '../settings/settings.js'


// TODO: передавать не весь массив точек сразу,
// а только следующую точку на основании номера шага между 2 координат,
// длины шага, точки отсчета перемещения
// и перемещать placemark в эту точку

// высчитываем и возвращаем маршрут из координат между 2 точек
const calcCoordsBetween = (newCoords, prevCoords) => {
  // const newCoords = [coords[0] + 0.0001, coords[1] + 0.0001]
  if (newCoords === prevCoords) return newCoords
  let coordsBetween = [newCoords]

  const xStepsAmount = (newCoords[0] - prevCoords[0]) / steps.minimalStepBetween
  const yStepsAmount = (newCoords[1] - prevCoords[1]) / steps.minimalStepBetween
  let stepsAmount = (Math.abs(xStepsAmount) >= Math.abs(yStepsAmount))
                      ? Math.abs(xStepsAmount)
                      : Math.abs(yStepsAmount)


  for (let i = 1; i < stepsAmount; i++) {
    const xCoords = newCoords[0] + steps.minimalStepBetween * i
    const yCoords = newCoords[1] + steps.minimalStepBetween * i

    coordsBetween.push([xCoords, yCoords])
  }

  // console.log('stepsAmount ', stepsAmount)
  // console.log('coordsBetween ', coordsBetween)



  // coordsBetween = [newCoords]
  return coordsBetween
}


export default calcCoordsBetween
