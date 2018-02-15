import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'

import { homeButton, renderTile, backButton } from '../dumb-components'

const teamData = require('../../data/teams')
// const w = window.screen.availWidth

const TeamPage = props => {
  const { goBack } = props.history
  const row1 = teamData.slice(0, 4)
  const row2 = teamData.slice(4, 8)
  const row3 = teamData.slice(8, 12)

  return (
    h('div', {
      className: styles.container
    }, [
      h(backButton, { goBack }),
      'im team page',
      h(homeButton),
      h('div', { className: 'columns' }, [
        row1.map(team => renderTile(team))
      ]),
      h('div', { className: 'columns' }, [
        row2.map(team => renderTile(team))
      ]),
      h('div', { className: 'columns' }, [
        row3.map(team => renderTile(team))
      ])
    ])
  )
}

export default TeamPage
