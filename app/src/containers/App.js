import React, { Component } from 'react'
import logo from '../images/React.png'
import 'tachyons'

class App extends Component {
  render() {
    return (
      <div className='vh-100 dt w-100'>
        <div className='dtc v-mid tc'>
          <div>
            <img className='mw5' src={logo} alt='Logo'/>
          </div>
          <div className='f2 f1-m f1-l sans-serif'>Welcome to React!</div>
          <div className='f4 tracked-mega mb4'>2019 Starter Kit</div>
          <a className='link br3 pl3 pr3 pt2 pb2 white ba b--light-blue' href='https://github.com/johnhayesio' target='_blank'>version 1.0.0</a>
        </div>
      </div>
    )
  }
}

export default App
