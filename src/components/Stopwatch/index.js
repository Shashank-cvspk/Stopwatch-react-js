// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
            alt="stopwatch"
          />
          <h1>{time}</h1>
          <div>
            <button
              className="start"
              type="button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button className="stop" type="button" onClick={this.onStopTimer}>
              Stop
            </button>
            <button className="reset" type="button" onClick={this.onResetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
