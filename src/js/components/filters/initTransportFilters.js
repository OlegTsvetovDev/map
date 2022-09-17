import initTransportRender from '../initTransportRender.js'
import { clearCurrentInterval, setCurrentInterval, setCurrentTransportTypes, setCurrentTransportAccessibilities } from '../states/transportState.js'


// проверка выбранных чекбоксов в транспортном фильтре
// возвращает массив фильтра для запроса
const checkTransportFilter = (all, transport, bus, trolleybus, tram) => {
  let transportFilter = []

  if (transport.checked)
    return ['b', 'tr', 'tb']

  if (bus?.checked) transportFilter.push('b')
  if (tram?.checked) transportFilter.push('tr')
  if (trolleybus?.checked) transportFilter.push('tb')

  return transportFilter
}

const checkTransportAccessibilities = (voiceNotify, infoTable, lowFloor) => {
  // TODO: инпутов нет
  // проверяем на hasClass = item-active
  let transportAccessibilities = []

  if (voiceNotify.checked)
    transportAccessibilities.push('voiceNotify')

  if (infoTable.checked)
    transportAccessibilities.push('infoTable')

  if (lowFloor.checked)
    transportAccessibilities.push('lowFloor')

  return transportAccessibilities
}

const handleFilterChange = ({ all = null, transport = null, bus = null, trolleybus = null, tram = null, voiceNotify = null, infoTable = null, lowFloor = null, map }) => {
  const types = checkTransportFilter(all, transport, bus, trolleybus, tram)
  const accessibilities = checkTransportAccessibilities(voiceNotify, infoTable, lowFloor)

  // устанавливаем состояние типов в приложении
  // и по статусу рендерим транспорт на карте
  setCurrentTransportTypes(types)
  setCurrentTransportAccessibilities(accessibilities)
  initTransportRender(map)
}

// инит фильтров транспорта
function initTransportFilters(node, map) {
  const all = node.querySelector('#check-60')
  const bus = node.querySelector('#check-61')
  const trolleybus = node.querySelector('#check-62')
  const tram = node.querySelector('#check-63')
  const transport = node.querySelector('#fast-filter-6')
  const voiceNotify = node.querySelector('#fast-filter-1')
  const infoTable = node.querySelector('#fast-filter-2')
  const lowFloor = node.querySelector('#fast-filter-4')

  const props = { all, transport, bus, trolleybus, tram, voiceNotify, infoTable, lowFloor, map }

  all?.addEventListener('change', () => handleFilterChange(props))
  bus?.addEventListener('input', () => handleFilterChange(props))
  trolleybus?.addEventListener('input', () => handleFilterChange(props))
  tram?.addEventListener('input', () => handleFilterChange(props))
  transport?.addEventListener('input', () => handleFilterChange(props))
  voiceNotify?.addEventListener('input', () => handleFilterChange(props))
  infoTable?.addEventListener('input', () => handleFilterChange(props))
  lowFloor?.addEventListener('input', () => handleFilterChange(props))

}


export default initTransportFilters
