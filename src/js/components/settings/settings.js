// для дева или прома
const isDev = true

const renderTimeout = 120000 // время ререндера всего транспорта
const steps = {
  cap: 10,
  animationTime: 1000,
  minCoordBetween: 0.00005
}


// для прома
let requestsServer = '/transport-api/'
let imgRoute = '/media/static/'

if (isDev) {
  requestsServer = 'http://212.19.15.161/'
  imgRoute = ''
}

const transportRoutesRequests = {
  initcity: `${requestsServer}initcity?srv=hab&lang=ru`, // координаты и другие данные по городу
  inforoutezones: `${requestsServer}inforoutezones?srv=hab&lang=ru`, // маршруты по городу
  inforoutes: `${requestsServer}inforoutes`, // получить маршруты и типы транспорта
  infotransporttypes: `${requestsServer}infotransporttypes?srv=hab`, // виды транспорта по городу

  // inforoutestates: `${requestsServer}inforoutestates?vt=b%3Btb%3Btr%3B&srv=hab`, // получение списка всех активных тс
  inforoutestates: `${requestsServer}inforoutestates`, // получение списка всех активных тс
  // пример параметров запроса:
  // http://212.19.15.161/inforoutestates?vt=b%3Btb%3Btr%3B&srv=hab
  // &time=${lastDateRequest}

  inroutedetails: `${requestsServer}inforoutedetails`, // детали маршрута
  // пример парамеров запроса:
  // http://212.19.15.161/inforoutedetails?route=34&vt=b&date=2022-06-15&srv=hab&lang=ru&timezone=0

  infonextstops: `${requestsServer}infonextstops`, // список остановок по id
  // пример параметров запроса:
  // http://212.19.15.161/infonextstops?objectId=f8044a50-2435-4033-b769-37df348dc35b&srv=hab&lang=ru
  // 875d63df-c93f-4c92-96b6-b1c59beb8cb4
  // c03faf63-0a76-47b2-a3cb-68fe6ff0edbe - 10 маршрут
}


export { isDev, transportRoutesRequests, renderTimeout, imgRoute, steps }
