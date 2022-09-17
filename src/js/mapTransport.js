import initTransportRender from './components/initTransportRender.js'
import initTransportFilters from './components/filters/initTransportFilters.js'
import { isDev, renderTimeout } from './components/settings/settings.js'


// для дева
const initDevelopment = () => {
  ymaps.ready(() => {
      const map = new ymaps.Map('map', {
          center: [48.48, 135.07],
          zoom: 12
      })
      map.behaviors.disable('scrollZoom')

      // после загрузки карты, инициализируем логику модуля наложения транспорта
      // инит модуля отрисовки транспорта
      initTransportRender(map)

      // инит модуля фильтрации объектов транспорта
      initTransportFilters(document, map)
  })

  // замена класса при клике по быстрому фильтру для визуальной отметки
  window.onload = function() {
    const fastFilters = document.querySelectorAll('.item input[type=checkbox]')
    fastFilters.forEach(fastFilter => {
      fastFilter.addEventListener('input', e => {
        let $this = e.target
        if (!$this.classList.contains('.item')) {
          $this = $this.closest('.item')
        }
        $this.classList.toggle('item_active')
      })
    })
  }
}

// для прома
const initProduction = () => {
  initTransportRender(map)
  initTransportFilters(document, map)
}

// разные иниты по настройкам
(isDev) ? initDevelopment() : initProduction()
