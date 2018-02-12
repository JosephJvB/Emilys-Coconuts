import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Season1 from './pages/Season1'
import Standings from './pages/Standings'
import Teams from './pages/Teams'
import Divisions from './pages/Divisions'

const AppRoutes = () => {
  return (
    h(F, [
      h(Route, {
        path: '/',
        exact: true,
        component: Home
      }),
      h(Route, {
        path: '/Season1',
        component: Season1
      }),
      h(Route, {
        path: '/Standings',
        component: Standings
      }),
      h(Route, {
        path: '/Teams',
        component: Teams
      }),
      h(Route, {
        path: '/Divisions',
        component: Divisions
      })
    ])
  )
}

export default AppRoutes
