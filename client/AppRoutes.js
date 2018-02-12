import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Season1 from './pages/Season1'
import Standings from './pages/Standings'
import TeamsPage from './teams/TeamsPage'
import Divisions from './pages/Divisions'
import SingleTeam from './teams/SingleTeam'

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
        path: '/Teams/:name',
        component: () => SingleTeam()
      }),
      h(Route, {
        path: '/Teams',
        component: TeamsPage
      }),
      h(Route, {
        path: '/Divisions',
        component: Divisions
      })
    ])
  )
}

export default AppRoutes
