import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './GlobalStyle'
import ResetDefaults from './ResetDefaults'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ResetDefaults />
    <App />
  </React.StrictMode>,
  document.querySelector('#app')
)
