import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import Appfn from './app-fn'
console.log(document.querySelector('.app'))

ReactDom.render(<App/>, document.querySelector('.app'),)

