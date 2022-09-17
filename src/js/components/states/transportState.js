import fetchTransportData from '../getService/fetchTransportData.js'
import { transportRoutesRequests } from '../settings/settings.js'
import renderTransport from '../render/renderTransport.js'
import { renderTimeout, isDev } from '../settings/settings.js'


// состояние текущего интервала по рендеру
let currentInterval
// состояние массива транспорта на карте
let currentTransportArray = []
// состояние фильтра для отправки запроса
let currentTransportTypes = 'b%3Btb%3Btr%3B'
let currentTransportAccessibility = []
// 'lowFloor', 'voiceNotify', 'infoTable'


const firstRender = (map) => {
  setTimeout(() => {
    const url = `${transportRoutesRequests.inforoutestates}?vt=${currentTransportTypes}&srv=hab`
    fetchTransportData(url, renderTransport, map)
  }, 0)
}

const clearCurrentInterval = () => clearInterval(currentInterval)

const setCurrentInterval = (map) => {
  currentInterval = setInterval(() => {
    const url = `${transportRoutesRequests.inforoutestates}?vt=${getCurrentTranportTypes()}&srv=hab`
    fetchTransportData(url, renderTransport, map)
  },
  renderTimeout)
}

// получить текущий список транспорта
const getCurrentTransportArray = () => currentTransportArray

// установить текущий список ранспорта
const setCurrentTransportArray = (array) => currentTransportArray = array

// добавить placemark в состояние
const applyPlacemarkToState = (placemark) => currentTransportArray.push(placemark)

// получить текущие отфильтрованные типы транспорта
const getCurrentTranportTypes = () => currentTransportTypes

// установить новые типы фильтров для запроса
const setCurrentTransportTypes = (types) => {
  let fetchTransportTypeParam = ''
  const divider = '%3B'

  if (types.length === 0) return currentTransportTypes = ''

  types.forEach((type, i) => {
    if (type === 'b' && i === 0) return fetchTransportTypeParam += `b`
    if (type === 'b') return fetchTransportTypeParam += `${divider}b`
    if (type === 'tr' && i === 0) return fetchTransportTypeParam += `${divider}tr`
    if (type === 'tr') return fetchTransportTypeParam += `${divider}tr`
    if (type === 'tb' && i === 0) return fetchTransportTypeParam += `${divider}tb`
    if (type === 'tb') return fetchTransportTypeParam += `${divider}tb`
  })

  currentTransportTypes = fetchTransportTypeParam
}

// получить статус чек-боксов доступности транспорта
const getCurrentTransportAccessibilities = () => currentTransportAccessibility

// установить статус чек-боксов доступности транспорта
const setCurrentTransportAccessibilities = (items) => currentTransportAccessibility = items

const checkIsAccessible = (lowFloor, voiceNotify, infoTable) => {
  const accessible = getCurrentTransportAccessibilities()

  if (lowFloor && accessible.includes('lowFloor')) return true
  if (voiceNotify && accessible.includes('voiceNotify')) return true
  if (infoTable && accessible.includes('infoTable')) return true

  return false
}

export {
  firstRender,
  clearCurrentInterval,
  applyPlacemarkToState,
  getCurrentTransportArray,
  setCurrentTransportArray,
  setCurrentInterval,
  getCurrentTranportTypes,
  setCurrentTransportTypes,
  getCurrentTransportAccessibilities,
  setCurrentTransportAccessibilities,
  checkIsAccessible
}
