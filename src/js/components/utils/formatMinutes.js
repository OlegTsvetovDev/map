const formatMinutes = minutes => {
  if (minutes > 9) return minutes
  return '' + '0' + minutes
}


export default formatMinutes
