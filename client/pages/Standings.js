import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

import { homeButton, backButton } from '../components/dumb-components'

const Standings = connectFela(styles)(props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(backButton, { goBack }),
      'im standings',
      h(homeButton),
      h('br'),
      'Im gonna be a lovely table :)'
    ])
  )
})

export default Standings
