import { getCurrentTranportTypes, setCurrentTransportArray } from '../states/transportState.js'
import debounce from '../utils/debounce.js'


let lastDateRequest = (new Date()).getTime()
console.log(lastDateRequest)
// функция получения всех маршрутов на карте
async function fetchTransportData(url, cb, map) {
  // если состояние фильтров транспорта - пустая строка, то не производим запрос
  const types = getCurrentTranportTypes()
  if (types === '') return

  setCurrentTransportArray([])

  try {
    const response = await fetch(`${url}&time=${lastDateRequest}`)
    if (!response.ok) return console.log('not ok')
    if (response.ok) {
      const data = await response.json()
      // connect error при debounce
      lastDateRequest = data.time
      if (cb) cb(data, map)
    }


    // константа для дева
    // const data = {"time":"2022-06-15T23:04:35","states":[{"id":"45a73f0d-ba2b-407a-8a16-a981ce98f88e","model":"\u041a\u0422\u0417-71-623","stateNum":"6122","garageNum":"6122","route":"1\u0422","vt":"tr","letter":"A","lat":48.4318680861589,"lon":135.111799851737,"course":335,"lowFloor":true,"voiceNotify":false,"infoTable":false,"prevWays":null},{"id":"17dbc22d-b3c6-434a-8308-908d7936554b","model":"\u041a\u0422\u0417-71-623","stateNum":"6129","garageNum":"6129","route":"1\u0422","vt":"tr","letter":"B","lat":48.4340722509569,"lon":135.112283883549,"course":187,"lowFloor":true,"voiceNotify":false,"infoTable":false,"prevWays":null},{"id":"fe25c42c-3804-480c-9146-64e3e2df2f58","model":"321 \u0410\u041a\u0421\u041c","stateNum":"7245","garageNum":"7245","route":"1\u0422\u0420","vt":"tb","letter":"A","lat":48.497448269198,"lon":135.099843554463,"course":59,"lowFloor":false,"voiceNotify":false,"infoTable":false,"prevWays":null},{"id":"3372b5c6-144f-4a95-b4bd-8b70eddf1777","model":"321 \u0410\u041a\u0421\u041c","stateNum":"7247","garageNum":"7247","route":"1\u0422\u0420","vt":"tb","letter":"A","lat":48.5106058721568,"lon":135.145578489308,"course":39,"lowFloor":true,"voiceNotify":false,"infoTable":false,"prevWays":null},{"id":"36efe209-1809-4499-8461-482098311af5","model":"321 \u0410\u041a\u0421\u041c","stateNum":"7248","garageNum":"7248","route":"1\u0422\u0420","vt":"tb","letter":"B","lat":48.4876477251592,"lon":135.082095249029,"course":221,"lowFloor":true,"voiceNotify":false,"infoTable":false,"prevWays":null},{"id":"f332f663-b28e-4d84-9b9c-6d4ebbac6100","model":"321 \u0410\u041a\u0421\u041c","stateNum":"7250","garageNum":"7250","route":"1\u0422\u0420","vt":"tb","letter":"A","lat":48.5051796326933,"lon":135.116461036488,"course":79,"lowFloor":true,"voiceNotify":false,"infoTable":false,"prevWays":null},{"id":"8b643a95-5fc2-4861-81f6-1be47c9dd326","model":"\u0411\u0422\u0417 5276-04","stateNum":"7220","garageNum":"7220","route":"1\u0422\u0420","vt":"tb","letter":"B","lat":48.5139093051442,"lon":135.150385654869,"course":222,"lowFloor":false,"voiceNotify":false,"infoTable":false,"prevWays":null},{"id":"14b5eb6d-4cf0-404d-8e1f-82f9fe716691","model":"\u0421\u0422-6217-0000010-01","stateNum":"7273","garageNum":"7273","route":"1\u0422\u0420","vt":"tb","letter":"B","lat":48.4744653857844,"lon":135.054215807233,"course":218,"lowFloor":false,"voiceNotify":false,"infoTable":false,"prevWays":null}]}
    // if (cb) cb(data, map)
  } catch (e) {
    console.log('Ошибка: ', e)
  }
}

// const fetchTransportData = debounce((url, cb, map) => getTransportData(url, cb, map), 1000)


export default fetchTransportData
