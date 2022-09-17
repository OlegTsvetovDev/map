function createTransportRoute(referencePoints) {
  const multiRoute = new ymaps.multiRouter.MultiRoute(
    {
      // точки для построения маршрута
      referencePoints: referencePoints,
    },
    {
      // Внешний вид путевых точек.
      // wayPointStartIconColor: "#333",
      // wayPointStartIconFillColor: "#B3B3B3",
      // Задаем собственную картинку для последней путевой точки.
      // wayPointFinishIconLayout: "",
      // wayPointFinishIconImageHref: "images/sokolniki.png",
      // wayPointFinishIconImageSize: [0, 0],
      // wayPointFinishIconImageOffset: [0, 0],
      // Позволяет скрыть иконки путевых точек маршрута.
      wayPointVisible: false,

      // Внешний вид транзитных точек.
      // viaPointIconRadius: 7,
      // viaPointIconFillColor: "#000088",
      // viaPointActiveIconFillColor: "#E63E92",
      // Транзитные точки можно перетаскивать, при этом
      // маршрут будет перестраиваться.
      // viaPointDraggable: true,
      // Позволяет скрыть иконки транзитных точек маршрута.
      // viaPointVisible:false,

      // Внешний вид точечных маркеров под путевыми точками.
      // pinIconFillColor: "#000088",
      // pinActiveIconFillColor: "#B3B3B3",
      // Позволяет скрыть точечные маркеры путевых точек.
      pinVisible: false,

      // Внешний вид линии маршрута.
      // routeStrokeWidth: 2,
      // routeStrokeColor: "#000088",
      routeActiveStrokeWidth: 6,
      routeActiveStrokeColor: "#000088",

      // Внешний вид линии пешеходного маршрута.
      // routeActivePedestrianSegmentStrokeStyle: "solid",
      // routeActivePedestrianSegmentStrokeColor: "#00CDCD",

      // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
      boundsAutoApply: true,
    }
  )

  return multiRoute
}


export default createTransportRoute
