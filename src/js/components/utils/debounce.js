const debounce = (func, delay) => {
  let timerId

  return (...args) => {
    clearTimeout(timerId)
    console.log('debounce')

    timerId = setTimeout(() => func(args), delay)
  }
}


// not tested
const throttle = (func, delay) => {
  let shouldWait = false
  let waitingArgs

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shoudlWait = false
      return
    }

    func(...waitingArgs)
    waitingArgs = null
    setTimeout(timeoutFunc, delay)
  }

  return (...args) => {
    if (shoudlWait) {
      waitingArgs = args
      return
    }

    func(...args)
    shouldWait = true

    setTimeout(timeoutFunc, delay)
  }
}


export { throttle }
export default debounce
