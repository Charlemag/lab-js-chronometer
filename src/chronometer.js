class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback) {
        printTimeCallback()
      }
    }, 1000);
    
  }

  getMinutes() {
  let numMin = this.currentTime / 60
  
  return Math.floor(numMin)
}

  getSeconds() {
  let numSec = this.currentTime % 60
  
    return Math.floor(numSec)

  }

  computeTwoDigitNumber(value) {
  if(value < 10) {
    return `0${value}`
  } else {
    return `${value}`
  }

  }

  stop() {

    clearInterval(this.intervalId);

  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
      return `${minutes}:${seconds}`
  }
}
