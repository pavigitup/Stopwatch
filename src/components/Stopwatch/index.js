import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {Timer: '00:00', isRunning: false, seconds: 0}

  startButtonClicked = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      // Start the timer if it's not already running
      this.intervalId = setInterval(this.updateTimer, 1000)
      this.setState({isRunning: true})
    }
  }

  stopButton = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false})
  }

  resetButton = () => {
    clearInterval(this.intervalId)
    this.setState({Timer: '00:00'})
    this.setState({isRunning: false, seconds: 0})
  }

  updateTimer = () => {
    // Update the timer every second
    const {seconds} = this.state
    const newSeconds = seconds + 1
    const minutes = Math.floor(newSeconds / 60)
    const remainingSeconds = newSeconds % 60
    const formattedTime = `${String(
      minutes < 10 ? `0${minutes}` : minutes,
    )}:${String(
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds,
    )}`

    this.setState({Timer: formattedTime, seconds: newSeconds})
  }

  render() {
    const {Timer} = this.state
    return (
      <div className="timer-con">
        <h1 className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
            alt="stopwatch"
            className="clock-icon"
          />
          Timer
        </h1>
        <h1 className="clock-timer">{Timer}</h1>

        <div className="button-con">
          <button
            type="button"
            className="start-btn"
            onClick={this.startButtonClicked}
          >
            Start
          </button>
          <button type="button" className="stop-btn" onClick={this.stopButton}>
            Stop
          </button>
          <button
            type="button"
            className="reset-btn"
            onClick={this.resetButton}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
