import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'

import { homeButton, renderTile } from '../dumb-components'

const teamData = require('../../data/teams')
// const w = window.screen.availWidth

const TeamPage = () => {
  const row1 = teamData.slice(0, 4)
  const row2 = teamData.slice(4, 8)
  const row3 = teamData.slice(8, 12)

  return (
    h(F, [
      'im team page',
      h('div', { className: 'columns' }, [
        row1.map(team => renderTile(team))
      ]),
      h('div', { className: 'columns' }, [
        row2.map(team => renderTile(team))
      ]),
      h('div', { className: 'columns' }, [
        row3.map(team => renderTile(team))
      ]),
      h(homeButton)
    ])
  )
}

export default TeamPage
