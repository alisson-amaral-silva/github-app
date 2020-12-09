'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  render () {
    return <AppContent 
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}
