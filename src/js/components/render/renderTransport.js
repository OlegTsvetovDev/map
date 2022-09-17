import renderPlacemark from './renderPlacemark.js'


// отрисовка всего транспорта, полученного из запроса
function renderTransport(data, map) {
  const { states } = data

  states.map(state => {
    const { id, lat, lon, route, vt, lowFloor, voiceNotify, infoTable } = state

    // если транспорт не относится к доступному, то не рендерим
    // if (!lowFloor && !voiceNotify && !infoTable) return

    renderPlacemark(id, lat, lon, route, vt, map, lowFloor, voiceNotify, infoTable)
  })
}


export default renderTransport
