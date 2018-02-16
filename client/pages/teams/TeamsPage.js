import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../../styles'

import MainNav from '../../components/MainNav'
import { homeButton, renderTile, backButton, signature } from '../../components/dumb-components'

import teamData from '../../../data/teams'
// const w = window.screen.availWidth

const TeamPage = connectFela(styles)(props => {
  const { goBack } = props.history
  const row1 = teamData.slice(0, 4)
  const row2 = teamData.slice(4, 8)
  const row3 = teamData.slice(8, 12)

  return (
    h('div', {
      className: styles.container
    }, [
      h(MainNav),
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
      ]),
      h(signature)
    ])
  )
})

export default TeamPage
