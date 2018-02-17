import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createRenderer } from 'fela'
import { Provider as felaProvider } from 'react-fela'
// import prefixer from 'fela-plugin-prefixer'
// import fallbackValue from 'fela-plugin-fallback-value'
import h from 'react-hyperscript'

import AppRoutes from './AppRoutes'

// const felaConfig = {
//   plugins: [prefixer(), fallbackValue()]
// }

const renderer = createRenderer({})

const mountNode = document.getElementById('stylesheet')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    h(felaProvider, {renderer, mountNode}, [
      h(Router, [
        h(AppRoutes)
      ])
    ]),
    document.getElementById('app')
  )
})
