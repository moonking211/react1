import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// var css = require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
// var js = require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> ,
  document.getElementById('root')
)

registerServiceWorker()
