import { transportRoutesRequests } from '../settings/settings.js'


// функция получения детализированной информации по маршруту
// url должен содержать в себе полный набор параметров запроса
async function fetchTransportDetailedData(id) {
  const url = `${transportRoutesRequests.infonextstops}?objectId=${id}&srv=hab&lang=ru`

  // route=1%D0%A2%D0%A0
  // 3372b5c6-144f-4a95-b4bd-8b70eddf1777

  try {
    const response = await fetch(url)
    if (!response.ok) return console.log('not ok')
    if (response.ok) {
      const data = await response.json()    
      return data
    }
  } catch (e) {
    console.log(e)
  }

  console.log('no returned data')
}


export default fetchTransportDetailedData
