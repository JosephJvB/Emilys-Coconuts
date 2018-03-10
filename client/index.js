import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createRenderer } from 'fela'
import { Provider as felaProvider, ThemeProvider as felaThemeProvider } from 'react-fela'
import h from 'react-hyperscript'
// import prefixer from 'fela-plugin-prefixer'
// import fallbackValue from 'fela-plugin-fallback-value'

import AppRoutes from './AppRoutes'
import theme from './theme'

// const felaConfig = {
//   plugins: [prefixer(), fallbackValue()]
// }

const renderer = createRenderer({})

const mountNode = document.getElementById('stylesheet')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    h(felaProvider, {renderer, mountNode}, [
      h(felaThemeProvider, { theme }, [
        h(Router, [
          h(AppRoutes)
        ])
      ])
    ]),
    document.getElementById('app')
  )
})

// no store.
// no need for redux atm
