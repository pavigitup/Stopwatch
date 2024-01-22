import {Component} from 'react'
import Stopwatch from './components/Stopwatch'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-con">
        <div className="stopwatch-con">
          <h1 className="stopwatch-header">Stopwatch</h1>
          <Stopwatch />
        </div>
      </div>
    )
  }
}

export default App
