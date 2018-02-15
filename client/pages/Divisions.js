import { Fragment as F } from 'react'
import h from 'react-hyperscript'
// import { Link } from 'react-router-dom'
import { connect as connectFela } from 'react-fela'

import styles from '../styles'

import { homeButton, backButton } from '../dumb-components'

const Divisions = connectFela(styles)(props => {
  const { goBack } = props.history
  return (
    h(F, [
      h(backButton, { goBack }),
      'im divisions',
      h(homeButton)
    ])
  )
})

export default Divisions
