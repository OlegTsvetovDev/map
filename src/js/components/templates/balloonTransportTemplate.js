import chooseTransportImgWithIcon from '../utils/chooseTransportImgWithIcon.js'
import formatMinutes from '../utils/formatMinutes.js'


// шаблон балуна транспорта для рендера
const balloonTransportTemplate = (route, vt, nextStops) => {
  let tbody = ''

  nextStops.map(stop => {
    const { time, zones } = stop
    const timeFromDate = new Date(time)
    const hours = timeFromDate.getHours()
    const minutes = timeFromDate.getMinutes()

    tbody += `
      <tr>
        <td>${zones[0].name}</td>
        <td>${hours}:${formatMinutes(minutes)}</td>
      </tr>
    `
  })

  return `
    <div class="transport__content">
      <div class="header__content">
        <img class="content__img" src=${chooseTransportImgWithIcon(vt)} alt=${route} />
        <h2 class="header__header">Маршрут: ${route}</h2>
      </div>
      <div class="routes__content">
        <table class="content__table">
          <thead>
            <tr>
              <th>Остановка</th>
              <th>Время прибытия</th>
            </tr>
          </thead>
          <tbody>
            ${tbody}
          </tbody>
        </table>
      </div>
    </div>
  `
}


export default balloonTransportTemplate
