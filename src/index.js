'use strict'

import App from './app'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
