const delay = (delayTimer) =>
  new Promise((resolve, reject) =>
    setTimeout(resolve, delayTimer))


export default delay
