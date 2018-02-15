import { Fragment as F } from 'react'
import h from 'react-hyperscript'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Season1 from './pages/Season1'
import Standings from './pages/Standings'
import TeamsPage from './pages/teams/TeamsPage'
import SingleTeam from './pages/teams/SingleTeam'
import Divisions from './pages/Divisions'
import NoUrlMatch from './pages/NoUrlMatch'

const AppRoutes = () => {
  return (
    h(F, [
      h(Switch, [
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
          component: SingleTeam
        }),
        h(Route, {
          path: '/Teams',
          component: TeamsPage
        }),
        h(Route, {
          path: '/Divisions',
          component: Divisions
        }),
        h(Route, {
          component: NoUrlMatch
        })
      ])
    ])
  )
}

export default AppRoutes
