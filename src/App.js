import React, { Component } from 'react'
import HeaderBar from './components/header'
// import { NavLink } from 'react-router-dom'
// import Router from './router'
// import Navigation from './components/navigation'
import MainPage from './components/mainPage'

class App extends Component {
  render () {
    return (
      <div className="page-container">
        <HeaderBar/>
        <MainPage/>
      </div>
    )
  }
}

export default App
